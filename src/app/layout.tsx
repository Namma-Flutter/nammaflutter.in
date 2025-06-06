import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namma Flutter Chennai | Flutter Community Events & Meetups",
  description:
    "Join Namma Flutter Chennai for vibrant Flutter community events, meetups, and workshops. Connect with Flutter developers, learn, network, and celebrate Flutter in Chennai!",
  keywords: [
    "Flutter Chennai",
    "Flutter community",
    "Flutter events",
    "Flutter meetup Chennai",
    "Flutter workshops",
    "Namma Flutter",
    "Flutter India",
    "Mobile development",
    "Google Flutter",
    "Flutter conference"
  ],
  openGraph: {
    title: "Namma Flutter Chennai | Flutter Community Events & Meetups",
    description:
      "Join Namma Flutter Chennai for vibrant Flutter community events, meetups, and workshops. Connect with Flutter developers, learn, network, and celebrate Flutter in Chennai!",
    url: "https://nammaflutter.in/",
    siteName: "Namma Flutter Chennai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-flutter-chennai.png",
        width: 1200,
        height: 630,
        alt: "Namma Flutter Chennai community event banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@nammaflutter",
    title: "Namma Flutter Chennai | Flutter Community Events & Meetups",
    description:
      "Join Namma Flutter Chennai for vibrant Flutter community events, meetups, and workshops. Connect with Flutter developers, learn, network, and celebrate Flutter in Chennai!",
    images: ["/og-flutter-chennai.png"]
  },
  metadataBase: new URL("https://nammaflutter.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="flutter-animated-border p-[2px] min-h-screen">
          <main className="bg-white/90 rounded-[1.5rem] min-h-screen w-full mx-auto">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
