import type { Metadata } from 'next';
import ServiceDetailPage, { buildServiceMetadata } from '@/components/ServiceDetailPage';
import { localBusinessSchema, serviceSchema, faqSchema, SITE_URL } from '@/data/seo';

const path = '/hot-tub-repair';
const breadcrumbName = 'Hot Tub Repair';
const title = 'Hot Tub Repair in Sevierville, TN | Same-Day Cabin Service';
const heroImage = '/Grand_Mountain_View_Great_Smoky_Mountains-28.webp';
const metaDesc =
  'Professional hot tub repair for rental cabins in Gatlinburg, Pigeon Forge, and Sevierville, TN. Same-day service for heaters, pumps, jets, leaks, and control boards. Call 865-805-2438.';

const faq = [
  { q: 'How fast can you respond to a hot tub emergency?', a: "We offer same-day and next-day service for hot tub emergencies across Sevier County. Call us at 865-805-2438 and we'll get someone out as quickly as possible." },
  { q: 'Do you work on all hot tub brands?', a: "Yes, we service all major brands including Jacuzzi, Hot Spring, Sundance, Caldera, Dimension One, and more. If we can't fix it, we'll tell you upfront." },
  { q: 'Can you service my hot tub as part of a maintenance plan?', a: 'Absolutely. We offer maintenance packages that include regular hot tub inspections, water chemistry checks, and filter cleaning.' },
  { q: 'How much does hot tub repair cost?', a: 'Costs vary depending on the issue. We provide transparent quotes before starting any work. Call for a free estimate.' },
];

export const metadata: Metadata = {
  ...buildServiceMetadata(title, metaDesc, path, heroImage),
};

export default function HotTubRepairPage() {
  const schema = [localBusinessSchema(), serviceSchema(breadcrumbName, metaDesc, path), faqSchema(faq)];
  return (
    <ServiceDetailPage
      path={path} breadcrumbName={breadcrumbName} title={title}
      subtitle="Hot Tub Repair & Service" heroImage={heroImage} metaDesc={metaDesc}
      intro="A broken hot tub is one of the top reasons guests leave bad reviews. We provide fast, reliable hot tub repair for rental cabin owners across Sevier County — often same day or next day."
      serviceFilter="Hot Tub Repair"
      services={['Heater element repair and replacement','Pump and motor diagnostics and repair','Jet system cleaning and repair','Control board diagnostics and replacement','Leak detection and sealing','Water chemistry balancing and consulting','Cover and cabinet repairs','Electrical connection issues','Error code diagnostics (all brands)','Winterization and startup service']}
      signs={["Hot tub won't heat up or loses heat quickly","Jets are weak or not working at all","Error codes on the control panel","Water is leaking around the cabinet or equipment","Pump is making unusual noises","Water is cloudy, foamy, or smells off","Hot tub won't turn on at all"]}
      faq={faq} schema={schema}
    />
  );
}
