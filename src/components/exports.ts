export interface DocPage {
  href: string;
  name: string;
  lede: string;
}

export interface DocGroup {
  title: string;
  pages: DocPage[];
}

export const GROUPS: DocGroup[] = [
  {
    title: "Screens",
    pages: [
      { href: "/screens/", name: "All screens", lede: "All nine full screens side by side — lobby to word game, every one composed purely from package components." },
      { href: "/screens/lobby/", name: "Lobby", lede: "Two-tier chrome, quest panel, Royal Pass strip and the gift dock." },
      { href: "/screens/map/", name: "World map", lede: "Painted night scene, springing pins, and the objective dock welded to the tab bar." },
      { href: "/screens/shop/", name: "Shop", lede: "Featured bundle with sale ribbons, gem packs, and the free-coins offer dock." },
      { href: "/screens/victory/", name: "Victory", lede: "Result sheet, star burst, rewards, and the action dock." },
      { href: "/screens/ranks/", name: "Leaderboard", lede: "Podium and season rows with the you-highlight." },
      { href: "/screens/settings/", name: "Settings", lede: "Grouped rows, footer dock, and live controls." },
      { href: "/screens/merge/", name: "Merge game", lede: "The validated merge screen: tasks dock, night board, item dock." },
      { href: "/screens/match-3/", name: "Match-3 game", lede: "The validated match-3 screen: HUD dock, candy board, boosters dock." },
      { href: "/screens/word/", name: "Word game", lede: "The validated word screen: streaks, the carded ladder, and the dark keyboard." },
    ],
  },
  {
    title: "Foundations",
    pages: [
      { href: "/foundations/skins/", name: "Skins & motion", lede: "One grammar, two renderings — and choreography that plays everywhere. Switched with a single attribute." },
    ],
  },
  {
    title: "Actions",
    pages: [
      { href: "/actions/button/", name: "Button", lede: "The Raised enamel action: contour, gold frame, material face. Pressing sinks the face — geometry never moves." },
    ],
  },
  {
    title: "Banners",
    pages: [
      { href: "/banners/ribbon/", name: "Ribbon", lede: "Velvet banner with real notched wings, in three sizes, plus corner and top-edge placements." },
    ],
  },
  {
    title: "Panels",
    pages: [
      { href: "/panels/panel/", name: "Panel & Well", lede: "The ornate frame in parchment and stone, and the recessed well it pairs with." },
      { href: "/panels/dock/", name: "Dock", lede: "Edge-welded material panels whose gold border follows the curve. Stack them onto the tab bar." },
    ],
  },
  {
    title: "Navigation",
    pages: [
      { href: "/navigation/tab-bar/", name: "Tab bar", lede: "Red plinth, gold rail, and the active tab popping out as a full raised button." },
      { href: "/navigation/chrome/", name: "Chrome", lede: "Two-tier identity/context header, floating scene chrome, and the profile chip." },
    ],
  },
  {
    title: "Resources",
    pages: [
      { href: "/resources/counters/", name: "Counters & badges", lede: "Coins, gems, hearts, energy — recessed readouts, chips, level medallions and timers." },
    ],
  },
  {
    title: "Meters",
    pages: [
      { href: "/meters/progress/", name: "Progress", lede: "Shimmering meters, segmented energy, and the conic progress ring." },
    ],
  },
  {
    title: "Forms",
    pages: [
      { href: "/forms/controls/", name: "Controls", lede: "Toggle, slider, checkbox, segmented control, text field and pagination dots — all live." },
    ],
  },
  {
    title: "Feedback",
    pages: [
      { href: "/feedback/feedback/", name: "Feedback", lede: "Toasts, spinners, dialogue bubbles, combo badges, medals, chests and the victory burst." },
    ],
  },
  {
    title: "Commerce",
    pages: [
      { href: "/commerce/shop/", name: "Shop", lede: "Store rows, equal-height packs, bundle cells, sale badges and struck-through prices." },
    ],
  },
  {
    title: "Social",
    pages: [
      { href: "/social/leaderboard/", name: "Leaderboard", lede: "Rank rows with the gold you-highlight, and the podium." },
      { href: "/social/settings/", name: "Settings rows", lede: "Icon, label, caption — then a value with chevron, or any control." },
    ],
  },
  {
    title: "Game",
    pages: [
      { href: "/game/merge/", name: "Merge board", lede: "Frameless socket grid with miniature raised items, level pips and glowing generators." },
      { href: "/game/match-3/", name: "Match-3 board", lede: "Square candies with crown gloss and thick inner bevels; selection ring and specials." },
      { href: "/game/word/", name: "Word board", lede: "Letter sockets and judged enamel tiles inside the dark gold-framed card." },
      { href: "/game/keys/", name: "Keys", lede: "Dark stone keyboard keys with the gold enter." },
      { href: "/game/hud/", name: "HUD", lede: "Moves, objectives, boosters and map pins." },
    ],
  },
];

export function findExport(href: string): (DocPage & { group: string }) | undefined {
  for (const g of GROUPS) {
    const p = g.pages.find((p) => p.href === href);
    if (p) return { ...p, group: g.title };
  }
  return undefined;
}
