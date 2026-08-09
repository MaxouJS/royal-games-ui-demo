"use client";

/* Full-screen compositions mirroring the validated design reference.
   Everything below is package components, no local styling. */

import {
  Avatar, Board, BoardCell, Body, Booster, BottomStack, Button, Chest, Chrome, ChromeRow, Coin,
  CoinPile, ComboBadge, Counter, Counters, Dim, Dock, Field, FloatChrome, GameTile, Gem, GroupKicker,
  Heart, Key, KeyRow, Keys, LetterRow, LetterTile, LevelBadge, MapPin, MapScene, MergeItem, Meter,
  Moves, ObjectiveChip, PageDots, Panel, Pips, Podium, PodiumColumn, ProfileChip, RankRow, ResultAnchor,
  Ribbon, Screen, ScreenName, SettingsRow, ShopRow, Slider, SpeechBubble, Star, StarBurst, Strike,
  Tab, TabBar, TimerPill, Toast, Toggle, TopRibbon, CornerRibbon, Version, Well, Wordmark, YouBadge,
  BundleCell, BundleCells, Pack, PackRow, Bolt, u,
  type TileColor,
} from "@objectifthunes/royal-games-ui";
import { useState, type ReactNode } from "react";

function MainTabs({ active }: { active: number }) {
  const [current, setCurrent] = useState(active);
  const tabs = [
    { icon: "🛒", label: "Shop" },
    { icon: "♛", label: "Ranks" },
    { icon: "⌂", label: "Home" },
    { icon: "⚑", label: "Map" },
    { icon: "⚙", label: "More", dot: true },
  ];
  return (
    <TabBar>
      {tabs.map((t, i) => (
        <Tab key={t.label} icon={t.icon} label={t.label} dot={t.dot} active={i === current} onClick={() => setCurrent(i)} />
      ))}
    </TabBar>
  );
}

const NIGHT = { background: "linear-gradient(180deg,var(--rg-color-primary-dark),var(--rg-color-night) 55%)" };

export function LobbyScreen() {
  return (
    <Screen style={NIGHT}>
      <div style={{ height: u(30) }} />
      <Chrome>
        <ChromeRow tone="velvet">
          <ProfileChip avatar={<Avatar size="sm">♛</Avatar>} name="Max" caption="LEVEL 12" />
          <Counters>
            <Counter icon={<Coin />} onAdd={() => {}}>2,450</Counter>
            <Counter icon={<Gem />} onAdd={() => {}}>12</Counter>
          </Counters>
        </ChromeRow>
        <ChromeRow tone="stone">
          <ScreenName>Home</ScreenName>
          <Button tone="primary" size="sm" icon>⚙</Button>
        </ChromeRow>
      </Chrome>
      <Body style={{ paddingBottom: u(180) }}>
        <Wordmark strapline="His Majesty awaits">ROYAL GAMES</Wordmark>
        <Panel tone="paper">
          <GroupKicker>Chapter 3</GroupKicker>
          <div style={{ fontWeight: 800, fontSize: u(22), lineHeight: "1.1", fontFamily: "var(--rg-font-display)", margin: `${u(4)} 0 ${u(10)}` }}>The East Gate</div>
          <div style={{ display: "flex", gap: u(8), marginBottom: u(12) }}>
            <ObjectiveChip icon={<span style={{ color: "#ffe9a6" }}>⚑</span>}>12/20</ObjectiveChip>
            <ObjectiveChip icon={<Star size="sm" />}>31/60</ObjectiveChip>
            <TimerPill>⏳ <b>2d 4h</b></TimerPill>
          </div>
          <Button tone="accent" size="hero" block sheen>PLAY</Button>
        </Panel>
        <Panel tone="primary" faceStyle={{ display: "flex", alignItems: "center", gap: u(10) }}>
          <span style={{ fontSize: u(26), lineHeight: 1 }}>👑</span>
          <div style={{ flex: 1 }}>
            <b style={{ fontWeight: 800, fontSize: u(14), lineHeight: "1.2", fontFamily: "var(--rg-font-display)" }}>Royal Pass</b>
            <div style={{ fontWeight: 700, fontSize: u(11), lineHeight: "1.2", fontFamily: "var(--rg-font-body)", color: "var(--rg-color-ink-soft)" }}>12 rewards waiting</div>
          </div>
          <PageDots count={3} index={0} />
          <Button tone="gold" size="sm">GO</Button>
        </Panel>
      </Body>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <div style={{ display: "flex", alignItems: "center", gap: u(10) }}>
            <span style={{ fontSize: u(24), lineHeight: 1 }}>🎁</span>
            <b style={{ flex: 1, fontWeight: 800, fontSize: u(13), lineHeight: "1.2", fontFamily: "var(--rg-font-display)" }}>Daily Gift ready</b>
            <Button tone="positive" size="sm">CLAIM</Button>
            <TimerPill>⚑ <b>2d 4h</b></TimerPill>
          </div>
        </Dock>
        <MainTabs active={2} />
      </BottomStack>
    </Screen>
  );
}

