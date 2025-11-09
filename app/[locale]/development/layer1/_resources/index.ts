import { Layer1DevResources, LocaleType } from "@/types";

import { apisPaymentsEn, apisPaymentsKo } from "./apis-payments";
import {
  explorersAnalyticsEn,
  explorersAnalyticsKo,
} from "./explorers-analytics";
import { hardwareWalletsEn, hardwareWalletsKo } from "./hardware-wallets";
import {
  l2sSmartContractsEn,
  l2sSmartContractsKo,
} from "./l2s-smart-contracts";
import { librariesSdksEn, librariesSdksKo } from "./libraries-sdks";
import { nodeHardwareEn, nodeHardwareKo } from "./node-hardware";
import { nodeSoftwareEn, nodeSoftwareKo } from "./node-software";
import { researchEn, researchKo } from "./research";
import { softwareWalletsEn, softwareWalletsKo } from "./software-wallets";
import { utilitiesEn, utilitiesKo } from "./utilities";

export const layer1DevResources: { [key in LocaleType]: Layer1DevResources } =
  {
    en: {
      "libraries-sdks": librariesSdksEn,
      "apis-payments": apisPaymentsEn,
      "l2s-smart-contracts": l2sSmartContractsEn,
      "node-software": nodeSoftwareEn,
      "node-hardware": nodeHardwareEn,
      "explorers-analytics": explorersAnalyticsEn,
      utilities: utilitiesEn,
      "software-wallets": softwareWalletsEn,
      "hardware-wallets": hardwareWalletsEn,
      research: researchEn,
    },
    ko: {
      "libraries-sdks": librariesSdksKo,
      "apis-payments": apisPaymentsKo,
      "l2s-smart-contracts": l2sSmartContractsKo,
      "node-software": nodeSoftwareKo,
      "node-hardware": nodeHardwareKo,
      "explorers-analytics": explorersAnalyticsKo,
      utilities: utilitiesKo,
      "software-wallets": softwareWalletsKo,
      "hardware-wallets": hardwareWalletsKo,
      research: researchKo,
    },
  };
