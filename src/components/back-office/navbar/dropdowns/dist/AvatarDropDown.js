"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var avatar_1 = require("@/components/ui/avatar");
var AvatarDropDown = function (_a) {
    var avatarMenu = _a.avatarMenu;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(dropdown_menu_1.DropdownMenu, null,
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuTrigger, null,
                " ",
                react_1["default"].createElement(avatar_1.Avatar, null,
                    react_1["default"].createElement(avatar_1.AvatarImage, null),
                    react_1["default"].createElement(avatar_1.AvatarFallback, null, "CN"))),
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuContent, { className: "py-2", align: "end" },
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuLabel, null, "My Account"),
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                avatarMenu.map(function (menuItem, i) { return (react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, { onClick: menuItem.handleClick, key: i, className: "w-44" },
                    menuItem.icon,
                    react_1["default"].createElement("span", null, menuItem.title))); })))));
};
exports["default"] = AvatarDropDown;
