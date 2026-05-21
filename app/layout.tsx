import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardik Bajaj — Full-Stack Developer | Next.js, React, Node.js",
  description:
    "Full-Stack Developer from Sirhind, India. I build scalable web applications with React, Node.js, Next.js, PostgreSQL, and cloud deployment. Available for freelance projects and technical consulting.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",
    "PostgreSQL",
    "TypeScript",
    "Sirhind",
    "India",
    "Freelance Developer",
  ],
  authors: [{ name: "Hardik Bajaj", url: "https://hardik-portfolio-steel.vercel.app" }],
  creator: "Hardik Bajaj",
  publisher: "Hardik Bajaj",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hardik-portfolio-steel.vercel.app",
    title: "Hardik Bajaj — Full-Stack Developer",
    description:
      "Full-Stack Developer from Sirhind, India. I build scalable web applications with React, Node.js, Next.js, and PostgreSQL.",
    siteName: "Hardik Bajaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik Bajaj — Full-Stack Developer",
    description: "Full-Stack Developer building web applications with modern tech stack",
    creator: "@hardikbajaj364",
  },
  alternates: {
    canonical: "https://hardik-portfolio-steel.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0A0A0A] text-[#F1F5F9]">
        {children}
      </body>
    </html>
  );
}
