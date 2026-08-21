import type { Metadata } from 'next';
import ServiceDetailPage, { buildServiceMetadata } from '@/components/ServiceDetailPage';
import { localBusinessSchema, serviceSchema, faqSchema } from '@/data/seo';

const path = '/maintenance-packages';
const breadcrumbName = 'Maintenance Packages';
const title = 'Cabin Maintenance in Sevierville, TN | Rental Specialists';
const heroImage = 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600';
const metaDesc =
  'Proactive maintenance packages for short-term rental cabins in Sevier County, TN. Hot tub service, HVAC, plumbing, and electrical inspections. Starting at $99/month. Call 865-805-2438.';

const faq = [
  { q: 'What is included in a maintenance package?', a: 'Our maintenance packages include hot tub water chemistry checks, HVAC filter changes, plumbing and electrical inspections, and priority scheduling for repair calls.' },
  { q: 'How much do maintenance packages cost?', a: 'Plans start at $99/month with no long-term contract required. Contact us for a custom quote based on your cabin size and systems.' },
  { q: 'Do I still pay for repairs under a maintenance package?', a: "Maintenance packages cover the inspection and routine maintenance visits. If a repair is needed, you'll receive priority scheduling and discounted labor rates as a package member." },
  { q: 'How often will you visit my cabin?', a: "Visit frequency depends on your package level — typically monthly or quarterly. We'll customize a schedule based on your booking calendar and seasonal needs." },
];

export const metadata: Metadata = {
  ...buildServiceMetadata(title, metaDesc, path, heroImage),
};

export default function MaintenancePage() {
  const schema = [localBusinessSchema(), serviceSchema(breadcrumbName, metaDesc, path), faqSchema(faq)];
  return (
    <ServiceDetailPage
      path={path} breadcrumbName={breadcrumbName} title={title}
      subtitle="Proactive Cabin Maintenance" heroImage={heroImage} metaDesc={metaDesc}
      intro="The best way to avoid emergency repairs is to prevent them. Our maintenance packages are designed specifically for short-term rental cabin owners — keeping everything running smoothly so you can focus on bookings, not breakdowns."
      serviceFilter="Maintenance Package"
      services={['Monthly or quarterly maintenance visits','Hot tub water chemistry and filter service','HVAC filter replacement and tune-ups','Plumbing system inspection','Electrical safety walkthrough','Outdoor furniture and deck check','Appliance status inspection','Priority scheduling for repair calls','Discounted labor rates on all repairs','Written inspection reports after each visit']}
      signs={["You've had multiple emergency repair calls this year","Your hot tub chemistry is always out of balance","Your HVAC filters haven't been changed in months","Guests frequently report small issues","You manage multiple cabins and can't keep up","You want to protect your investment proactively"]}
      faq={faq} schema={schema}
    />
  );
}
