"use strict";
exports.__esModule = true;
var avatar_1 = require("@/components/ui/avatar");
var badge_1 = require("@/components/ui/badge");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var NotificationItem = function () {
    return (React.createElement("div", null,
        React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "flex gap-3 items-center py-3 border-b" },
            React.createElement(avatar_1.Avatar, null,
                React.createElement(avatar_1.AvatarImage, null),
                React.createElement(avatar_1.AvatarFallback, null, "CN")),
            React.createElement("div", { className: "flex-1 space-y-2" },
                React.createElement("p", { className: "truncate overflow-hidden w-60" }, "Yellow Sweet Corn Stock out, please restock"),
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement(badge_1.Badge, { className: "rounded-full bg-red-700" }, "Stock Out"),
                    React.createElement("p", null, "Nov 30 2021 \u2022 12:40PM"))),
            React.createElement("button", null,
                React.createElement(lucide_react_1.X, null)))));
};
exports["default"] = NotificationItem;
