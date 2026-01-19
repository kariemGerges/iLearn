import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ilearn-ten.vercel.app/'), // Update with your actual domain
  title: {
    default: "Indiana iLearn 4th Grade Practice Exams - Math & ELA Test Prep",
    template: "%s | Indiana iLearn Practice"
  },
  description: "Free Indiana iLearn 4th grade practice exams for Mathematics and English Language Arts. Practice with 44 math questions and 40 ELA questions aligned with Indiana Academic Standards. Three difficulty levels: Below-Level (Easy), On-Level (Medium), and Above-Level (Hard).",
  keywords: [
    "Indiana iLearn",
    "iLearn practice test",
    "4th grade math practice",
    "4th grade ELA practice",
    "Indiana state test practice",
    "Indiana Academic Standards",
    "4th grade math exam",
    "4th grade ELA exam",
    "Indiana test prep",
    "iLearn assessment practice",
    "grade 4 math practice",
    "grade 4 ELA practice",
    "Indiana standardized test",
    "math practice questions",
    "ELA practice questions",
    "Indiana Department of Education",
    "test preparation",
    "exam practice",
    "4th grade assessment"
  ],
  authors: [{ name: "Indiana iLearn Practice" }],
  creator: "Indiana iLearn Practice",
  publisher: "Indiana iLearn Practice",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ilearn-practice-exam.vercel.app", // Update with your actual domain
    siteName: "Indiana iLearn Practice Exams",
    title: "Indiana iLearn 4th Grade Practice Exams - Math & ELA Test Prep",
    description: "Free Indiana iLearn 4th grade practice exams for Mathematics and English Language Arts. Practice with real exam-style questions aligned with Indiana Academic Standards.",
    images: [
      {
        url: "/og-image.jpg", // You should add an OG image
        width: 1200,
        height: 630,
        alt: "Indiana iLearn 4th Grade Practice Exams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indiana iLearn 4th Grade Practice Exams - Math & ELA Test Prep",
    description: "Free Indiana iLearn 4th grade practice exams for Mathematics and English Language Arts. Practice with real exam-style questions.",
    images: ["/og-image.jpg"], // You should add a Twitter image
    creator: "@ilearnpractice", // Update with your Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ilearn-practice-exam.vercel.app", // Update with your actual domain
  },
  category: "Education",
  classification: "Educational Practice Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ilearn-practice-exam.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="iLearn Practice" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Indiana iLearn Practice Exams",
              "description": "Free practice exams for Indiana iLearn 4th grade Mathematics and English Language Arts assessments",
              "url": "https://ilearn-practice-exam.vercel.app",
              "educationalUse": "Practice Test",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "audienceType": "Grade 4 Students"
              },
              "about": {
                "@type": "Thing",
                "name": "Indiana Academic Standards",
                "description": "4th Grade Mathematics and English Language Arts"
              },
              "teaches": [
                "Mathematics",
                "English Language Arts",
                "Test Preparation"
              ],
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "license": "https://creativecommons.org/licenses/by/4.0/"
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

