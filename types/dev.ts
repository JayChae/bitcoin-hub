export type DevelopmentResourceField = "layer1" | "layer2" | "education";

export type Layer1Category =
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

export type Layer2Category =
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
  | Layer1Category
  | Layer2Category
  | EducationCategory;

export type SoftwareWalletSubcategory = "onchain" | "lightning";
export type HardwareWalletSubcategory = "airgap" | "connected";

export type DevResource = {
  name: string;
  description: string;
  url: string;
  logo: string;
  subcategory?: SoftwareWalletSubcategory | HardwareWalletSubcategory;
};

export type Layer1DevResources = {
  [key in Layer1Category]: DevResource[];
};

export type Layer2DevResources = {
  [key in Layer2Category]: DevResource[];
};

export type EducationDevResources = {
  [key in EducationCategory]: DevResource[];
};
