"use strict";
exports.__esModule = true;
exports.sideBarLinks = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
exports.sideBarLinks = [
    {
        id: 1,
        title: "Dashboard",
        icons: react_1["default"].createElement(lucide_react_1.LayoutGrid, null),
        path: "/"
    },
    {
        id: 2,
        title: "Catalogue",
        icons: react_1["default"].createElement(lucide_react_1.Slack, null),
        path: [
            {
                id: 1,
                title: "Attributes",
                path: "/attributes"
            },
            {
                id: 2,
                title: "banners",
                path: "/banners"
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
                id: 5,
                title: "Products",
                path: "/products"
            },
        ]
    },
    {
        id: 3,
        title: "Customers",
        path: "/customers",
        icons: react_1["default"].createElement(lucide_react_1.Users, null)
    },
    {
        id: 6,
        title: "Orders",
        path: "/orders",
        icons: react_1["default"].createElement(lucide_react_1.Compass, null)
    },
    {
        id: 11,
        title: "Markets",
        path: "/markets",
        icons: react_1["default"].createElement(lucide_react_1.Store, null)
    },
    {
        id: 12,
        title: "Farmers",
        path: "/farmers",
        icons: react_1["default"].createElement(lucide_react_1.SquareUser, null)
    },
    {
        id: 7,
        title: "Our Staff",
        path: "/staff",
        icons: react_1["default"].createElement(lucide_react_1.User, null)
    },
    {
        id: 8,
        title: "Settings",
        path: "/staff",
        icons: react_1["default"].createElement(lucide_react_1.Settings, null)
    },
    {
        id: 10,
        title: "International",
        path: "/international",
        icons: react_1["default"].createElement(lucide_react_1.Globe, null)
    },
    {
        id: 9,
        title: "Online Store",
        path: "/staff",
        icons: react_1["default"].createElement(lucide_react_1.Target, null)
    },
];
var SideBar = function () {
    return (react_1["default"].createElement("div", { className: "  bg-white text-slate-800  dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 fixed left-0 top-0 overflow-y-auto" },
        react_1["default"].createElement("div", { className: "px-6 py-4" },
            react_1["default"].createElement(link_1["default"], { href: "#", className: "" },
                react_1["default"].createElement(image_1["default"], { src: "/logo.png", alt: "alt", width: 0, height: 0, className: "w-36 h-auto ", unoptimized: true }))),
        react_1["default"].createElement("ul", { className: "space-y-3 " }, exports.sideBarLinks.map(function (link) { return (react_1["default"].createElement("li", { key: link.id }, typeof link.path == "string" ? (react_1["default"].createElement(link_1["default"], { href: "/dashboard/" + link.path, className: "flex items-center space-x-3 px-6 py-4 border-l-[6px] border-green-600" },
            link.icons,
            react_1["default"].createElement("span", null, link.title))) : (react_1["default"].createElement("a", { className: "flex items-center space-x-3 px-6 py-4 border-l-[6px] border-transparent" },
            link.icons,
            react_1["default"].createElement("span", null, link.title))))); }))));
};
exports["default"] = SideBar;
