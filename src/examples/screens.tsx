"use client";

import {
  Avatar,
  Body,
  Bolt,
  BottomStack,
  Button,
  Checkbox,
  Chest,
  Chrome,
  ChromeRow,
  Coin,
  CoinPile,
  Counter,
  Counters,
  Dock,
  Field,
  Gem,
  Heart,
  MapPin,
  MapScene,
  Meter,
  Pack,
  PackRow,
  Panel,
  Podium,
  PodiumColumn,
  ProfileChip,
  RankRow,
  Ribbon,
  Screen,
  ScreenName,
  Segmented,
  SettingsRow,
  ShopRow,
  StarBurst,
  Tab,
  TabBar,
  Toggle,
  Well,
  YouBadge,
} from "@objectifthunes/royal-games-ui";
import { useState, type ReactNode } from "react";

interface ScreenShellProps {
  name: string;
  action: ReactNode;
  activeTab?: string;
  children: ReactNode;
}

function ScreenShell({
  name,
  action,
  activeTab = "court",
  children,
}: ScreenShellProps) {
  const [tab, setTab] = useState(activeTab);

  return (
    <Screen aria-label={name} entrance={false}>
      <Chrome>
        <ChromeRow>
          <ProfileChip
            avatar={<Avatar decorative>MR</Avatar>}
            name="Moon Regent"
            caption="Level 28"
          />
          <Counters aria-label="Player resources">
            <Counter
              graphic={<Coin />}
              onAdd={() => undefined}
              addLabel="Add coins"
            >
              2,480
            </Counter>
            <Counter graphic={<Gem />}>36</Counter>
          </Counters>
        </ChromeRow>
        <ScreenName>{name}</ScreenName>
      </Chrome>
      <Body>{children}</Body>
      <BottomStack>
        <Dock>{action}</Dock>
        <TabBar
          aria-label="Primary navigation"
          value={tab}
          onValueChange={setTab}
        >
          <Tab value="court" icon={<Coin />}>
            Court
          </Tab>
          <Tab value="vault" icon={<Gem />} dot>
            Vault
          </Tab>
          <Tab value="profile" icon={<Heart />}>
            Profile
          </Tab>
        </TabBar>
      </BottomStack>
    </Screen>
  );
}

export function LobbyScreen() {
  return (
    <ScreenShell
      name="Moonlit Keep"
      action={
        <Button tone="accent" size="hero" startGraphic={<Bolt />}>
          Continue
        </Button>
      }
    >
      <Ribbon>Tonight&apos;s challenge</Ribbon>
      <Panel tone="paper">
        <ScreenName as="h2">Cross the royal gardens</ScreenName>
        <Meter
          value={72}
          label="Chapter progress"
          valueText="72 percent complete"
        />
      </Panel>
      <Panel tone="primary" density="compact">
        <SettingsRow
          icon={<Chest decorative>♛</Chest>}
          label="Daily treasury"
          caption="A new reward is ready"
        />
      </Panel>
    </ScreenShell>
  );
}

export function MapScreen() {
  return (
    <ScreenShell
      name="Royal Gardens"
      action={
        <Meter
          value={58}
          label="World progress"
          valueText="Seven of twelve stages"
        />
      }
      activeTab="court"
    >
      <MapScene aria-label="Royal Gardens route" style={{ minHeight: "100%" }}>
        <MapPin
          variant="static"
          state="complete"
          stars={3}
          label="Stage eleven complete"
          style={{ insetInlineStart: "12%", insetBlockStart: "58%" }}
        >
          11
        </MapPin>
        <MapPin
          variant="button"
          state="current"
          label="Play stage twelve"
          onPress={() => undefined}
          style={{ insetInlineStart: "56%", insetBlockStart: "30%" }}
        >
          12
        </MapPin>
        <MapPin
          variant="static"
          state="unavailable"
          label="Stage thirteen unavailable"
          style={{ insetInlineStart: "28%", insetBlockStart: "8%" }}
        >
          13
        </MapPin>
      </MapScene>
    </ScreenShell>
  );
}

export function ShopScreen() {
  return (
    <ScreenShell
      name="Royal Vault"
      activeTab="vault"
      action={<Button tone="gold">Restore purchases</Button>}
    >
      <ShopRow
        art={<CoinPile decorative={false} title="Pile of coins" coins={3} />}
        title="Treasury chest"
        caption="2,400 coins and 40 gems"
        action={<Button tone="accent">$4.99</Button>}
      />
      <PackRow>
        <Pack
          art={<CoinPile decorative coins={2} />}
          badge={<Ribbon size="small">Popular</Ribbon>}
          action={<Button tone="gold">$1.99</Button>}
        >
          Coin purse
        </Pack>
        <Pack
          art={<Gem decorative={false} title="Royal gem" size="large" />}
          action={<Button tone="gold">$2.99</Button>}
        >
          Gem cache
        </Pack>
      </PackRow>
    </ScreenShell>
  );
}

export function VictoryScreen() {
  return (
    <ScreenShell
      name="Victory"
      action={
        <Button tone="positive" size="hero">
          Claim rewards
        </Button>
      }
    >
      <Panel tone="paper" density="tall">
        <StarBurst earned={3} total={3} label="Three of three stars earned" />
        <ScreenName as="h2">Flawless court</ScreenName>
        <Well>
          <Counters aria-label="Rewards earned">
            <Counter graphic={<Coin />}>850</Counter>
            <Counter graphic={<Gem />}>12</Counter>
          </Counters>
        </Well>
      </Panel>
    </ScreenShell>
  );
}

export function RanksScreen() {
  return (
    <ScreenShell
      name="Royal League"
      action={<Button tone="primary">View season rewards</Button>}
    >
      <Podium aria-label="Top three players">
        <PodiumColumn
          place={2}
          avatar={<Avatar decorative>AS</Avatar>}
          name="Ash"
          score="9,620"
        />
        <PodiumColumn
          place={1}
          avatar={<Avatar decorative>MR</Avatar>}
          name="Mira"
          score="10,240"
        />
        <PodiumColumn
          place={3}
          avatar={<Avatar decorative>LN</Avatar>}
          name="Linn"
          score="9,210"
        />
      </Podium>
      <Well>
        <RankRow
          position="4"
          name="Rowan"
          score="8,940"
          current
          badge={<YouBadge>You</YouBadge>}
        />
        <RankRow position="5" name="Sol" score="8,710" />
      </Well>
    </ScreenShell>
  );
}

export function SettingsScreen() {
  const [difficulty, setDifficulty] = useState("royal");
  const [haptics, setHaptics] = useState(true);

  return (
    <ScreenShell
      name="Settings"
      action={<Button tone="positive">Save changes</Button>}
    >
      <Panel tone="primary">
        <Segmented
          aria-label="Challenge level"
          options={[
            { value: "calm", label: "Calm" },
            { value: "royal", label: "Royal" },
            { value: "legend", label: "Legend" },
          ]}
          value={difficulty}
          onValueChange={setDifficulty}
        />
        <SettingsRow
          variant="control"
          icon={<Bolt />}
          label="Haptic feedback"
          caption="Use device vibration"
          control={
            <Toggle
              aria-label="Haptic feedback"
              checked={haptics}
              onChange={(event) => setHaptics(event.currentTarget.checked)}
            />
          }
        />
        <SettingsRow
          variant="control"
          label="Daily reminder"
          control={<Checkbox aria-label="Daily reminder" defaultChecked />}
        />
        <Field label="Display name" defaultValue="Moon Regent" />
      </Panel>
    </ScreenShell>
  );
}
