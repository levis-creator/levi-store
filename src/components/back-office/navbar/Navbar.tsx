"use client";
import { AvatarMenu, Themes } from "@/lib/types";
import {
  AlignJustify,
  LayoutDashboard,
  LogOut,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import AvatarDropDown from "./dropdowns/AvatarDropDown";
import NotificationDropDown from "./dropdowns/notification/NotificationDropDown";
import { useState } from "react";

const Navbar = () => {
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
  const [isDark, setIsDark] = useState<boolean>(true);
  const handleTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <nav className="z-10 w-[calc(100%-16rem)] flex items-center justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50 h-20 px-8 py-4 fixed left-64">
      {/* menuicon */}
      <button className="text-green-500">
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
        {/* <User /> */}
      </div>
    </nav>
  );
};

export default Navbar;
