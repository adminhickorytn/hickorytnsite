import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowRight, Phone } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { SITE_URL, localBusinessSchema } from '@/data/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';

interface PageProps { params: { slug: string }; }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };
  const path = `/blog/${post.slug}`;
  return { title: `${post.title} | Hickory Cabin Repair Blog`, description: post.excerpt, alternates: { canonical: `${SITE_URL}${path}` }, openGraph: { title: post.title, description: post.excerpt, url: `${SITE_URL}${path}`, type: 'article', publishedTime: post.date } };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const schema = [localBusinessSchema(), { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: post.date, author: { '@type': 'Organization', name: 'Hickory Home and Cabin Repair' }, publisher: { '@type': 'Organization', name: 'Hickory Home and Cabin Repair', url: SITE_URL }, mainEntityOfPage: `${SITE_URL}${path}` }];
  const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-green-950 pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-green-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            {post.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
          <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Need Help With Your Cabin?</h3>
            <p className="text-gray-600 text-sm mb-4">We repair hot tubs, HVAC, plumbing, and electrical for rental cabins across Sevier County, TN.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:8658052438" className="btn-primary text-sm"><Phone className="w-4 h-4" /> Call 865-805-2438</a>
              <Link href="/contact" className="btn-outline text-sm">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </article>
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More From Our Blog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group">
                <span className="text-xs font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full">{rp.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-green-800 transition-colors">{rp.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{rp.excerpt}</p>
                <span className="text-green-700 text-sm font-semibold flex items-center gap-1 mt-3">Read More <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
