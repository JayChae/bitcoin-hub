import { BitcoinDevResources } from "@/types";

import { apisPayments } from "./apis-payments";
import { explorersAnalytics } from "./explorers-analytics";
import { hardwareWallets } from "./hardware-wallets";
import { l2sSmartContracts } from "./l2s-smart-contracts";
import { librariesSdks } from "./libraries-sdks";
import { nodeHardware } from "./node-hardware";
import { nodeSoftware } from "./node-software";
import { research } from "./research";
import { softwareWallets } from "./software-wallets";
import { utilities } from "./utilities";

export const bitcoinDevResources: BitcoinDevResources = {
  "libraries-sdks": librariesSdks,
  "apis-payments": apisPayments,
  "l2s-smart-contracts": l2sSmartContracts,
  "node-software": nodeSoftware,
  "node-hardware": nodeHardware,
  "explorers-analytics": explorersAnalytics,
  utilities,
  "software-wallets": softwareWallets,
  "hardware-wallets": hardwareWallets,
  research,
};
