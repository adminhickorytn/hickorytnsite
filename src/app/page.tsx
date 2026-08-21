import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Thermometer,
  Droplets,
  Zap,
  Wrench,
  ShieldCheck,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  MapPin,
} from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { ReviewCard } from '@/components/ReviewCard';
import { reviews } from '@/data/reviews';
import { localBusinessSchema, websiteSchema, SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Hickory Home and Cabin Repair | Sevier County Cabin Repair & Maintenance',
  description:
    'Fast, reliable cabin repair and maintenance for short-term rental owners in Sevier County, TN. Hot tubs, HVAC, electrical, plumbing, and maintenance packages. Call 865-805-2438.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Hickory Home and Cabin Repair | Sevier County Cabin Repair & Maintenance',
    description:
      'Fast, reliable cabin repair and maintenance for short-term rental owners in Sevier County, TN.',
    url: SITE_URL,
    siteName: 'Hickory Home and Cabin Repair',
    images: [{ url: `${SITE_URL}/Grand_Mountain_View_Great_Smoky_Mountains-28.webp` }],
  },
};

const services = [
  { icon: Droplets, title: 'Hot Tub Repair', description: 'Same-day hot tub diagnosis and repair. We fix jets, heaters, pumps, leaks, and control boards.', path: '/hot-tub-repair', color: 'bg-blue-50 text-blue-700' },
  { icon: Thermometer, title: 'HVAC Services', description: 'Installation, repair, and maintenance for all heating and cooling systems including mini-splits. HVAC service for a variety of major equipment brands, including GE Appliances.', path: '/hvac-services', color: 'bg-orange-50 text-orange-700' },
  { icon: Zap, title: 'Electrical Repairs', description: 'Safe, code-compliant electrical repairs — outlets, panels, wiring, lighting, and more.', path: '/electrical-repairs', color: 'bg-yellow-50 text-yellow-700' },
  { icon: Wrench, title: 'Plumbing Repairs', description: "Leaks, pipe repairs, water heaters, fixtures — we keep your cabin's plumbing in top shape.", path: '/plumbing-repairs', color: 'bg-teal-50 text-teal-700' },
  { icon: ShieldCheck, title: 'Maintenance Packages', description: 'Proactive seasonal maintenance plans designed specifically for short-term rental cabins.', path: '/maintenance-packages', color: 'bg-green-50 text-green-700' },
];

const stats = [
  { value: '500+', label: 'Cabins Serviced' },
  { value: '5★', label: 'Average Rating' },
  { value: 'Same Day', label: 'Response Available' },
  { value: '10+ Years', label: 'Local Experience' },
];

const locations = [
  { name: 'Gatlinburg', slug: 'gatlinburg' },
  { name: 'Pigeon Forge', slug: 'pigeon-forge' },
  { name: 'Sevierville', slug: 'sevierville' },
  { name: 'Wears Valley', slug: 'wears-valley' },
  { name: 'Townsend', slug: 'townsend' },
  { name: 'Cosby', slug: 'cosby' },
  { name: 'Pittman Center', slug: 'pittman-center' },
];

export default function HomePage() {
  const schema = [websiteSchema(), localBusinessSchema()];
  const featuredReviews = reviews.slice(0, 3);
  const fiveStarReviews = [...reviews, ...reviews].filter((r) => r.rating === 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Grand_Mountain_View_Great_Smoky_Mountains-28.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/70 to-green-950/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Serving Sevier County, TN</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Cabin Repair &amp;
              <br />
              <span className="text-amber-400">Maintenance Experts</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              We fix broken hot tubs, HVAC systems, electrical, plumbing, and more for rental cabins across Sevier
              County.{' '}
              <strong className="text-white">Fast response. No runaround. Guest-ready results.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8658052438" className="btn-primary text-lg py-4 px-8">
                <Phone className="w-5 h-5" />
                Call Now — 865-805-2438
              </a>
              <a
                href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg py-4 px-8"
              >
                Book Online
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-green-700 flex items-center justify-center text-xs text-white font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span>Trusted by 500+ cabin owners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Marquee */}
      <section className="bg-green-950 py-5 overflow-hidden">
        <div className="flex items-center gap-3 mb-3 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-amber-300 text-sm font-semibold uppercase tracking-wide">5-Star Reviews</span>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-5 whitespace-nowrap"
            style={{ animation: 'marquee 40s linear infinite' }}
          >
            {fiveStarReviews.map((r, i) => (
              <div
                key={i}
                className="inline-flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-4 min-w-[300px] max-w-[340px] whitespace-normal flex-shrink-0"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">&quot;{r.text}&quot;</p>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">
                    {r.location} · {r.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
              <div className="text-amber-100 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">Why Cabin Owners Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                When Something Breaks, Every Hour Counts
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A broken hot tub or failed HVAC doesn&apos;t just cause guest complaints — it costs you bookings,
                revenue, and reviews. We understand the urgency, and we show up fast to protect your investment.
              </p>
              <ul className="space-y-4">
                {[
                  'Fast response — often same day or next day',
                  'One company for multiple repair needs',
                  'Licensed Tennessee electrical contractor (CE #86291)',
                  'Locally owned, not a national franchise',
                  'We keep you informed from start to finish',
                  'Fair, transparent pricing upfront',
                  'Emergency repair service available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="btn-outline">
                  About Our Company <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Grand_Mountain_View_Great_Smoky_Mountains-28.webp"
                alt="Mountain cabin with hot tub and view of Great Smoky Mountains"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Fast Response</p>
                    <p className="text-xs text-gray-500">Often same day service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Cabin Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From hot tub breakdowns to HVAC failures, we handle the repairs that matter most for short-term rental
              owners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, path, color }) => (
              <Link key={path} href={path} className="card p-7 group">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                <span className="text-green-700 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
            <div className="card p-7 bg-green-900 border-green-900">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emergency Repairs</h3>
              <p className="text-green-200 text-sm leading-relaxed mb-4">
                Can&apos;t wait? We offer emergency repair services for urgent situations. Call us directly.
              </p>
              <a href="tel:8658052438" className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                Call 865-805-2438 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What Our Customers Say</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Cabin Owners Across Sevier County
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0 average rating</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuredReviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Service Area</p>
            <h2 className="text-3xl font-bold text-gray-900">Proudly Serving Sevier County &amp; Surrounding Areas</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We serve cabin owners throughout the Smoky Mountains. Click your city to learn more about local service.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/${slug}-cabin-repair`}
                className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">Cabin Repair Blog</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Tips for Smoky Mountain Cabin Owners</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Read our latest articles on hot tub maintenance, HVAC care, dehumidifier setup, and keeping your rental cabin guest-ready.
          </p>
          <Link href="/blog" className="btn-outline">
            Visit Our Blog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
