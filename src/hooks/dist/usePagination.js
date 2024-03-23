"use strict";
exports.__esModule = true;
var react_1 = require("react");
var usePagination = function (items, pageLimit) {
    var _a = react_1.useState(0), pageNumber = _a[0], setPageNumber = _a[1];
    var startEnd = react_1.useRef({
        startIndex: 1,
        endIndex: 10
    });
    var pageCount = Math.ceil(items.length / pageLimit);
    var changePage = function (pageNo) {
        setPageNumber(pageNo);
    };
    var pageData = function () {
        var indexVa = startEnd.current;
        indexVa.startIndex = pageNumber * pageLimit;
        indexVa.endIndex = indexVa.startIndex + pageLimit;
        return items.slice(indexVa.startIndex, indexVa.endIndex);
    };
    return { pageNumber: pageNumber, pageCount: pageCount, startEnd: startEnd, changePage: changePage, pageData: pageData };
};
exports["default"] = usePagination;
