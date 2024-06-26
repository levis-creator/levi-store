"use client";
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.ThemeProvider = void 0;
var React = require("react");
var next_themes_1 = require("next-themes");
var react_hot_toast_1 = require("react-hot-toast");
var next_ssr_plugin_1 = require("@uploadthing/react/next-ssr-plugin");
var server_1 = require("uploadthing/server");
var core_1 = require("@/app/api/uploadthing/core");
function ThemeProvider(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(next_themes_1.ThemeProvider, { attribute: "class", defaultTheme: "dark" },
        React.createElement(next_ssr_plugin_1.NextSSRPlugin, { routerConfig: server_1.extractRouterConfig(core_1.ourFileRouter) }),
        React.createElement(react_hot_toast_1.Toaster, { position: "top-center", reverseOrder: false }),
        children));
}
exports.ThemeProvider = ThemeProvider;
