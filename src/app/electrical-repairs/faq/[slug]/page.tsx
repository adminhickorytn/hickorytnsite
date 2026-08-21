import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ElectricalFAQDetailPage from '@/components/ElectricalFAQDetailPage';
import { electricalFAQs } from '@/data/electricalFaqs';
import { SITE_URL } from '@/data/seo';

export function generateStaticParams() {
  return electricalFAQs.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const faq = electricalFAQs.find((f) => f.slug === params.slug);
  if (!faq) return {};
  return {
    title: faq.question,
    description: faq.shortAnswer,
    alternates: { canonical: `${SITE_URL}/electrical-repairs/faq/${faq.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const faq = electricalFAQs.find((f) => f.slug === params.slug);
  if (!faq) notFound();
  return <ElectricalFAQDetailPage faq={faq} />;
}
