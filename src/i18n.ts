import i18next, { TOptions } from 'i18next';

export const t = (key: string, options?: TOptions): string => {
    return String(i18next.t(key, options));
};