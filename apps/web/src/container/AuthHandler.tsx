"use client";

import { useEffect } from "react";
import { checkAuth } from "@/libs/firebase/auth";

type Props = {
  children: React.ReactNode;
};

export const AuthHandler = ({ children }: Props) => {
  useEffect(() => {
    checkAuth({
      onSuccessAuth: (user) => {
        console.log(user);
      },
      onFailureAuth: () => {
        console.log("user not login");
      },
    });
  }, []);
  return <>{children}</>;
};
