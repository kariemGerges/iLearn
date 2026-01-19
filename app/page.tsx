import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExamCard from "@/components/ExamCard";
import ExamInfo from "@/components/ExamInfo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Indiana iLearn 4th Grade Practice Exams - Free Math & ELA Test Prep",
  description: "Free Indiana iLearn 4th grade practice exams for Mathematics (44 questions) and English Language Arts (40 questions). Three difficulty levels: Easy, Medium, and Hard. Aligned with Indiana Academic Standards. Instant scoring and detailed feedback.",
  keywords: [
    "Indiana iLearn practice test",
    "4th grade math practice exam",
    "4th grade ELA practice test",
    "Indiana state test practice",
    "free iLearn practice",
    "Indiana test prep",
    "grade 4 assessment practice"
  ],
  openGraph: {
    title: "Indiana iLearn 4th Grade Practice Exams - Free Math & ELA Test Prep",
    description: "Free Indiana iLearn 4th grade practice exams for Mathematics and English Language Arts. Practice with real exam-style questions aligned with Indiana Academic Standards.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indiana iLearn 4th Grade Practice Exams",
    description: "Free practice exams for Indiana iLearn 4th grade Math & ELA",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Indiana iLearn 4th Grade Practice Exams",
    "description": "Free practice exams for Indiana iLearn 4th grade Mathematics and English Language Arts assessments",
    "url": "https://ilearn-ten.vercel.app/",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "featureList": [
      "44 Mathematics Questions",
      "40 English Language Arts Questions",
      "Three Difficulty Levels",
      "Instant Scoring",
      "Aligned with Indiana Academic Standards",
      "Free Practice Tests"
    ],
    "educationalUse": "Practice Test",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Grade 4 Students in Indiana"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Indiana Academic Standards",
        "description": "4th Grade Mathematics Standards"
      },
      {
        "@type": "Thing",
        "name": "Indiana Academic Standards",
        "description": "4th Grade English Language Arts Standards"
      }
    ],
    "teaches": [
      "Mathematics",
      "English Language Arts",
      "Test Taking Strategies",
      "Problem Solving"
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ilearn-ten.vercel.app/"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Header />
      <div className="max-w-6xl mx-auto">
        <Hero />

        {/* Subject Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ExamCard
            subject="math"
            title="Mathematics"
            questionCount="44 Questions"
            timeRange="70-100 Minutes"
            description="Covers: Number Sense, Computation, Geometry, Measurement, Data Analysis"
          />
          <ExamCard
            subject="ela"
            title="English Language Arts"
            questionCount="40 Questions"
            timeRange="90 Minutes"
            description="Covers: Reading Foundations, Reading Comprehension, Vocabulary, Grammar, Writing"
          />
        </div>

        <ExamInfo />
      </div>

      <Footer />
    </main>
  );
}
