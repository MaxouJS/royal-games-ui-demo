"use client";

import {
  Avatar,
  Body,
  Bolt,
  BottomStack,
  BundleCell,
  BundleCells,
  Button,
  Checkbox,
  Chrome,
  ChromeRow,
  Coin,
  CoinPile,
  CornerRibbon,
  Counter,
  Counters,
  Dock,
  Field,
  Gem,
  GroupKicker,
  Heart,
  MapPin,
  MapScene,
  Medal,
  Meter,
  Pack,
  PackRow,
  Panel,
  PageDots,
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
  Star,
  StarBurst,
  Strike,
  Tab,
  TabBar,
  TimerPill,
  Toggle,
  TopRibbon,
  Well,
  Wordmark,
  YouBadge,
} from "@objectifthunes/royal-games-ui";
import { useState, type ReactNode } from "react";

function ResourceCounters() {
  return (
    <Counters aria-label="Player resources">
      <Counter graphic={<Coin />} onAdd={() => undefined} addLabel="Add coins">
        2,450
      </Counter>
      <Counter graphic={<Gem />} onAdd={() => undefined} addLabel="Add gems">
        12
      </Counter>
    </Counters>
  );
}

function RoyalChrome({ name }: { name: ReactNode }) {
  return (
    <Chrome>
      <ChromeRow tone="velvet">
        <ProfileChip
          avatar={
            <Avatar decorative size="small">
              ♛
            </Avatar>
          }
          name="Max"
          caption="LEVEL 12"
        />
        <ResourceCounters />
      </ChromeRow>
      <ChromeRow tone="stone">
        <ScreenName>{name}</ScreenName>
        <Button tone="primary" size="small" aria-label="Settings">
          ⚙
        </Button>
      </ChromeRow>
    </Chrome>
  );
}

function RoyalTabs({ initial }: { initial: string }) {
  const [tab, setTab] = useState(initial);

  return (
    <TabBar aria-label="Primary navigation" value={tab} onValueChange={setTab}>
      <Tab value="shop" icon="🛒">
        Shop
      </Tab>
      <Tab value="ranks" icon="♛">
        Ranks
      </Tab>
      <Tab value="home" icon="⌂">
        Home
      </Tab>
      <Tab value="map" icon="⚑">
        Map
      </Tab>
      <Tab value="more" icon="⚙" dot>
        More
      </Tab>
    </TabBar>
  );
}

export function LobbyScreen() {
  return (
    <Screen aria-label="Royal Games home" entrance={false}>
      <RoyalChrome name="Home" />
      <Body>
        <Wordmark strap="His Majesty awaits">Royal Games</Wordmark>
        <Panel tone="paper">
          <GroupKicker>Chapter 3</GroupKicker>
          <ScreenName as="h2">The East Gate</ScreenName>
          <Counters aria-label="Chapter objectives">
            <Counter graphic="⚑">12/20</Counter>
            <Counter graphic={<Star />}>31/60</Counter>
            <TimerPill aria-label="Two days and four hours remaining">
              ⏳ <b>2d 4h</b>
            </TimerPill>
          </Counters>
          <Button tone="accent" size="hero">
            Play
          </Button>
        </Panel>
        <Panel tone="primary" density="compact">
          <SettingsRow
            variant="control"
            icon="👑"
            label="Royal Pass"
            caption="12 rewards waiting"
            control={
              <Button tone="gold" size="small">
                Go
              </Button>
            }
          />
          <PageDots count={3} index={0} />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="stone">
          <SettingsRow
            variant="control"
            icon="🎁"
            label="Daily Gift ready"
            control={
              <Button tone="positive" size="small">
                Claim
              </Button>
            }
          />
        </Dock>
        <RoyalTabs initial="home" />
      </BottomStack>
    </Screen>
  );
}

