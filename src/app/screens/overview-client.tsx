"use client";

import Link from "next/link";
import { PhoneFrame } from "@/components/Preview";
import {
  LobbyScreen,
  MapScreen,
  RanksScreen,
  SettingsScreen,
  ShopScreen,
  VictoryScreen,
} from "@/examples/screens";

const SCREENS = [
  { title: "Lobby", href: "/screens/lobby/", C: LobbyScreen },
  { title: "World map", href: "/screens/map/", C: MapScreen },
  { title: "Shop", href: "/screens/shop/", C: ShopScreen },
  { title: "Victory", href: "/screens/victory/", C: VictoryScreen },
  { title: "Leaderboard", href: "/screens/ranks/", C: RanksScreen },
  { title: "Settings", href: "/screens/settings/", C: SettingsScreen },
];

export function AllScreens() {
  return (
    <div className="preview">
      <div className="preview-inner center" style={{ padding: "36px 16px" }}>
        <div className="screens-grid">
          {SCREENS.map(({ title, href, C }) => (
            <figure key={href}>
              <PhoneFrame>
                <C />
              </PhoneFrame>
              <figcaption>
                <Link href={href}>{title} →</Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The same screen on three device sizes: the kit scales as one object. */
export function DeviceRange() {
  return (
    <div className="preview">
      <div className="preview-inner center" style={{ padding: "36px 16px" }}>
        <div className="screens-grid">
          {(["sm", "md", "lg"] as const).map((size) => (
            <figure key={size}>
              <PhoneFrame size={size}>
                <LobbyScreen />
              </PhoneFrame>
              <figcaption>
                {{ sm: "300 × 649", md: "352 × 760", lg: "430 × 929" }[size]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
