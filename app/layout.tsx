import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import type { Metadata } from "next";

import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDS",
  description: "Elevá tu visión",
  icons: {
    icon: '/logonegro.png',
    shortcut: '/logonegro.png',
    apple: '/logonegro.png',
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
        <link rel="icon" href="/logonegro.png" />
      </head>
      <body className={jakarta.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
