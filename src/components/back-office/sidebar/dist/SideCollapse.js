"use strict";
exports.__esModule = true;
var collapsible_1 = require("@/components/ui/collapsible");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var SideCollapse = function (_a) {
    var data = _a.data;
    var items = data.path;
    var _b = react_1.useState(false), isopen = _b[0], setIsOpen = _b[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(collapsible_1.Collapsible, { open: isopen, onOpenChange: setIsOpen },
            react_1["default"].createElement(collapsible_1.CollapsibleTrigger, { className: "flex items-center space-x-6 px-6 py-2 border-l-[6px] border-transparent" },
                react_1["default"].createElement("div", { className: "flex items-center space-x-3" },
                    data.icons,
                    react_1["default"].createElement("span", null, data.title)),
                !isopen ? react_1["default"].createElement(lucide_react_1.ChevronRight, null) : react_1["default"].createElement(lucide_react_1.ChevronDown, null)),
            react_1["default"].createElement(collapsible_1.CollapsibleContent, { className: "flex flex-col dark:bg-slate-900 mx-4 px-3 pl-6 rounded-md " }, items.map(function (item, i) { return (react_1["default"].createElement(link_1["default"], { key: i, href: "/dashboard" + item.path, className: "py-1" },
                "- ",
                item.title)); })))));
};
exports["default"] = SideCollapse;