export function MapScreen() {
  return (
    <Screen aria-label="World map" entrance={false}>
      <Chrome>
        <ChromeRow tone="velvet">
          <Button tone="primary" size="small">
            Back
          </Button>
          <Ribbon size="small">World 2 · Emberfall</Ribbon>
          <Counter graphic={<Heart />}>4</Counter>
        </ChromeRow>
      </Chrome>
      <MapScene aria-label="Emberfall route">
        <MapPin
          variant="static"
          state="complete"
          stars={3}
          label="Stage eight complete"
          style={{ insetInlineStart: "66%", insetBlockStart: "70%" }}
        >
          8
        </MapPin>
        <MapPin
          variant="button"
          state="current"
          label="Play stage nine"
          onPress={() => undefined}
          style={{ insetInlineStart: "35%", insetBlockStart: "48%" }}
        >
          9
        </MapPin>
        <MapPin
          variant="static"
          state="unavailable"
          label="Stage ten unavailable"
          style={{ insetInlineStart: "52%", insetBlockStart: "22%" }}
        >
          10
        </MapPin>
      </MapScene>
      <BottomStack>
        <Dock tone="stone">
          <SettingsRow
            variant="control"
            icon="🏰"
            label="Castle Gates"
            caption="Reach level 9 to earn a chest"
            control={
              <Button tone="accent" size="small">
                Go
              </Button>
            }
          />
          <Meter value={7} max={12} label="Chapter 2" valueText="7 of 12" />
        </Dock>
        <RoyalTabs initial="map" />
      </BottomStack>
    </Screen>
  );
}

export function ShopScreen() {
  return (
    <Screen aria-label="Royal Shop" entrance={false}>
      <Dock edge="top" tone="stone">
        <SettingsRow
          variant="control"
          label={<Ribbon size="small">Royal Shop</Ribbon>}
          control={<ResourceCounters />}
        />
      </Dock>
      <Body>
        <Panel tone="paper">
          <TopRibbon>
            <Ribbon size="small">Best value</Ribbon>
          </TopRibbon>
          <CornerRibbon>
            <Ribbon size="small">−50%</Ribbon>
          </CornerRibbon>
          <GroupKicker>Royal Bundle</GroupKicker>
          <ScreenName as="h2">King&apos;s Coffer</ScreenName>
          <BundleCells>
            <BundleCell label="Twelve thousand coins">
              <Coin size="large" /> 12,000
            </BundleCell>
            <BundleCell label="Eighty gems">
              <Gem size="large" /> 80
            </BundleCell>
            <BundleCell label="Five boosts">✦ 5 boosts</BundleCell>
          </BundleCells>
          <Button tone="gold">
            <Strike>€19.99</Strike> €9.99 · Buy
          </Button>
        </Panel>
        <Panel tone="primary" density="compact">
          <GroupKicker>Gems</GroupKicker>
          <PackRow>
            <Pack
              art={<Gem size="large" />}
              action={
                <Button tone="gold" size="small">
                  €1.99
                </Button>
              }
            >
              80
            </Pack>
            <Pack
              art={<Gem size="large" />}
              action={
                <Button tone="gold" size="small">
                  €8.99
                </Button>
              }
            >
              500
            </Pack>
          </PackRow>
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="primary">
          <ShopRow
            art={<CoinPile decorative coins={3} />}
            title="Free coins"
            caption="Watch an ad · 150 coins"
            action={
              <Button tone="positive" size="small">
                Free
              </Button>
            }
          />
        </Dock>
        <RoyalTabs initial="shop" />
      </BottomStack>
    </Screen>
  );
}

export function VictoryScreen() {
  return (
    <Screen aria-label="Victory results" entrance={false}>
      <Body>
        <Ribbon size="large">Victory!</Ribbon>
        <Panel tone="paper" density="tall">
          <StarBurst
            earned={3}
            total={3}
            label="Three out of three stars earned"
          />
          <Well>
            <SettingsRow label="Score" caption="8,420" />
            <Counters aria-label="Rewards">
              <Counter graphic={<Coin />}>120</Counter>
              <Counter graphic={<Gem />}>2</Counter>
              <Counter graphic={<Bolt />}>1 boost</Counter>
            </Counters>
          </Well>
          <Meter value={68} max={100} label="Level 12" valueText="68%" />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="primary">
          <Button tone="positive" size="hero">
            Continue
          </Button>
          <Counters aria-label="Result actions">
            <Button tone="primary" size="small">
              Replay
            </Button>
            <Button tone="primary" size="small">
              Share
            </Button>
          </Counters>
        </Dock>
      </BottomStack>
    </Screen>
  );
}

