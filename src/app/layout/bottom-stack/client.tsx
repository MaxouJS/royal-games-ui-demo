"use client";

import {
  BottomStack,
  Dock,
  TabBar,
  Tab,
  Button,
} from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Scene } from "@/components/Stage";

export function Demo() {
  const [value, setValue] = useState("home");

  return (
    <Scene h={210}>
      <BottomStack>
        <Dock edge="bottom" tone="stone">
          <Button tone="positive" size="small">
            CLAIM
          </Button>
        </Dock>
        <TabBar
          aria-label="Demo navigation"
          value={value}
          onValueChange={setValue}
        >
          <Tab value="shop" icon="🛒">
            Shop
          </Tab>
          <Tab value="home" icon="⌂">
            Home
          </Tab>
          <Tab value="map" icon="⚑">
            Map
          </Tab>
        </TabBar>
      </BottomStack>
    </Scene>
  );
}
