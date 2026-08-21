import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Shield,
  TreePine,
  Route,
  Cable,
  Layers,
  Droplets,
  Home,
  Pickaxe,
  MapPin,
  ClipboardList,
  Search,
  FileText,
  Truck,
  Sparkles,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { faqSchema, serviceSchema, localBusinessSchema, SITE_URL } from '@/data/seo';

const faqs = [
  {
    q: 'Do you provide excavation for cabin properties?',
    a: 'Yes. Hickory Home & Cabin Repair works with cabin owners, vacation rental property managers, and residential property owners throughout Sevier County and the surrounding Smoky Mountain area. We understand the terrain, access challenges, and scheduling needs that come with working on rental cabin properties.',
  },
  {
    q: 'Do you clear trees and brush?',
    a: 'Yes, where appropriate. We clear trees, brush, overgrowth, and unwanted vegetation to prepare property for roads, driveways, building sites, utility installation, drainage work, and general property improvements. We do not provide forestry services or large-scale logging.',
  },
  {
    q: 'Can you excavate for underground electrical?',
    a: 'Yes. Hickory can perform excavation and trenching associated with underground electrical projects. Electrical work is performed under the applicable Tennessee licensing and permitting requirements. We are a Tennessee Licensed Electrical Contractor — CE #86291. Depending on the project, permits, utility locating services, easements, engineering, or other approvals may be required.',
  },
  {
    q: 'Do you install private cabin roads?',
    a: 'We provide road excavation and site preparation services including clearing, cutting and filling, base preparation, drainage considerations, and grading for private cabin roads, gravel roads, driveways, and access roads. Some road projects may require engineering, permits, easements, or other approvals depending on the location and scope.',
  },
  {
    q: 'Do you excavate for underground utilities?',
    a: 'Yes. We excavate and trench for electrical lines, water lines, plumbing lines, communications conduit, drainage lines, and other underground utilities. Excavation is coordinated with the appropriate utility and service installation requirements. Utility locating, permits, and inspections may be required depending on the project.',
  },
  {
    q: 'Do you work on steep Smoky Mountain properties?',
    a: 'We work throughout the Smoky Mountain region, but each property must be evaluated individually. Site access, slope, soil conditions, equipment access, drainage, and project requirements all factor into what can be done safely and effectively. We assess each property before providing an estimate.',
  },
  {
    q: 'Do I need permits for excavation?',
    a: 'Permit requirements depend on the project and location. Utility locating, permits, easements, engineering, and other approvals may be required. We can discuss what may be needed for your specific project, but we do not guarantee that all permits are included or that every project is automatically permitted. Customers should verify requirements with their local jurisdiction and utility providers.',
  },
];

