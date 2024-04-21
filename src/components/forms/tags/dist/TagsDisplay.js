"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var TextButton_1 = require("../TextButton");
var TagsDisplay = function (_a) {
    var tags = _a.tags, setTags = _a.setTags;
    var handleDeleteTag = function (tag) {
        setTags(function (tags) { return tags.filter(function (t) { return t !== tag; }); });
        console.log("tag");
    };
    return (React.createElement("div", { className: "flex flex-wrap space-x-2 sm:col-span-2 gap-y-2" }, tags.map(function (tag, i) {
        return (React.createElement("div", { key: i, className: " flex gap-2 items-center text-slate-700 dark:text-slate-50 bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-4 py-2  dark:bg-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-700 dark:border-slate-700" },
            React.createElement("span", null, tag),
            React.createElement(TextButton_1["default"], { buttonTitle: React.createElement(lucide_react_1.X, { className: "w-4 h-4" }), onClick: function () { return handleDeleteTag(tag); } })));
    })));
};
exports["default"] = TagsDisplay;
