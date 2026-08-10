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

const ignoreAction = () => undefined;

interface ResourceCountersProps {
  interactive?: boolean;
  onAddCoins?: () => void;
  onAddGems?: () => void;
}

interface NavigationProps {
  onNavigate?: (value: string) => void;
}

function ResourceCounters({
  interactive = true,
  onAddCoins = ignoreAction,
  onAddGems = ignoreAction,
}: ResourceCountersProps) {
  return (
    <Counters aria-label="Player resources">
      {interactive ? (
        <>
          <Counter graphic={<Coin />} onAdd={onAddCoins} addLabel="Add coins">
            2,450
          </Counter>
          <Counter graphic={<Gem />} onAdd={onAddGems} addLabel="Add gems">
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

interface RoyalChromeProps {
  name: ReactNode;
  onAddCoins?: () => void;
  onAddGems?: () => void;
  onOpenSettings?: () => void;
}

function RoyalChrome({
  name,
  onAddCoins = ignoreAction,
  onAddGems = ignoreAction,
  onOpenSettings = ignoreAction,
}: RoyalChromeProps) {
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
        <ResourceCounters onAddCoins={onAddCoins} onAddGems={onAddGems} />
      </ChromeRow>
      <ChromeRow tone="stone">
        <ScreenName>{name}</ScreenName>
        <Button
          tone="primary"
          size="small"
          iconOnly
          aria-label="Settings"
          onClick={onOpenSettings}
        >
          ⚙
        </Button>
      </ChromeRow>
    </Chrome>
  );
}

interface RoyalTabsProps extends NavigationProps {
  initial: string;
}

function RoyalTabs({ initial, onNavigate = ignoreAction }: RoyalTabsProps) {
  const [tab, setTab] = useState(initial);

  const handleTabChange = (value: string) => {
    setTab(value);
    onNavigate(value);
  };

  return (
    <TabBar
      aria-label="Primary navigation"
      value={tab}
      onValueChange={handleTabChange}
    >
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

// SCREEN_RECIPE: LobbyScreen
export interface LobbyScreenProps extends NavigationProps {
  onAddCoins?: () => void;
  onAddGems?: () => void;
  onClaimGift?: () => void;
  onOpenPass?: () => void;
  onOpenSettings?: () => void;
  onPlay?: () => void;
}

/** Copy-ready dashboard recipe; hosts replace sample data and callbacks. */
export function LobbyScreen({
  onAddCoins = ignoreAction,
  onAddGems = ignoreAction,
  onClaimGift = ignoreAction,
  onNavigate = ignoreAction,
  onOpenPass = ignoreAction,
  onOpenSettings = ignoreAction,
  onPlay = ignoreAction,
}: LobbyScreenProps = {}) {
  return (
    <Screen aria-label="Royal Games home">
      <RoyalChrome
        name="Home"
        onAddCoins={onAddCoins}
        onAddGems={onAddGems}
        onOpenSettings={onOpenSettings}
      />
      <Body layout="dashboard">
        <Wordmark strap="His Majesty awaits">Royal Games</Wordmark>
        <Panel tone="paper">
          <GroupKicker variant="compact">Chapter 3</GroupKicker>
          <ScreenName as="h2">The East Gate</ScreenName>
          <Counters aria-label="Chapter objectives" layout="spread">
            <Counter density="compact" graphic="⚑">
              12/20
            </Counter>
            <Counter density="compact" graphic="★">
              31/60
            </Counter>
            <TimerPill aria-label="Two days and four hours remaining">
              ⏳ <b>2d 4h</b>
            </TimerPill>
          </Counters>
          <Button tone="accent" size="hero" onClick={onPlay}>
            PLAY
          </Button>
        </Panel>
        <Panel tone="primary">
          <SettingsRow
            variant="control"
            icon="👑"
            label="Royal Pass"
            caption="12 rewards waiting"
            control={
              <Counters aria-label="Royal Pass position and action">
                <PageDots count={3} index={0} />
                <Button tone="gold" size="small" onClick={onOpenPass}>
                  GO
                </Button>
              </Counters>
            }
          />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="stone" density="roomy">
          <SettingsRow
            variant="control"
            icon="🎁"
            label="Daily Gift ready"
            control={
              <Counters aria-label="Daily gift actions">
                <Button tone="positive" size="small" onClick={onClaimGift}>
                  CLAIM
                </Button>
                <TimerPill aria-label="Two days and four hours remaining">
                  ⚑ <b>2d 4h</b>
                </TimerPill>
              </Counters>
            }
          />
        </Dock>
        <RoyalTabs initial="home" onNavigate={onNavigate} />
      </BottomStack>
    </Screen>
  );
}

// SCREEN_RECIPE: MapScreen
export interface MapScreenProps extends NavigationProps {
  onBack?: () => void;
  onSelectStage?: (stage: number) => void;
}

/** Copy-ready authored-scene recipe with host-owned stage actions. */
export function MapScreen({
  onBack = ignoreAction,
  onNavigate = ignoreAction,
  onSelectStage = ignoreAction,
}: MapScreenProps = {}) {
  return (
    <Screen aria-label="World map">
      <MapScene aria-label="Emberfall route">
        <MapPin
          variant="button"
          state="complete"
          stars={2}
          label="Stage seven complete"
          onPress={() => onSelectStage(7)}
          style={{
            insetInlineStart: "calc(var(--rg-u) * 70)",
            insetBlockStart: "calc(var(--rg-u) * 590)",
          }}
        >
          7
        </MapPin>
        <MapPin
          variant="button"
          state="complete"
          stars={3}
          label="Stage eight complete"
          onPress={() => onSelectStage(8)}
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
          onPress={() => onSelectStage(9)}
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
        <Button
          tone="primary"
          size="small"
          iconOnly
          aria-label="Back"
          onClick={onBack}
        >
          ‹
        </Button>
        <Ribbon size="compact">World 2 · Emberfall</Ribbon>
        <Counter graphic={<Heart />}>4</Counter>
      </FloatChrome>
      <BottomStack>
        <Dock tone="stone" density="shallow">
          <SettingsRow
            variant="control"
            icon={<LevelBadge level="9" label="LVL" aria-label="Level nine" />}
            label="Castle Gates"
            caption="Beat it with 3 ★ to earn a chest"
            control={
              <Button
                tone="accent"
                size="small"
                onClick={() => onSelectStage(9)}
              >
                GO
              </Button>
            }
          />
          <Meter value={12} max={20} label="Chapter 3" valueText="12 / 20" />
        </Dock>
        <RoyalTabs initial="map" onNavigate={onNavigate} />
      </BottomStack>
    </Screen>
  );
}

// SCREEN_RECIPE: ShopScreen
export interface ShopScreenProps extends NavigationProps {
  onBuyBundle?: () => void;
  onBuyPack?: (pack: "80" | "500" | "1200") => void;
  onWatchAd?: () => void;
}

/** Copy-ready commerce recipe with stable product and action columns. */
export function ShopScreen({
  onBuyBundle = ignoreAction,
  onBuyPack = ignoreAction,
  onNavigate = ignoreAction,
  onWatchAd = ignoreAction,
}: ShopScreenProps = {}) {
  return (
    <Screen aria-label="Royal Shop">
      <Dock edge="top" tone="stone" density="compact">
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
                <GroupKicker variant="compact">Royal Bundle</GroupKicker>
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
          <Button tone="gold" width="extended" onClick={onBuyBundle}>
            <Strike>€19.99</Strike> €9.99 · BUY
          </Button>
        </Panel>
        <Panel tone="primary">
          <GroupKicker>Gems</GroupKicker>
          <PackRow>
            <Pack
              art={<Gem size="large" />}
              action={
                <Button
                  tone="gold"
                  size="small"
                  onClick={() => onBuyPack("80")}
                >
                  €1.99
                </Button>
              }
            >
              80
            </Pack>
            <Pack
              art={<Gem size="large" />}
              action={
                <Button
                  tone="gold"
                  size="small"
                  onClick={() => onBuyPack("500")}
                >
                  €8.99
                </Button>
              }
            >
              500
            </Pack>
            <Pack
              art={<Gem size="large" />}
              action={
                <Button
                  tone="gold"
                  size="small"
                  onClick={() => onBuyPack("1200")}
                >
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
        <Dock tone="primary" density="tight">
          <ShopRow
            art="🎬"
            title="Free coins"
            caption="Watch an ad · 150 coins"
            action={
              <Button tone="positive" size="small" onClick={onWatchAd}>
                FREE
              </Button>
            }
          />
        </Dock>
        <RoyalTabs initial="shop" onNavigate={onNavigate} />
      </BottomStack>
    </Screen>
  );
}

// SCREEN_RECIPE: VictoryScreen
export interface VictoryScreenProps {
  onContinue?: () => void;
  onReplay?: () => void;
  onShare?: () => void;
}

/** Copy-ready result recipe with an independent, non-overlapping action dock. */
export function VictoryScreen({
  onContinue = ignoreAction,
  onReplay = ignoreAction,
  onShare = ignoreAction,
}: VictoryScreenProps = {}) {
  return (
    <Screen aria-label="Victory results" tone="forest">
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
          <Counters aria-label="Rewards" layout="center">
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
          <Button tone="positive" size="hero" width="wide" onClick={onContinue}>
            CONTINUE
          </Button>
          <Counters aria-label="Result actions" layout="spread">
            <Button tone="primary" size="small" width="full" onClick={onReplay}>
              ↻ REPLAY
            </Button>
            <Button tone="primary" size="small" width="full" onClick={onShare}>
              SHARE
            </Button>
          </Counters>
        </Dock>
      </BottomStack>
    </Screen>
  );
}

// SCREEN_RECIPE: RanksScreen
export interface RanksScreenProps extends NavigationProps {}

/** Copy-ready leaderboard recipe with independent podium and list regions. */
export function RanksScreen({
  onNavigate = ignoreAction,
}: RanksScreenProps = {}) {
  return (
    <Screen aria-label="Season leaderboard">
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
      <Body layout="list">
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
        <RoyalTabs initial="ranks" onNavigate={onNavigate} />
      </BottomStack>
    </Screen>
  );
}

// SCREEN_RECIPE: SettingsScreen
export interface SettingsScreenProps extends NavigationProps {
  onBack?: () => void;
  onEditProfile?: () => void;
  onOpenCloudSave?: () => void;
  onOpenLanguage?: () => void;
  onRestore?: () => void;
  onSupport?: () => void;
}

/** Copy-ready controlled settings recipe with a dedicated scrolling form slot. */
export function SettingsScreen({
  onBack = ignoreAction,
  onEditProfile = ignoreAction,
  onNavigate = ignoreAction,
  onOpenCloudSave = ignoreAction,
  onOpenLanguage = ignoreAction,
  onRestore = ignoreAction,
  onSupport = ignoreAction,
}: SettingsScreenProps = {}) {
  const [music, setMusic] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <Screen aria-label="Settings">
      <Dock edge="top" tone="stone" flush>
        <SettingsRow
          variant="control"
          icon={
            <Button
              tone="primary"
              size="small"
              iconOnly
              aria-label="Back"
              onClick={onBack}
            >
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
            <Button tone="primary" size="small" onClick={onEditProfile}>
              EDIT
            </Button>
          }
        />
      </Dock>
      <Body layout="form">
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
            icon="🔔︎"
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
            control={<Slider aria-label="Volume" defaultValue={62} />}
          />
        </Panel>
        <Panel tone="paper">
          <GroupKicker>Game</GroupKicker>
          <SettingsRow
            variant="action"
            icon="🌐︎"
            label="Language"
            trailing="English"
            onPress={onOpenLanguage}
          />
          <SettingsRow
            variant="control"
            icon="🔔︎"
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
            icon="☁︎"
            label="Cloud save"
            trailing="Synced ✓"
            onPress={onOpenCloudSave}
          />
        </Panel>
      </Body>
      <BottomStack>
        <Dock tone="stone" density="compact">
          <Counters aria-label="Settings support actions" layout="spread">
            <Button tone="paper" size="small" width="full" onClick={onRestore}>
              RESTORE
            </Button>
            <Button
              tone="primary"
              size="small"
              width="full"
              onClick={onSupport}
            >
              SUPPORT
            </Button>
          </Counters>
          <Version>royal-games-ui · v1.3.0</Version>
        </Dock>
        <RoyalTabs initial="more" onNavigate={onNavigate} />
      </BottomStack>
    </Screen>
  );
}
