"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var Button_1 = require("../Button");
var TextButton_1 = require("../TextButton");
var TagsInput = function (_a) {
    var name = _a.name, label = _a.label, _b = _a.className, className = _b === void 0 ? "sm:col-span-2" : _b, setTags = _a.setTags;
    var _c = react_1.useState(false), addTag = _c[0], setAddTag = _c[1];
    var _d = react_1.useState(""), tag = _d[0], setTag = _d[1];
    var handleAddTag = function (e) {
        e.preventDefault();
        setTags(function (tags) { return __spreadArrays(tags, [tag]); });
        setAddTag(false);
        setTag("");
    };
    return (React.createElement("div", { className: className }, addTag ? (React.createElement("div", { className: "flex flex-col" },
        React.createElement("label", { htmlFor: name, className: "flex justify-between text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 " },
            label,
            React.createElement(TextButton_1["default"], { buttonTitle: React.createElement(lucide_react_1.X, { className: " w-4 h-4" }), onClick: function () { return setAddTag(false); }, className: "rounded-full w-6 h-6 items-center justify-center" })),
        React.createElement("input", { type: "text", name: name, id: name, autoComplete: name, value: tag, onChange: function (e) { return setTag(e.target.value); }, className: "block w-full rounded-md border-0 py-3 dark:bg-transparent text-slate-800 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-slate-400  focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6", placeholder: "Type the " + label.toLowerCase() }),
        React.createElement("div", { className: "self-end" },
            React.createElement(Button_1["default"], { buttonTitle: "Add tag", onClick: handleAddTag })))) : (React.createElement(TextButton_1["default"], { icon: React.createElement(lucide_react_1.Plus, null), buttonTitle: "Add tag", type: "button", onClick: function () { return setAddTag(!addTag); }, className: "px-3 rounded-md py-2" }))));
};
exports["default"] = TagsInput;
