"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SalesChart_1 = require("./SalesChart");
var ProductsCharts_1 = require("./ProductsCharts");
var DashBoardCharts = function () {
    return (react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4" },
        react_1["default"].createElement(SalesChart_1["default"], null),
        react_1["default"].createElement(ProductsCharts_1["default"], null)));
};
exports["default"] = DashBoardCharts;
