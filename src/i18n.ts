// i18n.ts
import i18next from 'i18next';

export const t = (key: string, options?: Record<string, any>): string => {
    return i18next.t(key, options) as string;
};