const PINS: Array<{ left: string; top: string; label: string; state?: "current" | "locked"; stars?: number }> = [
  { left: u(70), top: u(590), label: "7", stars: 2 },
  { left: u(277), top: u(488), label: "8", stars: 3 },
  { left: u(150), top: u(388), label: "9", state: "current" },
  { left: u(120), top: u(272), label: "10", state: "locked" },
  { left: u(260), top: u(170), label: "11", state: "locked" },
];

export function MapScreen() {
  return (
    <Screen>
      <MapScene style={{ background: "linear-gradient(180deg,var(--rg-color-primary-dark) 0%,var(--rg-color-primary) 42%,var(--rg-scene-grass) 42.2%,var(--rg-scene-grass-dark) 70%,var(--rg-scene-grass-deep) 100%)" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 352 740" preserveAspectRatio="none">
          <path d="M 70 590 C 220 550 300 510 260 445 C 220 380 80 400 90 310 C 100 230 250 240 260 170" fill="none" stroke="#c9a878" strokeWidth={26} strokeLinecap="round" opacity={0.9} />
          <path d="M 70 590 C 220 550 300 510 260 445 C 220 380 80 400 90 310 C 100 230 250 240 260 170" fill="none" stroke="#dcbd8d" strokeWidth={4} strokeDasharray="2 16" strokeLinecap="round" />
        </svg>
        {PINS.map((p, i) => (
          <MapPin key={p.label} index={i} state={p.state ?? "done"} stars={p.stars} style={{ left: p.left, top: p.top }}>
            {p.label}
          </MapPin>
        ))}
      </MapScene>
      <div style={{ height: u(30) }} />
      <FloatChrome floating style={{ top: u(40) }}>
        <Button tone="primary" size="sm" icon>‹</Button>
        <Ribbon size="sm">World 2 · Emberfall</Ribbon>
        <Counter icon={<Heart />}>4</Counter>
      </FloatChrome>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <div style={{ display: "flex", alignItems: "center", gap: u(12), marginBottom: u(10) }}>
            <LevelBadge level={9} />
            <div style={{ flex: 1 }}>
              <b style={{ fontWeight: 800, fontSize: u(15), lineHeight: "1.2", fontFamily: "var(--rg-font-display)" }}>Castle Gates</b>
              <div style={{ fontWeight: 700, fontSize: u(11), lineHeight: "1.3", fontFamily: "var(--rg-font-body)", color: "var(--rg-color-ink-soft)" }}>Beat it with 3 ★ to earn a chest</div>
            </div>
            <Button tone="accent" size="sm">GO</Button>
          </div>
          <Meter tone="gold" value={0.6} label="CHAPTER 3" valueLabel="12 / 20" style={{ color: "var(--rg-color-ivory)" }} />
        </Dock>
        <MainTabs active={3} />
      </BottomStack>
    </Screen>
  );
}

export function ShopScreen() {
  return (
    <Screen style={NIGHT}>
      <div style={{ height: u(30) }} />
      <Dock edge="top" tone="stone">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(8), paddingTop: u(2) }}>
          <Ribbon size="sm">Royal Shop</Ribbon>
          <Counters>
            <Counter icon={<Coin />}>2,450</Counter>
            <Counter icon={<Gem />}>12</Counter>
          </Counters>
        </div>
      </Dock>
      <Body style={{ paddingBottom: u(185) }}>
        <div style={{ position: "relative", marginTop: u(10) }}>
          <TopRibbon><Ribbon size="sm">Best value</Ribbon></TopRibbon>
          <CornerRibbon><Ribbon size="sm">−50%</Ribbon></CornerRibbon>
          <Panel tone="paper">
            <div style={{ display: "flex", alignItems: "center", gap: u(10), justifyContent: "center", margin: `${u(6)} 0 ${u(2)}` }}>
              <span style={{ fontSize: u(40), lineHeight: 1 }}>👑</span>
              <div>
                <GroupKicker>Royal Bundle</GroupKicker>
                <div style={{ fontWeight: 800, fontSize: u(22), lineHeight: "1.1", fontFamily: "var(--rg-font-display)" }}>King&apos;s Coffer</div>
              </div>
            </div>
            <BundleCells>
              <BundleCell><Coin size="lg" />12,000</BundleCell>
              <BundleCell><Gem size="lg" />80</BundleCell>
              <BundleCell><span style={{ fontSize: u(26), lineHeight: 1 }}>✦</span>5 boosts</BundleCell>
            </BundleCells>
            <Button tone="gold" block sheen><Strike>€19.99</Strike>€9.99 · BUY</Button>
          </Panel>
        </div>
        <Panel tone="primary">
          <GroupKicker style={{ color: "var(--rg-color-ink-soft)" }}>Gems</GroupKicker>
          <PackRow>
            <Pack art={<><Gem size="lg" />80</>} action={<Button tone="gold" size="sm" block>€1.99</Button>} />
            <Pack art={<><Gem size="lg" />500</>} action={<Button tone="gold" size="sm" block>€8.99</Button>} />
            <Pack art={<><Gem size="lg" />1200</>} action={<Button tone="gold" size="sm" block>€17.99</Button>} />
          </PackRow>
        </Panel>
      </Body>
      <BottomStack>
        <Dock edge="bottom" tone="velvet" faceStyle={{ paddingTop: u(14), paddingBottom: u(12) }}>
          <ShopRow
            art={<span style={{ fontSize: u(28), lineHeight: u(40), display: "block", textAlign: "center" }}>🎬</span>}
            title="Free coins"
            caption={<span style={{ color: "rgb(255 244 220 / 70%)" }}>Watch an ad · 150 coins</span>}
            action={<Button tone="positive" size="sm">FREE</Button>}
          />
        </Dock>
        <MainTabs active={0} />
      </BottomStack>
    </Screen>
  );
}

