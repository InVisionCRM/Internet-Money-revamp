import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const STATS = [
  { value: "0", label: "Data collected" },
  { value: "2", label: "Security audits" },
  { value: "100%", label: "Self-custody" },
];

export function Security() {
  return (
    <section id="security" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-xs uppercase tracking-[0.08em] text-accent font-semibold mb-4">
              Private by default
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] text-foreground mb-5 leading-[1.08]">
              No tracking. No KYC. No compromise.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-7">
              Your keys never leave your device. We collect zero data and we
              never will. Independently audited, fully self-custodial.
            </p>
            <div className="flex gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="bg-background rounded-pill p-10 aspect-[1.2] flex items-center justify-center relative border border-border"
          >
            <div className="absolute w-32 h-32 rounded-full bg-accent opacity-[0.08]" />
            <div className="absolute w-20 h-20 rounded-full bg-accent opacity-[0.12]" />
            <ShieldCheck className="w-10 h-10 text-accent relative" strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
