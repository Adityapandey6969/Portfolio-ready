import type { Metadata } from 'next';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import ShadowParticles from '@/src/components/ui/ShadowParticles';
import ScrollFighter from '@/src/components/ui/ScrollFighter';
import BattleEffects from '@/src/components/ui/BattleEffects';
import '@/src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Aditya Pandey - Data Scientist & Full-Stack Developer',
  description:
    'Portfolio of Aditya Pandey - Data Science student at RCOEM, Nagpur. Projects in ML, analytics, full-stack development. Python, SQL, React, Power BI.',
  keywords:
    'Data Science, Machine Learning, Full-Stack Developer, Python, React, Data Analytics',
  authors: [{ name: 'Aditya Pandey' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adityapandey.dev',
    title: 'Aditya Pandey - Data Scientist & Full-Stack Developer',
    description: 'Portfolio showcasing data science and full-stack development projects',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ShadowParticles />
        <BattleEffects />
        <ScrollFighter />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
