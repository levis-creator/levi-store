import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "./logo.png";
import { ReactElement } from "react";
import {
  LayoutGrid,
  Slack,
  Users,
  Compass,
  User,
  Settings,
  Target,
  Globe,
  Store,
  SquareUser,
} from "lucide-react";
export type SideBarItem = {
  id: number;
  title: string;
  icons?: ReactElement;
  path: string | any[];
};

export let sideBarLinks: SideBarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    icons: <LayoutGrid />,
    path: "/",
  },
  {
    id: 2,
    title: "Catalogue",
    icons: <Slack />,
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
    icons: <Users />,
  },
  {
    id: 6,
    title: "Orders",
    path: "/orders",
    icons: <Compass />,
  },
  {
    id: 11,
    title: "Markets",
    path: "/markets",
    icons: <Store />,
  },
  {
    id: 12,
    title: "Farmers",
    path: "/farmers",
    icons: <SquareUser />,
  },
  {
    id: 7,
    title: "Our Staff",
    path: "/staff",
    icons: <User />,
  },
  {
    id: 8,
    title: "Settings",
    path: "/staff",
    icons: <Settings />,
  },
  {
    id: 10,
    title: "International",
    path: "/international",
    icons: <Globe />,
  },

  {
    id: 9,
    title: "Online Store",
    path: "/staff",
    icons: <Target />,
  },
];

const SideBar = () => {
  return (
    <div className="  bg-white text-slate-800  dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 fixed left-0 top-0 overflow-y-auto">
      {/* logo */}
      <div className="px-6 py-4">
        <Link href="#" className="">
          <Image
            src="/logo.png"
            alt="alt"
            width={0}
            height={0}
            className="w-36 h-auto "
            unoptimized
          />
        </Link>
      </div>
      <ul className="space-y-3 ">
        {sideBarLinks.map((link: SideBarItem) => (
          <li key={link.id}>
            {typeof link.path == "string" ? (
              <Link
                href={`/dashboard/${link.path}`}
                className="flex items-center space-x-3 px-6 py-4 border-l-[6px] border-green-600"
              >
                {link.icons}
                <span>{link.title}</span>
              </Link>
            ) : (
              <a className="flex items-center space-x-3 px-6 py-4 border-l-[6px] border-transparent">
                {link.icons}
                <span>{link.title}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
