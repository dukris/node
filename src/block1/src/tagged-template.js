const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

export const language = "fr";

/**
 * Replace placeholders in the template string with the corresponding translations.
 *
 * @param strings Strings
 * @param args Arguments
 * @returns {string} Translation
 */
export const localize = (strings, ...args) => {
    let result = '';
    args.forEach((arg, index) =>
        result += `${strings[index]}${translations[language][arg]}`)
    return result += strings.at(-1);
}

/**
 * Highlight each occurrence of a keyword in the template.
 *
 * @param template String template
 * @param keywords Array of keywords
 * @returns {string} Result
 */
export const highlightKeywords = (template, keywords) => {
    if (typeof template != 'string') {
        throw new TypeError("Input format is wrong!");
    }
    keywords.forEach((word, index) => {
        template = template.replaceAll(`\${${index}}`, word);
        template = template.replaceAll(
            new RegExp("\\b" + word + "\\b", "g"),
            `<span class='highlight'>${word}</span>`
        );
    })
    return template;
}

/**
 * Add line numbers at the beginning of each line.
 *
 * @param strings Strings
 * @returns {string} Result
 */
export const multiline = (strings) => {
    return strings.toString()
        .split("\n")
        .filter(element => element && element.trim().length !== 0)
        .map((element, index) => `${index + 1} ${element}`)
        .join("\n");
}