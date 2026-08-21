import type { Metadata } from 'next';
import ElectricalFAQListPage from '@/components/ElectricalFAQListPage';
import { SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Electrical Repair FAQs | Hickory Home and Cabin Repair',
  description:
    'Common questions about electrical repair for vacation rental cabins in Sevier County, TN. Licensed Tennessee Electrical Contractor CE #86291.',
  alternates: { canonical: `${SITE_URL}/electrical-repairs/faq` },
};

export default function Page() {
  return <ElectricalFAQListPage />;
}
