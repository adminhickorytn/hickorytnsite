import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'sevierville',
  name: 'Sevierville',
  blurb: 'Sevierville is the county seat and a major gateway to the Smokies. Our Sevierville cabin repair team handles everything from emergency plumbing to seasonal maintenance for rental properties.',
  zip: '37862',
  population: '18,000+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function SeviervillePage() {
  return <LocationPage city={city} />;
}
