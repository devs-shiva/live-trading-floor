import { Flame, TrendingUp, Eye, Sparkles } from "lucide-react";

const filters = [
  { id: "hot", label: "Hot Now", icon: Flame },
  { id: "gainers", label: "Top Gainers", icon: TrendingUp },
  { id: "watched", label: "Most Watched", icon: Eye },
  { id: "new", label: "New Streams", icon: Sparkles },
];

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-1">
      <h2 className="shrink-0 text-lg font-bold text-foreground md:text-xl">Live Now</h2>
      <div className="flex items-center gap-1.5">
        {filters.map((f) => {
          const active = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => onFilterChange(f.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                active
                  ? "bg-gold/15 text-gold shadow-[0_0_10px_hsl(42_92%_55%/0.15)]"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <f.icon className="h-3 w-3" />
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
