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
exports.makePutRequest = exports.makePostRequest = void 0;
var react_hot_toast_1 = require("react-hot-toast");
function makePostRequest(_a) {
    var setLoading = _a.setLoading, endpoint = _a.endpoint, data = _a.data, resourceName = _a.resourceName, reset = _a.reset, redirect = _a.redirect;
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, response, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    setLoading(true);
                    baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
                    return [4 /*yield*/, fetch(baseUrl + "/" + endpoint, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _b.sent();
                    if (response.ok) {
                        setLoading(false);
                        react_hot_toast_1["default"].success("New " + resourceName + " Created Successfully");
                        reset();
                        redirect();
                    }
                    else {
                        setLoading(false);
                        if (response.status === 409) {
                            react_hot_toast_1["default"].error("The Giving Warehouse Stock is NOT Enough");
                        }
                        else {
                            react_hot_toast_1["default"].error("Something Went wrong");
                        }
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    setLoading(false);
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.makePostRequest = makePostRequest;
function makePutRequest(_a) {
    var setLoading = _a.setLoading, endpoint = _a.endpoint, data = _a.data, resourceName = _a.resourceName, redirect = _a.redirect;
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, response, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    setLoading(true);
                    baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
                    return [4 /*yield*/, fetch(baseUrl + "/" + endpoint, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _b.sent();
                    if (response.ok) {
                        console.log(response);
                        setLoading(false);
                        react_hot_toast_1["default"].success(resourceName + " Updated Successfully");
                        redirect();
                    }
                    else {
                        setLoading(false);
                        react_hot_toast_1["default"].error("Something Went wrong");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    setLoading(false);
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.makePutRequest = makePutRequest;
