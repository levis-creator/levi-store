"use strict";
exports.__esModule = true;
var Navbar_1 = require("@/components/back-office/navbar/Navbar");
var SideBar_1 = require("@/components/back-office/sidebar/SideBar");
var react_1 = require("react");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "flex" },
        react_1["default"].createElement("div", { className: "z-10" },
            react_1["default"].createElement(SideBar_1["default"], null)),
        react_1["default"].createElement("div", { className: "lg:ml-64 ml-0 flex-grow w-full z-10 " },
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("main", { className: "min-h-screen mt-16 p-8 bg-slate-50 dark:bg-slate-900 text-slate-50" }, children))));
};
exports["default"] = Layout;
