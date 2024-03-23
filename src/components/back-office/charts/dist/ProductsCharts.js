"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
chart_js_1.Chart.register(chart_js_1.ArcElement, chart_js_1.Tooltip, chart_js_1.Legend);
var ProductsCharts = function () {
    var data = {
        labels: ["maize", "Rainbow Charge", "Cabbage", "Watermelon"],
        datasets: [
            {
                label: "# of Votes",
                data: [50, 10, 20, 20],
                backgroundColor: ["#F9C80E", "#EA3546", "#662E9B", "#F86624"],
                borderColor: "#fff",
                borderWidth: 1
            },
        ]
    };
    return (react_1["default"].createElement("div", { className: "bg-white shadow-lg text-slate-800 dark:text-slate-50 dark:bg-slate-700 p-8 rounded-lg" },
        react_1["default"].createElement("h2", { className: "text-xl font-bold mb-4" }, "Best Selling Charts"),
        react_1["default"].createElement("div", { className: "p-4" },
            react_1["default"].createElement(react_chartjs_2_1.Pie, { data: data }))));
};
exports["default"] = ProductsCharts;
