import type { Metadata } from "next";
import { Baloo_2, Luckiest_Guy, Nunito } from "next/font/google";
import "./globals.css";
import { DocsShell, DocsHeader } from "@/components/DocsShell";
import { Sidebar } from "@/components/Sidebar";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-body",
});
const wordmark = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wordmark",
});

export const metadata: Metadata = {
  title: "royal-games-ui · Midnight Court UI kit",
  description:
    "Royal enamel UI kit for Capacitor mobile games. Two skins, one grammar: docks, ribbons, boards, pieces and HUD.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${wordmark.variable}`}
    >
      <body>
        <DocsShell>
          <div className="shell">
            <Sidebar />
            <main className="main">
              <DocsHeader />
              {children}
            </main>
          </div>
        </DocsShell>
      </body>
    </html>
  );
}
