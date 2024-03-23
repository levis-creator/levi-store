"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Heading = function (_a) {
    var title = _a.title;
    return (react_1["default"].createElement("div", { className: "w-full" },
        react_1["default"].createElement("h2", { className: "text-2xl font-semibold text-slate-800 dark:text-slate-50" }, title)));
};
exports["default"] = Heading;
