"use client";
"use strict";
exports.__esModule = true;
exports.sideBarLinks = void 0;
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var SideCollapse_1 = require("./SideCollapse");
exports.sideBarLinks = [
    {
        id: 1,
        title: "Dashboard",
        icons: React.createElement(lucide_react_1.LayoutGrid, null),
        path: "/"
    },
    {
        id: 2,
        title: "Catalogue",
        icons: React.createElement(lucide_react_1.Slack, null),
        path: [
            {
                id: 5,
                title: "Products",
                path: "/products"
            },
            {
                id: 3,
                title: "Categories",
                path: "/categories"
            },
            {
                id: 4,
                title: "Coupons",
                path: "/coupons"
            },
            {
                id: 2,
                title: "Banners",
                path: "/banners"
            },
        ]
    },
    {
        id: 3,
        title: "Customers",
        path: "/customers",
        icons: React.createElement(lucide_react_1.Users, null)
    },
    {
        id: 11,
        title: "Markets",
        path: "/markets",
        icons: React.createElement(lucide_react_1.Store, null)
    },
    {
        id: 12,
        title: "Farmers",
        path: "/farmers",
        icons: React.createElement(lucide_react_1.SquareUser, null)
    },
    {
        id: 6,
        title: "Orders",
        path: "/orders",
        icons: React.createElement(lucide_react_1.Compass, null)
    },
    {
        id: 7,
        title: "Our Staff",
        path: "/staff",
        icons: React.createElement(lucide_react_1.User, null)
    },
    {
        id: 9,
        title: "Online Store",
        path: "/staff",
        icons: React.createElement(lucide_react_1.Target, null)
    },
    {
        id: 8,
        title: "Settings",
        path: "/settings",
        icons: React.createElement(lucide_react_1.Settings, null)
    },
];
var SideBar = function (_a) {
    var show = _a.show;
    var pathname = navigation_1.usePathname();
    var sideBarItemStyle = function (path) {
        var pathName = path == "/" ? "/dashboard" : "/dashboard" + path;
        if (pathname == pathName) {
            return "border-l-green-600 text-green-500";
        }
        else {
            return "border-l-transparent";
        }
    };
    return (React.createElement("div", { className: " bg-white text-slate-800  dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 fixed left-0 top-0 overflow-y-auto" },
        React.createElement("div", { className: "px-6 py-4" },
            React.createElement(link_1["default"], { href: "#", className: "" },
                React.createElement(image_1["default"], { src: "/logo.png", alt: "alt", width: 0, height: 0, className: "w-36 h-auto ", unoptimized: true }))),
        React.createElement("ul", { className: "space-y-3 " },
            exports.sideBarLinks.map(function (link) { return (React.createElement("li", { key: link.id }, typeof link.path == "string" ? (React.createElement(link_1["default"], { href: "/dashboard" + link.path, className: "flex items-center space-x-3 px-6 py-2 border-l-[6px]  " + sideBarItemStyle(link.path) },
                link.icons,
                React.createElement("span", null, link.title))) : (React.createElement(SideCollapse_1["default"], { data: link })))); }),
            React.createElement("li", { className: "px-7 py-2" },
                React.createElement("button", { className: "bg-green-600 flex px-5 py-3 rounded-md text-slate-50 gap-3" },
                    React.createElement(lucide_react_1.LogOut, null),
                    React.createElement("span", null, "Logout"))))));
};
exports["default"] = react_1.memo(SideBar);
