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
  id?: number | string;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  status?: boolean;
  markets: string[];
};
export type Coupon = {
  title: string;
  couponCode: string;
  expiryDate: string;
  isActive: boolean;
};
export type Banner = {
  title: string;
  description: string;
  url: string;
  isPublished: boolean;
};
export type SimplifiedData = {
  id: string | number;
  title: string;
};
export type Product = {
  title: string;
  description: string;
  slug: string;
  images?: string[];
  category?: string[];
  sku?: string;
  barcode: string;
  productPrice: number;
  salesPrice: number;
  farmer: string;
  tags: string[];
  isPublished: boolean;
  isWholeSale: boolean;
  wholeSalePrice: number;
  minWholeSaleQuantity: number;
  unit: string;
  qty: number;
};
export type Farmer = {
  id?: string;
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
  categories: number[];
};

export type Staff = {
  name: string;
  phone: string;
  password: string;
  email: string;
  physicalAddress: string;
  notes?: string;
};

export type Training = {
  title: string;
  slug: string;
  description: string;
  content: string;
  categories: string;
  thumbnail: string;
  isPublished: boolean;
};

export type RequestParams = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
  data: object;
  resourceName: string;
  reset: () => void;
  redirect: () => void;
};
