import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  Route,
  CreditCard,
  Bitcoin,
  Network,
  Layers,
  Radar,
  Image as ImageIcon,
  LineChart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: ArrowLeftRight,
    title: "In-wallet swaps",
    body: "Swap any token, any time. No dApp connection needed — built right into the wallet.",
  },
  {
    icon: Route,
    title: "Cross-chain bridging",
    body: "Bridge and swap in a single transaction. Move value between chains without leaving the app.",
  },
  {
    icon: CreditCard,
    title: "Fiat on-ramp",
    body: "Buy crypto directly with a card or bank account. Funded in minutes, no exchange detour.",
  },
  {
    icon: Bitcoin,
    title: "Native Bitcoin support",
    body: "Hold, send, and receive BTC alongside your EVM assets. One seed, every asset.",
  },
  {
    icon: Network,
    title: "Every EVM chain",
    body: "PulseChain, Ethereum, Base, BSC, Polygon, Avalanche, Arbitrum, and any custom EVM you add.",
  },
  {
    icon: Layers,
    title: "All-chains mode",
    body: "See every asset across every chain in one unified view. No more chain switching to check balances.",
  },
  {
    icon: Radar,
    title: "Auto token detection",
    body: "New tokens appear in your wallet automatically. No manual imports, no copy-pasting contract addresses.",
  },
  {
    icon: ImageIcon,
    title: "NFT support",
    body: "View, send, and manage NFTs across all supported chains with full-resolution previews.",
  },
  {
    icon: LineChart,
    title: "Live price tracking",
    body: "Real-time prices for every EVM token. Built-in charts, no third-party tools required.",
  },
  {
    icon: Sparkles,
    title: "Rich token logos",
    body: "Every token gets its real logo, fetched automatically. No more generic placeholder circles.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="bg-card border border-border rounded-pill p-6 min-h-[200px]"
    >
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="text-base font-semibold text-foreground tracking-tight mb-1.5">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.body}
      </p>
    </motion.div>
  );
}

export function Features() {
  // First 9 fill a 3x3 grid, the 10th gets centered on its own row.
  const gridFeatures = FEATURES.slice(0, 9);
  const orphan = FEATURES[9];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="text-xs uppercase tracking-[0.08em] text-accent font-semibold mb-4">
            Everything in one place
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] text-foreground mb-4">
            The wallet, fully featured.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Ten reasons the Internet Money Wallet replaces every wallet
            you&apos;ve used.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {gridFeatures.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <div className="hidden md:block" />
          <FeatureCard feature={orphan} index={1} />
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
