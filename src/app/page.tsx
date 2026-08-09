import Link from "next/link";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { GROUPS } from "@/components/exports";
import { HomeHero } from "./home-client";

const INSTALL = `pnpm add @objectifthunes/royal-games-ui`;

const USAGE = `import "@objectifthunes/royal-games-ui/tokens.css";
import { SkinProvider, Button, Ribbon } from "@objectifthunes/royal-games-ui";

export function App() {
  return (
    <SkinProvider defaultSkin="enamel">
      <Ribbon size="large">Victory!</Ribbon>
      <Button tone="positive" size="hero">CONTINUE</Button>
    </SkinProvider>
  );
}`;

export default function Home() {
  return (
    <article>
      <div className="hero">
        <span className="eyebrow">@objectifthunes/royal-games-ui</span>
        <h1>
          One royal grammar.
          <br />
          <em>Two skins.</em> Every game.
        </h1>
        <p>
          The Midnight Court UI kit for Capacitor mobile games: docks that weld
          to the edges, ribbons with real wings, controlled tab navigation, and
          semantic controls that retain native browser behavior. Graphical-first
          React components. Your application keeps the state and logic.
        </p>
      </div>
      <Preview center>
        <HomeHero />
      </Preview>
      <div style={{ display: "flex", gap: 12, margin: "18px 0 6px" }}>
        <Link
          href="/screens/"
          className="home-card"
          style={{ flex: 1, textAlign: "center" }}
        >
          <b>See the six full screens →</b>
          <p>
            Lobby, map, shop, victory, leaderboard, and settings compositions,
            live and animated from the published package.
          </p>
        </Link>
      </div>
      <h2 className="section">Install</h2>
      <Source code={INSTALL} lang="bash" />
      <h2 className="section">Use</h2>
      <Source code={USAGE} />
      <h2 className="section">Explore</h2>
      <div className="home-grid">
        {GROUPS.map((g) => (
          <Link key={g.href} href={g.href} className="home-card">
            <b>{g.title}</b>
            <p>
              {g.lede} {g.pages.length > 1 ? `${g.pages.length} pages.` : ""}
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}
