import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, type BlogPost } from '@/data/blog';
import { SITE_URL, localBusinessSchema } from '@/data/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Cabin Repair Blog | Hickory Cabin Repair — Sevierville, TN',
  description: 'Expert tips on cabin repair, hot tub maintenance, HVAC care, and keeping your Smoky Mountain rental cabin guest-ready. From Hickory Home and Cabin Repair in Sevierville, TN.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title: 'Cabin Repair Blog | Hickory Cabin Repair — Sevierville, TN', description: 'Expert tips on cabin repair, hot tub maintenance, HVAC care, and keeping your Smoky Mountain rental cabin guest-ready.', url: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const schema = [localBusinessSchema()];
  const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-amber-400 mb-3">Cabin Repair Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tips for Smoky Mountain Cabin Owners</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">Practical advice on hot tub repair, HVAC maintenance, plumbing, and keeping your rental cabin guest-ready — from the technicians who work on these cabins every day.</p>
        </div>
      </section>
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8">
            {blogPosts.map((post: BlogPost) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-800 transition-colors"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-green-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Read Article <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
