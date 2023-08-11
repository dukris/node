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