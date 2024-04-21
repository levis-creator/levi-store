"use strict";
exports.__esModule = true;
var uploadThing_1 = require("@/lib/uploadThing");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var react_1 = require("react");
var ImageInput = function (_a) {
    var label = _a.label, _b = _a.imageUrl, imageUrl = _b === void 0 ? "" : _b, setImageUrl = _a.setImageUrl, _c = _a.className, className = _c === void 0 ? "col-span-full" : _c, _d = _a.endpoint, endpoint = _d === void 0 ? "imageUploader" : _d;
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement("div", { className: "flex justify-between items-center mb-4" },
            react_1["default"].createElement("label", { htmlFor: "course-image", className: "block text-sm font-medium leading-6 text-gray-900" }, label),
            imageUrl && (react_1["default"].createElement("button", { onClick: function () { return setImageUrl(""); }, type: "button", className: "flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4" },
                react_1["default"].createElement(lucide_react_1.Pencil, { className: "w-5 h-5" }),
                react_1["default"].createElement("span", null, "Change Image")))),
        imageUrl ? (react_1["default"].createElement(image_1["default"], { src: imageUrl, alt: "Item image", width: 1000, height: 667, className: "w-full h-64 object-cover" })) : (react_1["default"].createElement(uploadThing_1.UploadDropzone, { endpoint: endpoint, onClientUploadComplete: function (res) {
                setImageUrl(res[0].url);
                // Do something with the response
                console.log("Files: ", res);
                console.log("Upload Completed");
            }, onUploadError: function (error) {
                // Do something with the error.
                console.log("ERROR! " + error.message);
            } }))));
};
exports["default"] = ImageInput;
