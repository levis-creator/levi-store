"use client";
"use strict";
exports.__esModule = true;
var Navbar_1 = require("@/components/back-office/navbar/Navbar");
var SideBar_1 = require("@/components/back-office/sidebar/SideBar");
var useViewPort_1 = require("@/hooks/useViewPort");
var react_1 = require("react");
var Layout = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), openSideBar = _b[0], setOpenSideBar = _b[1];
    var width = useViewPort_1["default"]()[0];
    react_1.useEffect(function () {
        if (width >= 1024) {
            setOpenSideBar(true);
        }
        else {
            setOpenSideBar(false);
        }
    }, [width]);
    return (react_1["default"].createElement("div", { className: "flex" },
        openSideBar && react_1["default"].createElement(SideBar_1["default"], { show: openSideBar }),
        react_1["default"].createElement("div", { className: (openSideBar && "lg:ml-64") + "  ml-0 flex-grow w-full  " },
            react_1["default"].createElement(Navbar_1["default"], { setSideBar: setOpenSideBar, isOpen: openSideBar }),
            react_1["default"].createElement("main", { className: "min-h-screen mt-16 p-8 bg-slate-50 dark:bg-slate-900 text-slate-50" }, children))));
};
exports["default"] = Layout;
