import { ReactElement } from "react";

export type AvatarMenu = {
  title: string;
  icon: ReactElement;
  handleClick: () => void;
};

export type Themes = "dark" | "light";
