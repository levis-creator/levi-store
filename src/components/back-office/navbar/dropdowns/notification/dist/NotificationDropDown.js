"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var NotificationItem_1 = require("./NotificationItem");
var NotificationDropDown = function (_a) {
    var notifications = _a.notifications;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(dropdown_menu_1.DropdownMenu, null,
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuTrigger, { className: "relative inline-flex items-center p-3 text-sm font-medium text-center  bg-transparent rounded-lg" },
                " ",
                react_1["default"].createElement(lucide_react_1.Bell, { className: "fill-green-500 dark:fill-transparent" }),
                react_1["default"].createElement("span", { className: "sr-only" }, "Notifications"),
                react_1["default"].createElement("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-6 dark:border-gray-900" }, "20")),
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuContent, { className: "py-2 w-96", align: "end" },
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuLabel, null, "Notifications"),
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                notifications.map(function (menuItem, i) { return (react_1["default"].createElement(NotificationItem_1["default"], { key: i })); })))));
};
exports["default"] = NotificationDropDown;
