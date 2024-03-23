import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";

const NotificationItem = () => {
  return (
    <div>
      <DropdownMenuItem className="flex gap-3 items-center py-3 border-b">
        {/* Avatar */}
        <Avatar>
          <AvatarImage />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <p className="truncate overflow-hidden w-60">
            Yellow Sweet Corn Stock out, please restock
          </p>
          <div className="flex gap-2">
            <Badge className="rounded-full bg-red-700">Stock Out</Badge>
            <p>Nov 30 2021 &bull; 12:40PM</p>
          </div>
        </div>
        <button>
          <X />
        </button>
      </DropdownMenuItem>
    </div>
  );
};

export default NotificationItem;
