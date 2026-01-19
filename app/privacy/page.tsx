import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Indiana iLearn Practice Exams",
};

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/70 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                Indiana iLearn Practice Exams ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard information when you use our 
                practice exam website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  <strong className="text-white">No Personal Information Required:</strong> Our practice exam 
                  platform does not require you to create an account or provide any personal information. 
                  You can use all features of the website anonymously.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Automatically Collected Information:</strong> Like most websites, 
                  we may collect certain information automatically, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Information</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We use the automatically collected information to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-white/80">
                <li>Improve our website functionality and user experience</li>
                <li>Analyze website usage patterns</li>
                <li>Ensure website security and prevent abuse</li>
                <li>Provide technical support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage</h2>
              <p className="text-white/80 leading-relaxed">
                All exam answers and progress are stored locally in your browser. We do not store, transmit, 
                or have access to your exam responses or scores. Once you close your browser, this information 
                is cleared unless you have browser settings that preserve local storage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-white/80 leading-relaxed">
                We may use cookies and similar tracking technologies to enhance your experience. These are 
                used for functional purposes only, such as maintaining your session during an exam. You can 
                control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-white/80 leading-relaxed">
                Our website may use third-party services for analytics or hosting. These services may collect 
                information as described in their own privacy policies. We do not share personal information 
                with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-white/80 leading-relaxed">
                Our practice exams are designed for educational purposes and are suitable for children. 
                We do not knowingly collect personal information from children under 13. Since we do not 
                require registration or personal information, children can safely use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-white/80">
                <li>Use our website without providing personal information</li>
                <li>Clear your browser data at any time</li>
                <li>Disable cookies through your browser settings</li>
                <li>Contact us with privacy-related questions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:{' '}
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

