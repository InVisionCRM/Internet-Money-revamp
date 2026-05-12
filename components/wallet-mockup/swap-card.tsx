import { ArrowDown } from "lucide-react";

export function SwapCard() {
  return (
    <div className="w-[210px] h-[360px] bg-card rounded-[28px] border border-border p-5 flex flex-col gap-3 -rotate-6 shadow-xl shadow-black/5 dark:shadow-black/40">
      <div className="text-[10px] font-medium tracking-wider text-muted-foreground">
        CROSS-CHAIN SWAP
      </div>

      <div className="bg-background border border-border rounded-btn p-3.5">
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] text-muted-foreground">From</span>
          <span className="text-[9px] text-muted-foreground">Ethereum</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            2.4
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-pill bg-card border border-border text-foreground font-medium">
            ETH
          </span>
        </div>
      </div>

      <div className="flex justify-center -my-1.5 relative z-10">
        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <ArrowDown className="w-3.5 h-3.5 text-accent-foreground" />
        </div>
      </div>

      <div className="bg-background border border-border rounded-btn p-3.5">
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] text-muted-foreground">To</span>
          <span className="text-[9px] text-muted-foreground">Base</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            8,420
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-pill bg-card border border-border text-foreground font-medium">
            USDC
          </span>
        </div>
      </div>

      <button className="mt-auto py-3 bg-accent rounded-btn text-xs font-semibold text-accent-foreground">
        Bridge &amp; swap
      </button>
    </div>
  );
}
