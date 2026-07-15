'use client'
import { useState } from 'react'

const faqs = [
  {
    q: "What conditions does Elavive Physio treat?",
    a: "We specialize in spine and knee rehabilitation, including back pain, neck pain, sciatica, slip disc, knee pain, osteoarthritis, frozen shoulder, sports injuries, post-surgical rehabilitation, stroke rehabilitation, and neurological conditions."
  },
  {
    q: "How is Elavive Physio different from other clinics in Jaipur?",
    a: "Dr. Ajay Agarwal holds advanced certifications in manual therapy, dry needling, and neurological rehabilitation including courses from Johns Hopkins University and Imperial College London. Every treatment plan is evidence-based and personalized to your specific condition and goals."
  },
  {
    q: "Do you accept insurance or TPA?",
    a: "Yes, cashless and TPA facility is available at Elavive Physio. Please contact us at +91-8955032437 to confirm your specific insurance coverage before your visit."
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on your condition and severity. Mild conditions may resolve in 4 to 6 sessions, while chronic or complex conditions may require 12 or more. Dr. Agarwal will give you a clear estimate after your initial assessment."
  },
  {
    q: "Is physiotherapy painful?",
    a: "Some techniques may cause mild temporary discomfort, but treatment should never be excessively painful. Dr. Agarwal adjusts techniques based on your comfort level and response to treatment."
  },
  {
    q: "Do you provide home physiotherapy?",
    a: "Yes, home physiotherapy is available for stroke rehabilitation, post-surgical recovery, elderly patients, and those with limited mobility. Call +91-8955032437 to arrange a home visit."
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Bring any relevant medical reports, X-rays, MRI scans, or doctor prescriptions. Wear comfortable, loose clothing that allows the physiotherapist to examine the affected area."
  },
  {
    q: "Can I book a Sunday appointment?",
    a: "Sunday appointments are available by prior arrangement. Please call +91-8955032437 to schedule."
  }
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-[#FAF8F3]">
      <div className="container-content">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="font-heading text-3xl font-light text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to know before your visit to Elavive Physio.
          </p>
        </div>
        <div className="max-w-3xl divide-y divide-teal/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-charcoal text-base pr-4">
                  {faq.q}
                </span>
                <span className={`shrink-0 grid h-8 w-8 place-items-center rounded-full border border-teal/20 text-teal transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-teal text-white' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-smooth ${openIndex === index ? 'max-h-96 mt-3' : 'max-h-0'}`}>
                <p className="text-muted leading-relaxed text-sm pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
