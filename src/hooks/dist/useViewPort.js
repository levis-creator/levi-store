"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useViewport = function () {
    var _a = react_1.useState(0), width = _a[0], setWidth = _a[1];
    var _b = react_1.useState(0), height = _b[0], setHeight = _b[1];
    var handleWindowResize = function () {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    react_1.useEffect(function () {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        // unsubscribe from the event on component unmount
        return function () { return window.removeEventListener("resize", handleWindowResize); };
    }, []);
    return [width, height];
};
exports["default"] = useViewport;
