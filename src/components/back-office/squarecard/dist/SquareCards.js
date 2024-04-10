"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var SquareCard_1 = require("./SquareCard");
function SquareCards() {
    var ordersStats = [
        {
            title: "Today's Orders",
            sales: 110000,
            icons: React.createElement(lucide_react_1.Layers, null),
            color: "bg-green-600"
        },
        {
            title: "Yesterday's Orders",
            sales: 130000,
            icons: React.createElement(lucide_react_1.Layers, null),
            color: "bg-blue-600"
        },
        {
            title: "This Month",
            sales: 3000000,
            icons: React.createElement(lucide_react_1.Layers, null),
            color: "bg-orange-600"
        },
        {
            title: "All-Time Month ",
            sales: 30000000,
            icons: React.createElement(lucide_react_1.Layers, null),
            color: "bg-purple-600"
        },
    ];
    return (React.createElement("div", { className: "py-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }, ordersStats.map(function (stat, i) { return (React.createElement(SquareCard_1["default"], { data: stat, key: i })); })));
}
exports["default"] = SquareCards;
