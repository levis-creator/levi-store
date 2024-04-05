"use client";
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
var TextareaInput = function (_a) {
    var label = _a.label, name = _a.name, register = _a.register, errors = _a.errors, _b = _a.isRequired, isRequired = _b === void 0 ? true : _b, _c = _a.className, className = _c === void 0 ? "sm:col-span-2" : _c;
    return (React.createElement("div", { className: className },
        React.createElement("label", { htmlFor: name, className: "block text-sm font-medium leading-6 text-gray-900 mb-2 " }, label),
        React.createElement("div", { className: "mt-2" },
            React.createElement("textarea", __assign({}, register("" + name, { required: isRequired }), { name: name, id: name, rows: 3, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", defaultValue: "" })),
            errors["" + name] && (React.createElement("span", { className: "text-sm text-red-600 " },
                label,
                " is required")))));
};
