import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPI Dashboard — Auto-generate startup metrics from Stripe, GA & GitHub",
  description: "Connect Stripe, Google Analytics, and GitHub to auto-build startup KPI dashboards. Sync data automatically and export investor-ready reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f4c9ebe2-0cf1-4017-a162-67d263b46d25"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
