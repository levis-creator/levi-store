import { ReactElement } from "react";
import { LayoutGrid } from "lucide-react";
export type SideBarItem = {
  id: number;
  title: string;
  Icons?: ReactElement;
  path: string | any[];
};

export let sideBarLinks: SideBarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    Icons: <LayoutGrid />,
    path: "/",
  },
  {
    id: 2,
    title: "Catalogue",
    path: [
      {
        id: 1,
        title: "Attributes",
        path: "/attributes",
      },
      {
        id: 2,
        title: "banners",
        path: "/banners",
      },
      {
        id: 3,
        title: "Categories",
        path: "/categories",
      },
      {
        id: 4,
        title: "Coupons",
        path: "/coupons",
      },
      {
        id: 5,
        title: "Products",
        path: "/products",
      },
    ],
  },
  {
    id: 3,
    title: "Customers",
    path: "/customers",
  },
  {
    id: 4,
    title: "Farmers",
    path: "/farmers",
  },
  {
    id: 5,
    title: "Markets",
    path: "/markets",
  },
  {
    id: 6,
    title: "Orders",
    path: "/staff",
  },
  {
    id: 7,
    title: "Our Staff",
    path: "/staff",
  },
  {
    id: 8,
    title: "Settings",
    path: "/staff",
  },
  {
    id: 9,
    title: "Online Store",
    path: "/staff",
  },
];
