import { LightningDevResources, LocaleType } from "@/types";

import { apisPaymentsEn, apisPaymentsKo } from "./apis-payments";
import {
  dashboardsMonitoringEn,
  dashboardsMonitoringKo,
} from "./dashboards-monitoring";
import { librariesSdksEn, librariesSdksKo } from "./libraries-sdks";
import { lspsEnterpriseEn, lspsEnterpriseKo } from "./lsps-enterprise";
import { researchEn, researchKo } from "./research";
import { routingLiquidityEn, routingLiquidityKo } from "./routing-liquidity";
import { walletsEn, walletsKo } from "./wallets";

export const lightningDevResources: {
  [key in LocaleType]: LightningDevResources;
} = {
  en: {
    "libraries-sdks": librariesSdksEn,
    "apis-payments": apisPaymentsEn,
    "lsps-enterprise": lspsEnterpriseEn,
    "dashboards-monitoring": dashboardsMonitoringEn,
    "routing-liquidity": routingLiquidityEn,
    wallets: walletsEn,
    research: researchEn,
  },
  ko: {
    "libraries-sdks": librariesSdksKo,
    "apis-payments": apisPaymentsKo,
    "lsps-enterprise": lspsEnterpriseKo,
    "dashboards-monitoring": dashboardsMonitoringKo,
    "routing-liquidity": routingLiquidityKo,
    wallets: walletsKo,
    research: researchKo,
  },
};
