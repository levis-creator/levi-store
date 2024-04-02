import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationItem } from "@/lib/types";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

const SideCollapse: React.FC<{ data: NavigationItem }> = ({ data }) => {
  const items: any[] = data.path;
  const [isopen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Collapsible open={isopen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center space-x-6 px-6 py-2 border-l-[6px] border-transparent">
          <div className="flex items-center space-x-3">
            {data.icons}
            <span>{data.title}</span>
          </div>
          {!isopen ? <ChevronRight /> : <ChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col dark:bg-slate-900 mx-4 px-3 pl-6 rounded-md ">
          {items.map((item: any, i: number) => (
            <Link key={i} href={`/dashboard${item.path}`} className="py-1">
              - {item.title}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SideCollapse;
