"use strict";
exports.__esModule = true;
exports.generateCouponCode = void 0;
function generateCouponCode(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var couponCode = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        var randomCharacter = characters.charAt(randomIndex);
        couponCode += randomCharacter;
    }
    return couponCode;
}
exports.generateCouponCode = generateCouponCode;
