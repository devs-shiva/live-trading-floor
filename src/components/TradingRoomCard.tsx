import type { TradingRoom } from "@/data/mockData";
import ChartThumbnail from "./ChartThumbnail";
import { Eye, Flame } from "lucide-react";

export default function TradingRoomCard({ room }: { room: TradingRoom }) {
  const positive = room.pnl >= 0;

  return (
    <article
      className={`group relative cursor-pointer overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:scale-[1.03] ${
        positive
          ? "border-border hover:border-neon-green/30 hover:shadow-[0_0_20px_hsl(142_72%_50%/0.15)]"
          : "border-border hover:border-neon-red/30 hover:shadow-[0_0_20px_hsl(0_72%_51%/0.15)]"
      }`}
    >
      {/* LIVE badge */}
      <div className="absolute left-2 top-2 z-10 flex items-center gap-1.5 rounded-full bg-neon-red/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        <span className="relative flex h-2 w-2">
          <span className="animate-live-ring absolute inline-flex h-full w-full rounded-full bg-white" />
          <span className="animate-live-pulse relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        LIVE
      </div>

      {/* Hot badge */}
      {room.isHot && (
        <div className="absolute left-2 top-8 z-10 flex items-center gap-1 rounded-full bg-gold/20 px-1.5 py-0.5 text-[9px] font-bold text-gold backdrop-blur-sm">
          <Flame className="h-2.5 w-2.5" />
          HOT
        </div>
      )}

      {/* Asset tag */}
      <div className="absolute right-2 top-2 z-10 rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground backdrop-blur-sm">
        {room.asset}
      </div>

      {/* Chart — taller */}
      <div className="relative h-[80px] bg-surface md:h-[100px]">
        <ChartThumbnail data={room.chartData} positive={positive} />
        {/* Bottom gradient for readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Info */}
      <div className="flex items-center gap-2.5 p-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
          {room.traderInitials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{room.traderName}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {room.viewerCount.toLocaleString()}
            </span>
            <span>{room.duration}</span>
            <span className={positive ? "font-semibold text-neon-green" : "font-semibold text-neon-red"}>
              {positive ? "+" : ""}{room.pnl}%
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
