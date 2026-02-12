import MarketPulseBar from "@/components/MarketPulseBar";
import HeroHeadline from "@/components/HeroHeadline";
import TradingRoomGrid from "@/components/TradingRoomGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketPulseBar />
      <main>
        <HeroHeadline />
        <TradingRoomGrid />
      </main>
    </div>
  );
};

export default Index;
