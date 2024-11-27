import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
    locales: ["en", "de", "hu"],
    catalogs: [
        {
            path: "<rootDir>/src/locales/{locale}/messages",
            include: ["src"],
        },
    ],
};

export default config;