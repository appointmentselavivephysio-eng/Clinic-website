import { CLINIC_CONFIG } from "@/lib/config";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic"],
    "@id": CLINIC_CONFIG.seo.siteUrl,
    "name": CLINIC_CONFIG.fullName,
    "alternateName": "Elavivephysio",
    "description":
      "Jaipur's leading spine and knee physiotherapy clinic. Evidence-based treatment by Dr. Ajay Agarwal (MPT, COMT). 4,000+ patients treated.",
    "url": CLINIC_CONFIG.seo.siteUrl,
    "telephone": CLINIC_CONFIG.contact.phone,
    "email": CLINIC_CONFIG.contact.email,
    "medicalSpecialty": ["Physiotherapy", "Surgical", "Rheumatologic"],
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "City",
      "name": "Jaipur",
    },
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Insurance, TPA",
    "image": [
      "https://www.elavivephysio.com/images/dr-ajay-agarwal.png",
      "https://www.elavivephysio.com/images/clinic-treatment-room.png",
      "https://www.elavivephysio.com/images/clinic-reception.png",
      "https://www.elavivephysio.com/images/clinic-office.png",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CLINIC_CONFIG.address.line1}, ${CLINIC_CONFIG.address.line2}, ${CLINIC_CONFIG.address.area}`,
      "addressLocality": CLINIC_CONFIG.address.city,
      "addressRegion": CLINIC_CONFIG.address.state,
      "postalCode": CLINIC_CONFIG.address.pinCode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CLINIC_CONFIG.geo.lat,
      "longitude": CLINIC_CONFIG.geo.lng,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "09:00",
        "closes": "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "20:00",
        "description": "By prior appointment only",
      },
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Ajay Agarwal",
      "jobTitle": "Founder & Director",
      "description":
        "Physiotherapist with BPT, MPT(Neurology), MHA, MIAFT, MJPN, COMT, CKT(USA), CDNT, CSCIS(Hyderabad) from Janardan Rai Nagar Rajasthan Vidyapeeth (JRNRVU), Udaipur, an MBA in Hospital and Healthcare Management, and multiple international certifications including Johns Hopkins University and Imperial College London",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Janardan Rai Nagar Rajasthan Vidyapeeth (JRNRVU), Udaipur",
      },
    },
    "hasMap": CLINIC_CONFIG.address.googleMapsLink,
    "sameAs": [
      CLINIC_CONFIG.social.instagram,
      CLINIC_CONFIG.social.facebook,
      CLINIC_CONFIG.social.linkedin,
      CLINIC_CONFIG.social.youtube,
      CLINIC_CONFIG.social.whatsapp,
    ],
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.elavivephysio.com/#physician",
    "name": "Dr. Ajay Agarwal",
    "givenName": "Ajay",
    "familyName": "Agarwal",
    "jobTitle": "Founder & Director",
    "description":
      "Physiotherapist specializing in spine, knee, and neurological rehabilitation in Jaipur, Rajasthan. BPT, MPT(Neurology), MHA, COMT, CKT(USA).",
    "telephone": "+91-8955032437",
    "email": "elavivephysio@gmail.com",
    "worksFor": { "@id": "https://www.elavivephysio.com" },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "JNU Institute of Medical Sciences and Research Centre" },
      { "@type": "EducationalOrganization", "name": "Janardan Rai Nagar Rajasthan Vidyapeeth (JRNRVU), Udaipur" },
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "BPT" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "MPT (Neurology)" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certified Orthopedic and Manual Therapist (COMT) - Capri Spine Institute, New Delhi" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "CKT(USA)" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certificate in Community Change in Public Health - Johns Hopkins University" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Healthcare Entrepreneurship: Taking Ideas to Market - Imperial College London" },
    ],
    "image": "https://www.elavivephysio.com/images/dr-ajay-agarwal.png",
    "url": "https://www.elavivephysio.com/about",
    "sameAs": [
      "https://www.instagram.com/elavive_physio/",
      "https://www.youtube.com/@DrAjayAgarwalPhysio",
      "https://in.linkedin.com/company/elavive-physio-spine-knee-clinic",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
    </>
  );
}
