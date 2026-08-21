import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'cosby',
  name: 'Cosby',
  blurb: 'Cosby sits on the eastern edge of the Smokies with a mix of cabins and vacation homes. We provide reliable cabin repair services throughout the Cosby area.',
  zip: '37722',
  population: '1,000+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function CosbyPage() {
  return <LocationPage city={city} />;
}
