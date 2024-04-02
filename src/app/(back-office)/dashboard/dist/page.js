"use strict";
exports.__esModule = true;
var Heading_1 = require("@/components/back-office/Heading");
var DashBoardCharts_1 = require("@/components/back-office/charts/DashBoardCharts");
var RectangleCards_1 = require("@/components/back-office/rectanglecard/RectangleCards");
var SquareCards_1 = require("@/components/back-office/squarecard/SquareCards");
var CustomTable_1 = require("@/components/back-office/table/CustomTable");
var mock_data_json_1 = require("@/components/back-office/table/mock-data.json");
var page = function () {
    return (React.createElement("div", null,
        React.createElement(Heading_1["default"], { title: "Dashboard Overview" }),
        React.createElement(SquareCards_1["default"], null),
        React.createElement(RectangleCards_1["default"], null),
        React.createElement(DashBoardCharts_1["default"], null),
        React.createElement(CustomTable_1["default"], { head: "Recent Orders", data: mock_data_json_1["default"] })));
};
exports["default"] = page;
