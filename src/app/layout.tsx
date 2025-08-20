import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import React from "react";
import { Inter as InterFont } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = InterFont({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(
    SERVER_URL.startsWith("http") ? SERVER_URL : "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" suppressHydrationWarning>
  <body className={`${inter.className} antialiased`}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main>{children}</main>
    </ThemeProvider>
  </body>
</html>

   
  );
}