const serviceSections = [
  {
    icon: TreePine,
    title: 'Tree & Brush Clearing',
    description:
      'We clear trees, brush, overgrowth, and unwanted vegetation to prepare your property for construction, access, or improvements. Clearing is the first step for many cabin and property projects in the Smoky Mountains.',
    items: [
      'Road and driveway clearing',
      'Building site preparation',
      'Utility installation clearing',
      'Cabin improvement clearing',
      'Drainage work clearing',
      'General property improvements',
      'Overgrowth and brush removal',
      'Vegetation management',
    ],
  },
  {
    icon: Route,
    title: 'Road & Driveway Construction',
    description:
      'Excavation and site preparation for private cabin roads, gravel roads, driveways, and access roads. Smoky Mountain properties often have steep terrain, so proper drainage and site preparation are important for long-term road performance.',
    items: [
      'Private cabin roads',
      'Gravel roads',
      'Driveways',
      'Access roads',
      'Road improvements',
      'Road widening',
      'Road repairs',
      'Site access',
      'Clearing and excavation',
      'Cutting and filling',
      'Base preparation',
      'Drainage considerations',
      'Grading',
      'Gravel and base placement where offered',
    ],
  },
  {
    icon: Cable,
    title: 'Underground Utility Excavation',
    description:
      'Excavation and trenching for underground utilities including electrical, water, plumbing, and communications. Hickory Home & Cabin Repair is a Tennessee Licensed Electrical Contractor — CE #86291 — so we can coordinate excavation with electrical installation under the applicable licensing and permitting requirements.',
    items: [
      'Electrical utilities',
      'Electrical feeders',
      'Underground electrical runs',
      'Water lines',
      'Plumbing lines',
      'Communications conduit',
      'Utility connections',
      'Other underground services where appropriate',
    ],
  },
  {
    icon: Layers,
    title: 'Site Preparation',
    description:
      'Excavation and site preparation for cabin improvements, new construction, additions, and property improvements. Proper excavation and grading help prepare a site before construction or installation begins.',
    items: [
      'Cabin improvements',
      'New construction preparation',
      'Addition projects',
      'Driveways',
      'Utility installation',
      'Drainage improvements',
      'Outdoor structures',
      'Property improvements',
      'Access improvements',
    ],
  },
  {
    icon: Droplets,
    title: 'Grading & Drainage',
    description:
      'Grading and drainage-related excavation to help manage water flow, runoff, and erosion on your property. More complex drainage, retaining-wall, erosion-control, or structural situations may require engineering or additional professional services.',
    items: [
      'Slope correction',
      'Surface water management',
      'Drainage swales',
      'Ditching',
      'Culvert preparation',
      'Driveway drainage',
      'Water runoff management',
      'Erosion concerns',
      'Site grading',
    ],
  },
  {
    icon: Pickaxe,
    title: 'Trenching',
    description:
      'Trenching for utilities, electrical, water lines, conduit, drainage, and service connections. All trenching is performed with appropriate safety considerations. Customers should never attempt excavation themselves — underground utilities, soil conditions, and trench safety require professional evaluation.',
    items: [
      'Utility trenches',
      'Electrical trenches',
      'Water line trenches',
      'Conduit trenches',
      'Drainage trenches',
      'Service trenches',
    ],
  },
];

const processSteps = [
  {
    icon: Phone,
    title: 'Contact Us',
    description: 'Tell us about your project and property location. We will discuss what you need and whether it fits our capabilities.',
  },
  {
    icon: Search,
    title: 'Site Assessment',
    description: 'We evaluate the work area, access, terrain, existing utilities, and project requirements to determine what is needed.',
  },
  {
    icon: FileText,
    title: 'Estimate',
    description: 'We provide an estimate based on the scope of work, site conditions, and project requirements.',
  },
  {
    icon: Truck,
    title: 'Excavation & Site Work',
    description: 'We complete the agreed-upon clearing, excavation, trenching, grading, or site preparation.',
  },
  {
    icon: Sparkles,
    title: 'Final Cleanup',
    description: 'We leave the work area in an appropriate condition based on the project scope.',
  },
];

const whyHickory = [
  {
    title: 'Local Smoky Mountain Service',
    description:
      'We live and work in Sevier County. We understand the terrain, weather, soil conditions, and access challenges that come with Smoky Mountain properties.',
  },
  {
    title: 'Experience Around Vacation Rental Cabins',
    description:
      'We work on cabin properties regularly and understand the scheduling, access, and communication needs of rental owners and property managers.',
  },
  {
    title: 'One Company for Multiple Property Needs',
    description:
      'From excavation to electrical, HVAC, plumbing, hot tub repair, and maintenance, Hickory handles multiple property needs under one roof.',
  },
  {
    title: 'Excavation + Electrical Capabilities',
    description:
      'As a Tennessee Licensed Electrical Contractor (CE #86291), we can coordinate excavation with underground electrical installation when appropriate.',
  },
  {
    title: 'Understanding of Cabin Properties',
    description:
      'We know how cabin properties function — from guest access and parking to utility runs, drainage, and site improvements that affect rentals.',
  },
  {
    title: 'Clear Communication',
    description:
      'We communicate with property owners and managers throughout the project so you know what is happening, what to expect, and what the timeline looks like.',
  },
];

const relatedServices = [
  { label: 'Electrical Services', path: '/electrical-repairs', anchor: 'electrical repair' },
  { label: 'Underground Electrical', path: '/underground-electrical', anchor: 'underground electrical services' },
  { label: 'Cabin Maintenance', path: '/maintenance-packages', anchor: 'cabin maintenance' },
  { label: 'Hot Tub Repair', path: '/hot-tub-repair', anchor: 'hot tub repair' },
  { label: 'HVAC Services', path: '/hvac-services', anchor: 'HVAC services' },
  { label: 'Plumbing Repairs', path: '/plumbing-repairs', anchor: 'plumbing repair' },
];

