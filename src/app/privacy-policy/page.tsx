import type { Metadata } from 'next';
import { Shield, Phone, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hickory Home and Cabin Repair',
  description:
    'Privacy policy for Hickory Home and Cabin Repair. Learn how we collect, use, and protect your personal information, including SMS communications and data security.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  const path = '/privacy-policy';
  const title = 'Privacy Policy | Hickory Home and Cabin Repair';
  const description =
    'Privacy policy for Hickory Home and Cabin Repair. Learn how we collect, use, and protect your personal information, including SMS communications and data security.';

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-amber-400" />
          </div>
          <p className="section-label text-amber-400 mb-3">Your Privacy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-green-200 text-lg">Effective Date: June 30, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            Hickory Home and Cabin Repair (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy
            and is committed to protecting the personal information you provide to us.
          </p>

          <div className="space-y-10">
            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="space-y-2 ml-1">
                {[
                  'Name',
                  'Phone number',
                  'Email address',
                  'Property address',
                  'Details regarding your requested services',
                  'Information submitted through our website, contact forms, phone calls, email, or text messages',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Collect Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Collect Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We may collect information when you:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'Submit a contact form on our website',
                  'Request an estimate',
                  'Contact us by phone',
                  'Send us an email',
                  'Send us a text message',
                  'Schedule an appointment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'Respond to inquiries',
                  'Provide estimates',
                  'Schedule appointments',
                  'Communicate regarding projects and repairs',
                  'Send appointment reminders',
                  'Provide project updates',
                  'Respond to customer service requests',
                  'Send invoices and payment information',
                  'Improve our services',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Share Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Share Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do <span className="font-semibold">not</span> sell, rent, or share your personal
                information with third parties for their marketing purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information only when necessary to:
              </p>
              <ul className="space-y-2 ml-1 mb-4">
                {[
                  'Provide requested services',
                  'Process payments',
                  'Comply with applicable laws or legal obligations',
                  'Protect our legal rights',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed bg-amber-50 border border-amber-200 rounded-xl p-4">
                <span className="font-semibold">SMS consent and phone numbers are not shared with third
                parties or affiliates for marketing purposes.</span>
              </p>
            </div>

            {/* SMS Communications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Communications</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you consent to receive SMS messages from Hickory Home and Cabin Repair, you agree to
                receive text messages related to:
              </p>
              <ul className="space-y-2 ml-1 mb-4">
                {[
                  'Estimates',
                  'Appointment confirmations',
                  'Appointment reminders',
                  'Project updates',
                  'Customer support',
                  'Service-related notifications',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                <p className="text-gray-700 font-medium">Message frequency may vary.</p>
                <p className="text-gray-700 font-medium">Message and data rates may apply.</p>
                <p className="text-gray-700">
                  You may opt out of receiving SMS messages at any time by replying{' '}
                  <span className="font-bold text-green-700">STOP</span> to any text message.
                </p>
                <p className="text-gray-700">
                  For assistance, reply <span className="font-bold text-green-700">HELP</span>.
                </p>
                <p className="text-gray-700">
                  Your consent to receive SMS messages is not a condition of purchasing any goods or
                  services from Hickory Home and Cabin Repair.
                </p>
              </div>
            </div>

            {/* SMS Consent Communication */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Consent Communication</h2>
              <p className="text-gray-700 leading-relaxed">
                Phone numbers obtained as part of the SMS consent process will not be shared with third parties or
                affiliates for marketing purposes.
              </p>
            </div>

            {/* SMS Opt-In */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SMS Opt-In</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customers may opt in to receive SMS messages by submitting the Contact Us form on our
                website and checking an unchecked SMS consent checkbox before submitting the form.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By checking the SMS consent box, customers agree to receive SMS messages from Hickory
                Home and Cabin Repair regarding estimates, appointment reminders, scheduling, project
                updates, and customer support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">The SMS consent disclosure states that:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'Message frequency may vary.',
                  'Message and data rates may apply.',
                  'Customers may reply STOP to opt out.',
                  'Customers may reply HELP for assistance.',
                  'Consent to receive SMS messages is not a condition of purchase.',
                  'The Privacy Policy and SMS Terms & Conditions are available through links provided on the website.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable administrative and technical measures to safeguard your personal
                information against unauthorized access, disclosure, or misuse.
              </p>
            </div>

            {/* Your Choices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You may contact us to:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'Update your information',
                  'Correct inaccurate information',
                  'Request deletion of your information where applicable',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 font-semibold text-lg mb-4">Hickory Home and Cabin Repair</p>
              <div className="space-y-3">
                <a href="tel:8658052438" className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors">
                  <Phone className="w-5 h-5 text-green-700 shrink-0" />
                  <span>(865) 805-2438</span>
                </a>
                <a href="mailto:admin@hickorytn.com" className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors">
                  <Mail className="w-5 h-5 text-green-700 shrink-0" />
                  <span>admin@hickorytn.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
