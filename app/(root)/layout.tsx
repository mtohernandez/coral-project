import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import { ReduxProvider } from "@/context/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Share threads with anyone, anywhere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            <Topbar />

            <main className="mt-10">
              <section className="main-container">
                <div className="w-full max-w-4xl">{children}</div>
              </section>
            </main>

            <Bottombar />
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
