export interface DocPage {
  href: string;
  name: string;
  lede: string;
}

export interface DocGroup {
  title: string;
  href: string;
  lede: string;
  pages: DocPage[];
}

export const GROUPS: DocGroup[] = [
  {
    title: "Screens",
    href: "/screens/",
    lede: "Six full phone screens composed purely from package components.",
    pages: [
      {
        href: "/screens/",
        name: "All screens",
        lede: "All six full screens side by side.",
      },
      {
        href: "/screens/lobby/",
        name: "Lobby",
        lede: "Two-tier chrome, quest panel, Royal Pass strip and the gift dock.",
      },
      {
        href: "/screens/map/",
        name: "World map",
        lede: "Painted night scene, springing pins, and the objective dock.",
      },
      {
        href: "/screens/shop/",
        name: "Shop",
        lede: "Featured bundle with sale ribbons, gem packs, and the offer dock.",
      },
      {
        href: "/screens/victory/",
        name: "Victory",
        lede: "Result sheet, star burst, rewards, and the action dock.",
      },
      {
        href: "/screens/ranks/",
        name: "Leaderboard",
        lede: "Podium and season rows with the you-highlight.",
      },
      {
        href: "/screens/settings/",
        name: "Settings",
        lede: "Grouped rows, footer dock, and live controls.",
      },
    ],
  },
  {
    title: "Foundations",
    href: "/foundations/skins/",
    lede: "Skins and motion.",
    pages: [
      {
        href: "/foundations/skins/",
        name: "Skins & motion",
        lede: "One grammar, two renderings, and choreography that plays everywhere.",
      },
    ],
  },
  {
    title: "Actions",
    href: "/actions/",
    lede: "The raised enamel actions.",
    pages: [
      {
        href: "/actions/button/",
        name: "Button",
        lede: "Contour, gold frame, material face. Five tones, three sizes.",
      },
    ],
  },
  {
    title: "Banners",
    href: "/banners/",
    lede: "Ribbons and their card placements.",
    pages: [
      {
        href: "/banners/ribbon/",
        name: "Ribbon",
        lede: "Velvet banner with real notched wings, three sizes.",
      },
      {
        href: "/banners/corner-ribbon/",
        name: "CornerRibbon",
        lede: "Rotated sale badge pinned to a card corner.",
      },
      {
        href: "/banners/top-ribbon/",
        name: "TopRibbon",
        lede: "Small ribbon centered over a card's top edge.",
      },
    ],
  },
  {
    title: "Panels",
    href: "/panels/",
    lede: "Raised frames, recessed wells, welded docks.",
    pages: [
      {
        href: "/panels/panel/",
        name: "Panel",
        lede: "The ornate frame in parchment and stone.",
      },
      {
        href: "/panels/well/",
        name: "Well",
        lede: "Recessed content, carved into the surface.",
      },
      {
        href: "/panels/dock/",
        name: "Dock",
        lede: "Edge-welded panels whose border follows the curve.",
      },
    ],
  },
  {
    title: "Text",
    href: "/text/",
    lede: "Wordmarks, kickers and price text.",
    pages: [
      {
        href: "/text/wordmark/",
        name: "Wordmark",
        lede: "Gold display wordmark with a ribbon strapline.",
      },
      {
        href: "/text/group-kicker/",
        name: "GroupKicker",
        lede: "Uppercase section label for grouped rows.",
      },
      {
        href: "/text/strike/",
        name: "Strike",
        lede: "Struck-through old price inside a button.",
      },
      {
        href: "/text/version/",
        name: "Version",
        lede: "Muted build footnote.",
      },
    ],
  },
  {
    title: "Layout",
    href: "/layout/",
    lede: "The screen shell and its chrome.",
    pages: [
      {
        href: "/layout/screen/",
        name: "Screen",
        lede: "Full-size app shell and motion scope.",
      },
      {
        href: "/layout/body/",
        name: "Body",
        lede: "The scrolling content column.",
      },
      {
        href: "/layout/action-group/",
        name: "ActionGroup",
        lede: "Stable horizontal and vertical action axes.",
      },
      {
        href: "/layout/bottom-stack/",
        name: "BottomStack",
        lede: "Welds docks and the tab bar to the bottom edge.",
      },
      {
        href: "/layout/chrome/",
        name: "Chrome",
        lede: "Two-tier identity/context header.",
      },
      {
        href: "/layout/float-chrome/",
        name: "FloatChrome",
        lede: "Loose chrome row over scenes.",
      },
    ],
  },
  {
    title: "Navigation",
    href: "/navigation/",
    lede: "The royal tab bar.",
    pages: [
      {
        href: "/navigation/tab-bar/",
        name: "TabBar",
        lede: "Red plinth, gold rail, pop-out active tab.",
      },
      {
        href: "/navigation/tab/",
        name: "Tab",
        lede: "One tab and its three states.",
      },
    ],
  },
  {
    title: "Scene",
    href: "/scene/",
    lede: "Painted worlds and level pins.",
    pages: [
      {
        href: "/scene/map-scene/",
        name: "MapScene",
        lede: "Night backdrop with stars and moon.",
      },
      {
        href: "/scene/map-pin/",
        name: "MapPin",
        lede: "Done, current and locked level markers.",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources/",
    lede: "Currencies, badges and identity glyphs.",
    pages: [
      {
        href: "/resources/coin/",
        name: "Coin",
        lede: "CSS-drawn gold coin, three sizes.",
      },
      {
        href: "/resources/gem/",
        name: "Gem",
        lede: "The premium currency glyph.",
      },
      {
        href: "/resources/heart/",
        name: "Heart",
        lede: "Lives, beating inside a counter.",
      },
      {
        href: "/resources/star/",
        name: "Star",
        lede: "The rating star with its enamel stroke.",
      },
      { href: "/resources/bolt/", name: "Bolt", lede: "Energy glyph." },
      {
        href: "/resources/counter/",
        name: "Counter",
        lede: "Recessed resource readout with the plus.",
      },
      {
        href: "/resources/chip/",
        name: "Chip",
        lede: "Pill choice for pickers and filters.",
      },
      {
        href: "/resources/level-badge/",
        name: "LevelBadge",
        lede: "Round stone medallion with the gold ring.",
      },
      {
        href: "/resources/timer-pill/",
        name: "TimerPill",
        lede: "Recessed countdown pill.",
      },
      {
        href: "/resources/avatar/",
        name: "Avatar",
        lede: "Gold-framed portrait tile.",
      },
      { href: "/resources/pips/", name: "Pips", lede: "Gold level pips." },
    ],
  },
  {
    title: "Controls",
    href: "/controls/",
    lede: "Meters, rings and form controls.",
    pages: [
      {
        href: "/controls/meter/",
        name: "Meter",
        lede: "Labelled progress with a shimmering fill.",
      },
      {
        href: "/controls/segment-meter/",
        name: "SegmentMeter",
        lede: "Discrete energy cells.",
      },
      {
        href: "/controls/progress-ring/",
        name: "ProgressRing",
        lede: "Conic gold ring.",
      },
      { href: "/controls/toggle/", name: "Toggle", lede: "Enamel switch." },
      {
        href: "/controls/slider/",
        name: "Slider",
        lede: "Gold-knobbed drag, reports 0..1.",
      },
      {
        href: "/controls/checkbox/",
        name: "Checkbox",
        lede: "Recessed until checked.",
      },
      {
        href: "/controls/segmented/",
        name: "Segmented",
        lede: "Single-select pill group.",
      },
      {
        href: "/controls/field/",
        name: "Field",
        lede: "Recessed text field with a focus glow.",
      },
      {
        href: "/controls/page-dots/",
        name: "PageDots",
        lede: "Carousel dots that breathe.",
      },
    ],
  },
  {
    title: "Feedback",
    href: "/feedback/",
    lede: "Announcements, dialogue and rewards.",
    pages: [
      {
        href: "/feedback/toast/",
        name: "Toast",
        lede: "Framed announcement pill.",
      },
      {
        href: "/feedback/spinner/",
        name: "Spinner",
        lede: "Gold loading arc.",
      },
      {
        href: "/feedback/dim/",
        name: "Dim",
        lede: "Scrim behind sheets and modals.",
      },
      {
        href: "/feedback/speech-bubble/",
        name: "SpeechBubble",
        lede: "Parchment dialogue with a contoured tail.",
      },
      {
        href: "/feedback/combo-badge/",
        name: "ComboBadge",
        lede: "Loud streak/multiplier badge.",
      },
      {
        href: "/feedback/medal/",
        name: "Medal",
        lede: "Gold, silver and bronze medallions.",
      },
      {
        href: "/feedback/chest/",
        name: "Chest",
        lede: "Reward chest with the claimable glow.",
      },
      {
        href: "/feedback/star-burst/",
        name: "StarBurst",
        lede: "The victory three-star burst.",
      },
      {
        href: "/feedback/result-anchor/",
        name: "ResultAnchor",
        lede: "Positions the result sheet.",
      },
    ],
  },
  {
    title: "Commerce",
    href: "/commerce/",
    lede: "Store rows, packs and bundles.",
    pages: [
      {
        href: "/commerce/shop-row/",
        name: "ShopRow",
        lede: "Art, copy, price action. Always even.",
      },
      {
        href: "/commerce/pack/",
        name: "Pack",
        lede: "Equal-height pack tiles by construction.",
      },
      {
        href: "/commerce/bundle-cells/",
        name: "BundleCells",
        lede: "Inlaid wells of a bundle's contents.",
      },
      {
        href: "/commerce/coin-pile/",
        name: "CoinPile",
        lede: "Tiered coin art for shop rows.",
      },
    ],
  },
  {
    title: "Social",
    href: "/social/",
    lede: "Identity, leaderboards and settings rows.",
    pages: [
      {
        href: "/social/profile-chip/",
        name: "ProfileChip",
        lede: "Avatar, name, caption for chrome bars.",
      },
      {
        href: "/social/rank-row/",
        name: "RankRow",
        lede: "Leaderboard entry with the you-highlight.",
      },
      {
        href: "/social/podium/",
        name: "Podium",
        lede: "Top three on their plinths.",
      },
      {
        href: "/social/settings-row/",
        name: "SettingsRow",
        lede: "Icon, label, then value/chevron or a control.",
      },
    ],
  },
];

export function findExport(
  href: string,
): (DocPage & { group: string }) | undefined {
  for (const g of GROUPS) {
    if (g.href === href && g.pages[0]?.href !== href)
      return { href, name: g.title, lede: g.lede, group: g.title };
    const p = g.pages.find((p) => p.href === href);
    if (p) return { ...p, group: g.title };
  }
  return undefined;
}
