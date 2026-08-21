import type { Metadata } from 'next';
import ServiceDetailPage, { buildServiceMetadata } from '@/components/ServiceDetailPage';
import { localBusinessSchema, serviceSchema, faqSchema } from '@/data/seo';

const path = '/electrical-repairs';
const breadcrumbName = 'Electrical Repairs';
const title = 'Electrical Repair in Sevierville, TN | Cabin Electrician';
const heroImage = 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600';
const metaDesc =
  'Licensed Tennessee electrical contractor (CE #86291) providing code-compliant electrical repairs for rental cabins in Gatlinburg, Pigeon Forge, and Sevierville, TN. Panels, subpanels, underground conduit, hot tub circuits, and more. Call 865-805-2438.';

const faq = [
  { q: 'Is electrical work safe for me to DIY in a rental cabin?', a: 'We strongly advise against DIY electrical work in rental properties. Improper wiring is a fire hazard and can violate local codes, putting your guests and your property at risk. Our work is performed under Tennessee CE Electrical Contractor License #86291 and meets current NEC code.' },
  { q: 'Can you upgrade my cabin electrical panel?', a: 'Yes, we handle panel upgrades and replacements for cabins that have grown in electrical demand — especially with hot tubs, EV chargers, or added HVAC systems. We pull permits and pass inspection on the first try.' },
  { q: 'What is a GFCI outlet and why does my cabin need them?', a: 'GFCI (Ground Fault Circuit Interrupter) outlets protect against electrical shock in wet areas. They are required by code in bathrooms, kitchens, and outdoor areas — and essential for guest safety.' },
  { q: 'How quickly can you respond to an electrical emergency?', a: 'We offer same-day service for electrical emergencies across Sevier County. Call 865-805-2438 immediately if you have a sparking outlet, burning smell, or repeatedly tripping breakers.' },
  { q: 'Are you a licensed electrical contractor?', a: 'Yes. Hickory Home and Cabin Repair holds Tennessee CE Electrical Contractor License #86291. All electrical work is performed within the scope of that license and applicable local code requirements.' },
];

export const metadata: Metadata = {
  ...buildServiceMetadata(title, metaDesc, path, heroImage),
};

export default function ElectricalPage() {
  const schema = [localBusinessSchema(), serviceSchema(breadcrumbName, metaDesc, path), faqSchema(faq)];
  return (
    <ServiceDetailPage
      path={path} breadcrumbName={breadcrumbName} title={title}
      subtitle="Electrical Repair & Service" heroImage={heroImage} metaDesc={metaDesc}
      intro="Electrical problems in a rental cabin can be dangerous for guests and costly for owners. As a licensed Tennessee electrical contractor (CE #86291), we provide safe, code-compliant electrical repairs, panel upgrades, subpanel installation, underground conduit runs, service hookups, hot tub circuits, and HVAC electrical connections to keep your cabin up to code and your guests protected."
      serviceFilter="Electrical Repair"
      services={['Electrical troubleshooting and repairs','Electrical panel and breaker box repair or replacement','Subpanel installation','Underground electrical conduit and electrical runs','Service hookups and related electrical work','Hot tub electrical circuits and GFCI protection','HVAC and mini-split electrical connections','Electrical work for vacation rental cabins','Outlet and switch repair and replacement','GFCI and AFCI outlet installation','Lighting fixture installation and repair','Ceiling fan installation','Wiring diagnosis and repair','Outdoor lighting and security lights','Code violation corrections and inspections']}
      signs={['Outlets that are discolored, warm, or sparking','Breakers that trip repeatedly','Flickering lights throughout the cabin','No power to specific rooms or outlets','Burning smell near outlets or panels','Outdated two-prong outlets without grounding','Hot tub or appliance not receiving power','Panel is a Federal Pacific or Zinsco (known fire risk)','Hot tub or HVAC on a shared circuit']}
      faq={faq} schema={schema}
    />
  );
}
