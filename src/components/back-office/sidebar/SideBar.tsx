"use client";
import { NavigationItem } from "@/lib/types";
import {
  Building2,
  Compass,
  LayoutGrid,
  LogOut,
  Settings,
  Slack,
  SquareUser,
  Store,
  Target,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import SideCollapse from "./SideCollapse";

export let sideBarLinks: NavigationItem[] = [
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
        id: 5,
        title: "Products",
        path: "/products",
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
        id: 2,
        title: "Banners",
        path: "/banners",
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
    id: 6,
    title: "Orders",
    path: "/orders",
    icons: <Compass />,
  },
  {
    id: 7,
    title: "Our Staff",
    path: "/staff",
    icons: <User />,
  },
  {
    id: 7,
    title: "Community",
    path: "/community",
    icons: <Building2 />,
  },
  {
    id: 9,
    title: "Online Store",
    path: "/staff",
    icons: <Target />,
  },
  {
    id: 8,
    title: "Settings",
    path: "/settings",
    icons: <Settings />,
  },
];

const SideBar = ({ show }: { show: boolean }) => {
  const pathname = usePathname();

  const sideBarItemStyle = (path: string): string => {
    const pathName = path == "/" ? "/dashboard" : `/dashboard${path}`;
    if (pathname == pathName) {
      return "border-l-green-600 text-green-500";
    } else {
      return "border-l-transparent";
    }
  };
  return (
    <div
      className={` bg-white text-slate-800  dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 fixed left-0 top-0 overflow-y-auto`}
    >
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
        {sideBarLinks.map((link: NavigationItem) => (
          <li key={link.id}>
            {typeof link.path == "string" ? (
              <Link
                href={`/dashboard${link.path}`}
                className={`flex items-center space-x-3 px-6 py-2 border-l-[6px]  ${sideBarItemStyle(
                  link.path
                )}`}
              >
                {link.icons}
                <span>{link.title}</span>
              </Link>
            ) : (
              <SideCollapse data={link} />
            )}
          </li>
        ))}
        <li className="px-7 py-2">
          <button className="bg-green-600 flex px-5 py-3 rounded-md text-slate-50 gap-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default memo(SideBar);
