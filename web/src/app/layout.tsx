import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} ${jetbrains.variable}`}
    >
      <body className="bg-neutral-1000 text-neutral-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}