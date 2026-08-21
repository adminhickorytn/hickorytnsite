import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'townsend',
  name: 'Townsend',
  blurb: 'Known as the Peaceful Side of the Smokies, Townsend has a growing cabin rental market. Our Townsend cabin repair services keep your property running smoothly.',
  zip: '37882',
  population: '500+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function TownsendPage() {
  return <LocationPage city={city} />;
}