export function VictoryScreen() {
  return (
    <Screen style={{ background: "linear-gradient(180deg,var(--rg-scene-grass),var(--rg-scene-grass-deep))" }}>
      <div style={{ height: u(30) }} />
      <Dim />
      <ResultAnchor>
        <div style={{ textAlign: "center", marginBottom: u(-14), position: "relative", zIndex: 2 }}>
          <Ribbon size="lg">Victory!</Ribbon>
        </div>
        <Panel tone="paper" faceStyle={{ paddingTop: u(22) }}>
          <StarBurst earned={3} />
          <Well style={{ display: "flex", justifyContent: "space-between", color: "var(--rg-color-ivory)", fontWeight: 800, fontSize: u(16), lineHeight: "1", fontFamily: "var(--rg-font-display)" }}>
            <span>SCORE</span>
            <span>8,420</span>
          </Well>
          <div style={{ display: "flex", justifyContent: "center", gap: u(16), margin: `${u(10)} 0`, fontWeight: 800, fontSize: u(15), lineHeight: "1", fontFamily: "var(--rg-font-display)" }}>
            <span style={{ display: "inline-flex", gap: u(6), alignItems: "center" }}><Coin />+120</span>
            <span style={{ display: "inline-flex", gap: u(6), alignItems: "center" }}><Gem />+2</span>
            <span style={{ display: "inline-flex", gap: u(6), alignItems: "center" }}><span style={{ color: "var(--rg-color-gem)" }}>✦</span>+1 boost</span>
          </div>
          <Meter value={0.68} label="LEVEL 12" valueLabel="68%" style={{ color: "#4a3105" }} />
        </Panel>
      </ResultAnchor>
      <BottomStack>
        <Dock edge="bottom" tone="velvet">
          <Button tone="positive" size="hero" block sheen>CONTINUE</Button>
          <div style={{ display: "flex", gap: u(10), marginTop: u(10) }}>
            <Button tone="primary" size="sm" block style={{ flex: 1 }}>↻ REPLAY</Button>
            <Button tone="primary" size="sm" block style={{ flex: 1 }}>SHARE</Button>
          </div>
        </Dock>
      </BottomStack>
    </Screen>
  );
}

