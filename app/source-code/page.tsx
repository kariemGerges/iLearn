import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Source Code",
  description: "Source code information for Indiana iLearn Practice Exams",
};

export default function SourceCodePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-white/80 hover:text-cyan-300 transition-colors mb-6"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Source Code</h1>
            <p className="text-white/70 text-sm">Open source educational project</p>
          </div>

          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Repository</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                The source code for Indiana iLearn Practice Exams is available on GitHub. You can view, 
                fork, and contribute to the project.
              </p>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <a
                  href="https://github.com/kariemGerges/ilearn-math-exam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-semibold"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                This project is built with modern web technologies:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <h3 className="font-bold text-white mb-2">Frontend Framework</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Next.js 14 (App Router)</li>
                    <li>• React 18</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <h3 className="font-bold text-white mb-2">Styling</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Tailwind CSS</li>
                    <li>• Custom Glassmorphism</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <h3 className="font-bold text-white mb-2">Features</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Client-side State Management</li>
                    <li>• Dynamic Routing</li>
                    <li>• SEO Optimized</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <h3 className="font-bold text-white mb-2">Deployment</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Vercel Ready</li>
                    <li>• Static Generation</li>
                    <li>• Server Components</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Project Structure</h2>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <pre className="text-white/80 text-sm overflow-x-auto">
{`ilearn-math-exam/
├── app/
│   ├── exam/[level]/     # Math exam pages
│   ├── ela/[level]/      # ELA exam pages
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── source-code/      # This page
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── data/                # Question data
└── public/              # Static assets`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                To run this project locally:
              </p>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <pre className="text-white/80 text-sm space-y-2">
{`# Clone the repository
git clone https://github.com/kariemGerges/ilearn-math-exam.git

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev

# Build for production
npm run build`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contributing</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Contributions are welcome! If you&apos;d like to contribute:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-white/80">
                <li>Fork the repository</li>
                <li>Create a feature branch</li>
                <li>Make your changes</li>
                <li>Submit a pull request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">License</h2>
              <p className="text-white/80 leading-relaxed">
                This project is provided as-is for educational purposes. Please refer to the LICENSE file 
                in the repository for specific licensing information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-white/80 leading-relaxed">
                For questions about the source code or contributions, please contact:{' '}
                <a 
                  href="mailto:kariem.gerges@outlook.com" 
                  className="text-cyan-300 hover:text-cyan-200 underline"
                >
                  kariem.gerges@outlook.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

