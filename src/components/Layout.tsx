import { ReactNode } from "react";
import Head from "next/head";
import { Poppins, Spectral, Fira_Mono } from "next/font/google";
import "photoswipe/dist/photoswipe.css";
import styles from "@/styles/Layout.module.css";
import Background from "@/components/Background";
import { GoogleAnalytics } from "@next/third-parties/google";

interface LayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spectral = Spectral({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Erin Alexander</title>
        <meta
          name="description"
          content="Homepage for Erin Alexander: engineer, visual artist, writer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics gaId="G-TL0K0955RB" />
      <Background />
      <main
        className={`${poppins.variable} ${spectral.variable}
          ${firaMono.variable} ${styles.main}`}
      >
        {children}
      </main>

      <footer className={`${styles.footer} ${spectral.variable}`}>
        Copyright Erin A. 2009-25. All rights reserved 😘
      </footer>
    </>
  );
}
