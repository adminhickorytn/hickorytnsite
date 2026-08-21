import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { ReviewCard } from './ReviewCard';
import { reviews } from '@/data/reviews';
import { CITIES, SITE_URL, localBusinessSchema, faqSchema, reviewSchema } from '@/data/seo';
import type { Metadata } from 'next';

interface LocationServicePageProps {
  citySlug: string;
  cityName: string;
  path: string;
  variant: 'cabin-repair' | 'hot-tub-repair' | 'hvac-repair';
  cityBlurb: string;
  landmarks: readonly string[];
  neighborhoods: readonly string[];
  commonIssues: string;
  driveTime: string;
  zip: string;
}

export function buildLocationServiceMetadata(cityName: string, variant: string, path: string): Metadata {
  const titles: Record<string, string> = {
    'cabin-repair': `Cabin Repair in ${cityName}, TN | Hickory Cabin Repair`,
    'hot-tub-repair': `Hot Tub Repair in ${cityName}, TN | Hickory Cabin Repair`,
    'hvac-repair': `HVAC Repair in ${cityName}, TN | Hickory Cabin Repair`,
  };
  const descs: Record<string, string> = {
    'cabin-repair': `Cabin repair and maintenance in ${cityName}, TN. Hot tubs, HVAC, plumbing, electrical, and more for rental cabins. Same-day response. Call 865-805-2438.`,
    'hot-tub-repair': `Hot tub repair in ${cityName}, TN for rental cabins. Same-day diagnosis and repair of heaters, pumps, leaks, and control boards. Call 865-805-2438.`,
    'hvac-repair': `HVAC repair in ${cityName}, TN for rental cabins. AC, heating, and mini-split service with same-day response. Call 865-805-2438.`,
  };
  const title = titles[variant] ?? titles['cabin-repair'];
  const description = descs[variant] ?? descs['cabin-repair'];
  return { title, description, alternates: { canonical: `${SITE_URL}${path}` }, openGraph: { title, description, url: `${SITE_URL}${path}`, images: [{ url: `${SITE_URL}/Grand_Mountain_View_Great_Smoky_Mountains-28.webp` }] } };
}

const variantConfig = {
  'cabin-repair': {
    label: 'Cabin Repair', heading: 'Cabin Repair & Maintenance',
    intro: (city: string) => `We provide hot tub repair, HVAC service, plumbing repair, and electrical troubleshooting for vacation cabins in ${city}, Gatlinburg, Pigeon Forge, and surrounding areas. One call covers every repair your rental needs.`,
    services: ['Hot tub diagnosis, repair, and maintenance', 'HVAC and mini-split repair, installation, and tune-ups', 'Plumbing repair — leaks, water heaters, toilets, drains', 'Electrical repair — panels, outlets, lighting, dedicated circuits', 'Seasonal maintenance packages for rental cabins', 'Emergency response for booked rentals'],
  },
  'hot-tub-repair': {
    label: 'Hot Tub Repair', heading: 'Hot Tub Repair',
    intro: (city: string) => `A broken hot tub in your ${city} rental cabin means guest complaints and potential refunds. We provide same-day hot tub repair in ${city} — diagnosing and fixing heaters, pumps, jets, leaks, and control boards so your guests can soak tonight.`,
    services: ['Same-day hot tub diagnosis and repair', 'Heater, pump, and motor replacement', 'Control board troubleshooting and swap', 'Leak detection and plumbing repair', 'Jet replacement and manifold repair', 'Filter and plumbing descale', 'Winterization and de-winterization'],
  },
  'hvac-repair': {
    label: 'HVAC Repair', heading: 'HVAC Repair',
    intro: (city: string) => `When the AC fails in your ${city} rental cabin, every hour without cooling costs you bookings. We provide same-day HVAC repair in ${city} — fixing mini-splits, central systems, heat pumps, and thermostats for rental cabins across Sevier County.`,
    services: ['Same-day AC and heating repair', 'Mini-split repair, cleaning, and installation', 'Coil cleaning and drain-line clearing', 'Capacitor, contactor, and control board replacement', 'Refrigerant recharge and leak detection', 'Thermostat replacement and smart-home integration', 'Seasonal tune-ups and filter changes'],
  },
};

function buildFaqs(cityName: string, variant: string) {
  const base = [
    { q: `How fast can you get to my cabin in ${cityName}?`, a: `We offer same-day and next-day service for cabin owners in ${cityName}. For emergencies like a failed AC in a booked rental, call 865-805-2438 and we prioritize dispatch.` },
    { q: `Do you work on rental cabins in ${cityName}?`, a: `Yes — rental cabins are our specialty. We coordinate with property managers and cleaning crews in ${cityName} to schedule repairs during turnover so guests are not disrupted.` },
    { q: `What areas around ${cityName} do you serve?`, a: `We serve ${cityName} and all of Sevier County, TN, including Gatlinburg, Pigeon Forge, Sevierville, Wears Valley, Townsend, Cosby, and Pittman Center.` },
    { q: `Do you offer maintenance plans for ${cityName} cabin owners?`, a: `Yes. Our maintenance packages are designed for rental cabin owners in ${cityName} and include seasonal HVAC tune-ups, hot tub checks, plumbing inspections, and priority response. Plans start at $99/month with no long-term contract.` },
  ];
  if (variant === 'hot-tub-repair') base.splice(1, 0, { q: `How much does hot tub repair cost in ${cityName}?`, a: `A diagnostic visit is a flat trip fee credited toward any repair. Most heater and pump replacements land between $300 and $700 including parts. We always quote before any work begins — no surprise charges.` });
  if (variant === 'hvac-repair') base.splice(1, 0, { q: `Why is my mini-split leaking water in my ${cityName} cabin?`, a: `The drain line is clogged — usually with mold or sediment from the coil. We clear the line, treat it with coil cleaner, and confirm drainage. Most leaks are resolved in one visit.` });
  return base;
}

