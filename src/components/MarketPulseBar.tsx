import { useEffect, useState } from "react";
import { marketData } from "@/data/mockData";

export default function MarketPulseBar() {
  const [data, setData] = useState(marketData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        totalPayback: prev.totalPayback + Math.floor(Math.random() * 500 - 100),
        liquidations24h: prev.liquidations24h + Math.floor(Math.random() * 100000 - 30000),
        longRatio: Math.min(80, Math.max(40, prev.longRatio + Math.floor(Math.random() * 3 - 1))),
        fearGreedIndex: Math.min(95, Math.max(10, prev.fearGreedIndex + Math.floor(Math.random() * 3 - 1))),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fearLabel = data.fearGreedIndex > 60 ? "Greed" : data.fearGreedIndex < 40 ? "Fear" : "Neutral";
  const fearColor = data.fearGreedIndex > 60 ? "text-neon-green" : data.fearGreedIndex < 40 ? "text-neon-red" : "text-gold";

  return (
    <div className="flex h-8 items-center border-b border-border bg-surface/50 text-[11px]">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-center gap-6 px-3 md:gap-10 md:px-4">
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground">Payback</span>
          <span className="animate-count-glow font-mono font-bold text-foreground">${data.totalPayback.toLocaleString()}</span>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="text-muted-foreground">24h Liq</span>
          <span className="font-mono font-bold text-neon-red">${(data.liquidations24h / 1e6).toFixed(1)}M</span>
        </div>
        <div className="hidden items-center gap-1.5 md:flex">
          <span className="text-muted-foreground">L/S</span>
          <div className="h-1 w-14 overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-neon-green transition-all duration-700" style={{ width: `${data.longRatio}%` }} />
          </div>
          <span className="font-mono text-muted-foreground">{data.longRatio}%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground">F&G</span>
          <span className={`font-mono font-bold ${fearColor}`}>{data.fearGreedIndex} · {fearLabel}</span>
        </div>
      </div>
    </div>
  );
}
