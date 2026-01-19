import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Indiana iLearn Practice Exams",
};

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-white/70 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By accessing and using Indiana iLearn Practice Exams ("the Service"), you accept and agree to 
                be bound by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Permission is granted to temporarily use Indiana iLearn Practice Exams for personal, 
                non-commercial educational purposes. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-white/80">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Educational Purpose</h2>
              <p className="text-white/80 leading-relaxed">
                This practice exam platform is designed for educational purposes only. The questions and 
                content are created to help students prepare for the Indiana iLearn assessment. This service 
                is not affiliated with, endorsed by, or connected to the Indiana Department of Education or 
                the official iLearn assessment program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                The materials on Indiana iLearn Practice Exams are provided on an 'as is' basis. We make no 
                warranties, expressed or implied, and hereby disclaim and negate all other warranties including, 
                without limitation:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-white/80">
                <li>Implied warranties or conditions of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property or other violation of rights</li>
                <li>Accuracy, likely results, or reliability of the use of the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p className="text-white/80 leading-relaxed">
                In no event shall Indiana iLearn Practice Exams or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on this website, even 
                if we or an authorized representative has been notified orally or in writing of the possibility 
                of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Accuracy of Materials</h2>
              <p className="text-white/80 leading-relaxed">
                The materials appearing on Indiana iLearn Practice Exams could include technical, typographical, 
                or photographic errors. We do not warrant that any of the materials on its website are accurate, 
                complete, or current. We may make changes to the materials contained on its website at any time 
                without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
              <p className="text-white/80 leading-relaxed">
                We have not reviewed all of the sites linked to our website and are not responsible for the 
                contents of any such linked site. The inclusion of any link does not imply endorsement by us. 
                Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
              <p className="text-white/80 leading-relaxed">
                We may revise these terms of service for its website at any time without notice. By using this 
                website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-white/80 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the 
                United States and the State of Indiana, and you irrevocably submit to the exclusive jurisdiction 
                of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
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

