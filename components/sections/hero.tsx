import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WalletCard } from "@/components/wallet-mockup/wallet-card";
import { SwapCard } from "@/components/wallet-mockup/swap-card";

export function Hero() {
  return (
    <section
      id="wallet"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-pill bg-card border border-border mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-im-success animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              Bitcoin + every EVM chain
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground mb-5"
          >
            One wallet. Every chain.
            <br />
            Zero compromise.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-9"
          >
            The Internet Money Wallet is a self-custodial, multi-chain wallet
            with native swap, bridge, fiat on-ramp, and NFT support.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex gap-2.5 justify-center"
          >
            <Button variant="accent" size="lg">
              Download wallet
            </Button>
            <Button variant="outline" size="lg">
              See features
            </Button>
          </motion.div>
        </motion.div>

        {/* Dual floating wallet mockups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-20 w-[340px] h-[420px]"
        >
          <div className="accent-glow" />
          <div className="absolute left-[-100px] top-8 animate-float [animation-delay:0.4s]">
            <SwapCard />
          </div>
          <div className="absolute left-[70px] top-0 animate-float">
            <WalletCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
