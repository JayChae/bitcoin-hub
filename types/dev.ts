export type DevelopmentResourceField = "bitcoin" | "lightning" | "education";

export type BitcoinCategory =
  | "libraries-sdks"
  | "apis-payments"
  | "l2s-smart-contracts"
  | "node-software"
  | "node-hardware"
  | "explorers-analytics"
  | "utilities"
  | "software-wallets"
  | "hardware-wallets"
  | "research";

export type LightningCategory =
  | "libraries-sdks"
  | "apis-payments"
  | "lsps-enterprise"
  | "dashboards-monitoring"
  | "routing-liquidity"
  | "wallets"
  | "research";
export type EducationCategory =
  | "guides-tutorials"
  | "notes-docs"
  | "books"
  | "classes-courses"
  | "training-programs"
  | "certifications";

export type DevelopmentResourceCategory =
  | BitcoinCategory
  | LightningCategory
  | EducationCategory;

export type DevResource = {
  name: string;
  description: string;
  url: string;
  logo: string;
};

export type BitcoinDevResources = {
  [key in BitcoinCategory]: DevResource[];
};

export type LightningDevResources = {
  [key in LightningCategory]: DevResource[];
};

export type EducationDevResources = {
  [key in EducationCategory]: DevResource[];
};
