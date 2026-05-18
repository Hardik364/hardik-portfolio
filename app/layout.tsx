import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardik — Full-Stack Developer",
  description:
    "Full-Stack Developer from Sirhind, India. I build end-to-end web applications — React frontends, Node.js backends, and cloud-deployed APIs.",
  keywords: ["Full-Stack Developer", "React", "Node.js", "Next.js", "PostgreSQL", "AWS", "Sirhind", "India"],
  authors: [{ name: "Hardik" }],
  openGraph: {
    title: "Hardik — Full-Stack Developer",
    description: "Full-Stack Developer from Sirhind, India.",
    type: "website",
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
