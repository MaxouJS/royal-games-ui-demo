"use client";

import { Keys, KeyRow, Key } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Keys>
        <KeyRow>{"QWERTYUIOP".split("").map((k) => <Key key={k}>{k}</Key>)}</KeyRow>
        <KeyRow>{"ASDFGHJKL".split("").map((k) => <Key key={k}>{k}</Key>)}</KeyRow>
        <KeyRow>
          <Key wide gold>⏎</Key>
          {"ZXCVBNM".split("").map((k) => <Key key={k}>{k}</Key>)}
          <Key wide>⌫</Key>
        </KeyRow>
      </Keys>
    </Stack>
  );
}
