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
function SelectInput(_a) {
    var label = _a.label, name = _a.name, register = _a.register, _b = _a.className, className = _b === void 0 ? "sm:col-span-2" : _b, _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.multiple, multiple = _d === void 0 ? false : _d;
    return (React.createElement("div", { className: className },
        React.createElement("label", { htmlFor: name, className: "block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50" }, label),
        React.createElement("div", { className: "mt-2 w-full" },
            React.createElement("select", __assign({}, register("" + name), { id: name, name: name, multiple: multiple, className: "block w-full dark:bg-slate-800 dark:text-slate-50 rounded-md border-0 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6" }), options.map(function (option, i) {
                return (React.createElement("option", { key: i, value: option.id }, option.title));
            })))));
}
exports["default"] = SelectInput;
