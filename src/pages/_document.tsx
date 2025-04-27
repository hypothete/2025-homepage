import { Head, Html, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId="G-TL0K0955RB" />
    </Html>
  );
}
