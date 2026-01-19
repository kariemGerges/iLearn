import type { Metadata } from "next";

type Props = {
  params: { level: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const level = params.level;
  
  const levelNames: Record<string, { name: string; description: string }> = {
    'below-level': {
      name: 'Below-Level (Easy)',
      description: 'Easier difficulty level for students needing additional support'
    },
    'on-level': {
      name: 'On-Level (Medium)',
      description: 'Standard proficiency level aligned with Indiana Academic Standards'
    },
    'above-level': {
      name: 'Above-Level (Hard)',
      description: 'More challenging difficulty level for advanced students'
    }
  };

  const levelInfo = levelNames[level] || { name: 'Practice', description: 'Practice exam' };

  return {
    title: `Indiana iLearn 4th Grade Math Exam - ${levelInfo.name}`,
    description: `Free Indiana iLearn 4th grade Mathematics practice exam - ${levelInfo.description}. 44 questions covering Number Sense, Computation, Geometry, Measurement, Data Analysis, and Mixed Applications. Instant scoring and detailed feedback.`,
    keywords: [
      `Indiana iLearn math practice ${level}`,
      `4th grade math ${level} practice`,
      `Indiana math exam ${level}`,
      "Indiana iLearn practice test",
      "4th grade math practice",
      "Indiana state test practice",
      "math test prep",
      "Indiana Academic Standards math"
    ],
    openGraph: {
      title: `Indiana iLearn 4th Grade Math Exam - ${levelInfo.name}`,
      description: `Free Indiana iLearn 4th grade Mathematics practice exam - ${levelInfo.description}. 44 questions with instant scoring.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Indiana iLearn Math Exam - ${levelInfo.name}`,
      description: `Free 4th grade math practice exam - ${levelInfo.description}`,
    },
    alternates: {
      canonical: `/exam/${level}`,
    },
  };
}

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

