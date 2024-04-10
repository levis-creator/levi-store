"use client";
import { AvatarMenu } from "@/lib/types";
import {
  AlignJustify,
  LayoutDashboard,
  LogOut,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { memo, useCallback } from "react";
import AvatarDropDown from "./dropdowns/AvatarDropDown";
import NotificationDropDown from "./dropdowns/notification/NotificationDropDown";

const Navbar = ({
  setSideBar,
  isOpen,
}: {
  setSideBar: any;
  isOpen: boolean;
}) => {
  const avatarMenu: AvatarMenu[] = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      handleClick: () => null,
    },
    {
      title: "Edit Profile",
      icon: <Settings className="mr-2 h-4 w-4" />,
      handleClick: () => console.log("settinf"),
    },
    {
      title: "Logout",
      icon: <LogOut className="mr-2 h-4 w-4" />,
      handleClick: () => null,
    },
  ];
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  const handleSideBar = useCallback(() => {
    setSideBar((isOpen: boolean) => !isOpen);
  }, [setSideBar]);
  return (
    <nav
      className={`z-10 ${
        isOpen ? "lg:w-[calc(100%-16rem)]" : "w-full"
      } flex items-center justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50 h-20 px-8 py-4 fixed `}
    >
      {/* menuicon */}
      <button className="text-green-500 fle" onClick={handleSideBar}>
        <AlignJustify />
      </button>
      {/* three cmicons */}
      <div className="flex space-x-3 text-green-500 ">
        <button onClick={handleTheme}>
          {theme == "dark" ? (
            <Sun />
          ) : (
            <Moon className="fill-green-500 dark:fill-transparent" />
          )}
        </button>
        <NotificationDropDown notifications={avatarMenu} />

        <AvatarDropDown avatarMenu={avatarMenu} />
      </div>
    </nav>
  );
};

export default memo(Navbar);
