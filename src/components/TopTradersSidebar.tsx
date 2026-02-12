import { mockTradingRooms } from "@/data/mockData";

export default function TopTradersSidebar() {
  const topTraders = [...mockTradingRooms]
    .sort((a, b) => b.viewerCount - a.viewerCount)
    .slice(0, 6);

  return (
    <aside className="hidden w-16 shrink-0 flex-col items-center gap-3 border-l border-border bg-background pt-3 xl:flex">
      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Top</span>
      {topTraders.map((trader) => (
        <button
          key={trader.id}
          title={`${trader.traderName} — ${trader.pnl >= 0 ? "+" : ""}${trader.pnl}%`}
          className="group relative"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground ring-2 ring-transparent transition-all group-hover:ring-gold/50">
            {trader.traderInitials}
          </div>
          {/* Online dot */}
          <span className="absolute -bottom-0.5 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-neon-green" />
        </button>
      ))}
    </aside>
  );
}
