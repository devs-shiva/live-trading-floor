import { mockTradingRooms } from "@/data/mockData";
import ChartThumbnail from "./ChartThumbnail";
import { Eye, Clock, TrendingUp, Flame } from "lucide-react";

export default function FeaturedTrader() {
  const featured = mockTradingRooms.find((r) => r.isFeatured) || mockTradingRooms[0];
  const positive = featured.pnl >= 0;

  return (
    <section className="mx-auto w-full max-w-[1600px] px-3 py-4 md:px-4">
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
        <div className="grid md:grid-cols-[1fr_320px]">
          {/* Chart area */}
          <div className="relative bg-surface">
            <div className="h-[180px] md:h-[260px]">
              <ChartThumbnail data={featured.chartData} positive={positive} />
            </div>

            {/* Overlay badges */}
            <div className="absolute left-3 top-3 flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-neon-red/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <span className="relative flex h-2 w-2">
                  <span className="animate-live-ring absolute inline-flex h-full w-full rounded-full bg-white" />
                  <span className="animate-live-pulse relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                LIVE
              </div>
              <div className="flex items-center gap-1 rounded-full bg-gold/20 px-2 py-1 text-xs font-bold text-gold">
                <Flame className="h-3 w-3" />
                Featured
              </div>
            </div>

            {/* Gradient overlay for text */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />

            {/* Shimmer */}
            <div className="animate-shimmer pointer-events-none absolute inset-0" />
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-between gap-4 p-4 md:p-5">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">
                  {featured.traderInitials}
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{featured.traderName}</p>
                  <p className="text-xs text-muted-foreground">{featured.asset}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-lg bg-secondary/50 p-3">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">P&L</p>
                  <p className={`text-lg font-bold ${positive ? "text-neon-green" : "text-neon-red"}`}>
                    {positive ? "+" : ""}{featured.pnl}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Viewers</p>
                  <p className="text-lg font-bold text-foreground">{featured.viewerCount.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-lg font-bold text-foreground">{featured.duration}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 rounded-lg border border-neon-green bg-neon-green/10 px-4 py-2.5 text-sm font-bold text-neon-green transition-all hover:bg-neon-green/20 hover:shadow-[0_0_20px_hsl(142_72%_50%/0.3)]">
                Watch Live
              </button>
              <button className="rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
