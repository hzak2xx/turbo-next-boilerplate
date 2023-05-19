"use client";

import { Button } from "components";
import { signInWithGoogle } from "@/libs/firebase/auth";

export const LoginButton = () => {
  return (
    <Button
      onClick={() => {
        signInWithGoogle();
      }}
    >
      Googleログイン
    </Button>
  );
};
