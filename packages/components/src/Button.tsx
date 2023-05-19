"use client";

import * as React from "react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};
