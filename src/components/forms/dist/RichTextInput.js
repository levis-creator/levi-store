"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_quill_1 = require("react-quill");
require("react-quill/dist/quill.snow.css");
var RichTextInput = function (_a) {
    var content = _a.content, onChange = _a.onChange, label = _a.label, _b = _a.className, className = _b === void 0 ? "sm:col-span-2" : _b;
    //Custom Tool Bar
    var modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "color", "image"],
            [{ "code-block": true }],
            ["clean"],
        ]
    };
    var formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "indent",
        "image",
        "code-block",
        "color",
    ];
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement("label", { htmlFor: "content", className: "block mb-2 text-sm font-medium text-slate-800 dark:text-slate-50" }, label),
        react_1["default"].createElement(react_quill_1["default"], { theme: "snow", value: content, onChange: onChange, modules: modules, formats: formats })));
};
exports["default"] = RichTextInput;
