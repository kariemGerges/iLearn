'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're on the home page, scroll to footer
    if (pathname === '/') {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to home first
      router.push('/');
      // Wait for navigation, then scroll to footer
      setTimeout(() => {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-lg shadow-black/10">
          <a
            href="/"
            onClick={(e) => {
              if (pathname !== '/') {
                e.preventDefault();
                router.push('/');
              }
            }}
            className="text-2xl font-bold text-white hover:text-cyan-300 transition-colors"
          >
            Indiana iLearn
          </a>
          <nav>
            <a
              href="#footer"
              onClick={handleAboutClick}
              className="text-white/90 hover:text-white transition-colors font-semibold px-4 py-2 rounded-xl hover:bg-white/20 backdrop-blur-sm"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

