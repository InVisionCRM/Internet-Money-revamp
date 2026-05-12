const CHAINS = [
  "Bitcoin",
  "PulseChain",
  "Ethereum",
  "Base",
  "BSC",
  "Polygon",
  "Avalanche",
  "Arbitrum",
];

export function ChainBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground font-medium">
            Works with
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-7">
            {CHAINS.map((chain) => (
              <span
                key={chain}
                className="text-sm font-medium text-foreground"
              >
                {chain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
