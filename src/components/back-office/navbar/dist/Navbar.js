"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var AvatarDropDown_1 = require("./dropdowns/AvatarDropDown");
var NotificationDropDown_1 = require("./dropdowns/notification/NotificationDropDown");
var react_2 = require("react");
var Navbar = function (_a) {
    var setSideBar = _a.setSideBar, isOpen = _a.isOpen;
    var avatarMenu = [
        {
            title: "Dashboard",
            icon: react_1["default"].createElement(lucide_react_1.LayoutDashboard, { className: "mr-2 h-4 w-4" }),
            handleClick: function () { return null; }
        },
        {
            title: "Edit Profile",
            icon: react_1["default"].createElement(lucide_react_1.Settings, { className: "mr-2 h-4 w-4" }),
            handleClick: function () { return console.log("settinf"); }
        },
        {
            title: "Logout",
            icon: react_1["default"].createElement(lucide_react_1.LogOut, { className: "mr-2 h-4 w-4" }),
            handleClick: function () { return null; }
        },
    ];
    var _b = next_themes_1.useTheme(), theme = _b.theme, setTheme = _b.setTheme;
    var handleTheme = function () {
        theme == "dark" ? setTheme("light") : setTheme("dark");
    };
    var handleSideBar = react_1.useCallback(function () {
        setSideBar(function (isOpen) { return !isOpen; });
    }, [setSideBar]);
    return (react_1["default"].createElement("nav", { className: "z-10 " + (isOpen ? "lg:w-[calc(100%-16rem)]" : "w-full") + " flex items-center justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50 h-20 px-8 py-4 fixed " },
        react_1["default"].createElement("button", { className: "text-green-500 fle", onClick: handleSideBar },
            react_1["default"].createElement(lucide_react_1.AlignJustify, null)),
        react_1["default"].createElement("div", { className: "flex space-x-3 text-green-500 " },
            react_1["default"].createElement("button", { onClick: handleTheme }, theme == "dark" ? (react_1["default"].createElement(lucide_react_1.Sun, null)) : (react_1["default"].createElement(lucide_react_1.Moon, { className: "fill-green-500 dark:fill-transparent" }))),
            react_1["default"].createElement(NotificationDropDown_1["default"], { notifications: avatarMenu }),
            react_1["default"].createElement(AvatarDropDown_1["default"], { avatarMenu: avatarMenu }))));
};
exports["default"] = react_2.memo(Navbar);
