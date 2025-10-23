import { BitcoinDevResources } from "@/types";

export const nodeSoftware: BitcoinDevResources["node-software"] = [
  {
    name: "Bitcoin Core",
    description:
      "Reference implementation of the Bitcoin protocol providing a robust set of developer tools.",
    url: "https://bitcoin.org/en/bitcoin-core",
    logo: "",
  },
  {
    name: "btcd",
    description:
      "Alternative full node implementation in Go, designed to be compatible with Bitcoin Core.",
    url: "https://github.com/btcsuite/btcd",
    logo: "",
  },
  {
    name: "libbitcoin",
    description:
      "Set of cross-platform C++ libraries for building Bitcoin applications.",
    url: "https://github.com/libbitcoin/libbitcoin-system",
    logo: "",
  },
  {
    name: "bcoin",
    description: "Bitcoin client written in JavaScript by Purse.io.",
    url: "https://github.com/bcoin-org/bcoin",
    logo: "",
  },
  {
    name: "Bitcoin Knots",
    description:
      "Derivative of Bitcoin Core that includes a variety of enhancements and additional features.",
    url: "https://bitcoinknots.org",
    logo: "",
  },
  {
    name: "Node Launcher",
    description:
      "User-friendly desktop application designed to simplify the process of running a Bitcoin and Lightning Network node.",
    url: "https://github.com/lightning-power-users/node-launcher",
    logo: "",
  },
  {
    name: "Floresta",
    description:
      "Lightweight fully-validating Bitcoin node powered by Utreexo, which includes an integrated Electrum Server.",
    url: "https://github.com/Davidson-Souza/Floresta",
    logo: "",
  },
];