export function RanksScreen() {
  return (
    <Screen aria-label="Season leaderboard" entrance={false}>
      <Dock edge="top" tone="primary">
        <Ribbon size="small">Season Ranks</Ribbon>
        <TimerPill aria-label="Season ends in two days and six hours">
          ⏳ <b>2d 6h</b>
        </TimerPill>
        <Podium aria-label="Top three players">
          <PodiumColumn
            place={2}
            avatar={<Avatar decorative>AS</Avatar>}
            name="Ash"
            score="9,620"
          />
          <PodiumColumn
            place={1}
            avatar={
              <Avatar decorative size="large">
                MR
              </Avatar>
            }
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
      </Dock>
      <Body>
        <Panel tone="primary" density="compact">
          <RankRow
            position={4}
            avatar={
              <Medal decorative metal="gold">
                4
              </Medal>
            }
            name="Vera"
            score="9,080"
          />
          <RankRow
            position={5}
            avatar={
              <Avatar decorative size="small">
                ♛
              </Avatar>
            }
            name="Max"
            score="8,940"
            current
            badge={<YouBadge>You</YouBadge>}
          />
          <RankRow position={6} name="Sol" score="8,710" />
          <RankRow position={7} name="Sable" score="8,420" />
        </Panel>
      </Body>
      <BottomStack>
        <RoyalTabs initial="ranks" />
      </BottomStack>
    </Screen>
  );
}

export function SettingsScreen() {
  const [difficulty, setDifficulty] = useState("royal");
  const [music, setMusic] = useState(true);
  const [sounds, setSounds] = useState(true);

  return (
    <Screen aria-label="Settings" entrance={false}>
      <Dock edge="top" tone="stone">
        <SettingsRow
          variant="control"
          icon={
            <Button tone="primary" size="small">
              Back
            </Button>
          }
          label={<Ribbon size="small">Settings</Ribbon>}
          control={<span />}
        />
      </Dock>
      <Body>
        <Panel tone="paper" density="compact">
          <SettingsRow
            variant="control"
            icon={
              <Avatar decorative size="small">
                ♛
              </Avatar>
            }
            label="Max"
            caption="Current username · since 2026"
            control={
              <Button tone="primary" size="small">
                Edit
              </Button>
            }
          />
        </Panel>
        <Panel tone="paper">
          <GroupKicker>Preferences</GroupKicker>
          <SettingsRow
            variant="control"
            icon="♪"
            label="Music"
            control={
              <Toggle
                aria-label="Music"
                checked={music}
                onChange={(event) => setMusic(event.currentTarget.checked)}
              />
            }
          />
          <SettingsRow
            variant="control"
            icon="♬"
            label="Sounds"
            control={
              <Toggle
                aria-label="Sounds"
                checked={sounds}
                onChange={(event) => setSounds(event.currentTarget.checked)}
              />
            }
          />
          <SettingsRow
            variant="control"
            icon="▣"
            label="Haptics"
            control={<Checkbox aria-label="Haptics" defaultChecked />}
          />
          <SettingsRow
            variant="action"
            icon="◎"
            label="Language"
            caption="English"
            onPress={() => undefined}
          />
        </Panel>
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
        <Field label="Display name" defaultValue="Max" />
      </Body>
      <BottomStack>
        <Dock tone="paper">
          <Button tone="paper">Restore purchases</Button>
          <Button tone="accent">Sign out</Button>
        </Dock>
        <RoyalTabs initial="more" />
      </BottomStack>
    </Screen>
  );
}
