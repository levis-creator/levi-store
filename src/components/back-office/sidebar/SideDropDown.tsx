import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SideBarItem } from "@/lib/types";
import { ChevronRight } from "lucide-react";

const SideDropDown = ({ data }: { data: SideBarItem }) => {
  const items: any[] = data.path;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <button className="flex items-center space-x-6 px-6 py-2 border-l-[6px] border-transparent">
            <div className="flex items-center space-x-3">
              {data.icons}
              <span>{data.title}</span>
            </div>
            <ChevronRight />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items.map((menuItem: any, i: number) => (
            <DropdownMenuItem key={i} className="">
              -<span>{menuItem.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SideDropDown;