export function RanksScreen() {
  return (
    <Screen style={NIGHT}>
      <div style={{ height: u(30) }} />
      <Dock edge="top" tone="velvet">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(8), marginBottom: u(8) }}>
          <Ribbon size="sm">Season Ranks</Ribbon>
          <TimerPill>⏳ Ends in <b>2d 4h</b></TimerPill>
        </div>
        <Podium>
          <PodiumColumn place={2} avatar={<Avatar>🦊</Avatar>} name={<span style={{ color: "rgb(255 244 220 / 80%)" }}>Nora</span>} />
          <PodiumColumn place={1} avatar={<Avatar size="lg">🐻</Avatar>} name={<span style={{ color: "rgb(255 244 220 / 80%)" }}>Elio</span>} />
          <PodiumColumn place={3} avatar={<Avatar>🐸</Avatar>} name={<span style={{ color: "rgb(255 244 220 / 80%)" }}>Pip</span>} />
        </Podium>
      </Dock>
      <Body>
        <Panel tone="primary" faceStyle={{ display: "flex", flexDirection: "column", gap: u(8) }}>
          <RankRow pos={4} avatar={<Avatar size="sm">🦉</Avatar>} name="Wren" score={<><Coin size="sm" />9,180</>} />
          <RankRow pos={5} avatar={<Avatar size="sm">🐰</Avatar>} name="Juno" score={<><Coin size="sm" />8,875</>} />
          <RankRow pos={6} me avatar={<Avatar size="sm">♛</Avatar>} name={<>Max <YouBadge /></>} score={<><Coin size="sm" />8,420</>} />
          <RankRow pos={7} avatar={<Avatar size="sm">🐱</Avatar>} name="Sable" score={<><Coin size="sm" />7,940</>} />
        </Panel>
      </Body>
      <BottomStack>
        <MainTabs active={1} />
      </BottomStack>
    </Screen>
  );
}

export function SettingsScreen() {
  const [music, setMusic] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [volume, setVolume] = useState(0.62);
  return (
    <Screen style={NIGHT}>
      <div style={{ height: u(30) }} />
      <Dock edge="top" tone="stone" flush>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(8), paddingTop: u(2) }}>
          <Button tone="primary" size="sm" icon>‹</Button>
          <Ribbon size="sm">Settings</Ribbon>
          <span style={{ width: u(42) }} />
        </div>
      </Dock>
      <Dock edge="top" tone="parchment" style={{ marginTop: u(3) }}>
        <div style={{ display: "flex", alignItems: "center", gap: u(12), paddingTop: u(4) }}>
          <Avatar size="lg">♛</Avatar>
          <div style={{ flex: 1 }}>
            <b style={{ fontWeight: 800, fontSize: u(17), lineHeight: "1.2", fontFamily: "var(--rg-font-display)" }}>Max</b>
            <div style={{ fontWeight: 700, fontSize: u(11), lineHeight: "1.3", fontFamily: "var(--rg-font-body)", color: "#c2a473" }}>Court member since 2026</div>
          </div>
          <Button tone="primary" size="sm">EDIT</Button>
        </div>
      </Dock>
      <Body style={{ paddingBottom: u(175) }}>
        <Panel tone="paper">
          <GroupKicker>Audio</GroupKicker>
          <SettingsRow icon="♪" label="Music" control={<Toggle on={music} onToggle={() => setMusic(!music)} />} />
          <SettingsRow icon="🔔︎" label="Sounds" control={<Toggle on={sounds} onToggle={() => setSounds(!sounds)} />} />
          <SettingsRow icon="♪" label="Volume" control={<Slider value={volume} onChange={setVolume} style={{ width: u(150) }} />} />
        </Panel>
        <Panel tone="paper">
          <GroupKicker>Game</GroupKicker>
          <SettingsRow icon="🌐︎" label="Language" value="English" chevron />
          <SettingsRow icon="☁︎" label="Cloud save" value="Synced ✓" chevron />
        </Panel>
      </Body>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <div style={{ display: "flex", gap: u(10) }}>
            <Button tone="paper" size="sm" block style={{ flex: 1 }}>RESTORE</Button>
            <Button tone="primary" size="sm" block style={{ flex: 1 }}>SUPPORT</Button>
          </div>
          <Version>royal-games-ui · v0.1.0</Version>
        </Dock>
        <MainTabs active={4} />
      </BottomStack>
    </Screen>
  );
}

