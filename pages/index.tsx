import Head from "next/head";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { ChainBar } from "@/components/sections/chain-bar";
import { Features } from "@/components/sections/features";
import { Security } from "@/components/sections/security";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Head>
        <title>Internet Money | Multi-chain Wallet</title>
        <meta
          name="description"
          content="Self-custodial wallet for Bitcoin and every EVM chain. Native swap, bridge, fiat on-ramp, NFTs, and live prices."
        />
      </Head>

      <SiteHeader />
      <Hero />
      <ChainBar />
      <Features />
      <Security />
      <CTA />
      <SiteFooter />
    </>
  );
}
