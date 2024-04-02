"use client";
"use strict";
exports.__esModule = true;
var Heading_1 = require("@/components/back-office/Heading");
var TextInput_1 = require("@/components/back-office/forms/TextInput");
var react_hook_form_1 = require("react-hook-form");
var react_1 = require("react");
var Page = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, errors = _a.formState.errors;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Heading_1["default"], { title: "New category", returnBtn: true }),
        react_1["default"].createElement("form", { className: "w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3" },
            react_1["default"].createElement("div", { className: "grid gap-4 sm:grid-cols-2 sm:gap-6" },
                react_1["default"].createElement(TextInput_1["default"], { name: "title", label: "Category Title", register: register, errors: errors })))));
};
exports["default"] = Page;
