import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skyward Digital Solutions",
  description: "Desarrollo de sitios web y manejo de redes sociales",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={jakarta.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
