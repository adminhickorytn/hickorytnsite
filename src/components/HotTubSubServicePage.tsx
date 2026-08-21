import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Wrench, RefreshCw } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { faqSchema, serviceSchema, localBusinessSchema } from '@/data/seo';
import type { HotTubSubService } from '@/data/hotTubData';

interface Props {
  service: HotTubSubService;
}

export default function HotTubSubServicePage({ service }: Props) {
  const path = `/${service.slug}`;
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
    { name: service.title, path },
  ];

  const schema = [
    localBusinessSchema(),
    serviceSchema(service.title, service.metaDesc, path),
    faqSchema([
      { q: `Do you provide ${service.title.toLowerCase()} for vacation rental cabins?`, a: `Yes. We provide ${service.title.toLowerCase()} for vacation rental cabins throughout Sevier County and the Smoky Mountain area. Call 865-805-2438 to schedule service.` },
    ]),
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="section-label text-amber-400 mb-3">Hot Tub Repair</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.h1}</h1>
          <p className="text-green-200 text-lg leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Symptoms & Causes */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Common Symptoms</h2>
              </div>
              <ul className="space-y-3">
                {service.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-gray-700 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Wrench className="w-6 h-6 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Possible Causes</h2>
              </div>
              <ul className="space-y-3">
                {service.causes.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">How We Work</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Repair Process</h2>
          </div>
          <div className="space-y-4">
            {service.repairProcess.map((step, i) => (
              <div key={i} className="flex items-start gap-4 card p-5">
                <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Replacement Makes Sense */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">When Replacement May Make More Sense</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{service.whenToReplace}</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.relatedServices.map((s) => (
              <Link
                key={s.path}
                href={s.path}
                className="inline-flex items-center gap-2 bg-white text-green-800 px-4 py-2.5 rounded-full text-sm font-medium border border-green-100 hover:bg-green-50 transition-colors"
              >
                {s.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
