import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="The Internet Money Wallet — multi-chain, self-custodial, with native swap, bridge, and Bitcoin support."
        />
      </Head>
      <body className="bg-background text-foreground antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
