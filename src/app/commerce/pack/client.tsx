"use client";

import { Pack, PackRow, Gem, Button } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <PackRow>
        <Pack
          art={<Gem size="large" />}
          action={
            <Button tone="gold" size="small">
              €1.99
            </Button>
          }
        >
          80 gems
        </Pack>
        <Pack
          art={<Gem size="large" />}
          action={
            <Button tone="gold" size="small">
              €8.99
            </Button>
          }
        >
          500 gems
        </Pack>
        <Pack
          art={<Gem size="large" />}
          action={
            <Button tone="gold" size="small">
              €17.99
            </Button>
          }
        >
          1,200 gems
        </Pack>
      </PackRow>
    </Stack>
  );
}
