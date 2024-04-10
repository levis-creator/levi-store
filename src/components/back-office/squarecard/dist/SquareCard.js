"use strict";
exports.__esModule = true;
var SquareCard = function (_a) {
    var data = _a.data;
    function formatCompactNumber(number) {
        if (number < 1000) {
            return number;
        }
        else if (number >= 1000 && number < 1000000) {
            return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        else if (number >= 1000000 && number < 1000000000) {
            return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        else if (number >= 1000000000 && number < 1000000000000) {
            return (number / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
        }
        else if (number >= 1000000000000 && number < 1000000000000000) {
            return (number / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
        }
    }
    return (React.createElement("div", { className: " shadow-md p-8 rounded-lg " + data.color + " text-white flex items-center flex-col gap-2 py-8" },
        data.icons,
        React.createElement("h4", null, data.title),
        React.createElement("h2", { className: "text-2xl lg:text-3xl" },
            "Ksh.",
            formatCompactNumber(data.sales))));
};
exports["default"] = SquareCard;
