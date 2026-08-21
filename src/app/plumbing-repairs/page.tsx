import type { Metadata } from 'next';
import ServiceDetailPage, { buildServiceMetadata } from '@/components/ServiceDetailPage';
import { localBusinessSchema, serviceSchema, faqSchema } from '@/data/seo';

const path = '/plumbing-repairs';
const breadcrumbName = 'Plumbing Repairs';
const title = 'Plumbing Repair in Sevierville, TN | Cabin Plumbing Service';
const heroImage = 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1600';
const metaDesc =
  'Fast plumbing repairs for rental cabins in Gatlinburg, Pigeon Forge, and Sevierville, TN. Leak repair, pipe replacement, water heaters, fixtures, and emergency service. Call 865-805-2438.';

const faq = [
  { q: 'Can you handle a burst pipe emergency?', a: "Yes. Burst pipes are one of our most common emergency calls. Call 865-805-2438 immediately — the faster we get there, the less water damage you'll have." },
  { q: 'Do you service water heaters?', a: 'Yes, we repair and replace tank and tankless water heaters. With multiple guest bathrooms, a reliable water heater is critical for cabin rentals.' },
  { q: 'Can you fix a slow drain or clogged toilet?', a: 'Absolutely. We handle all drain clearing, toilet repairs, and fixture issues — quickly and without disruption to your guests.' },
  { q: 'Do you offer preventive plumbing maintenance?', a: 'Yes. Our maintenance packages include plumbing inspections to catch issues before they become emergencies — like slow leaks under sinks or deteriorating supply lines.' },
];

export const metadata: Metadata = {
  ...buildServiceMetadata(title, metaDesc, path, heroImage),
};

export default function PlumbingPage() {
  const schema = [localBusinessSchema(), serviceSchema(breadcrumbName, metaDesc, path), faqSchema(faq)];
  return (
    <ServiceDetailPage
      path={path} breadcrumbName={breadcrumbName} title={title}
      subtitle="Plumbing Repair & Service" heroImage={heroImage} metaDesc={metaDesc}
      intro="A plumbing problem in a rental cabin can quickly escalate into a major repair bill or a bad guest review. We respond fast to keep your property dry, functional, and guest-ready."
      serviceFilter="Plumbing Repair"
      services={['Leak detection and repair','Pipe repair and replacement','Water heater repair and replacement','Tankless water heater service','Faucet and fixture repair','Toilet repair and replacement','Drain clearing and snaking','Shut-off valve replacement','Supply line inspection and replacement','Emergency plumbing service']}
      signs={['Dripping or running faucets','Slow or clogged drains','Discolored or smelly water','Water heater not heating','Low water pressure throughout cabin','Wet spots on ceilings, walls, or floors','Running toilet','Visible pipe corrosion or mineral buildup']}
      faq={faq} schema={schema}
    />
  );
}
