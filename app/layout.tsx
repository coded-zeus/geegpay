import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import StoreProvider from "./StoreProvider";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geegpay Frontend UI Challenge",
  description: "Geegpay Frontend UI Challenge By Ibrahim Abdulsalam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`transition-all duration-500 bg-[#FAFAFA] dark:bg-background ${inter.className}`}
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar />

            {children}
            <Analytics />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
