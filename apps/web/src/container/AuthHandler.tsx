"use client";

import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthHandler = ({ children }: Props) => {
  useEffect(() => {
    // check auth in client
  }, []);
  return <>{children}</>;
};
