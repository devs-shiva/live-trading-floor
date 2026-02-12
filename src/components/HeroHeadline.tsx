export default function HeroHeadline() {
  return (
    <section className="flex flex-col items-center gap-5 px-4 py-8 text-center md:py-10">
      <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-r from-foreground via-gold to-foreground bg-clip-text text-transparent">
          WE ARE TRADERS.
        </span>
      </h1>
      <div className="flex gap-3">
        <button className="rounded-lg border border-neon-green bg-neon-green/10 px-5 py-2.5 text-sm font-bold text-neon-green transition-all hover:bg-neon-green/20 hover:shadow-[0_0_20px_hsl(142_72%_50%/0.3)] md:px-7 md:py-3 md:text-base">
          Enter Live Floor
        </button>
        <button className="rounded-lg border border-gold bg-gold/5 px-5 py-2.5 text-sm font-bold text-gold transition-all hover:bg-gold/15 hover:shadow-[0_0_20px_hsl(42_92%_55%/0.25)] md:px-7 md:py-3 md:text-base">
          Start Broadcasting
        </button>
      </div>
    </section>
  );
}
