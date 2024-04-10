"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var Button_1 = require("./Button");
var TextButton_1 = require("./TextButton");
var TagsInput = function (_a) {
    var name = _a.name, label = _a.label, _b = _a.className, className = _b === void 0 ? "sm:col-span-2" : _b;
    var _c = react_1.useState(false), addTag = _c[0], setAddTag = _c[1];
    return (React.createElement("div", { className: className }, addTag ? (React.createElement("div", { className: "flex flex-col" },
        React.createElement("label", { htmlFor: name, className: "flex justify-between text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 " },
            label,
            React.createElement(TextButton_1["default"], { buttonTitle: React.createElement(lucide_react_1.X, { className: " w-4 h-4" }), onClick: function () { return setAddTag(false); }, className: "rounded-full w-6 h-6 items-center justify-center" })),
        React.createElement("input", { type: "text", name: name, id: name, autoComplete: name, className: "block w-full rounded-md border-0 py-3 dark:bg-transparent text-slate-800 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-slate-400  focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6", placeholder: "Type the " + label.toLowerCase() }),
        React.createElement("div", { className: "self-end" },
            React.createElement(Button_1["default"], { buttonTitle: "Add tag" })))) : (React.createElement(TextButton_1["default"], { icon: React.createElement(lucide_react_1.Plus, null), buttonTitle: "Add tag", type: "button", onClick: function () { return setAddTag(!addTag); }, className: "px-3 rounded-md py-2" }))));
};
exports["default"] = TagsInput;
