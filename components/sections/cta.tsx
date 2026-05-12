import { motion } from "framer-motion";
import { Apple, Smartphone, Chrome } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-im-ink dark:bg-card text-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-center max-w-xl mx-auto"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xs uppercase tracking-[0.08em] text-accent font-semibold mb-5"
          >
            Get started
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] mb-5"
          >
            Free your time.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg text-white/60 max-w-md mx-auto leading-relaxed mb-10"
          >
            Download the Internet Money Wallet on the platform of your choice.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap gap-2.5 justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-im-ink rounded-btn font-semibold text-sm hover:bg-white/90 transition-colors active:scale-[0.98]"
            >
              <Apple className="w-4 h-4" />
              iOS
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-im-ink rounded-btn font-semibold text-sm hover:bg-white/90 transition-colors active:scale-[0.98]"
            >
              <Smartphone className="w-4 h-4" />
              Android
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-im-ink rounded-btn font-semibold text-sm hover:bg-white/90 transition-colors active:scale-[0.98]"
            >
              <Chrome className="w-4 h-4" />
              Chrome
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
