import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Users, MapPin, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { localBusinessSchema, SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'About Us | Cabin Repair in Sevierville, TN | Hickory Cabin Repair',
  description:
    'Locally owned cabin repair company serving Sevier County, TN. We specialize in hot tub, HVAC, electrical, plumbing, and maintenance for short-term rental cabins. Call 865-805-2438.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Us | Cabin Repair in Sevierville, TN | Hickory Cabin Repair',
    description: 'Locally owned cabin repair company serving Sevier County, TN.',
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/Grand_Mountain_View_Great_Smoky_Mountains-28.webp` }],
  },
};

const values = [
  {
    title: 'Cabin Owners First',
    desc: "We built this business specifically for short-term rental operators. We understand that a broken appliance doesn't just cause inconvenience — it costs you bookings and reviews.",
  },
  {
    title: 'Honest, Transparent Service',
    desc: "We tell you what's wrong, what it will cost to fix, and what to expect — before we start any work. No hidden fees. No pressure upsells.",
  },
  {
    title: 'Fast Response',
    desc: 'When you call, we pick up. We understand urgency and we do everything we can to get someone out to your property the same day or next morning.',
  },
  {
    title: 'Locally Owned',
    desc: 'We live and work in Sevier County. This community is our home, and taking care of the local cabin industry matters to us personally — not just as a business.',
  },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section
        className="relative pt-12 pb-24 bg-cover bg-center"
        style={{ backgroundImage: 'url(/Grand_Mountain_View_Great_Smoky_Mountains-28.webp)' }}
      >
        <div className="absolute inset-0 bg-green-950/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="section-label text-amber-400 mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Sevier County&apos;s Cabin Repair Specialists
            </h1>
            <p className="text-green-200 text-lg leading-relaxed">
              Hickory Home and Cabin Repair was built by locals who understand the Smoky Mountain rental market — and
              what it takes to keep a cabin guest-ready every single day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Built for Cabin Owners, By People Who Get It</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sevier County has one of the most vibrant short-term rental markets in the country. With thousands of
              cabins on platforms like Airbnb and VRBO, keeping properties in top shape is a constant challenge for
              owners.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started Hickory Home and Cabin Repair because we saw cabin owners struggling to find reliable,
              responsive repair companies. Too many contractors didn&apos;t understand the urgency of a rental property
              — that a broken hot tub on a Friday afternoon means a real financial loss.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              So we built a company specifically designed to serve this market: fast response, transparent pricing, and a
              team that handles everything from hot tubs to HVAC so you don&apos;t have to coordinate multiple
              contractors.
            </p>
            <ul className="space-y-3">
              {[
                'Locally owned and operated in Sevier County',
                'Over 10 years of combined trade experience',
                'Serving 500+ cabin properties',
                'Specialized in short-term rental maintenance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/Grand_Mountain_View_Great_Smoky_Mountains-28.webp"
              alt="Luxury cabin deck with hot tub overlooking Great Smoky Mountains"
              className="rounded-xl object-cover h-52 w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="card p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Where We Work</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Serving All of Sevier County &amp; Beyond</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We serve cabin owners throughout Sevier County, including Gatlinburg, Pigeon Forge, Sevierville, Wears
                Valley, Pittman Center, Cosby, and surrounding communities in the Smoky Mountains.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Gatlinburg', 'Pigeon Forge', 'Sevierville', 'Wears Valley', 'Townsend', 'Cosby', 'Pittman Center'].map(
                  (city) => (
                    <span
                      key={city}
                      className="flex items-center gap-1.5 text-sm bg-green-50 text-green-800 px-3 py-1.5 rounded-full font-medium"
                    >
                      <MapPin className="w-3 h-3" />
                      {city}
                    </span>
                  )
                )}
              </div>
              <Link href="/contact" className="btn-outline">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-green-700" />
                <h3 className="text-xl font-bold text-gray-900">Who We Serve</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Short-term rental cabin owners on Airbnb/VRBO',
                  'Property management companies',
                  'Vacation home investors',
                  'Long-term cabin owners and full-time residents',
                  'Real estate agents needing pre-listing repairs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
