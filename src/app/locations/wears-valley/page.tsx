import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'wears-valley',
  name: 'Wears Valley',
  blurb: 'Wears Valley offers a quieter cabin experience on the peaceful side of the Smokies. We serve Wears Valley cabin owners with full repair and maintenance services.',
  zip: '37862',
  population: '1,500+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function WearsValleyPage() {
  return <LocationPage city={city} />;
}
