import { useEffect, useState } from "react";
import { marketData } from "@/data/mockData";

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="animate-count-glow font-mono font-bold text-foreground">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}

export default function MarketPulseBar() {
  const [data, setData] = useState(marketData);

  // Simulate subtle data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
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
    <header className="sticky top-0 z-50 flex h-[60px] items-center border-b border-border bg-background/95 backdrop-blur-sm md:h-[70px]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-3 md:gap-6 md:px-6">
        {/* Logo */}
        <span className="shrink-0 text-lg font-black tracking-wider text-gold md:text-xl">WEETOO</span>

        {/* Data items */}
        <div className="flex items-center gap-4 overflow-x-auto text-xs md:gap-8 md:text-sm">
          <div className="flex shrink-0 flex-col items-center">
            <span className="text-muted-foreground">Total Payback</span>
            <AnimatedCounter target={data.totalPayback} prefix="$" />
          </div>

          <div className="hidden shrink-0 flex-col items-center sm:flex">
            <span className="text-muted-foreground">24h Liquidations</span>
            <span className="font-mono font-bold text-neon-red">
              ${(data.liquidations24h / 1e6).toFixed(1)}M
            </span>
          </div>

          <div className="hidden shrink-0 flex-col items-center md:flex">
            <span className="text-muted-foreground">Long / Short</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-neon-green transition-all duration-700"
                  style={{ width: `${data.longRatio}%` }}
                />
              </div>
              <span className="font-mono text-xs text-muted-foreground">{data.longRatio}%</span>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center">
            <span className="text-muted-foreground">Fear & Greed</span>
            <span className={`font-mono font-bold ${fearColor}`}>
              {data.fearGreedIndex} · {fearLabel}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
