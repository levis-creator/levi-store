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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var TextButton = function (_a) {
    var buttonTitle = _a.buttonTitle, icon = _a.icon, _b = _a.type, type = _b === void 0 ? "button" : _b, className = _a.className, props = __rest(_a, ["buttonTitle", "icon", "type", "className"]);
    return (react_1["default"].createElement("button", __assign({}, props, { type: type, className: "flex items-center space-x-2 dark:text-slate-50 text-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 " + className }),
        icon,
        react_1["default"].createElement("span", null, buttonTitle)));
};
exports["default"] = TextButton;
