// Continent types
export type Continent =
  | "asia"
  | "europe"
  | "africa"
  | "north-america"
  | "south-america"
  | "oceania";

// Country types for each continent
export type AsiaCountry =
  | "japan"
  | "korea"
  | "taiwan"
  | "indonesia"
  | "india";

export type OceaniaCountry = "australia";

// Organization category types
export type OrganizationCategory =
  | "center"
  | "events"
  | "meetups"
  | "mining"
  | "nodes"
  | "retail"
  | "charity"
  | "lightning";

// Resource type for global organizations
export type GlobalResource = {
  name: string;
  description: string;
  url: string;
  logo: string;
};

// Country resources structure
export type CountryResources = {
  [key in OrganizationCategory]?: GlobalResource[];
};

// Asia resources by country
export type AsiaResources = {
  [key in AsiaCountry]: CountryResources;
};

// Oceania resources by country
export type OceaniaResources = {
  [key in OceaniaCountry]: CountryResources;
};
