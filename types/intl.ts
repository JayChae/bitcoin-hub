export type LocaleType = "en" | "ko";

export type LanguageType = "English" | "한국어";

export type IntlType = {
  [key in LocaleType]: string;
};
