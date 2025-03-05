import { describe, it, expect } from "vitest";
import ArticleComponent from "../ArticleComponent.vue";
import { mount } from "@vue/test-utils";

describe("ArticleComponent", () => {
  it('should contain the word "Article"', () => {
    const wrapper = mount(ArticleComponent);
    expect(wrapper.html()).toContain("Article");
  });
});
