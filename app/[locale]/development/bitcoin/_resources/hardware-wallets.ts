import { BitcoinDevResources } from "@/types";

export const hardwareWallets: BitcoinDevResources["hardware-wallets"] = [
  {
    name: "Cold Card",
    description:
      "Hardware wallet with a strong focus on security and open-source software, designed for cold storage of Bitcoin.",
    url: "https://coldcard.com",
    logo: "",
  },
  {
    name: "CKBunker for Cold Card",
    description:
      "Software tool designed for use with the Coldcard hardware wallet in Hardware Security Module (HSM) mode. It enables automated, rule-based signing of Bitcoin transactions, allowing the Coldcard to sign transactions without manual confirmation.",
    url: "https://ckbunker.com",
    logo: "",
  },
  {
    name: "Trezor",
    description:
      "One of the first hardware wallets, providing a secure and user-friendly way to store and manage various cryptocurrencies including Bitcoin.",
    url: "https://trezor.io",
    logo: "",
  },
  {
    name: "Foundation Devices",
    description:
      "Specializing in open-source hardware products for Bitcoin and the decentralized internet, including hardware wallets and nodes.",
    url: "https://foundationdevices.com",
    logo: "",
  },
  {
    name: "Seed Signer",
    description:
      "DIY open-source hardware wallet solution that allows users to securely generate and store their Bitcoin seed phrases.",
    url: "https://seedsigner.com",
    logo: "",
  },
  {
    name: "BitBox",
    description:
      "Minimalist hardware wallet that provides a bitcoin-only version, emphasizing security and simplicity for users to safely store and manage their Bitcoin assets.",
    url: "https://bitbox.swiss",
    logo: "",
  },
  {
    name: "Bitkey",
    description:
      "Self-custody bitcoin wallet with an app, hardware, and recovery tools.",
    url: "https://bitkey.world",
    logo: "",
  },
];
