import { MoreHorizontal } from "lucide-react";

const ASSETS = [
  { name: "Bitcoin", amount: "0.082 BTC", value: "$5,420", color: "#f7931a" },
  { name: "Ethereum", amount: "2.4 ETH", value: "$4,820", color: "#627EEA" },
  { name: "Polygon", amount: "1,240 MATIC", value: "$1,580", color: "#8247E5" },
];

export function WalletCard() {
  return (
    <div className="w-[230px] h-[380px] bg-card rounded-3xl border border-border p-5 flex flex-col gap-3.5 shadow-2xl shadow-black/5 dark:shadow-black/40">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <span className="text-xs font-medium text-foreground">All chains</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
      </div>

      <div>
        <div className="text-[11px] text-muted-foreground">Total balance</div>
        <div className="text-3xl font-semibold tracking-tight text-foreground">
          $12,847.20
        </div>
        <div className="text-xs text-im-success">+ $124.30 (0.97%)</div>
      </div>

      <div className="flex gap-1.5">
        <button className="flex-1 py-2.5 bg-background border border-border rounded-btn text-[11px] font-medium text-foreground">
          Send
        </button>
        <button className="flex-1 py-2.5 bg-background border border-border rounded-btn text-[11px] font-medium text-foreground">
          Buy
        </button>
        <button className="flex-1 py-2.5 bg-accent rounded-btn text-[11px] font-semibold text-accent-foreground">
          Swap
        </button>
      </div>

      <div className="flex flex-col">
        {ASSETS.map((asset, i) => (
          <div
            key={asset.name}
            className={`flex items-center gap-2.5 py-2 ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <div
              className="w-6 h-6 rounded-full shrink-0"
              style={{ background: asset.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-foreground">{asset.name}</div>
              <div className="text-[10px] text-muted-foreground">{asset.amount}</div>
            </div>
            <div className="text-[11px] font-medium text-foreground">{asset.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
