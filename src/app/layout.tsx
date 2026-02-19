import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/shared/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yuktakulkarni.dev'),
  title: {
    default: 'Yukta Kulkarni — AI & Full Stack Engineer',
    template: '%s | Yukta Kulkarni',
  },
  description:
    "NYU MS Computer Science '26. AI Engineer at Systematic Ventures. Built production AI modules, security ML systems, and edge AI applications. Open to Software Engineer, Backend, Full Stack, and AI Engineer roles.",
  keywords: [
    'Yukta Kulkarni',
    'Software Engineer',
    'AI Engineer',
    'Full Stack Developer',
    'Machine Learning',
    'NYU',
    'New York',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'GPT-4',
    'RAG',
    'Vector Search',
    'Edge AI',
  ],
  authors: [{ name: 'Yukta Kulkarni', url: 'https://yuktakulkarni.dev' }],
  creator: 'Yukta Kulkarni',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yuktakulkarni.dev',
    siteName: 'Yukta Kulkarni',
    title: 'Yukta Kulkarni — AI & Full Stack Engineer',
    description:
      "NYU MS CS '26 | AI Engineer at Systematic Ventures | Building intelligent, scalable systems at the intersection of AI and software engineering.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yukta Kulkarni — AI & Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yukta Kulkarni — AI & Full Stack Engineer',
    description:
      "NYU MS CS '26 | AI Engineer at Systematic Ventures | Building intelligent systems at scale.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yukta Kulkarni',
  jobTitle: 'AI & Software Engineer',
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'New York University',
      sameAs: 'https://www.nyu.edu',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'SRM Institute of Science and Technology',
    },
  ],
  url: 'https://yuktakulkarni.dev',
  email: 'yk3213@nyu.edu',
  sameAs: [
    'https://www.linkedin.com/in/yukta-kulkarni-/',
    'https://github.com/yuktakul04',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Backend Engineering',
    'Full Stack Development',
    'RAG Systems',
    'Edge AI',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#09090f" />
      </head>
      <body className="bg-bg text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
