"use client";

import {
  Avatar,
  Body,
  Bolt,
  BottomStack,
  BundleCell,
  BundleCells,
  Button,
  Chrome,
  ChromeRow,
  Coin,
  CornerRibbon,
  Counter,
  Counters,
  Dim,
  Dock,
  FloatChrome,
  Gem,
  GroupKicker,
  Heart,
  LevelBadge,
  MapPin,
  MapScene,
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
  SettingsRow,
  ShopRow,
  StarBurst,
  Strike,
  Tab,
  TabBar,
  TimerPill,
  Toggle,
  TopRibbon,
  Slider,
  Version,
  Well,
  Wordmark,
  YouBadge,
} from "@objectifthunes/royal-games-ui";
import { useState, type ReactNode } from "react";

function ResourceCounters({ interactive = true }: { interactive?: boolean }) {
  return (
    <Counters aria-label="Player resources">
      {interactive ? (
        <>
          <Counter
            graphic={<Coin />}
            onAdd={() => undefined}
            addLabel="Add coins"
          >
            2,450
          </Counter>
          <Counter
            graphic={<Gem />}
            onAdd={() => undefined}
            addLabel="Add gems"
          >
            12
          </Counter>
        </>
      ) : (
        <>
          <Counter graphic={<Coin />}>2,450</Counter>
          <Counter graphic={<Gem />}>12</Counter>
        </>
      )}
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
        <Button tone="primary" size="small" iconOnly aria-label="Settings">
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
          <Counters aria-label="Chapter objectives" layout="spread">
            <Counter density="objective" graphic="⚑">
              12/20
            </Counter>
            <Counter density="objective" graphic="★">
              31/60
            </Counter>
            <TimerPill aria-label="Two days and four hours remaining">
              ⏳ <b>2d 4h</b>
            </TimerPill>
          </Counters>
          <Button tone="accent" size="hero">
            PLAY
          </Button>
        </Panel>
        <Panel tone="primary" density="compact">
          <SettingsRow
            variant="control"
            icon="👑"
            label="Royal Pass"
            caption="12 rewards waiting"
            control={
              <Counters aria-label="Royal Pass position and action">
                <PageDots count={3} index={0} />
                <Button tone="gold" size="small">
                  GO
                </Button>
              </Counters>
            }
          />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="stone" density="gift">
          <SettingsRow
            variant="control"
            icon="🎁"
            label="Daily Gift ready"
            control={
              <Counters aria-label="Daily gift actions">
                <Button tone="positive" size="small">
                  CLAIM
                </Button>
                <TimerPill aria-label="Two days and four hours remaining">
                  ⚑ <b>2d 4h</b>
                </TimerPill>
              </Counters>
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
      <MapScene aria-label="Emberfall route">
        <MapPin
          variant="static"
          state="complete"
          stars={2}
          label="Stage seven complete"
          style={{
            insetInlineStart: "calc(var(--rg-u) * 70)",
            insetBlockStart: "calc(var(--rg-u) * 590)",
          }}
        >
          7
        </MapPin>
        <MapPin
          variant="static"
          state="complete"
          stars={3}
          label="Stage eight complete"
          style={{
            insetInlineStart: "calc(var(--rg-u) * 277)",
            insetBlockStart: "calc(var(--rg-u) * 488)",
          }}
        >
          8
        </MapPin>
        <MapPin
          variant="button"
          state="current"
          label="Play stage nine"
          onPress={() => undefined}
          style={{
            insetInlineStart: "calc(var(--rg-u) * 150)",
            insetBlockStart: "calc(var(--rg-u) * 388)",
          }}
        >
          9
        </MapPin>
        <MapPin
          variant="static"
          state="unavailable"
          label="Stage ten unavailable"
          style={{
            insetInlineStart: "calc(var(--rg-u) * 120)",
            insetBlockStart: "calc(var(--rg-u) * 272)",
          }}
        >
          10
        </MapPin>
        <MapPin
          variant="static"
          state="unavailable"
          label="Stage eleven unavailable"
          style={{
            insetInlineStart: "calc(var(--rg-u) * 260)",
            insetBlockStart: "calc(var(--rg-u) * 170)",
          }}
        >
          11
        </MapPin>
      </MapScene>
      <FloatChrome variant="screen">
        <Button tone="primary" size="small" iconOnly aria-label="Back">
          ‹
        </Button>
        <Ribbon size="compact">World 2 · Emberfall</Ribbon>
        <Counter graphic={<Heart />}>4</Counter>
      </FloatChrome>
      <BottomStack>
        <Dock tone="stone" density="map">
          <SettingsRow
            variant="control"
            icon={<LevelBadge level="9" label="LVL" aria-label="Level nine" />}
            label="Castle Gates"
            caption="Beat it with 3 ★ to earn a chest"
            control={
              <Button tone="accent" size="small">
                GO
              </Button>
            }
          />
          <Meter value={12} max={20} label="Chapter 3" valueText="12 / 20" />
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
          label={<Ribbon size="screen">Royal Shop</Ribbon>}
          control={<ResourceCounters interactive={false} />}
        />
      </Dock>
      <Body layout="commerce">
        <Panel tone="paper">
          <TopRibbon>
            <Ribbon size="small">Best value</Ribbon>
          </TopRibbon>
          <CornerRibbon>
            <Ribbon size="small">−50%</Ribbon>
          </CornerRibbon>
          <SettingsRow
            icon="👑"
            align="center"
            divided={false}
            label={
              <>
                <GroupKicker>Royal Bundle</GroupKicker>
                <ScreenName as="h2">King&apos;s Coffer</ScreenName>
              </>
            }
          />
          <BundleCells>
            <BundleCell label="12,000">
              <Coin size="large" />
            </BundleCell>
            <BundleCell label="80">
              <Gem size="large" />
            </BundleCell>
            <BundleCell label="5 boosts">✦</BundleCell>
          </BundleCells>
          <Button tone="gold">
            <Strike>€19.99</Strike> €9.99 · BUY
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
            <Pack
              art={<Gem size="large" />}
              action={
                <Button tone="gold" size="small">
                  €17.99
                </Button>
              }
            >
              1200
            </Pack>
          </PackRow>
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="primary" density="offer">
          <ShopRow
            art="🎬"
            title="Free coins"
            caption="Watch an ad · 150 coins"
            action={
              <Button tone="positive" size="small">
                FREE
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
    <Screen aria-label="Victory results" entrance={false} tone="forest">
      <Dim intensity="strong" />
      <Body layout="result">
        <Ribbon size="large">Victory!</Ribbon>
        <Panel tone="paper">
          <StarBurst
            earned={3}
            total={3}
            label="Three out of three stars earned"
          />
          <Well>
            <SettingsRow
              variant="control"
              label="SCORE"
              control={<strong>8,420</strong>}
            />
          </Well>
          <Counters aria-label="Rewards" layout="spread">
            <span>
              <Coin /> +120
            </span>
            <span>
              <Gem /> +2
            </span>
            <span>
              <Bolt /> +1 boost
            </span>
          </Counters>
          <Meter
            tone="positive"
            value={68}
            max={100}
            label="Level 12"
            valueText="68%"
          />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="primary">
          <Button tone="positive" size="hero">
            CONTINUE
          </Button>
          <Counters aria-label="Result actions" layout="spread">
            <Button tone="primary" size="small" block>
              ↻ REPLAY
            </Button>
            <Button tone="primary" size="small" block>
              SHARE
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
        <SettingsRow
          variant="control"
          label={<Ribbon size="screen">Season Ranks</Ribbon>}
          control={
            <TimerPill aria-label="Season ends in two days and four hours">
              ⏳ Ends in <b>2d 4h</b>
            </TimerPill>
          }
        />
        <Podium aria-label="Top three players">
          <PodiumColumn
            place={2}
            avatar={<Avatar decorative>🦊</Avatar>}
            name="Nora"
          />
          <PodiumColumn
            place={1}
            avatar={
              <Avatar decorative size="large">
                🐻
              </Avatar>
            }
            name="Elio"
          />
          <PodiumColumn
            place={3}
            avatar={<Avatar decorative>🐸</Avatar>}
            name="Pip"
          />
        </Podium>
      </Dock>
      <Body>
        <Panel tone="primary" density="list">
          <RankRow
            position={4}
            avatar={
              <Avatar decorative size="small">
                🦉
              </Avatar>
            }
            name="Wren"
            scoreGraphic={<Coin size="small" />}
            score="9,180"
          />
          <RankRow
            position={5}
            avatar={
              <Avatar decorative size="small">
                🐰
              </Avatar>
            }
            name="Juno"
            scoreGraphic={<Coin size="small" />}
            score="8,875"
          />
          <RankRow
            position={6}
            avatar={
              <Avatar decorative size="small">
                ♛
              </Avatar>
            }
            name="Max"
            scoreGraphic={<Coin size="small" />}
            score="8,420"
            current
            badge={<YouBadge>You</YouBadge>}
          />
          <RankRow
            position={7}
            avatar={
              <Avatar decorative size="small">
                🐱
              </Avatar>
            }
            name="Sable"
            scoreGraphic={<Coin size="small" />}
            score="7,940"
          />
        </Panel>
      </Body>
      <BottomStack>
        <RoyalTabs initial="ranks" />
      </BottomStack>
    </Screen>
  );
}

export function SettingsScreen() {
  const [music, setMusic] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <Screen aria-label="Settings" entrance={false}>
      <Dock edge="top" tone="stone" flush>
        <SettingsRow
          variant="control"
          icon={
            <Button tone="primary" size="small" iconOnly aria-label="Back">
              ‹
            </Button>
          }
          align="balanced"
          label={<Ribbon size="screen">Settings</Ribbon>}
          control={<span />}
        />
      </Dock>
      <Dock edge="top" tone="paper">
        <SettingsRow
          variant="control"
          icon={
            <Avatar decorative size="large">
              ♛
            </Avatar>
          }
          label="Max"
          caption="Court member since 2026"
          control={
            <Button tone="primary" size="small">
              EDIT
            </Button>
          }
        />
      </Dock>
      <Body>
        <Panel tone="paper">
          <GroupKicker>Audio</GroupKicker>
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
            icon="♪"
            label="Volume"
            control={<Slider aria-label="Volume" defaultValue={60} />}
          />
        </Panel>
        <Panel tone="paper">
          <GroupKicker>Game</GroupKicker>
          <SettingsRow
            variant="action"
            icon="🌐"
            label="Language"
            caption="English"
            onPress={() => undefined}
          />
          <SettingsRow
            variant="control"
            icon="🔔"
            label="Notifications"
            control={
              <Toggle
                aria-label="Notifications"
                checked={notifications}
                onChange={(event) =>
                  setNotifications(event.currentTarget.checked)
                }
              />
            }
          />
          <SettingsRow
            variant="action"
            icon="☁"
            label="Cloud save"
            caption="Synced ✓"
            onPress={() => undefined}
          />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="stone" density="compact">
          <Counters aria-label="Settings support actions" layout="spread">
            <Button tone="paper" size="small" block>
              RESTORE
            </Button>
            <Button tone="primary" size="small" block>
              SUPPORT
            </Button>
          </Counters>
          <Version>royal-games-ui · v1.0.2</Version>
        </Dock>
        <RoyalTabs initial="more" />
      </BottomStack>
    </Screen>
  );
}
