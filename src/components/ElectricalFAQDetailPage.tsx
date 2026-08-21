import Link from 'next/link';
import { Phone, ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { faqSchema, localBusinessSchema } from '@/data/seo';
import { electricalFAQs, type ElectricalFAQ } from '@/data/electricalFaqs';

interface ElectricalFAQDetailPageProps {
  faq: ElectricalFAQ;
}

export default function ElectricalFAQDetailPage({ faq }: ElectricalFAQDetailPageProps) {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Electrical Repairs', path: '/electrical-repairs' },
    { name: 'FAQ', path: '/electrical-repairs/faq' },
    { name: faq.question, path: `/electrical-repairs/faq/${faq.slug}` },
  ];

  const schema = [
    localBusinessSchema(),
    faqSchema([{ q: faq.question, a: faq.shortAnswer }]),
  ];

  const currentIndex = electricalFAQs.findIndex((f) => f.slug === faq.slug);
  const prevFaq = currentIndex > 0 ? electricalFAQs[currentIndex - 1] : null;
  const nextFaq = currentIndex < electricalFAQs.length - 1 ? electricalFAQs[currentIndex + 1] : null;

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="section-label text-amber-400 mb-3">Electrical FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{faq.question}</h1>
          <p className="text-green-200 text-lg">{faq.shortAnswer}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            {faq.answer.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-gray-900">Need electrical service?</p>
                <p className="text-sm text-gray-600">Tennessee Licensed Electrical Contractor — CE #86291</p>
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

          {(prevFaq || nextFaq) && (
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {prevFaq ? (
                <Link
                  href={`/electrical-repairs/faq/${prevFaq.slug}`}
                  className="card p-5 hover:shadow-md transition-shadow group"
                >
                  <span className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                    <ArrowLeft className="w-3 h-3" /> Previous Question
                  </span>
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    {prevFaq.question}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextFaq ? (
                <Link
                  href={`/electrical-repairs/faq/${nextFaq.slug}`}
                  className="card p-5 hover:shadow-md transition-shadow group text-right"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-gray-500 mb-1">
                    Next Question <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    {nextFaq.question}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/electrical-repairs/faq"
              className="inline-flex items-center gap-1 text-green-700 font-semibold hover:text-green-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to All Electrical Questions
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
