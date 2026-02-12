import { mockTradingRooms } from "@/data/mockData";
import TradingRoomCard from "./TradingRoomCard";

export default function TradingRoomGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-3 pb-12 md:px-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {mockTradingRooms.map(room => (
          <TradingRoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
