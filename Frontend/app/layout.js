"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
// import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html data-theme="dark">
        <head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P22DMTBV6E"
          ></Script>
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
            gtag('config', 'G-P22DMTBV6E');`}
          </Script>

          <title>CollegeXConnect</title>
          <meta name="description" />
          <link rel="icon" href="/favicon-16x16.png" />
        </head>
        <body className="bg-primary">
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
