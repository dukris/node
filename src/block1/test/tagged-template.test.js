import {highlightKeywords, localize} from "../src/tagged-template.js";

describe("Tagged Templates", () => {
    test("Quasi-Tagged Templates", () => {
        const greeting = "greet";
        const introduction = "intro";
        expect(localize`${greeting}`).toBe("Bonjour");
        expect(localize`${introduction}`).toBe("Bienvenue sur notre site web");
        expect(localize`Hello ${greeting} ${introduction}`)
            .toBe("Hello Bonjour Bienvenue sur notre site web");
    });
    test("Advanced Tagged Template", () => {
        const keywords = ["JavaScript", "template", "tagged"];
        const template = "Learn JavaScript tagged templates to create custom \${0} literals for \${1} manipulation.";
        expect(highlightKeywords(template, keywords))
            .toBe("Learn <span class='highlight'>JavaScript</span> "
                + "<span class='highlight'>tagged</span> <span class='highlight'>"
                + "template</span>s to create custom ${0} literals "
                + "for ${1} manipulation.");
    });
});

