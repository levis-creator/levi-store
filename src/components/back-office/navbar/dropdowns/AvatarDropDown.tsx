"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarMenu } from "@/lib/types";

const AvatarDropDown = ({ avatarMenu }: { avatarMenu: AvatarMenu[] }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar>
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="py-2" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {avatarMenu.map((menuItem: AvatarMenu, i: number) => (
            <DropdownMenuItem
              onClick={menuItem.handleClick}
              key={i}
              className="w-44"
            >
              {menuItem.icon}
              <span>{menuItem.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AvatarDropDown;
