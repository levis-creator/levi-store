"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Heading_1 = require("@/components/back-office/Heading");
var Button_1 = require("@/components/back-office/forms/Button");
var ImageInput_1 = require("@/components/back-office/forms/ImageInput");
var SelectInput_1 = require("@/components/back-office/forms/SelectInput");
var TextAreaInput_1 = require("@/components/back-office/forms/TextAreaInput");
var TextInput_1 = require("@/components/back-office/forms/TextInput");
var ToggleInput_1 = require("@/components/back-office/forms/ToggleInput");
var TagsDisplay_1 = require("@/components/back-office/forms/tags/TagsDisplay");
var TagsInput_1 = require("@/components/back-office/forms/tags/TagsInput");
var apiRequest_1 = require("@/lib/apiRequest");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var Page = function () {
    var _a = react_hook_form_1.useForm({
        defaultValues: {
            isPublished: true
        }
    }), register = _a.register, reset = _a.reset, watch = _a.watch, errors = _a.formState.errors, handleSubmit = _a.handleSubmit;
    var _b = react_1.useState(""), imageUrl = _b[0], setImageUrl = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState([]), tags = _d[0], setTags = _d[1];
    var router = navigation_1.useRouter();
    var isActive = watch("isPublished");
    // this is handling submit
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data.images = [imageUrl];
                    data.tags = tags;
                    return [4 /*yield*/, apiRequest_1.makePostRequest(setLoading, "api/products", data, "Product", reset).then(function () { return setImageUrl(""); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var categories = [
        {
            id: "1",
            title: "Category 1"
        },
        {
            id: "2",
            title: "Category 2"
        },
        {
            id: "3",
            title: "Category 3"
        },
        {
            id: "4",
            title: "Category 4"
        },
    ];
    var farmers = [
        {
            id: "1",
            title: "Farmers 1"
        },
        {
            id: "2",
            title: "Farmers 2"
        },
        {
            id: "3",
            title: "Farmers 3"
        },
        {
            id: "4",
            title: "Farmers 4"
        },
    ];
    return (React.createElement("div", null,
        React.createElement(Heading_1["default"], { title: "New Products", returnBtn: true, handleBack: router.back }),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3" },
            React.createElement("div", { className: "grid gap-4 sm:grid-cols-2 sm:gap-6" },
                React.createElement(TextInput_1["default"], { name: "title", label: "Product Title", register: register, errors: errors }),
                React.createElement(TextInput_1["default"], { name: "sku", label: "Product SKU", register: register, errors: errors, className: "w-full" }),
                React.createElement(TextInput_1["default"], { name: "barcode", label: "Product Barcode", register: register, errors: errors, className: "w-full" }),
                React.createElement(TextInput_1["default"], { name: "productPrice", label: "Product Price", register: register, errors: errors, className: "w-full", type: "number" }),
                React.createElement(TextInput_1["default"], { name: "salesPrice", label: "Product Sales Price (discounted)", register: register, errors: errors, className: "w-full", type: "number" }),
                React.createElement(SelectInput_1["default"], { label: "Select Category", name: "category", register: register, options: categories, className: "w-full" }),
                React.createElement(SelectInput_1["default"], { label: "Select Farmers", name: "farmer", register: register, options: farmers, className: "w-full" }),
                React.createElement(TagsInput_1["default"], { label: "Tags", name: "tags", setTags: setTags }),
                (tags === null || tags === void 0 ? void 0 : tags.length) !== 0 && React.createElement(TagsDisplay_1["default"], { tags: tags, setTags: setTags }),
                React.createElement(ImageInput_1["default"], { label: "Product image", setImageUrl: setImageUrl, imageUrl: imageUrl, endpoint: "productUploader" }),
                React.createElement(TextAreaInput_1["default"], { label: "Product Description", name: "description", register: register, errors: errors }),
                React.createElement(ToggleInput_1["default"], { trueTitle: "Publish", falseTitle: "Draft", label: "Publish  Product", name: "isPublished", register: register, isActive: isActive, checked: true })),
            React.createElement(Button_1["default"], { buttonTitle: "Create Product", loadTitle: "Creating...", isLoading: loading, type: "submit" }))));
};
exports["default"] = Page;
