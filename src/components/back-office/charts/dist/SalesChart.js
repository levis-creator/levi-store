"use client";
"use strict";
exports.__esModule = true;
exports.data = exports.options = void 0;
var react_1 = require("react");
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
var faker_1 = require("@faker-js/faker");
exports.options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Line Chart"
        }
    }
};
var labels = ["January", "February", "March", "April", "May", "June", "July"];
exports.data = {
    labels: labels,
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(function () { return faker_1.faker.number.int({ min: -1000, max: 1000 }); }),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
    ]
};
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.PointElement, chart_js_1.LineElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend);
var SalesChart = function () {
    var tabs = [
        {
            title: "Sales",
            type: "sales"
        },
        {
            title: "Orders",
            type: "orders"
        },
    ];
    var _a = react_1.useState(tabs[0].type), chartsDisplay = _a[0], setChartDisplay = _a[1];
    return (react_1["default"].createElement("div", { className: "bg-white shadow-lg text-slate-800 dark:text-slate-50 dark:bg-slate-700 p-8 rounded-lg" },
        react_1["default"].createElement("h2", { className: "text-xl font-bold mb-4" }, "Weekly Charts"),
        react_1["default"].createElement("div", { className: "p-4" },
            react_1["default"].createElement("div", { className: "text-sm font-medium text-center text-gray-200 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700" },
                react_1["default"].createElement("ul", { className: "flex flex-wrap -mb-px" }, tabs.map(function (tab, i) { return (react_1["default"].createElement("li", { className: "me-2", key: i },
                    react_1["default"].createElement("button", { onClick: function () { return setChartDisplay(tab.type); }, className: (chartsDisplay == tab.type
                            ? "text-orange-600 border-orange-600 dark:text-orange-500 dark:border-orange-500"
                            : "border-transparent text-slate-500 ") + "inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100" }, tab.title))); }))),
            tabs.map(function (tab, i) {
                return chartsDisplay == tab.type ? (react_1["default"].createElement("div", { key: i },
                    react_1["default"].createElement(react_chartjs_2_1.Line, { options: exports.options, data: exports.data }))) : null;
            }))));
};
exports["default"] = SalesChart;
