import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
  title: 'Harshada Kale | Technical Leader & Full-Stack Developer',
  description: 'Technical Leader and Full-Stack Developer specializing in secure Next.js, Django REST Framework, and PostgreSQL applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const saved = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = saved || (prefersDark ? 'dark' : 'light');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
              } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-indigo-500/30">
        <ThemeProvider>
          <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
            
            <Navbar />
            <main className="relative z-10 flex-grow flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
