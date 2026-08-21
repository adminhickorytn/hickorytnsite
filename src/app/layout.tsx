import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Hickory Home and Cabin Repair | Sevier County Cabin Repair & Maintenance',
  description:
    'Fast, reliable cabin repair and maintenance for short-term rental owners in Sevier County, TN. Hot tubs, HVAC, electrical, plumbing, and maintenance packages. Call 865-805-2438.',
  metadataBase: new URL('https://hickorytn.com'),
  openGraph: {
    siteName: 'Hickory Home and Cabin Repair',
    type: 'website',
    images: [{ url: '/Grand_Mountain_View_Great_Smoky_Mountains-28.webp' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
