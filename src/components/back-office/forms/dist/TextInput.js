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
var TextInput = function (_a) {
    var label = _a.label, name = _a.name, register = _a.register, errors = _a.errors, _b = _a.isRequired, isRequired = _b === void 0 ? true : _b, _c = _a.type, type = _c === void 0 ? "text" : _c, _d = _a.className, className = _d === void 0 ? "sm:col-span-2" : _d, _e = _a.defaultValue, defaultValue = _e === void 0 ? "" : _e;
    return (React.createElement("div", { className: className },
        " ",
        React.createElement("label", { htmlFor: name, className: "block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 " }, label),
        React.createElement("div", { className: "mt-2" },
            React.createElement("input", __assign({}, register("" + name, { required: isRequired }), { type: type, name: name, id: name, defaultValue: defaultValue, autoComplete: name, className: "block w-full rounded-md border-0 py-3 dark:bg-transparent text-slate-800 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-slate-400  focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6", placeholder: "Type the " + label.toLowerCase() })),
            errors["" + name] && (React.createElement("span", { className: "text-sm text-red-600 " },
                label,
                " is required")))));
};
exports["default"] = TextInput;
