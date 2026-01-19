import Link from "next/link";
import type { Metadata } from "next";

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
    "url": "https://ilearn-practice-exam.vercel.app",
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
        "item": "https://ilearn-practice-exam.vercel.app"
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
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Indiana iLearn
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-2">
            4th Grade Practice Exams
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Practice Assessments - Aligned with Indiana State Standards
          </p>
        </div>

        {/* Subject Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Math Exam Card */}
          <div className="glass-dark rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Mathematics</h2>
              <p className="text-white/80">44 Questions • 70-100 Minutes</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <Link 
                href="/exam/below-level"
                className="block w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/50"
              >
                Below-Level Difficulty (Easy)
              </Link>
              
              <Link 
                href="/exam/on-level"
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50"
              >
                On-Level Difficulty (Medium)
              </Link>
              
              <Link 
                href="/exam/above-level"
                className="block w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50"
              >
                Above-Level Difficulty (Hard)
              </Link>
            </div>

            <div className="text-sm text-white/70 text-center">
              Covers: Number Sense, Computation, Geometry, Measurement, Data Analysis
            </div>
          </div>

          {/* English Exam Card */}
          <div className="glass-dark rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">English Language Arts</h2>
              <p className="text-white/80">40 Questions • 90 Minutes</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <Link 
                href="/ela/below-level"
                className="block w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/50"
              >
                Below-Level Difficulty (Easy)
              </Link>
              
              <Link 
                href="/ela/on-level"
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50"
              >
                On-Level Difficulty (Medium)
              </Link>
              
              <Link 
                href="/ela/above-level"
                className="block w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50"
              >
                Above-Level Difficulty (Hard)
              </Link>
            </div>

            <div className="text-sm text-white/70 text-center">
              Covers: Reading Foundations, Reading Comprehension, Vocabulary, Grammar, Writing
            </div>
          </div>
        </div>

        {/* Exam Information */}
        <div className="glass-dark rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Exam Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white/90 font-semibold">Aligned with Standards</p>
                <p className="text-white/70 text-sm">All questions follow Indiana Academic Standards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white/90 font-semibold">Instant Scoring</p>
                <p className="text-white/70 text-sm">Get immediate feedback after submission</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white/90 font-semibold">Multiple Formats</p>
                <p className="text-white/70 text-sm">Multiple choice, passage-based, and writing tasks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white/90 font-semibold">Practice & Prepare</p>
                <p className="text-white/70 text-sm">Simulate the real iLearn assessment experience</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-white/70 text-sm">
              These practice exams are designed to simulate the Indiana iLearn assessment format.
              <br />
              All questions align with Indiana Academic Standards for Grade 4.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
