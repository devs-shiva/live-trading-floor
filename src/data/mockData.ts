export interface TradingRoom {
  id: string;
  traderName: string;
  traderInitials: string;
  asset: string;
  viewerCount: number;
  duration: string;
  pnl: number;
  chartData: number[];
  category: string;
  isHot?: boolean;
  isFeatured?: boolean;
  rank?: number;
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
    category: "crypto",
    isHot: true,
    rank: 2,
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
    category: "crypto",
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
    category: "crypto",
    isHot: true,
    rank: 3,
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
    category: "crypto",
  },
  {
    id: "5",
    traderName: "LongOnly_Pro",
    traderInitials: "LP",
    asset: "BTC/USDT",
    viewerCount: 3890,
    duration: "6h 12m",
    pnl: 45.2,
    chartData: [30, 35, 40, 38, 45, 50, 55, 60, 58, 65, 70, 75, 72, 80, 85, 82, 88, 90, 92, 95],
    category: "crypto",
    isHot: true,
    isFeatured: true,
    rank: 1,
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
    category: "crypto",
  },
  {
    id: "7",
    traderName: "AlgoTrader",
    traderInitials: "AT",
    asset: "EUR/USD",
    viewerCount: 756,
    duration: "3h 20m",
    pnl: 15.8,
    chartData: [45, 48, 42, 50, 55, 52, 58, 60, 56, 62, 65, 60, 68, 72, 70, 75, 73, 78, 80, 82],
    category: "forex",
    rank: 4,
  },
  {
    id: "8",
    traderName: "FuturesKing",
    traderInitials: "FK",
    asset: "ES/SPX",
    viewerCount: 1567,
    duration: "2h 50m",
    pnl: 22.3,
    chartData: [35, 38, 40, 45, 42, 48, 52, 50, 55, 58, 60, 65, 62, 68, 72, 70, 75, 78, 80, 85],
    category: "futures",
    isHot: true,
    rank: 5,
  },
  {
    id: "9",
    traderName: "ForexSniper",
    traderInitials: "FS",
    asset: "GBP/JPY",
    viewerCount: 421,
    duration: "1h 35m",
    pnl: 8.3,
    chartData: [50, 48, 52, 55, 53, 58, 62, 60, 65, 63, 68, 70, 67, 72, 75, 73, 78, 76, 80, 82],
    category: "forex",
  },
  {
    id: "10",
    traderName: "OptionsPro",
    traderInitials: "OP",
    asset: "AAPL 250C",
    viewerCount: 689,
    duration: "3h 10m",
    pnl: -2.1,
    chartData: [65, 63, 60, 62, 58, 55, 57, 53, 50, 52, 48, 50, 47, 45, 48, 46, 44, 47, 45, 43],
    category: "options",
  },
  {
    id: "11",
    traderName: "StockWhiz",
    traderInitials: "SW",
    asset: "TSLA",
    viewerCount: 934,
    duration: "5h 45m",
    pnl: 18.6,
    chartData: [40, 43, 45, 48, 46, 50, 54, 52, 56, 60, 58, 63, 66, 64, 70, 72, 68, 74, 76, 80],
    category: "stocks",
    rank: 6,
  },
  {
    id: "12",
    traderName: "NightOwl",
    traderInitials: "NO",
    asset: "NQ/NASDAQ",
    viewerCount: 1102,
    duration: "7h 20m",
    pnl: 33.5,
    chartData: [25, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75, 80, 78, 85, 90],
    category: "futures",
    isHot: true,
  },
];

export const categories = [
  { id: "all", label: "All", icon: "Zap" },
  { id: "crypto", label: "Crypto", icon: "Bitcoin" },
  { id: "forex", label: "Forex", icon: "ArrowLeftRight" },
  { id: "stocks", label: "Stocks", icon: "TrendingUp" },
  { id: "futures", label: "Futures", icon: "BarChart3" },
  { id: "options", label: "Options", icon: "Target" },
] as const;

export const marketData = {
  totalPayback: 2847563,
  liquidations24h: 156200000,
  longRatio: 62,
  fearGreedIndex: 71,
};
