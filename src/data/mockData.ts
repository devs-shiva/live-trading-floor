export interface TradingRoom {
  id: string;
  traderName: string;
  traderInitials: string;
  asset: string;
  viewerCount: number;
  duration: string;
  pnl: number;
  chartData: number[];
}

export const mockTradingRooms: TradingRoom[] = [
  {
    id: "1",
    traderName: "CryptoKing",
    traderInitials: "CK",
    asset: "BTC/USDT",
    viewerCount: 1243,
    duration: "2h 15m",
    pnl: 12.4,
    chartData: [40, 42, 38, 45, 50, 48, 55, 60, 58, 62, 65, 63, 68, 72, 70, 75, 78, 76, 80, 82],
  },
  {
    id: "2",
    traderName: "ETH_Whale",
    traderInitials: "EW",
    asset: "ETH/USDT",
    viewerCount: 876,
    duration: "1h 42m",
    pnl: -3.2,
    chartData: [60, 58, 55, 52, 54, 50, 48, 45, 47, 43, 40, 42, 38, 35, 37, 34, 32, 35, 33, 30],
  },
  {
    id: "3",
    traderName: "ScalpMaster",
    traderInitials: "SM",
    asset: "SOL/USDT",
    viewerCount: 2105,
    duration: "4h 30m",
    pnl: 28.7,
    chartData: [20, 25, 22, 30, 35, 32, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75, 72, 80],
  },
  {
    id: "4",
    traderName: "DeFi_Degen",
    traderInitials: "DD",
    asset: "DOGE/USDT",
    viewerCount: 543,
    duration: "45m",
    pnl: 5.1,
    chartData: [50, 52, 48, 55, 53, 58, 60, 57, 62, 65, 63, 60, 58, 62, 65, 68, 66, 70, 72, 74],
  },
  {
    id: "5",
    traderName: "LongOnly_Pro",
    traderInitials: "LP",
    asset: "BTC/USDT",
    viewerCount: 1890,
    duration: "6h 12m",
    pnl: 45.2,
    chartData: [30, 35, 40, 38, 45, 50, 55, 60, 58, 65, 70, 75, 72, 80, 85, 82, 88, 90, 92, 95],
  },
  {
    id: "6",
    traderName: "ShortSqueeze",
    traderInitials: "SS",
    asset: "XRP/USDT",
    viewerCount: 312,
    duration: "1h 05m",
    pnl: -8.9,
    chartData: [70, 68, 65, 62, 64, 60, 58, 55, 52, 50, 48, 45, 47, 43, 40, 38, 35, 37, 33, 30],
  },
  {
    id: "7",
    traderName: "AlgoTrader",
    traderInitials: "AT",
    asset: "AVAX/USDT",
    viewerCount: 756,
    duration: "3h 20m",
    pnl: 15.8,
    chartData: [45, 48, 42, 50, 55, 52, 58, 60, 56, 62, 65, 60, 68, 72, 70, 75, 73, 78, 80, 82],
  },
  {
    id: "8",
    traderName: "FuturesKing",
    traderInitials: "FK",
    asset: "ETH/USDT",
    viewerCount: 1567,
    duration: "2h 50m",
    pnl: 22.3,
    chartData: [35, 38, 40, 45, 42, 48, 52, 50, 55, 58, 60, 65, 62, 68, 72, 70, 75, 78, 80, 85],
  },
];

export const marketData = {
  totalPayback: 2847563,
  liquidations24h: 156200000,
  longRatio: 62,
  fearGreedIndex: 71,
};
