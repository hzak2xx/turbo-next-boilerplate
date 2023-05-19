"use client";

import { Button } from "components";

export const AlertButton = () => {
  return (
    <Button
      onClick={() => {
        alert("hogege!");
      }}
    >
      hoge
    </Button>
  );
};
