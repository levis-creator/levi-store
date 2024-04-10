"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var Heading = function (_a) {
    var title = _a.title, additionalBtn = _a.additionalBtn, returnBtn = _a.returnBtn, handleBack = _a.handleBack;
    return (react_1["default"].createElement("div", { className: "w-full flex justify-between py-4 mb-4" },
        react_1["default"].createElement("h2", { className: "text-2xl font-semibold text-slate-800 dark:text-slate-50" }, title),
        additionalBtn && (react_1["default"].createElement(link_1["default"], { href: typeof (additionalBtn === null || additionalBtn === void 0 ? void 0 : additionalBtn.path) === "string" ? additionalBtn === null || additionalBtn === void 0 ? void 0 : additionalBtn.path : "/", className: "text-white bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-600/50 font-medium rounded-lg px-5 py-3 space-x-3 text-center inline-flex items-center dark:focus:ring-green-600/55 me-2 text-base" },
            additionalBtn.icons,
            react_1["default"].createElement("span", null, additionalBtn === null || additionalBtn === void 0 ? void 0 : additionalBtn.title))),
        returnBtn && (react_1["default"].createElement("button", { type: "button", onClick: handleBack, className: "text-slate-800 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-3 " },
            react_1["default"].createElement(lucide_react_1.X, null)))));
};
exports["default"] = Heading;
