import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'pittman-center',
  name: 'Pittman Center',
  blurb: 'Pittman Center sits between Gatlinburg and Cosby with a high concentration of luxury rental cabins. Our Pittman Center cabin repair team is ready to help.',
  zip: '37738',
  population: '500+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function PittmanCenterPage() {
  return <LocationPage city={city} />;
}