const MERGE_CELLS: Array<{ e?: string; l?: number; gen?: boolean; lock?: boolean }> = [
  { e: "🧹", l: 1 }, { e: "🧹", l: 2 }, {}, { e: "🪣", l: 1 }, { lock: true },
  { e: "🕯️", l: 2, gen: true }, { e: "🔑", l: 2 }, {}, { e: "✂️", l: 1 }, { e: "✂️", l: 2 },
  { e: "🪞", l: 1 }, {}, { e: "🎁", l: 0 }, { e: "🫖", l: 1 }, {},
  {}, { e: "📜", l: 1 }, { e: "🫖", l: 2 }, {}, { e: "🧸", l: 1 },
  { lock: true }, {}, { e: "🪣", l: 2 }, { e: "🧵", l: 1 }, {},
  { e: "📜", l: 2 }, { e: "🧸", l: 2 }, {}, { e: "🔑", l: 3 }, { e: "🧹", l: 1 },
];

export function MergeScreen() {
  return (
    <Screen style={{ background: "linear-gradient(180deg,var(--rg-color-primary-dark),var(--rg-color-night) 60%)" }}>
      <div style={{ height: u(30) }} />
      <Dock edge="top" tone="velvet">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(8), marginBottom: u(8) }}>
          <Button tone="primary" size="sm" icon>‹</Button>
          <Ribbon size="sm">The Attic</Ribbon>
          <Counter icon={<Bolt />}>8/10</Counter>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: u(8) }}>
          <GroupKicker style={{ color: "rgb(255 244 220 / 75%)", margin: u(0) }}>Tasks</GroupKicker>
          <ObjectiveChip>🕯️ Lv3 · <Coin size="sm" />50</ObjectiveChip>
          <ObjectiveChip done>✓ 2/3</ObjectiveChip>
          <Button tone="positive" size="sm" style={{ marginLeft: "auto" }}>CLAIM</Button>
        </div>
      </Dock>
      <Body style={{ padding: `${u(14)} ${u(14)} ${u(112)}`, justifyContent: "center" }}>
        <Board columns={5} gap={6}>
          {MERGE_CELLS.map((c, i) => (
            <BoardCell key={i} index={i} locked={c.lock}>
              {c.e && <MergeItem level={c.l} generator={c.gen}>{c.e}</MergeItem>}
            </BoardCell>
          ))}
        </Board>
      </Body>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <div style={{ display: "flex", alignItems: "center", gap: u(12) }}>
            <MergeItem solo level={2}>🕯️</MergeItem>
            <div style={{ flex: 1 }}>
              <b style={{ fontWeight: 800, fontSize: u(15), lineHeight: "1.2", fontFamily: "var(--rg-font-display)" }}>Candle · Level 2</b>
              <div style={{ fontWeight: 700, fontSize: u(11), lineHeight: "1.3", fontFamily: "var(--rg-font-body)", color: "var(--rg-color-ink-soft)" }}>Merge two to level up!</div>
            </div>
            <Button tone="gold" size="sm"><Coin size="sm" />50</Button>
          </div>
        </Dock>
      </BottomStack>
    </Screen>
  );
}

const M3_ROWS = "pgbrgy brgpry gprbyg rypgbr ygrpgb bpgryp grbyrg".split(" ");
const M3_COLOR: Record<string, TileColor> = { r: "red", b: "blue", g: "green", y: "gold", p: "purple" };

