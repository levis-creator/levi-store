"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var RectangleCard_1 = require("./RectangleCard");
var RectangleCards = function () {
    var ordersStats = [
        {
            title: "Total Orders",
            sales: 500,
            icons: React.createElement(lucide_react_1.ShoppingCart, null),
            color: "bg-green-600"
        },
        {
            title: "Pending Orders",
            sales: 100,
            color: "bg-blue-600",
            icons: React.createElement(lucide_react_1.Loader2, null)
        },
        {
            title: "Orders Processing",
            sales: 200,
            color: "bg-orange-600",
            icons: React.createElement(lucide_react_1.RefreshCcw, null)
        },
        {
            title: "Orders Delivered ",
            sales: 300,
            color: "bg-purple-600",
            icons: React.createElement(lucide_react_1.CheckCheck, null)
        },
    ];
    return (React.createElement("div", { className: "pb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }, ordersStats.map(function (stat, i) { return (React.createElement(RectangleCard_1["default"], { data: stat, key: i })); })));
};
exports["default"] = RectangleCards;
