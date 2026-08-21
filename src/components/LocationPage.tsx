import Link from 'next/link';
import { Phone, MapPin, CheckCircle2, ArrowRight, Clock, Star } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { ReviewCard } from './ReviewCard';
import { reviews } from '@/data/reviews';
import { SITE_URL, faqSchema, localBusinessSchema } from '@/data/seo';
import type { Metadata } from 'next';

interface CityData {
  slug: string;
  name: string;
  blurb: string;
  zip: string;
  population: string;
}

const serviceList = [
  { name: 'Hot Tub Repair', path: '/hot-tub-repair', desc: 'Same-day hot tub diagnosis and repair for jets, heaters, pumps, leaks, and control boards.' },
  { name: 'HVAC Services', path: '/hvac-services', desc: 'Heating and cooling repair, installation, and maintenance including mini-splits.' },
  { name: 'Electrical Repairs', path: '/electrical-repairs', desc: 'Code-compliant electrical repairs — outlets, panels, wiring, lighting, and more.' },
  { name: 'Plumbing Repairs', path: '/plumbing-repairs', desc: 'Leak repair, water heaters, pipes, fixtures, and emergency plumbing service.' },
  { name: 'Maintenance Packages', path: '/maintenance-packages', desc: 'Proactive maintenance plans designed for short-term rental cabins.' },
];

function cityFaqs(city: string) {
  return [
    {
      q: `How fast can you get to my cabin in ${city}?`,
      a: `We offer same-day and next-day service for cabin owners in ${city} and across Sevier County. For emergencies like burst pipes or failed HVAC in a booked rental, call 865-805-2438 and we prioritize getting a technician out as quickly as possible.`,
    },
    {
      q: `Do you work on rental cabins in ${city}?`,
      a: `Yes. We specialize in short-term rental cabin repair in ${city} and understand the urgency of keeping guest-ready properties running.`,
    },
    {
      q: `What areas around ${city} do you serve?`,
      a: `We serve ${city} and all of Sevier County, TN, including Gatlinburg, Pigeon Forge, Sevierville, Wears Valley, Townsend, Cosby, and Pittman Center.`,
    },
    {
      q: `Do you offer maintenance plans for ${city} cabin owners?`,
      a: `Yes. Our maintenance packages are designed for rental cabin owners in ${city} and include hot tub service, HVAC tune-ups, plumbing inspections, and priority response. Plans start at $99/month with no long-term contract.`,
    },
  ];
}

export function buildLocationMetadata(city: CityData): Metadata {
  const title = `${city.name} Cabin Repair & Maintenance | Hickory Home and Cabin Repair`;
  const description = `Professional cabin repair and maintenance services in ${city.name}, TN. Hot tub repair, HVAC, electrical, plumbing, and maintenance packages. Call 865-805-2438.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/locations/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/locations/${city.slug}`,
      images: [{ url: `${SITE_URL}/Grand_Mountain_View_Great_Smoky_Mountains-28.webp` }],
    },
  };
}

export default function LocationPage({ city }: { city: CityData }) {
  const title = `${city.name} Cabin Repair & Maintenance | Hickory Home and Cabin Repair`;
  const description = `Professional cabin repair and maintenance services in ${city.name}, TN. Hot tub repair, HVAC, electrical, plumbing, and maintenance packages. Call 865-805-2438.`;
  const path = `/locations/${city.slug}`;
  const faqs = cityFaqs(city.name);
  const localReviews = reviews.slice(0, 3);

  const schema = [
    localBusinessSchema(),
    faqSchema(faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: `${SITE_URL}${path}`,
      isPartOf: { '@type': 'WebSite', name: 'Hickory Home and Cabin Repair', url: SITE_URL },
      about: {
        '@type': 'Place',
        name: city.name,
        address: { '@type': 'PostalAddress', addressLocality: city.name, addressRegion: 'TN', addressCountry: 'US' },
      },
    },
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/services' },
    { name: city.name, path },
  ];

  const otherSlugs = ['gatlinburg','pigeon-forge','sevierville','wears-valley','townsend','cosby','pittman-center'].filter((s) => s !== city.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section
        className="relative pt-12 pb-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/Grand_Mountain_View_Great_Smoky_Mountains-28.webp)' }}
      >
        <div className="absolute inset-0 bg-green-950/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="section-label text-amber-400 mb-3">Service Area</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Cabin Repair in {city.name}, TN
            </h1>
            <p className="text-green-200 text-lg leading-relaxed mb-8">{city.blurb}</p>
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

      <section className="bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-white">Same-Day</div>
            <div className="text-amber-100 text-xs">Response Available</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">5.0 ★</div>
            <div className="text-amber-100 text-xs">Average Rating</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">500+</div>
            <div className="text-amber-100 text-xs">Cabins Serviced</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">{city.zip}</div>
            <div className="text-amber-100 text-xs">{city.name} ZIP</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Do in {city.name}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cabin Repair Services in {city.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              One company for all your rental cabin repair needs in {city.name} and the surrounding Smoky Mountain area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((s) => (
              <Link key={s.path} href={s.path} className="card p-7 group">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                  {s.name} in {city.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-green-700 text-sm font-semibold flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-3">Why {city.name} Cabin Owners Choose Us</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Local. Fast. Reliable.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We live and work in Sevier County. When a guest reports a broken hot tub or the AC goes out in your{' '}
              {city.name} rental, we understand the urgency. Every hour of downtime costs you bookings and reviews.
            </p>
            <ul className="space-y-3">
              {[
                `Same-day or next-day response in ${city.name}`,
                'One company for multiple repair needs',
                'Locally owned, not a national franchise',
                'Fair, transparent pricing upfront',
                'Emergency repair service available',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-green-700" />
              <h3 className="text-xl font-bold text-gray-900">Fast Response in {city.name}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Call us directly for the fastest response. We dispatch technicians across {city.name} and all of Sevier County, TN.
            </p>
            <a href="tel:8658052438" className="btn-primary w-full justify-center mb-3">
              <Phone className="w-5 h-5" /> Call 865-805-2438
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>5.0 average rating from Sevier County cabin owners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Customer Reviews</p>
            <h2 className="text-3xl font-bold text-gray-900">What {city.name} Cabin Owners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {localReviews.map((r, i) => (
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

      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-900">Cabin Repair in {city.name} — FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card p-6">
                <h3 className="text-gray-900 font-semibold mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Service Areas</p>
            <h2 className="text-3xl font-bold text-gray-900">Other Areas We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSlugs.map((s) => {
              const name = s.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
              return (
                <Link
                  key={s}
                  href={`/locations/${s}`}
                  className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to Get Your ${city.name} Cabin Back in Shape?`}
        subtitle={`Call now or book online — fast response, reliable service in ${city.name} and across Sevier County.`}
      />
    </>
  );
}
