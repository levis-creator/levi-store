"use strict";
exports.__esModule = true;
var Heading_1 = require("@/components/back-office/Heading");
var TableAction_1 = require("@/components/back-office/table/TableAction");
var lucide_react_1 = require("lucide-react");
var page = function () {
    var additionalBtn = {
        icons: React.createElement(lucide_react_1.Plus, null),
        title: "Add Coupon",
        path: "/dashboard/coupons/new"
    };
    return (React.createElement("div", null,
        React.createElement(Heading_1["default"], { title: "Coupons", additionalBtn: additionalBtn }),
        React.createElement(TableAction_1["default"], null)));
};
exports["default"] = page;
