"use client";

import { Pack, PackRow, Gem, Button } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <PackRow>
        <Pack art={<><Gem size="lg" />80</>} action={<Button tone="gold" size="sm" block>€1.99</Button>} />
        <Pack art={<><Gem size="lg" />500</>} action={<Button tone="gold" size="sm" block>€8.99</Button>} />
        <Pack art={<><Gem size="lg" />1200</>} action={<Button tone="gold" size="sm" block>€17.99</Button>} />
      </PackRow>
    </Stack>
  );
}
