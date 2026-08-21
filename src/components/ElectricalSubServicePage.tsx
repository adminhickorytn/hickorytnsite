import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, Shield, AlertTriangle } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CTABanner from './CTABanner';
import { faqSchema, serviceSchema, localBusinessSchema } from '@/data/seo';
import type { ElectricalSubService } from '@/data/electricalSubServices';

interface Props {
  service: ElectricalSubService;
}

export default function ElectricalSubServicePage({ service }: Props) {
  const path = `/${service.slug}`;
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Electrical Repairs', path: '/electrical-repairs' },
    { name: service.title, path },
  ];

  const schema = [
    localBusinessSchema(),
    serviceSchema(service.title, service.metaDesc, path),
    faqSchema([
      { q: `Do you provide ${service.title.toLowerCase()} for vacation rental cabins?`, a: `Yes. We provide ${service.title.toLowerCase()} for vacation rental cabins throughout Sevier County. Hickory Home and Cabin Repair is a Tennessee Licensed Electrical Contractor — CE License #86291. Call 865-805-2438 to schedule service.` },
    ]),
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="section-label text-amber-400 mb-3">Electrical Services</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.h1}</h1>
          <p className="text-green-200 text-lg leading-relaxed mb-6">{service.intro}</p>
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 inline-flex">
            <Shield className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-white font-semibold text-sm">Tennessee Licensed Electrical Contractor</p>
              <p className="text-amber-400 font-bold text-sm">CE License #86291</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">What We Provide</p>
            <h2 className="text-3xl font-bold text-gray-900">Services Included</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.services.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-stone-50 rounded-xl p-4 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-700 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Needed */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">When You May Need This Service</h2>
            </div>
            <ul className="space-y-3">
              {service.whenNeeded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Related Electrical Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.relatedServices.map((s) => (
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

      <CTABanner />
    </>
  );
}
