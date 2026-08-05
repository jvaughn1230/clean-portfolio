import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${site.name} | Portfolio`,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${jetbrainsMono.variable} ${dmSerif.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <div
            className="flex min-h-screen flex-col transition-colors duration-300"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <Navbar />
            <ThemeToggle />
            <main className="mx-auto w-full max-w-[1200px] flex-1 px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
