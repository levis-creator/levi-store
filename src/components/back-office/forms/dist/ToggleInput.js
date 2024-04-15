"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function ToggleInput(_a) {
    var label = _a.label, name = _a.name, trueTitle = _a.trueTitle, falseTitle = _a.falseTitle, register = _a.register, isActive = _a.isActive, _b = _a.className, className = _b === void 0 ? "sm:col-span-2 flex flex-wrap" : _b;
    return (React.createElement("div", { className: "" + className },
        React.createElement("div", { className: "w-full sm:w-1/2" },
            React.createElement("h2", { className: "block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2" }, label)),
        React.createElement("div", { className: "w-full sm:w-1/2" },
            React.createElement("label", { className: "relative inline-flex items-center cursor-pointer" },
                React.createElement("input", __assign({}, register("" + name), { type: "checkbox", className: "sr-only peer" })),
                React.createElement("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600" }),
                React.createElement("span", { className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" }, isActive ? "" + trueTitle : "" + falseTitle)))));
}
exports["default"] = ToggleInput;
