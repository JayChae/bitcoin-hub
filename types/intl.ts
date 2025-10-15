export type LocaleType = "en" | "ko";

export type IntlType = {
  [key in LocaleType]: string;
};
