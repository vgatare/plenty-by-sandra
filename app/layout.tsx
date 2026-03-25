import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Plenty by Sandra | Traditional Rwandan Bridal Wear – Kigali',
  description:
    'Plenty by Sandra creates exquisite Umushanana gowns for brides and ceremonies in Kigali, Rwanda. Handcrafted with culture and love.',
  keywords: [
    'Umushanana',
    'Rwandan bridal',
    'Kigali fashion',
    'African luxury fashion',
    'traditional Rwandan dress',
    'Made in Rwanda',
    'Plenty by Sandra',
  ],
  authors: [{ name: 'Plenty by Sandra' }],
  openGraph: {
    title: 'Plenty by Sandra | Rwandan Luxury Fashion',
    description: 'Exquisite Umushanana gowns, handcrafted in Kigali with culture and love.',
    type: 'website',
    locale: 'en_RW',
    siteName: 'Plenty by Sandra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plenty by Sandra - Traditional Rwandan Bridal Wear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plenty by Sandra | Rwandan Luxury Fashion',
    description: 'Exquisite Umushanana gowns, handcrafted in Kigali with culture and love.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-ivory text-plum antialiased">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
