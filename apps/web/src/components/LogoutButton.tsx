"use client";

import { Button } from "components";
import { logout } from "@/libs/firebase/auth";

export const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      ログアウト
    </Button>
  );
};
