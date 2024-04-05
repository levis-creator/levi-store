"use strict";
exports.__esModule = true;
exports.generateSlug = void 0;
function generateSlug(title) {
    var slug = title
        .toLowerCase() // Convert the title to lowercase
        .replace(/\s+/g, "-") // Replace spaces with dashes
        .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
        .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
        .replace(/^\-+/, "") // Remove dashes from the beginning
        .replace(/\-+$/, ""); // Remove dashes from the end
    return slug;
}
exports.generateSlug = generateSlug;
