import { useState, useMemo } from "react";
import { mockTradingRooms } from "@/data/mockData";
import TradingRoomCard from "./TradingRoomCard";
import FilterTabs from "./FilterTabs";

interface TradingRoomGridProps {
  activeCategory: string;
}

export default function TradingRoomGrid({ activeCategory }: TradingRoomGridProps) {
  const [activeFilter, setActiveFilter] = useState("hot");

  const filteredRooms = useMemo(() => {
    let rooms = activeCategory === "all"
      ? mockTradingRooms.filter((r) => !r.isFeatured)
      : mockTradingRooms.filter((r) => r.category === activeCategory && !r.isFeatured);

    switch (activeFilter) {
      case "gainers":
        return [...rooms].sort((a, b) => b.pnl - a.pnl);
      case "watched":
        return [...rooms].sort((a, b) => b.viewerCount - a.viewerCount);
      case "new":
        return [...rooms].reverse();
      case "hot":
      default:
        return [...rooms].sort((a, b) => (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0) || b.viewerCount - a.viewerCount);
    }
  }, [activeCategory, activeFilter]);

  return (
    <section className="flex-1 px-3 pb-8 md:px-4">
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {filteredRooms.map((room) => (
          <TradingRoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
