"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var SideDropDown = function (_a) {
    var data = _a.data;
    var items = data.path;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(dropdown_menu_1.DropdownMenu, null,
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuTrigger, null,
                " ",
                react_1["default"].createElement("button", { className: "flex items-center space-x-6 px-6 py-2 border-l-[6px] border-transparent" },
                    react_1["default"].createElement("div", { className: "flex items-center space-x-3" },
                        data.icons,
                        react_1["default"].createElement("span", null, data.title)),
                    react_1["default"].createElement(lucide_react_1.ChevronRight, null))),
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuContent, { className: "" },
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuLabel, null, "My Account"),
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                items.map(function (menuItem, i) { return (react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, { key: i, className: "" },
                    "-",
                    react_1["default"].createElement("span", null, menuItem.title))); })))));
};
exports["default"] = SideDropDown;
