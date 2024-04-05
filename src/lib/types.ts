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
export type Category = {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  status?: boolean;
};
export type Coupon = {
  title: string;
  couponCode: string;
  expiryDate: string;
};
export type Banner = {
  title: string;
  description: string;
  url: string;
  status?: boolean;
};