export const metadata: Metadata = {
  title: 'Excavation Services in Sevierville, TN | Hickory Home & Cabin Repair',
  description:
    'Professional excavation services for cabins, homes, and properties in Sevierville, Gatlinburg, Pigeon Forge and surrounding areas. Tree and brush clearing, roads, site work, underground utilities and more.',
  alternates: { canonical: `${SITE_URL}/excavation-services-sevierville-tn` },
};

export default function ExcavationPage() {
  const path = '/excavation-services-sevierville-tn';
  const title = 'Excavation Services in Sevierville, TN | Hickory Home & Cabin Repair';
  const metaDesc =
    'Professional excavation services for cabins, homes, and properties in Sevierville, Gatlinburg, Pigeon Forge and surrounding areas. Tree and brush clearing, roads, site work, underground utilities and more.';

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Excavation Services', path },
  ];

  const serviceAreas = [
    'Sevierville, TN',
    'Gatlinburg, TN',
    'Pigeon Forge, TN',
    'Sevier County, TN',
    'Wears Valley, TN',
    'Pittman Center, TN',
    'Kodak, TN',
    'Seymour, TN',
    'Cosby, TN',
    'Surrounding Smoky Mountain areas',
  ];

  const schema = [
    localBusinessSchema(),
    serviceSchema('Excavation Services', metaDesc, path),
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
      <section className="relative pt-12 pb-20 bg-cover bg-center" style={{ backgroundImage: "url('/excavation-services-sevierville-tn.webp')" }}>
        <div className="absolute inset-0 bg-green-950/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="section-label text-amber-400 mb-3">Excavation &amp; Property Site Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Excavation Services in Sevierville, TN</h1>
            <p className="text-green-200 text-lg leading-relaxed mb-4">
              Hickory Home &amp; Cabin Repair provides excavation and property site-work services for residential properties, vacation rental cabins, landowners, and construction and maintenance projects throughout Sevierville, Gatlinburg, Pigeon Forge, Sevier County, and surrounding Smoky Mountain areas.
            </p>
            <p className="text-green-200 text-lg leading-relaxed mb-8">
              We understand the unique terrain and property needs of the Smoky Mountains — from steep slopes and narrow access roads to wooded lots and drainage challenges. Whether you need clearing for a new driveway, trenching for underground electrical, or grading for a cabin addition, we handle excavation work that fits your property and project.
            </p>
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

      {/* License Badge */}
      <section className="bg-green-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3">
          <Shield className="w-6 h-6 text-amber-400" />
          <p className="text-white font-semibold text-sm md:text-base">
            Tennessee Licensed Electrical Contractor — CE License #86291
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Excavation is often the first step in a cabin or property project — clearing land for a driveway, trenching for underground utilities, grading for drainage, or preparing a site for construction. In the Smoky Mountains, that work has to account for steep terrain, wooded lots, narrow access, and unpredictable weather. Hickory Home &amp; Cabin Repair provides excavation and site-work services designed for the realities of Sevier County properties, and we coordinate that work with our other services when it makes sense for your project.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Capabilities</p>
            <h2 className="text-3xl font-bold text-gray-900">Excavation &amp; Site-Work Services</h2>
          </div>

          <div className="space-y-6">
            {serviceSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="card p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl font-bold text-green-100">{String(idx + 1).padStart(2, '0')}</span>
                        <Icon className="w-8 h-8 text-green-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{section.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Underground Utility Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Licensed for Underground Electrical</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Underground Utility Excavation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hickory Home &amp; Cabin Repair is a <span className="font-semibold text-gray-900">Tennessee Licensed Electrical Contractor — CE License #86291</span>. That means we can perform excavation and trenching for underground electrical projects and coordinate that work with the electrical installation under the applicable licensing and permitting requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We excavate and trench for electrical utilities, electrical feeders, underground electrical runs, water lines, plumbing lines, communications conduit, and other underground services. Excavation is always coordinated with the appropriate utility and service installation requirements.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">Important:</span> The electrical license alone does not authorize every underground utility project. Depending on the scope, permits, utility requirements, locating services, easements, engineering, or other approvals may be required. We will discuss what may apply to your project.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/underground-utility-excavation-pigeon-forge.webp"
                alt="Underground utility trench with conduit on a cabin property in the Smoky Mountains"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cabin Property Excavation */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label mb-3">Vacation Rental Cabin Specialist</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Excavation Services for Smoky Mountain Cabins</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cabin properties in the Smoky Mountains often need excavation work — whether it is a new driveway for guest access, road repairs after storm damage, utility upgrades for a cabin renovation, underground electrical for a hot tub or outbuilding, water line installation, drainage correction, or clearing overgrown brush before peak rental season.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because we also handle cabin maintenance, electrical, HVAC, plumbing, and hot tub repair, we can often coordinate excavation with other property work. That means fewer contractors on your property, clearer communication, and a single point of contact for projects that span multiple trades.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We work with cabin owners, property managers, and vacation rental management companies who need site work that respects guest schedules, access limitations, and the realities of mountain terrain.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/cabin-road-excavation-sevierville.webp"
                alt="Excavator constructing a gravel access road on a Smoky Mountain cabin property"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">Service Area</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving the Smoky Mountain Area</h2>
          <p className="text-gray-700 text-lg mb-8">
            Hickory Home &amp; Cabin Repair provides excavation and site-work services throughout Sevier County and the surrounding Smoky Mountain area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-green-50 text-green-800 font-medium text-sm px-4 py-2 rounded-full border border-green-100">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hickory */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Why Choose Hickory</p>
            <h2 className="text-3xl font-bold text-gray-900">Why Customers Choose Hickory for Excavation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyHickory.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Related Services</p>
            <h2 className="text-3xl font-bold text-gray-900">Excavation + Other Hickory Services</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Excavation often goes hand-in-hand with other property work. Explore the services we can coordinate with your excavation project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.path}
                href={s.path}
                className="card p-5 hover:shadow-md transition-shadow group flex items-center justify-between"
              >
                <span className="text-gray-800 font-medium group-hover:text-green-700 transition-colors">
                  {s.label}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 transition-colors" />
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            Looking for <Link href="/underground-electrical" className="text-green-700 font-medium hover:underline">underground electrical services</Link>,{' '}
            <Link href="/maintenance-packages" className="text-green-700 font-medium hover:underline">cabin maintenance</Link>, or{' '}
            <Link href="/electrical-repairs" className="text-green-700 font-medium hover:underline">electrical repair</Link>? We handle those too.
          </p>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Project Process</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Most excavation projects follow these steps, though site conditions may require a different approach.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xs font-bold text-green-700 mb-1">Step {idx + 1}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <span className="text-green-700 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Placeholder */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Project Gallery</p>
            <h2 className="text-3xl font-bold text-gray-900">Recent Excavation &amp; Property Projects</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Real project photos and case studies will be added here as they become available. Potential categories include tree and brush clearing, cabin road construction, driveway excavation, underground electrical trenching, utility excavation, drainage work, and site preparation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Tree & Brush Clearing', img: '/tree-brush-clearing-gatlinburg-tn.webp', alt: 'Cleared brush and trees on a wooded Smoky Mountain property' },
              { label: 'Cabin Road Construction', img: '/cabin-road-excavation-sevierville.webp', alt: 'New gravel access road being graded on a cabin property' },
              { label: 'Underground Utility Excavation', img: '/underground-utility-excavation-pigeon-forge.webp', alt: 'Open utility trench with conduit on a cabin property' },
            ].map((project) => (
              <div key={project.label} className="card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{project.label}</h3>
                  <p className="text-sm text-gray-500">Project details coming soon.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need excavation or property site work in the Smoky Mountains?"
        subtitle="Contact Hickory Home & Cabin Repair for an assessment and estimate. Tree and brush clearing, roads and driveways, underground utilities, trenching, site preparation, grading and drainage, and cabin property excavation — all from one local team."
      />
    </>
  );
}
