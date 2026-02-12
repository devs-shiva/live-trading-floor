import { Bitcoin, ArrowLeftRight, TrendingUp, BarChart3, Target, Zap } from "lucide-react";
import { categories } from "@/data/mockData";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Bitcoin,
  ArrowLeftRight,
  TrendingUp,
  BarChart3,
  Target,
};

interface CategorySidebarProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function CategorySidebar({ activeCategory, onCategoryChange }: CategorySidebarProps) {
  return (
    <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-border bg-background pt-3 lg:flex">
      {categories.map((cat) => {
        const Icon = iconMap[cat.icon];
        const active = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            title={cat.label}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
              active
                ? "bg-gold/15 text-gold shadow-[0_0_12px_hsl(42_92%_55%/0.2)]"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Icon className="h-4.5 w-4.5" />
          </button>
        );
      })}
    </aside>
  );
}
