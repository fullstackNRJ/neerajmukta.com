import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "neerajmukta.com",
    template: "%s | chronark.com",
  },
  description: "Team Lead at medbikri.com and software consultant.",
  openGraph: {
    title: "neerajmukta.com",
    description: "Team Lead at medbikri.com and software consultant.",
    url: "https://neerajmukta.com",
    siteName: "neerajmukta.com",
    images: [
      {
        url: "https://neerajmukta.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Neeraj Mukta",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          {children}
          {/*  <div>This should persists across all routes</div> */}
        </main>
      </body>
    </html>
  );
}
