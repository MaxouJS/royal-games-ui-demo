import Link from "next/link";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { GROUPS } from "@/components/exports";
import { HomeHero } from "./home-client";

const INSTALL = `pnpm add @objectifthunes/royal-games-ui`;

const USAGE = `import "@objectifthunes/royal-games-ui/styles.css";
import { SkinProvider, Button, Ribbon } from "@objectifthunes/royal-games-ui";

export function App() {
  return (
    <SkinProvider defaultSkin="enamel">
      <Ribbon size="lg">Victory!</Ribbon>
      <Button tone="positive" size="hero" sheen>CONTINUE</Button>
    </SkinProvider>
  );
}`;

export default function Home() {
  return (
    <article>
      <div className="hero">
        <span className="eyebrow">@objectifthunes/royal-games-ui</span>
        <h1>
          One royal grammar.<br />
          <em>Two skins.</em> Every game.
        </h1>
        <p>
          The Midnight Court UI kit for Capacitor mobile games: docks that weld to the edges, ribbons
          with real wings, a tab bar whose active tab is a full raised button, and boards whose pieces
          are miniature enamel. Graphical-first React components — your game keeps the logic.
        </p>
      </div>
      <Preview center><HomeHero /></Preview>
      <h2 className="section">Install</h2>
      <Source code={INSTALL} lang="bash" />
      <h2 className="section">Use</h2>
      <Source code={USAGE} />
      <h2 className="section">Explore</h2>
      <div className="home-grid">
        {GROUPS.flatMap((g) =>
          g.pages.map((p) => (
            <Link key={p.href} href={p.href} className="home-card">
              <b>{p.name}</b>
              <p>{p.lede}</p>
            </Link>
          )),
        )}
      </div>
    </article>
  );
}
