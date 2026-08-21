import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, Building2, ClipboardList, Users } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { faqSchema, serviceSchema, localBusinessSchema, SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Hot Tub Repair for Cabin Management Companies | Hickory Home and Cabin Repair',
  description:
    'Hot tub repair and maintenance for vacation rental and cabin management companies in Sevierville, Gatlinburg, and Pigeon Forge. Priority service, repair documentation, and multi-property support.',
  alternates: { canonical: `${SITE_URL}/cabin-management-hot-tub-repair` },
};

export default function CabinManagementHotTubPage() {
  const path = '/cabin-management-hot-tub-repair';
  const title = 'Hot Tub Repair for Cabin Management Companies | Hickory Home and Cabin Repair';
  const metaDesc =
    'Hot tub repair and maintenance for vacation rental and cabin management companies in Sevierville, Gatlinburg, and Pigeon Forge. Priority service, repair documentation, and multi-property support.';

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
    { name: 'Cabin Management', path },
  ];

  const faqs = [
    {
      q: 'Do you work with cabin management companies?',
      a: 'Yes. We work with cabin management companies and property managers throughout the Smoky Mountain area. We provide priority service, repair documentation, and communication designed for managing multiple rental properties.',
    },
    {
      q: 'Can you service multiple properties under one account?',
      a: 'Yes. We can service multiple rental properties for a single management company. We track each property and its equipment so we have context when a problem is reported.',
    },
    {
      q: 'Do you provide repair documentation?',
      a: 'Yes. We provide repair documentation and photos from service calls so property managers have records for owners and for their own internal tracking.',
    },
    {
      q: 'Can you coordinate with our existing maintenance team?',
      a: 'Yes. We can work alongside your existing maintenance team, handling the hot tub, HVAC, electrical, and plumbing repairs that go beyond routine guest-turnover tasks.',
    },
  ];

  const schema = [
    localBusinessSchema(),
    serviceSchema('Cabin Management Hot Tub Repair', metaDesc, path),
    faqSchema(faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-4">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">For Property Managers</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hot Tub Repair for Vacation Rental &amp; Cabin Management Companies
          </h1>
          <p className="text-green-200 text-lg leading-relaxed mb-6">
            Managing multiple vacation rental properties means dealing with hot tub problems on
            someone else&apos;s schedule — your guests&apos;. Hickory Home and Cabin Repair works with cabin
            management companies throughout the Smoky Mountain area as a local maintenance and repair
            partner, not just a one-time repair company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:8658052438" className="btn-primary">
              <Phone className="w-5 h-5" />
              Call 865-805-2438
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">For Management Companies</p>
            <h2 className="text-3xl font-bold text-gray-900">What We Handle for Property Managers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Guest-reported hot tub problems',
              'Priority service for active rentals',
              'Repair documentation and photos',
              'Estimates before major repairs',
              'Communication with property managers',
              'Service across multiple properties',
              'Recurring maintenance visits',
              'Repairs between guest stays',
              'Coordination with existing maintenance teams',
              'Hot tub, HVAC, electrical, and plumbing',
              'Vendor relationship support',
              'Reducing guest complaints',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-stone-50 rounded-xl p-4 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Users className="w-6 h-6 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">A Local Maintenance Partner</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We&apos;re not just a hot tub repair company. We handle hot tubs, HVAC, electrical,
                plumbing, and general cabin maintenance — which means we can be a single point of
                contact for multiple types of repairs across your portfolio of properties.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When a guest reports a problem, you don&apos;t always know right away whether it&apos;s a
                hot tub issue, an electrical problem, or something else. Because we work across all
                these trades, we can diagnose the actual cause and fix it without you having to
                coordinate multiple vendors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to help you reduce guest complaints, protect your rental reviews, and keep
                your properties running smoothly between guest stays.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <ClipboardList className="w-6 h-6 text-green-700" />
                <h3 className="text-xl font-bold text-gray-900">How We Communicate</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Clear estimates before major repairs',
                  'Photos from service calls',
                  'Repair summaries after each visit',
                  'Communication with your preferred method',
                  'Context from previous service calls',
                  'Recommendations for preventing recurrence',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Cover */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Repairs We Handle for Management Companies</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Hot Tub Repair', path: '/hot-tub-repair' },
              { label: 'HVAC Services', path: '/hvac-services' },
              { label: 'Electrical Repairs', path: '/electrical-repairs' },
              { label: 'Plumbing Repairs', path: '/plumbing-repairs' },
              { label: 'Maintenance Packages', path: '/maintenance-packages' },
            ].map((s) => (
              <Link
                key={s.path}
                href={s.path}
                className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
              >
                {s.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-900">FAQs for Property Managers</h2>
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

      <CTABanner
        title="Need a Hot Tub Repair Partner?"
        subtitle="If you manage vacation rental cabins in the Smoky Mountains, we can be your local repair and maintenance resource. Call us to discuss a vendor relationship."
      />
    </>
  );
}
