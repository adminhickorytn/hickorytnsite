import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Clock, MapPin, Star } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { ReviewCard } from './ReviewCard';
import { reviews } from '@/data/reviews';
import { CITIES, SITE_URL, localBusinessSchema, serviceSchema, faqSchema, reviewSchema } from '@/data/seo';
import type { Metadata } from 'next';

interface ServiceCityPageProps {
  slug: string;
  name: string;
  shortName: string;
  citySlug: string;
  cityName: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  bodyParagraphs: string[];
  services: string[];
  signs: string[];
  faq: { q: string; a: string }[];
  jobPhoto: string;
  jobPhotoAlt: string;
  relatedServices: { name: string; path: string }[];
  path: string;
}

export function buildServiceCityMetadata(
  serviceName: string,
  cityName: string,
  path: string,
  description: string,
  heroImage: string,
): Metadata {
  const title = `${serviceName} in ${cityName}, TN | Hickory Cabin Repair`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [{ url: heroImage.startsWith('http') ? heroImage : `${SITE_URL}${heroImage}` }],
    },
  };
}

export default function ServiceCityPage({
  slug: serviceSlug,
  name: serviceName,
  citySlug,
  cityName,
  heroImage,
  heroAlt,
  intro,
  bodyParagraphs,
  services,
  signs,
  faq,
  jobPhoto,
  jobPhotoAlt,
  relatedServices,
  path,
}: ServiceCityPageProps) {
  const title = `${serviceName} in ${cityName}, TN | Hickory Cabin Repair`;
  const description = `${serviceName} for rental cabins in ${cityName}, TN. Same-day response, fair pricing, and guest-ready results. Call 865-805-2438.`;
  const relatedReviews = reviews.filter((r) => r.service.toLowerCase().includes(serviceName.toLowerCase().split(' ')[0])).slice(0, 3);
  const displayReviews = relatedReviews.length > 0 ? relatedReviews : reviews.slice(0, 3);
  const schema = [localBusinessSchema(), serviceSchema(serviceName, description, path), faqSchema(faq), reviewSchema(displayReviews)];
  const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: `${serviceName} in ${cityName}`, path }];
  const city = CITIES.find((c) => c.slug === citySlug);
  const otherCities = CITIES.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="relative pt-12 pb-20 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="absolute inset-0 bg-green-950/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="section-label text-amber-400 mb-3">{cityName}, TN</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{serviceName} in {cityName}, Tennessee</h1>
            <p className="text-green-200 text-lg leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8658052438" className="btn-primary"><Phone className="w-5 h-5" />Call 865-805-2438</a>
              <a href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true" target="_blank" rel="noopener noreferrer" className="btn-secondary">Book Online <ArrowRight className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-xl font-bold text-white">Same-Day</div><div className="text-amber-100 text-xs">Response in {cityName}</div></div>
          <div><div className="text-xl font-bold text-white">5.0 ★</div><div className="text-amber-100 text-xs">Average Rating</div></div>
          <div><div className="text-xl font-bold text-white">500+</div><div className="text-amber-100 text-xs">Cabins Serviced</div></div>
          <div><div className="text-xl font-bold text-white">{city?.zip ?? '37862'}</div><div className="text-amber-100 text-xs">{cityName} ZIP</div></div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">About Our {serviceName} in {cityName}</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceName} for {cityName} Rental Cabins</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            {bodyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <img src={jobPhoto} alt={jobPhotoAlt} className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-96" />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">What&apos;s Included</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceName} Services We Provide</h2>
            <ul className="space-y-3">
              {services.map((s) => <li key={s} className="flex items-start gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" /><span>{s}</span></li>)}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-6 h-6 text-amber-600" /><h3 className="text-xl font-bold text-gray-900">Signs You Need {serviceName}</h3></div>
            <ul className="space-y-3">
              {signs.map((s) => <li key={s} className="flex items-start gap-3 text-gray-700 text-sm"><div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />{s}</li>)}
            </ul>
            <div className="mt-6 p-4 bg-white rounded-xl border border-amber-100">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-green-700" /><div><p className="text-sm font-bold text-gray-900">Fast Response in {cityName}</p><p className="text-xs text-gray-500">Call now for same-day or next-day service</p></div></div>
            </div>
          </div>
        </div>
      </section>
      {city && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="section-label mb-3">Service Area</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving {cityName} and Surrounding Areas</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{city.blurb}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-green-700" /> Nearby Landmarks</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">{city.landmarks.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-green-700" /> Neighborhoods We Service</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">{city.neighborhoods.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6"><h3 className="font-bold text-gray-900 mb-2">Common {cityName} Cabin Issues</h3><p className="text-sm text-gray-600">{city.commonIssues}</p></div>
              <div className="bg-white rounded-xl border border-gray-100 p-6"><h3 className="font-bold text-gray-900 mb-2">Drive Time</h3><p className="text-sm text-gray-600">{city.driveTime}</p></div>
            </div>
          </div>
        </section>
      )}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Customer Reviews</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What {cityName} Cabin Owners Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}</div>
              <span className="text-gray-700 font-semibold">5.0 average rating</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">{displayReviews.map((r, i) => <ReviewCard key={i} review={r} />)}</div>
          <div className="text-center"><Link href="/reviews" className="btn-outline">See All Reviews <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><p className="section-label mb-3">Common Questions</p><h2 className="text-3xl font-bold text-gray-900">{serviceName} in {cityName} — FAQs</h2></div>
          <div className="space-y-4">{faq.map(({ q, a }) => <div key={q} className="card p-6"><h3 className="text-gray-900 font-semibold mb-2">{q}</h3><p className="text-gray-600 text-sm leading-relaxed">{a}</p></div>)}</div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><p className="section-label mb-3">Related Services</p><h2 className="text-2xl font-bold text-gray-900">Other Cabin Repairs We Handle in {cityName}</h2></div>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => <Link key={s.path} href={s.path} className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"><CheckCircle2 className="w-3.5 h-3.5" />{s.name}</Link>)}
            <Link href="/contact" className="flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-100 transition-colors"><Phone className="w-3.5 h-3.5" />Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><p className="section-label mb-3">Also Serving</p><h2 className="text-2xl font-bold text-gray-900">{serviceName} in Nearby Areas</h2></div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => <Link key={c.slug} href={`/${serviceSlug}-${c.slug}`} className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"><MapPin className="w-3.5 h-3.5" />{serviceName} in {c.name}</Link>)}
          </div>
        </div>
      </section>
      <CTABanner title={`Need ${serviceName} in ${cityName}?`} subtitle={`Call now or book online — fast response, reliable service in ${cityName} and across Sevier County.`} />
    </>
  );
}
