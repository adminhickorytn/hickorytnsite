import type { Metadata } from 'next';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import ServiceDetailPage, { buildServiceMetadata } from '@/components/ServiceDetailPage';
import { localBusinessSchema, serviceSchema, faqSchema } from '@/data/seo';

const path = '/hvac-services';
const breadcrumbName = 'HVAC Services';
const title = 'HVAC Repair in Sevierville, TN | Mini-Split & GE HVAC Service';
const heroImage = 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600';
const metaDesc =
  'HVAC repair, installation, and maintenance for rental cabins in Gatlinburg, Pigeon Forge, and Sevierville, TN. Mini-split specialists and GE Appliances HVAC service. Same-day emergency service. Call 865-805-2438.';

const GE_CONTRACTOR_URL = 'https://contractorfinder.geappliances.com/contractors/hickory-llc-57940-sevierville-tn';

const faq = [
  { q: 'Do you install mini-split systems?', a: 'Yes, we specialize in mini-split installation, which is a popular choice for Smoky Mountain cabins. Mini-splits are efficient, require no ductwork, and are easy to control per zone.' },
  { q: 'How quickly can you respond to an HVAC emergency?', a: 'We offer same-day and next-day service for HVAC emergencies across Sevier County. Call 865-805-2438 for the fastest response.' },
  { q: 'Do you service all HVAC brands?', a: 'Yes, we work on all major brands including Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi, GE Appliances, and others.' },
  { q: 'What is included in an HVAC tune-up?', a: 'Our tune-ups include filter replacement, coil cleaning, refrigerant check, thermostat calibration, electrical connection inspection, and overall system performance evaluation.' },
  { q: 'Do you service GE HVAC systems?', a: 'Yes. Hickory Home & Cabin Repair provides HVAC troubleshooting, repair, maintenance, and service for applicable GE Appliances HVAC systems in Sevierville, Gatlinburg, Pigeon Forge, and surrounding areas. Hickory Home & Cabin Repair is also listed in the official GE Appliances Contractor Finder.' },
];

export const metadata: Metadata = {
  ...buildServiceMetadata(title, metaDesc, path, heroImage),
};

export default function HVACPage() {
  const schema = [localBusinessSchema(), serviceSchema(breadcrumbName, metaDesc, path), faqSchema(faq)];

  const geSection = (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">GE HVAC Service</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HVAC Service for GE Appliances Equipment</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hickory Home &amp; Cabin Repair provides HVAC service for homeowners and vacation rental properties
              throughout Sevierville, Gatlinburg, Pigeon Forge, and surrounding Smoky Mountain communities. We work
              with GE Appliances HVAC equipment and provide professional troubleshooting, repair, maintenance, and
              service for applicable GE HVAC systems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hickory Home &amp; Cabin Repair is listed in the official{' '}
              <a
                href={GE_CONTRACTOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-semibold hover:text-green-800 underline-offset-2 hover:underline inline-flex items-center gap-1"
              >
                GE Appliances Contractor Finder
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              . Homeowners can view our GE contractor profile and business information directly through GE Appliances.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">HVAC Brands We Service</h3>
              <ul className="grid grid-cols-2 gap-2">
                {['GE Appliances','Mitsubishi','Goodman','Rheem','Durastar','Carrier','Trane','Lennox','Daikin','Other major brands'].map((brand) => (
                  <li key={brand} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0" />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">GE HVAC Service Area</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide GE HVAC repair and service across Sevier County and the Smoky Mountain region, including:
            </p>
            <ul className="space-y-2 mb-6">
              {['Sevierville, TN','Gatlinburg, TN','Pigeon Forge, TN','Cosby, TN','Wears Valley, TN','Townsend, TN','Pittman Center, TN'].map((city) => (
                <li key={city} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
            <a
              href={GE_CONTRACTOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex"
            >
              View Our GE Contractor Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ServiceDetailPage
      path={path} breadcrumbName={breadcrumbName} title={title}
      subtitle="Heating & Cooling Service" heroImage={heroImage} metaDesc={metaDesc}
      intro="A failed HVAC system in a mountain cabin means guest complaints and refund requests. We provide fast, professional heating and cooling service — including GE Appliances HVAC equipment — to keep your cabin comfortable and your guests happy year-round."
      serviceFilter="HVAC Repair"
      services={['Central air conditioning repair and service','Mini-split installation and repair','Heat pump repair and replacement','Gas and electric furnace service','GE Appliances HVAC service and repair','Ductwork inspection and repair','Thermostat replacement and programming','Seasonal HVAC tune-ups','Filter replacement and maintenance','New HVAC system installation','Emergency heating and cooling repair']}
      signs={['Cabin not cooling or heating to set temperature','System running constantly without reaching temp','Unusual noises from the unit (banging, squealing)','Ice forming on the outdoor unit','High energy bills with no change in usage','Uneven temperatures throughout the cabin','System trips the breaker repeatedly']}
      faq={faq} schema={schema}
      customSection={geSection}
    />
  );
}
