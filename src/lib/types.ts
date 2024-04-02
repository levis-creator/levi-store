import { ReactElement } from "react";

export type AvatarMenu = {
  title: string;
  icon: ReactElement;
  handleClick: () => void;
};
export type NavigationItem = {
  id?: number;
  title: string;
  icons?: ReactElement;
  path: string | any[];
};
export type NewCategoryInputs = {
  title: string;
};
