import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sthenos App",
  description: "Take your coaching to another level",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} px-6 py-4 bg-slate-600 text-slate-200 h-screen`}
    >
      <body className="h-full">
        <nav className="bg-slate-700 px-3 py-2 mb-2">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="rounded py-2 px-4 hover:bg-slate-400 hover:text-slate-800"
            >
              home
            </Link>
            <Link
              href="/intro-survey"
              className="rounded py-2 px-4 hover:bg-slate-400 hover:text-slate-800"
            >
              survey
            </Link>
            <Link
              href="/moves"
              className="rounded py-2 px-4 hover:bg-slate-400 hover:text-slate-800"
            >
              moves
            </Link>
            <Link
              href="/workouts"
              className="rounded py-2 px-4 hover:bg-slate-400 hover:text-slate-800"
            >
              workouts
            </Link>
            <Link
              href="/trainees"
              className="rounded py-2 px-4 hover:bg-slate-400 hover:text-slate-800"
            >
              trainees
            </Link>
          </div>
        </nav>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
