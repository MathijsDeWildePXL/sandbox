"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var ArticleComponent_vue_1 = require("../ArticleComponent.vue");
var test_utils_1 = require("@vue/test-utils");
(0, vitest_1.describe)("ArticleComponent", function () {
    (0, vitest_1.it)('should contain the word "Article"', function () {
        var wrapper = (0, test_utils_1.mount)(ArticleComponent_vue_1.default);
        (0, vitest_1.expect)(wrapper.html()).toContain("Article");
    });
});