export default function LocationServicePage({ citySlug, cityName, path, variant, cityBlurb, landmarks, neighborhoods, commonIssues, driveTime, zip }: LocationServicePageProps) {
  const cfg = variantConfig[variant];
  const faqs = buildFaqs(cityName, variant);
  const displayReviews = reviews.slice(0, 3);
  const schema = [localBusinessSchema(), faqSchema(faqs), reviewSchema(displayReviews)];
  const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: `${cfg.label} in ${cityName}`, path }];
  const otherCities = CITIES.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="relative pt-12 pb-20 bg-cover bg-center" style={{ backgroundImage: 'url(/Grand_Mountain_View_Great_Smoky_Mountains-28.webp)' }}>
        <div className="absolute inset-0 bg-green-950/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="section-label text-amber-400 mb-3">{cityName}, TN</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{cfg.heading} in {cityName}, Tennessee</h1>
            <p className="text-green-200 text-lg leading-relaxed mb-8">{cfg.intro(cityName)}</p>
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
          <div><div className="text-xl font-bold text-white">{zip}</div><div className="text-amber-100 text-xs">{cityName} ZIP</div></div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">About {cityName}</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{cityName} Cabin Repair Experts</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{cityBlurb}</p>
            <p className="text-gray-600 leading-relaxed mb-6">We live and work in Sevier County. When a guest reports a broken hot tub or the AC goes out in your {cityName} rental, we understand the urgency. Every hour of downtime costs you bookings and reviews. That is why we offer same-day response for booked rentals and coordinate with your property manager to get repairs done during turnover.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6"><div className="flex items-center gap-3 mb-3"><Clock className="w-5 h-5 text-amber-600" /><h3 className="font-bold text-gray-900">Drive Time from Our Shop</h3></div><p className="text-sm text-gray-600">{driveTime}</p></div>
          </div>
          <div>
            <p className="section-label mb-3">What We Do</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Services We Provide in {cityName}</h3>
            <ul className="space-y-3">{cfg.services.map((s) => <li key={s} className="flex items-start gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" /><span>{s}</span></li>)}</ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">Service Area</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving {cityName} and Surrounding Areas</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6"><h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-green-700" /> Nearby Landmarks</h3><ul className="space-y-1.5 text-sm text-gray-600">{landmarks.map((l) => <li key={l}>{l}</li>)}</ul></div>
            <div className="bg-white rounded-xl border border-gray-100 p-6"><h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-green-700" /> Neighborhoods We Service</h3><ul className="space-y-1.5 text-sm text-gray-600">{neighborhoods.map((n) => <li key={n}>{n}</li>)}</ul></div>
          </div>
          <div className="mt-6 bg-white rounded-xl border border-gray-100 p-6"><h3 className="font-bold text-gray-900 mb-2">Common {cityName} Cabin Issues</h3><p className="text-sm text-gray-600">{commonIssues}</p></div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><p className="section-label mb-3">Customer Reviews</p><h2 className="text-3xl font-bold text-gray-900 mb-2">What {cityName} Cabin Owners Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3"><div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}</div><span className="text-gray-700 font-semibold">5.0 average rating</span></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">{displayReviews.map((r, i) => <ReviewCard key={i} review={r} />)}</div>
          <div className="text-center"><Link href="/reviews" className="btn-outline">See All Reviews <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><p className="section-label mb-3">Common Questions</p><h2 className="text-3xl font-bold text-gray-900">{cfg.label} in {cityName} — FAQs</h2></div>
          <div className="space-y-4">{faqs.map(({ q, a }) => <div key={q} className="card p-6"><h3 className="text-gray-900 font-semibold mb-2">{q}</h3><p className="text-gray-600 text-sm leading-relaxed">{a}</p></div>)}</div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><p className="section-label mb-3">Also Serving</p><h2 className="text-2xl font-bold text-gray-900">{cfg.label} in Nearby Areas</h2></div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => <Link key={c.slug} href={`/${c.slug}-${variant}`} className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"><MapPin className="w-3.5 h-3.5" />{cfg.label} in {c.name}</Link>)}
          </div>
        </div>
      </section>
      <CTABanner title={`Need ${cfg.label} in ${cityName}?`} subtitle={`Call now or book online — fast response, reliable service in ${cityName} and across Sevier County.`} />
    </>
  );
}
