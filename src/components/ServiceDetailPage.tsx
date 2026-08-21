import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Clock, MapPin } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { ReviewCard } from './ReviewCard';
import { reviews } from '@/data/reviews';
import type { Metadata } from 'next';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  metaDesc: string;
  intro: string;
  services: string[];
  signs: string[];
  serviceFilter: string;
  faq: Array<{ q: string; a: string }>;
  path: string;
  breadcrumbName: string;
  schema: object[];
  customSection?: React.ReactNode;
}

export function buildServiceMetadata(title: string, metaDesc: string, path: string, heroImage: string): Metadata {
  return {
    title,
    description: metaDesc,
    alternates: { canonical: `https://hickorytn.com${path}` },
    openGraph: {
      title,
      description: metaDesc,
      url: `https://hickorytn.com${path}`,
      images: [{ url: heroImage.startsWith('http') ? heroImage : `https://hickorytn.com${heroImage}` }],
    },
  };
}

export default function ServiceDetailPage({
  title,
  subtitle,
  heroImage,
  intro,
  services,
  signs,
  serviceFilter,
  faq,
  path,
  breadcrumbName,
  schema,
  customSection,
}: ServicePageProps) {
  const relatedReviews = reviews.filter((r) => r.service === serviceFilter).slice(0, 3);
  const displayReviews = relatedReviews.length > 0 ? relatedReviews : reviews.slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: breadcrumbName, path },
  ];

  const isExternal = heroImage.startsWith('http');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section
        className="relative pt-12 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-green-950/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="section-label text-amber-400 mb-3">{subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{title}</h1>
            <p className="text-green-200 text-lg leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8658052438" className="btn-primary">
                <Phone className="w-5 h-5" />
                Call 865-805-2438
              </a>
              <a
                href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book Online <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">What&apos;s Included</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Services We Provide</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold text-gray-900">Signs You Need Service</h3>
            </div>
            <ul className="space-y-3">
              {signs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white rounded-xl border border-amber-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-700" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Fast Response Available</p>
                  <p className="text-xs text-gray-500">Call now for same-day or next-day service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {customSection}

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Customer Reviews</p>
            <h2 className="text-3xl font-bold text-gray-900">What Cabin Owners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {displayReviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">
              See All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {faq.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Common Questions</p>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faq.map(({ q, a }) => (
                <div key={q} className="card p-6">
                  <h3 className="text-gray-900 font-semibold mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal links — service by city */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Service by City</p>
            <h2 className="text-2xl font-bold text-gray-900">{breadcrumbName} Across Sevier County</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['sevierville','gatlinburg','pigeon-forge','cosby','wears-valley','townsend','pittman-center'].map((citySlug) => {
              const cityName = citySlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
              return (
                <Link
                  key={citySlug}
                  href={`/${path.replace('/', '')}-${citySlug}`}
                  className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {breadcrumbName} in {cityName}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
