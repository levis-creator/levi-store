"use strict";
exports.__esModule = true;
var RectangleCard = function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: "rounded-lg shadow-lg text-slate-800 dark:text-slate-50  bg-white dark:bg-slate-700 p-4 " },
        React.createElement("div", { className: "flex space-x-4" },
            React.createElement("div", { className: "w-12 h-12 " + data.color + " rounded-full flex text-slate-50 items-center justify-center" }, data.icons),
            React.createElement("div", { className: "" },
                React.createElement("p", null, data.title),
                React.createElement("h3", { className: "text-2xl font-bold" }, data.sales)))));
};
exports["default"] = RectangleCard;
