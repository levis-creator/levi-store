"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import NotificationItem from "./NotificationItem";
const NotificationDropDown = ({ notifications }: { notifications: any[] }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="relative inline-flex items-center p-3 text-sm font-medium text-center  bg-transparent rounded-lg">
          {" "}
          <Bell className="fill-green-500 dark:fill-transparent" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-6 dark:border-gray-900">
            20
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="py-2 w-96" align="end">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {notifications.map((menuItem: any, i: number) => (
            <NotificationItem key={i} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationDropDown;
