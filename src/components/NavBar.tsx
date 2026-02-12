import { Search, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Live", href: "#", active: true },
  { label: "Top Traders", href: "#" },
  { label: "Categories", href: "#" },
  { label: "Leaderboard", href: "#" },
];

export default function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1600px] items-center gap-4 px-3 md:px-4">
        {/* Logo */}
        <span className="shrink-0 text-xl font-black tracking-wider text-gold">WEETOO</span>

        {/* Nav links — desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                link.active
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              {link.label}
              {link.label === "Live" && (
                <span className="ml-1.5 inline-flex h-2 w-2 rounded-full bg-neon-red animate-live-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* Search */}
        <div className="ml-auto flex items-center gap-2">
          <div className={`relative transition-all duration-200 ${searchOpen ? "w-48 md:w-64" : "w-0 md:w-48"}`}>
            <input
              type="text"
              placeholder="Search traders..."
              className={`h-8 w-full rounded-md border border-border bg-secondary/50 px-3 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none ${
                searchOpen ? "opacity-100" : "opacity-0 md:opacity-100"
              }`}
            />
            <Search className="absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-4 w-4" />
          </button>

          <button className="hidden h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground md:flex">
            <Bell className="h-4 w-4" />
          </button>

          <button className="flex h-8 items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 text-sm font-medium text-foreground hover:bg-secondary">
            <User className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Sign In</span>
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
