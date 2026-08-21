'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [smsConsent, setSmsConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-amber-400 mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Hickory Home and Cabin Repair
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Call for the fastest response. Or fill out the form below and we&apos;ll get back to you shortly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Reach Us Directly</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a href="tel:8658052438" className="text-green-700 text-lg font-bold hover:underline">
                    865-805-2438
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Fastest way to reach us for urgent repairs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Service Area</p>
                  <p className="text-gray-700">Sevier County, Tennessee</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Gatlinburg · Pigeon Forge · Sevierville · Wears Valley · Cosby
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hours</p>
                  <p className="text-gray-700">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                  <p className="text-gray-500 text-sm mt-1">Emergency service available outside regular hours</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Have an Emergency?</h3>
              <p className="text-green-200 text-sm mb-4">
                Don&apos;t fill out a form — call us directly. We respond to emergencies fast.
              </p>
              <a
                href="tel:8658052438"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call 865-805-2438
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-600 text-sm max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you shortly. For urgent issues, please call us
                  directly at 865-805-2438.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                        placeholder="(865) 555-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Hot Tub Repair</option>
                      <option>HVAC Services</option>
                      <option>Electrical Repairs</option>
                      <option>Plumbing Repairs</option>
                      <option>Maintenance Package</option>
                      <option>Emergency Repair</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Describe the Issue *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent resize-none"
                      placeholder="Tell us what's going on and where your cabin is located..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-green-700 focus:ring-green-700 shrink-0"
                    />
                    <label htmlFor="smsConsent" className="text-xs text-gray-600 leading-relaxed">
                      By checking this box, you agree to receive SMS messages from Hickory Home and Cabin Repair
                      regarding estimates, scheduling, appointment reminders, project updates, and customer support.
                      Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for
                      assistance. Consent is not a condition of purchase. View our{' '}
                      <Link href="/privacy-policy" className="text-green-700 font-semibold underline-offset-2 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    For urgent repairs, call us directly at{' '}
                    <a href="tel:8658052438" className="text-green-700 font-semibold">
                      865-805-2438
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
