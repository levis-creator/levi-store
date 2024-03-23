"use client";
"use strict";
exports.__esModule = true;
var usePagination_1 = require("@/hooks/usePagination");
var react_1 = require("react");
var react_paginate_1 = require("react-paginate");
var Table = function (_a) {
    var data = _a.data;
    var heads = Object.keys(data[0]);
    var _b = usePagination_1["default"](data, 10), pageCount = _b.pageCount, changePage = _b.changePage, pageData = _b.pageData, startEnd = _b.startEnd;
    var pgeData = pageData();
    return (react_1["default"].createElement("div", { className: "relative overflow-x-auto shadow-lg sm:rounded-lg z-0" },
        react_1["default"].createElement("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 " },
            react_1["default"].createElement("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" },
                react_1["default"].createElement("tr", null, heads.map(function (head, i) { return (react_1["default"].createElement("th", { scope: "col", className: "px-6 py-3", key: i }, head)); }))),
            react_1["default"].createElement("tbody", null, pgeData.map(function (item, i) { return (react_1["default"].createElement("tr", { key: i, className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" }, heads.map(function (head, i) { return (react_1["default"].createElement("td", { key: i, className: "px-6 py-4" }, item[head])); }))); }))),
        react_1["default"].createElement("nav", { className: "flex items-center flex-column flex-wrap md:flex-row justify-between pt-4", "aria-label": "Table navigation" },
            react_1["default"].createElement("span", { className: "text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto" },
                "Showing",
                " ",
                react_1["default"].createElement("span", { className: "font-semibold text-gray-900 dark:text-white" },
                    startEnd.current.startIndex + 1,
                    "-",
                    startEnd.current.endIndex),
                " ",
                "of",
                " ",
                react_1["default"].createElement("span", { className: "font-semibold text-gray-900 dark:text-white" }, data.length)),
            react_1["default"].createElement(react_paginate_1["default"], { pageCount: pageCount, className: "inline-flex -space-x-px rtl:space-x-reverse text-sm h-8", pageLinkClassName: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", previousLinkClassName: "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", nextLinkClassName: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", activeLinkClassName: "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white", pageRangeDisplayed: 3, onPageChange: function (e) { return changePage(e.selected); } }))));
};
exports["default"] = Table;
