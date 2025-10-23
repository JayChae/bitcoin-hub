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
  | "lsps-enterprise"
  | "dashboards-monitoring"
  | "routing-liquidity";
export type EducationCategory =
  | "guides-tutorials"
  | "classes-courses"
  | "developer-certifications"
  | "developer-books";

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
