"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var AvatarDropDown_1 = require("./dropdowns/AvatarDropDown");
var NotificationDropDown_1 = require("./dropdowns/notification/NotificationDropDown");
var Navbar = function (_a) {
    var setSideBar = _a.setSideBar, isOpen = _a.isOpen;
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
    var _b = next_themes_1.useTheme(), theme = _b.theme, setTheme = _b.setTheme;
    var handleTheme = function () {
        theme == "dark" ? setTheme("light") : setTheme("dark");
    };
    var handleSideBar = react_1.useCallback(function () {
        setSideBar(function (isOpen) { return !isOpen; });
    }, [setSideBar]);
    return (React.createElement("nav", { className: "z-10 " + (isOpen ? "lg:w-[calc(100%-16rem)]" : "w-full") + " flex items-center justify-between bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50 h-20 px-8 py-4 fixed " },
        React.createElement("button", { className: "text-green-500 fle", onClick: handleSideBar },
            React.createElement(lucide_react_1.AlignJustify, null)),
        React.createElement("div", { className: "flex space-x-3 text-green-500 " },
            React.createElement("button", { onClick: handleTheme }, theme == "dark" ? (React.createElement(lucide_react_1.Sun, null)) : (React.createElement(lucide_react_1.Moon, { className: "fill-green-500 dark:fill-transparent" }))),
            React.createElement(NotificationDropDown_1["default"], { notifications: avatarMenu }),
            React.createElement(AvatarDropDown_1["default"], { avatarMenu: avatarMenu }))));
};
exports["default"] = react_1.memo(Navbar);
