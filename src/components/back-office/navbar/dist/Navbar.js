"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var AvatarDropDown_1 = require("./dropdowns/AvatarDropDown");
var NotificationDropDown_1 = require("./dropdowns/notification/NotificationDropDown");
var react_1 = require("react");
var Navbar = function () {
    var avatarMenu = [
        {
            title: "Dashboard",
            icon: React.createElement(lucide_react_1.LayoutDashboard, { className: "mr-2 h-4 w-4" }),
            handleClick: function () { return null; }
        },
        {
            title: "Edit Profile",
            icon: React.createElement(lucide_react_1.Settings, { className: "mr-2 h-4 w-4" }),
            handleClick: function () { return console.log("settinf"); }
        },
        {
            title: "Logout",
            icon: React.createElement(lucide_react_1.LogOut, { className: "mr-2 h-4 w-4" }),
            handleClick: function () { return null; }
        },
    ];
    var _a = next_themes_1.useTheme(), theme = _a.theme, setTheme = _a.setTheme;
    var _b = react_1.useState(true), isDark = _b[0], setIsDark = _b[1];
    var handleTheme = function () {
        theme == "dark" ? setTheme("light") : setTheme("dark");
    };
    return (React.createElement("nav", { className: "z-10 w-[calc(100%-16rem)] flex items-center justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50 h-20 px-8 py-4 fixed left-64" },
        React.createElement("button", { className: "text-green-500" },
            React.createElement(lucide_react_1.AlignJustify, null)),
        React.createElement("div", { className: "flex space-x-3 text-green-500 " },
            React.createElement("button", { onClick: handleTheme }, theme == "dark" ? (React.createElement(lucide_react_1.Sun, null)) : (React.createElement(lucide_react_1.Moon, { className: "fill-green-500 dark:fill-transparent" }))),
            React.createElement(NotificationDropDown_1["default"], { notifications: avatarMenu }),
            React.createElement(AvatarDropDown_1["default"], { avatarMenu: avatarMenu }))));
};
exports["default"] = Navbar;
