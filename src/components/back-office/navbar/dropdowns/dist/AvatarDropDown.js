"use client";
"use strict";
exports.__esModule = true;
var avatar_1 = require("@/components/ui/avatar");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var AvatarDropDown = function (_a) {
    var avatarMenu = _a.avatarMenu;
    return (React.createElement("div", null,
        React.createElement(dropdown_menu_1.DropdownMenu, null,
            React.createElement(dropdown_menu_1.DropdownMenuTrigger, null,
                " ",
                React.createElement(avatar_1.Avatar, null,
                    React.createElement(avatar_1.AvatarImage, null),
                    React.createElement(avatar_1.AvatarFallback, null, "CN"))),
            React.createElement(dropdown_menu_1.DropdownMenuContent, { className: "py-2", align: "end" },
                React.createElement(dropdown_menu_1.DropdownMenuLabel, null, "My Account"),
                React.createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                avatarMenu.map(function (menuItem, i) { return (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: menuItem.handleClick, key: i, className: "w-44" },
                    menuItem.icon,
                    React.createElement("span", null, menuItem.title))); })))));
};
exports["default"] = AvatarDropDown;
