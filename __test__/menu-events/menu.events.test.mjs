import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Menu from "../../src/components/menu/Menu.vue";

describe("Menu component tests", function() {
    test("Test year select element event", function() {
        let menu = mount(Menu);
        menu.find("#year").trigger("change");
        expect(menu.emitted()).toHaveProperty("optionsChanged");
    });
    test("Test period select element event", function() {
        let menu = mount(Menu);
        menu.find("#period").trigger("change");
        expect(menu.emitted()).toHaveProperty("optionsChanged");
    });
});
