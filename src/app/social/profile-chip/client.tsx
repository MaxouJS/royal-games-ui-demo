"use client";

import { ProfileChip, Avatar } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <ProfileChip
      avatar={<Avatar size="small">♛</Avatar>}
      name="Max"
      caption="LEVEL 12"
    />
  );
}
