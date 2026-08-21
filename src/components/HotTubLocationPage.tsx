import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { faqSchema, serviceSchema, localBusinessSchema } from '@/data/seo';
import { reviews } from '@/data/reviews';
import { ReviewCard } from './ReviewCard';
import type { HotTubLocationData } from '@/data/hotTubData';

interface Props {
  data: HotTubLocationData;
}

export default function HotTubLocationPage({ data }: Props) {
  const path = `/${data.slug}`;
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
    { name: data.city, path },
  ];

  const schema = [
    localBusinessSchema(),
    serviceSchema(`Hot Tub Repair in ${data.city}`, data.metaDesc, path),
    faqSchema(data.faqs),
  ];

  const subServiceLinks = [
    { label: 'Heater Repair', path: '/hot-tub-heater-repair' },
    { label: 'Pump Repair', path: '/hot-tub-pump-repair' },
    { label: 'Leak Repair', path: '/hot-tub-leak-repair' },
    { label: 'Spa Pack Replacement', path: '/hot-tub-spa-pack-replacement' },
    { label: 'Electrical Repair', path: '/hot-tub-electrical-repair' },
    { label: 'Jet Repair', path: '/hot-tub-jet-repair' },
  ];

  const otherLocations = [
    { label: 'Sevierville', path: '/hot-tub-repair-sevierville' },
    { label: 'Gatlinburg', path: '/hot-tub-repair-gatlinburg' },
    { label: 'Pigeon Forge', path: '/hot-tub-repair-pigeon-forge' },
  ].filter((l) => l.path !== path);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">{data.city}, TN</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.h1}</h1>
          <p className="text-green-200 text-lg leading-relaxed mb-6">{data.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:8658052438" className="btn-primary">
              <Phone className="w-5 h-5" />
              Call 865-805-2438
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Service <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-700 text-lg leading-relaxed">{data.localContext}</p>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">What We See in {data.city}</p>
            <h2 className="text-3xl font-bold text-gray-900">Common Hot Tub Problems in {data.city}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.commonIssues.map((issue) => (
              <div key={issue} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-service Links */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Hot Tub Services in {data.city}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {subServiceLinks.map((s) => (
              <Link
                key={s.path}
                href={s.path}
                className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
              >
                {s.label}
                <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Customer Reviews</p>
            <h2 className="text-3xl font-bold text-gray-900">What {data.city} Cabin Owners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.slice(0, 3).map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">
              See All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-900">Hot Tub Repair in {data.city} — FAQs</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map(({ q, a }) => (
              <div key={q} className="card p-6">
                <h3 className="text-gray-900 font-semibold mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Other Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherLocations.map((l) => (
              <Link
                key={l.path}
                href={l.path}
                className="inline-flex items-center gap-2 bg-white text-green-800 px-4 py-2.5 rounded-full text-sm font-medium border border-green-100 hover:bg-green-50 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
