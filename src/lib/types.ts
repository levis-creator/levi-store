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
  market?: string;
  imageUrl?: string;
  status?: boolean;
  isPublished: boolean;
};
export type Coupon = {
  title: string;
  couponCode: string;
  expiryDate: string;
  isPublished: boolean;
};
export type Banner = {
  title: string;
  description: string;
  url: string;
  status?: boolean;
  isPublished: boolean;
};
export type DummyData = {
  id: string;
  title: string;
};
export type Product = {
  title: string;
  description: string;
  slug: string;
  images?: string[];
  category?: string;
  sku?: string;
  barcode: string;
  productPrice: number;
  salesPrice: number;
  farmer: string;
  tags: string[];
  isPublished: boolean;
};
export type Farmer = {
  name: string;
  phone: string;
  email: string;
  physicalAddress: string;
  contactPerson: string;
  contactPersonPhone: string;
  terms: string;
  notes?: string;
  isActive: boolean;
};

export type Market = {
  title: string;
  description: string;
  logo: string;
  isActive: boolean;
};
