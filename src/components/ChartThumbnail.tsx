interface ChartThumbnailProps {
  data: number[];
  positive: boolean;
}

export default function ChartThumbnail({ data, positive }: ChartThumbnailProps) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const h = 60;
  const w = 200;
  const step = w / (data.length - 1);

  const points = data.map((v, i) => `${i * step},${h - ((v - min) / range) * h}`).join(" ");
  const areaPoints = `0,${h} ${points} ${w},${h}`;
  const color = positive ? "hsl(142, 72%, 50%)" : "hsl(0, 72%, 51%)";
  const colorFade = positive ? "hsl(142, 72%, 50%)" : "hsl(0, 72%, 51%)";

  return (
    <div className="relative h-[60px] w-full overflow-hidden">
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id={`grad-${positive}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colorFade} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colorFade} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill={`url(#grad-${positive})`} />
        <polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* Shimmer overlay */}
      <div className="animate-shimmer pointer-events-none absolute inset-0" />
    </div>
  );
}
