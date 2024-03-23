"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mock_data_json_1 = require("./mock-data.json");
var Table_1 = require("../Table");
var CustomTable = function () {
    return (react_1["default"].createElement("div", { className: "py-8 " },
        react_1["default"].createElement("h2", { className: "text-xl font-bold mb-4 text-slate-800 dark-slate-50" }, "Recent Orders"),
        react_1["default"].createElement(Table_1["default"], { data: mock_data_json_1["default"] })));
};
exports["default"] = CustomTable;
