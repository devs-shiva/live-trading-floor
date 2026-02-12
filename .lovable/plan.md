

# Enhance WEETOO to Feel Like a True Broadcasting Platform

Taking inspiration from the reference images (GamXe gaming platform, CineStream), the current page needs more structure and visual richness to truly feel like a broadcasting/streaming platform for traders.

## What Changes

### 1. Navigation Bar Upgrade
The current Market Pulse Bar combines the logo with market data. We'll add a proper navigation section with platform links (Live, Top Traders, Categories, Leaderboard) and a search bar, similar to how Twitch/the reference images have structured navigation. The market data ticker stays but moves into a slim secondary bar below the nav.

### 2. Featured Trader Spotlight
Inspired by the large hero card in the GamXe reference — add a featured/spotlight section showing the top-performing live trader in a larger, more prominent card. This replaces the current "WE ARE TRADERS" headline section with something more dynamic:
- Large featured card showing the best-performing trader right now
- Their chart displayed bigger with more detail
- Viewer count, P&L, and live duration prominently shown
- The "WE ARE TRADERS" tagline becomes a smaller overlay/subtitle
- CTA buttons remain but are integrated into this section

### 3. Category Filter Tabs
Add filter tabs above the trading room grid (like "Top Trending" section in the references):
- "Hot Now" / "Top Gainers" / "Most Watched" / "New Streams"
- Pill-shaped tab selectors with the gold accent color
- Navigation arrows for horizontal scrolling on mobile

### 4. Left Sidebar with Category Icons (Desktop)
Inspired by the GamXe left sidebar with icon buttons:
- Vertical icon sidebar on desktop showing trading categories (Crypto, Forex, Stocks, Futures, Options)
- Each icon is a small circular button
- Collapses/hides on tablet and mobile
- Adds the "platform navigation" feel

### 5. Right Sidebar - Top Traders (Desktop)
Inspired by the GamXe right sidebar with avatar circles:
- Show top 5-6 live traders as circular avatars on the right edge
- Each has a green "online" dot
- Clicking scrolls to their card in the grid
- Hides on smaller screens

### 6. Richer Trading Room Cards
- Make the chart thumbnails taller (more visual impact)
- Add a subtle gradient overlay at the bottom of charts for text readability
- Show a "rank" or "hot" badge on top performers
- Add a thin colored border glow on hover (green for profit, red for loss)

### 7. "Top Trending" Section Header
Add a styled section header above the grid with:
- Bold "Top Trending" or "Live Now" heading
- Filter tabs inline
- Carousel arrows for potential horizontal scroll view

---

## Technical Details

### New Components
- `NavBar.tsx` - Platform navigation with links, search, and user area
- `FeaturedTrader.tsx` - Large spotlight card for the top performer
- `CategorySidebar.tsx` - Left icon sidebar (desktop only)
- `TopTradersSidebar.tsx` - Right avatar sidebar (desktop only)
- `FilterTabs.tsx` - Category filter tabs for the grid

### Modified Components
- `MarketPulseBar.tsx` - Slim down to just a data ticker, move nav elements out
- `HeroHeadline.tsx` - Replace with FeaturedTrader spotlight
- `TradingRoomCard.tsx` - Taller charts, gradient overlay, glow borders
- `TradingRoomGrid.tsx` - Add filter tabs, section header, adjust layout for sidebars
- `Index.tsx` - New layout with sidebars flanking the main content
- `mockData.ts` - Add categories, rank data, and a featured trader flag

### Layout Structure (Desktop)
```text
+--------------------------------------------------+
|  NavBar (Logo | Links | Search | Login)          |
+--------------------------------------------------+
|  Market Pulse Ticker (slim data strip)           |
+--+-------------------------------------------+--+
|  |  Featured Trader Spotlight (wide card)    |  |
|S |  with CTA buttons overlay                 |T |
|I |-------------------------------------------|O |
|D |  "Live Now"  [Hot] [Top Gainers] [New]    |P |
|E |-------------------------------------------|  |
|B |  Trading Room Grid (4 cols)               |T |
|A |  [ ] [ ] [ ] [ ]                          |R |
|R |  [ ] [ ] [ ] [ ]                          |A |
|  |                                           |D |
+--+-------------------------------------------+--+
```

### CSS/Animation Additions
- Card border glow animation on hover (green/red based on P&L)
- Featured card entrance animation
- Tab underline slide animation
- Sidebar icon hover pulse

