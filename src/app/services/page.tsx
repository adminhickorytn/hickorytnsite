import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Thermometer, Droplets, Zap, Wrench, ShieldCheck,
  ArrowRight, CheckCircle2, Phone, MapPin,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { localBusinessSchema, SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Cabin Repair Services in Sevierville, TN | Hickory Cabin Repair',
  description:
    'Complete cabin repair services for short-term rental owners in Sevier County, TN. Hot tub repair, HVAC, electrical, plumbing, and maintenance packages. Call 865-805-2438.',
  alternates: { canonical: `${SITE_URL}/services` },
};

const services = [
  {
    icon: Droplets, title: 'Hot Tub Repair',
    description: 'Jets not working? Heater failing? Leaks or cloudy water? We diagnose and fix all hot tub issues fast.',
    features: ['Heater repair & replacement', 'Pump & motor repair', 'Jet system service', 'Control board diagnostics', 'Leak detection & repair', 'Water chemistry consulting'],
    path: '/hot-tub-repair',
    image: 'https://images.pexels.com/photos/261155/pexels-photo-261155.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Thermometer, title: 'HVAC Services',
    description: 'Keep your cabin comfortable year-round with professional heating and cooling services.',
    features: ['AC repair & replacement', 'Heating system repair', 'Mini-split installation', 'Ductwork inspection', 'Seasonal tune-ups', 'Filter & maintenance'],
    path: '/hvac-services',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: Zap, title: 'Electrical Repairs',
    description: 'Safe, reliable electrical work to keep your cabin functional and up to code.',
    features: ['Outlet & switch repair', 'Panel upgrades', 'Circuit breaker issues', 'Lighting installation', 'GFCI installation', 'Wiring diagnosis'],
    path: '/electrical-repairs',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: Wrench, title: 'Plumbing Repairs',
    description: 'From leaky faucets to burst pipes, we handle all plumbing repairs quickly and correctly.',
    features: ['Leak detection & repair', 'Pipe repair & replacement', 'Water heater service', 'Faucet & fixture repair', 'Toilet repair', 'Drain clearing'],
    path: '/plumbing-repairs',
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: ShieldCheck, title: 'Maintenance Packages',
    description: 'Proactive maintenance plans tailored specifically for short-term rental cabin owners.',
    features: ['Monthly or seasonal plans', 'Hot tub maintenance', 'HVAC filter changes', 'Plumbing inspections', 'Electrical safety checks', 'Priority scheduling'],
    path: '/maintenance-packages',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-green-50 text-green-700',
  },
];

const locations = [
  { name: 'Gatlinburg', slug: 'gatlinburg' }, { name: 'Pigeon Forge', slug: 'pigeon-forge' },
  { name: 'Sevierville', slug: 'sevierville' }, { name: 'Wears Valley', slug: 'wears-valley' },
  { name: 'Townsend', slug: 'townsend' }, { name: 'Cosby', slug: 'cosby' },
  { name: 'Pittman Center', slug: 'pittman-center' },
];

const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-amber-400 mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cabin Repair &amp; Maintenance Services</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            One company to handle all your cabin repair needs. We serve short-term rental owners across Sevier County, TN.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {services.map(({ icon: Icon, title, description, features, path, image, color }, i) => (
            <div key={path} className={`card overflow-hidden flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="lg:w-5/12 h-64 lg:h-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={`${title} for rental cabins in Sevier County, TN`} className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={path} className="btn-outline text-sm py-2.5">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:8658052438" className="btn-primary text-sm py-2.5">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Service Areas</p>
            <h2 className="text-3xl font-bold text-gray-900">Cities We Serve in Sevier County</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We provide cabin repair and maintenance across the Smoky Mountains.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO service+city pages */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Service by City</p>
            <h2 className="text-3xl font-bold text-gray-900">Cabin Repair in Your Area</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We provide hot tub repair, HVAC service, plumbing repair, and electrical troubleshooting for vacation cabins in Sevierville, Gatlinburg, Pigeon Forge, and surrounding areas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Hot Tub Repair in Sevierville', path: '/hot-tub-repair-sevierville' },
              { name: 'HVAC Repair in Sevierville', path: '/hvac-repair-sevierville' },
              { name: 'Mini-Split Installation in Sevierville', path: '/mini-split-installation-sevierville' },
              { name: 'Cabin Maintenance in Sevierville', path: '/cabin-maintenance-sevierville' },
              { name: 'Plumbing Repair in Sevierville', path: '/plumbing-repair-sevierville' },
              { name: 'Electrical Repair in Sevierville', path: '/electrical-repair-sevierville' },
              { name: 'Cabin Repair in Gatlinburg', path: '/gatlinburg-cabin-repair' },
              { name: 'Cabin Repair in Pigeon Forge', path: '/pigeon-forge-cabin-repair' },
              { name: 'Hot Tub Repair in Pigeon Forge', path: '/pigeon-forge-hot-tub-repair' },
              { name: 'Hot Tub Repair in Gatlinburg', path: '/gatlinburg-hot-tub-repair' },
              { name: 'HVAC Repair in Cosby', path: '/cosby-hvac-repair' },
              { name: 'Cabin Repair in Wears Valley', path: '/wears-valley-cabin-repair' },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="flex items-center gap-2 bg-white text-gray-700 border border-gray-100 px-4 py-3 rounded-xl text-sm font-medium hover:bg-green-50 hover:text-green-800 hover:border-green-200 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog link */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">Cabin Repair Blog</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Tips for Rental Cabin Owners</h2>
          <p className="text-gray-600 mb-6">
            Read our latest articles on hot tub maintenance, HVAC care, and keeping your Smoky Mountain cabin guest-ready.
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
