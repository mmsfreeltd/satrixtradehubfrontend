import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster as NotifyToaster } from "@/components/ui/sonner";
import EarningNotifications from "@/components/notify/earning";
import { LIVE_CHAT, SITE_NAME } from "@/global/constant";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE_NAME} | Crypto & Forex Trading`,
  description:
    "Professional crypto and forex trading platform with advanced tools and resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col sm:p-8 m-2 ">
            <Navbar />
            <main className="flex-1">
              {children}
              <EarningNotifications />
            </main>
            <Footer />
          </div>
          <NotifyToaster />
        </ThemeProvider>
        <div>
          <Script
            id="custom-inline-script"
            dangerouslySetInnerHTML={{
              __html: LIVE_CHAT,
            }}
          />
        </div>
      </body>
    </html>
  );
}
