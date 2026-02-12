import { useState } from "react";
import NavBar from "@/components/NavBar";
import MarketPulseBar from "@/components/MarketPulseBar";
import FeaturedTrader from "@/components/FeaturedTrader";
import CategorySidebar from "@/components/CategorySidebar";
import TopTradersSidebar from "@/components/TopTradersSidebar";
import TradingRoomGrid from "@/components/TradingRoomGrid";
import { categories } from "@/data/mockData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <MarketPulseBar />

      {/* Mobile category tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto px-3 py-2 lg:hidden">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-gold/15 text-gold"
                : "bg-secondary/60 text-muted-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex">
        <CategorySidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main className="min-w-0 flex-1">
          <FeaturedTrader />
          <TradingRoomGrid activeCategory={activeCategory} />
        </main>
        <TopTradersSidebar />
      </div>
    </div>
  );
};

export default Index;
