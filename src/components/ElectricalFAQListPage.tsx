import Link from 'next/link';
import { Phone, ArrowRight, ChevronRight } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { faqSchema, localBusinessSchema } from '@/data/seo';
import { electricalFAQs } from '@/data/electricalFaqs';

export default function ElectricalFAQListPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Electrical Repairs', path: '/electrical-repairs' },
    { name: 'FAQ', path: '/electrical-repairs/faq' },
  ];

  const schema = [
    localBusinessSchema(),
    faqSchema(electricalFAQs.map((f) => ({ q: f.question, a: f.shortAnswer }))),
  ];

  const groupedByCategory = electricalFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof electricalFAQs>);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-amber-400 mb-3">Electrical FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Electrical Repair Questions & Answers
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Common questions from cabin owners and property managers about electrical service in Sevier County.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {Object.entries(groupedByCategory).map(([category, faqs]) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <Link
                    key={faq.slug}
                    href={`/electrical-repairs/faq/${faq.slug}`}
                    className="block card p-5 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-1">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{faq.shortAnswer}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-gray-900">Still have questions?</p>
                <p className="text-sm text-gray-600">Contact us to schedule electrical service or request an estimate.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:8658052438" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call 865-805-2438
                </a>
                <Link href="/contact" className="btn-outline">
                  Request an Estimate <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
