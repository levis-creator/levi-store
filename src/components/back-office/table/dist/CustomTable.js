"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("./Table");
var CustomTable = function (_a) {
    var head = _a.head, data = _a.data;
    return (react_1["default"].createElement("div", { className: "py-8 " },
        react_1["default"].createElement("h2", { className: "text-xl font-bold mb-4 text-slate-800 dark:text-slate-50" }, head),
        react_1["default"].createElement(Table_1["default"], { data: data })));
};
exports["default"] = CustomTable;