export function Match3Screen() {
  const [sel, setSel] = useState(16);
  return (
    <Screen style={{ background: "linear-gradient(180deg,var(--rg-color-primary-dark),var(--rg-color-night) 60%)" }}>
      <div style={{ height: u(30) }} />
      <Dock edge="top" tone="velvet">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(8), marginBottom: u(8) }}>
          <Ribbon size="sm">Level 12</Ribbon>
          <ObjectiveChip icon={<GameTile color="purple" mini />}>12/30</ObjectiveChip>
          <ObjectiveChip done icon={<GameTile color="red" mini />}>✓</ObjectiveChip>
          <Moves value={24} style={{ padding: `${u(4)} ${u(12)} ${u(5)}` }} />
        </div>
        <Meter tone="gold" value={0.72} label="SCORE 6,150" valueLabel="TARGET 8,420" style={{ color: "var(--rg-color-ivory)" }} />
      </Dock>
      <Body style={{ padding: `${u(14)} ${u(14)} ${u(112)}`, justifyContent: "center" }}>
        <Board columns={6} gap={6}>
          {M3_ROWS.flatMap((row) => row.split("")).map((ch, i) => (
            <GameTile key={i} color={M3_COLOR[ch]} index={i} sel={i === sel} boom={i === 31} onClick={() => setSel(i)} />
          ))}
        </Board>
      </Body>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <div style={{ display: "flex", justifyContent: "space-around", paddingTop: u(4) }}>
            <Booster count={3}>🔨</Booster>
            <Booster count={1}>🧨</Booster>
            <Booster plus>🌀</Booster>
            <Booster off count={0}>🪄</Booster>
          </div>
        </Dock>
      </BottomStack>
    </Screen>
  );
}

const WORD_ROWS: Array<Array<[string, "fill" | "near" | "ok" | "empty"]>> = [
  [["S", "fill"], ["T", "near"], ["O", "ok"], ["R", "fill"], ["M", "fill"]],
  [["R", "ok"], ["O", "ok"], ["Y", "near"], ["A", "fill"], ["L", "ok"]],
  [["R", "fill"], ["O", "fill"], ["", "empty"], ["", "empty"], ["", "empty"]],
];

export function WordScreen() {
  return (
    <Screen style={{ background: "linear-gradient(180deg,var(--rg-color-primary-dark),var(--rg-color-night) 60%)" }}>
      <div style={{ height: u(30) }} />
      <Dock edge="top" tone="stone" faceStyle={{ paddingBottom: u(14) }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(8) }}>
          <Button tone="primary" size="sm" icon>‹</Button>
          <Ribbon size="sm">Daily Word</Ribbon>
          <Counter icon={<Heart />}>3</Counter>
        </div>
      </Dock>
      <Body style={{ padding: `${u(14)} ${u(14)} ${u(205)}`, gap: u(12), justifyContent: "center" }}>
        <div style={{ display: "flex", gap: u(8), justifyContent: "center" }}>
          <ObjectiveChip>🔥 Streak 4</ObjectiveChip>
          <ObjectiveChip icon={<Star size="sm" />}>Best 12</ObjectiveChip>
          <TimerPill>⏳ <b>14h left</b></TimerPill>
        </div>
        <div style={{ background: "linear-gradient(180deg,var(--rg-board-card-light),var(--rg-board-card-dark))", borderRadius: u(16), padding: `${u(14)} ${u(10)}`, display: "flex", flexDirection: "column", gap: u(8), border: `${u(2)} solid var(--rg-color-outline)`, boxShadow: `inset 0 0 0 ${u(3)} var(--rg-color-gold)` }}>
          <GroupKicker style={{ textAlign: "center", color: "#8b80b4" }}>Guess the royal word</GroupKicker>
          {WORD_ROWS.map((row, r) => (
            <LetterRow key={r} row={r}>
              {row.map(([ch, st], i) => (
                <LetterTile key={i} index={i} state={st}>{ch}</LetterTile>
              ))}
            </LetterRow>
          ))}
        </div>
        <Panel tone="primary" faceStyle={{ display: "flex", alignItems: "center", gap: u(10), padding: `${u(10)} ${u(12)}` }}>
          <span style={{ fontSize: u(22), lineHeight: 1 }}>💡</span>
          <b style={{ flex: 1, fontWeight: 800, fontSize: u(13), lineHeight: "1.2", fontFamily: "var(--rg-font-display)" }}>Need a hint?</b>
          <Button tone="gold" size="sm"><Gem style={{ width: u(14), height: u(14) }} />2</Button>
        </Panel>
      </Body>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <Keys>
            <KeyRow>{"QWERTYUIOP".split("").map((k) => <Key key={k}>{k}</Key>)}</KeyRow>
            <KeyRow>{"ASDFGHJKL".split("").map((k) => <Key key={k}>{k}</Key>)}</KeyRow>
            <KeyRow>
              <Key wide gold>⏎</Key>
              {"ZXCVBNM".split("").map((k) => <Key key={k}>{k}</Key>)}
              <Key wide>⌫</Key>
            </KeyRow>
          </Keys>
        </Dock>
      </BottomStack>
    </Screen>
  );
}
