import { i18n } from "@lingui/core";
import { detect, fromNavigator, fromStorage } from "@lingui/detect-locale";

type SupportedLocale = {
    code: string,
    flag: string,
};

const locales: SupportedLocale[] = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'hu', flag: '🇭🇺' },
];

const fallbackLocale = "en";

const localStorageKey = "lang";

const getDefaultLocale = () => {
    const detectedLocale = detect(
        fromStorage(localStorageKey),
        fromNavigator(),
    )!.substring(0, 2)!.toLowerCase();

    return locales.findIndex(x => x.code === detectedLocale) ? detectedLocale : fallbackLocale;
};

const getCurrentLocale = () => {
    return i18n.locale;
};

const dynamicActivateLocale = async (code: string) => {
    const { messages } = await import(`./locales/${code}/messages.po`);

    i18n.load(code, messages);

    i18n.activate(code);

    localStorage.setItem(localStorageKey, code);
};

export { locales, getDefaultLocale, getCurrentLocale, dynamicActivateLocale };