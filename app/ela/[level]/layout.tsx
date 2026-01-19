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
    title: `Indiana iLearn 4th Grade ELA Exam - ${levelInfo.name}`,
    description: `Free Indiana iLearn 4th grade English Language Arts practice exam - ${levelInfo.description}. 40 questions covering Reading Foundations, Reading Comprehension, Vocabulary, Grammar, and Writing. Instant scoring and detailed feedback.`,
    keywords: [
      `Indiana iLearn ELA practice ${level}`,
      `4th grade ELA ${level} practice`,
      `Indiana ELA exam ${level}`,
      "Indiana iLearn practice test",
      "4th grade ELA practice",
      "Indiana state test practice",
      "ELA test prep",
      "Indiana Academic Standards ELA"
    ],
    openGraph: {
      title: `Indiana iLearn 4th Grade ELA Exam - ${levelInfo.name}`,
      description: `Free Indiana iLearn 4th grade English Language Arts practice exam - ${levelInfo.description}. 40 questions with instant scoring.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Indiana iLearn ELA Exam - ${levelInfo.name}`,
      description: `Free 4th grade ELA practice exam - ${levelInfo.description}`,
    },
    alternates: {
      canonical: `/ela/${level}`,
    },
  };
}

export default function ELALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

