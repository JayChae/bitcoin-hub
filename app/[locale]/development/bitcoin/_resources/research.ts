import { BitcoinDevResources } from "@/types";

export const research: BitcoinDevResources["research"] = [
  {
    name: "Glassnode Insights",
    description:
      "In-depth analysis and research on Bitcoin providing comprehensive on-chain market intelligence used for understanding market trends and dynamics.",
    url: "https://insights.glassnode.com",
    logo: "",
  },
  {
    name: "Bitmex Research",
    description:
      "Extensive collection of in-depth research articles and analyses on various aspects of Bitcoin featuring best-in-class evidence-based reports.​",
    url: "https://blog.bitmex.com/category/research/?lang=en_us",
    logo: "",
  },
  {
    name: "Bitcoin Policy Institute",
    description:
      "Think tank that conducts research and advocacy to enhance understanding of Bitcoin and monetary networks, focusing on issues like national security, financial inclusion, human rights, and the environmental impact of Bitcoin mining.",
    url: "https://www.btcpolicy.org",
    logo: "",
  },
  {
    name: "Bitcoin Legal Defense Fund",
    description:
      "Founded in 2021 as a non-profit foundation to support Bitcoin developers and protect the Bitcoin ecosystem.",
    url: "https://bitcoindefense.org",
    logo: "",
  },
  {
    name: "BCAP",
    description:
      "Research paper that provides an analysis of bitcoin's consensus mechanism, focusing on the roles of various stakeholders, their powers, and the incentives that guide their actions.",
    url: "https://github.com/bitcoin-cap/bcap?tab=readme-ov-file",
    logo: "",
  },
  {
    name: "Discreet Log Contracts (DLCs)",
    description:
      "Privacy-focused, scalable smart contract system for Bitcoin, using a unique Schnorr signature-based protocol that minimizes trust in oracles providing external data.",
    url: "https://adiabat.github.io/dlc.pdf",
    logo: "",
  },
  {
    name: "Covenants Paper",
    description:
      "Proposal of using a new 'CHECKSIGFROMSTACK' operation for signature verification of message arguments, enabling the creation of Bitcoin Script programs that restrict fund usage which can help with scaling custody.",
    url: "https://fc17.ifca.ai/bitcoin/papers/bitcoin17-final28.pdf",
    logo: "",
  },
  {
    name: "UTXOs.org",
    description:
      "Provides detailed information relating to BIP 119 including specs, pull requests, workshops, use cases, signaling, scaling custody and much more.",
    url: "https://utxos.org",
    logo: "",
  },
  {
    name: "Covenants.Info",
    description:
      "Provides detailed overviews of various covenant use cases and consensus change proposals, such as ANYPREVOUT, Template Key, CTV, and others.",
    url: "https://covenants.info",
    logo: "",
  },
  {
    name: "CTV Playground",
    description:
      "Web based tool for experimenting with the OP_CTV opcode used to create locks and vaults.",
    url: "https://ctv.ursus.camp",
    logo: "",
  },
  {
    name: "BitVM",
    description:
      "Novel computing paradigm for expressing Turing-complete Bitcoin contracts without altering the network's consensus rules, leveraging a system where computations are verified rather than executed on Bitcoin.",
    url: "https://bitvm.org/bitvm.pdf",
    logo: "",
  },
  {
    name: "Tapleaf Circuits",
    description:
      "Proof-of-concept implementation of BitVM for bristol circuits.",
    url: "https://github.com/supertestnet/tapleaf-circuits",
    logo: "",
  },
  {
    name: "8bit cpu for BitVM",
    description:
      "Proof-of-concept turing complete 8-bit VM allowing you to write BitVM programs in assembly.",
    url: "https://github.com/supertestnet/8bit-cpu-for-bitvm",
    logo: "",
  },
  {
    name: "Bitcoin PIPEs",
    description:
      "Research paper that proposes a novel method for verifying zero-knowledge proofs (ZKPs) on Bitcoin's Layer 1 (L1) blockchain without requiring soft forks, by utilizing a Polynomial Inner Product Encryption (PIPE) framework to emulate absent covenants, thus enabling applications like zkRollups and enhancing Bitcoin's programmability despite current limitations in Bitcoin Script.",
    url: "https://www.allocin.it/uploads/placeholder-bitcoin.pdf",
    logo: "",
  },
  {
    name: "ColliderScript",
    description:
      "Research paper that introduces ColliderScript, a method to enforce covenants in Bitcoin without protocol changes by leveraging hash collisions in 160-bit hash functions, enabling transaction introspection and arbitrary spending conditions.",
    url: "https://colliderscript.co/colliderscript.pdf",
    logo: "",
  },
  {
    name: "BitStream",
    description:
      "Efficient, decentralized file hosting protocol incentivized through Bitcoin payments that utilizes off-chain transactions, verifiable encryption, and a bond contract to ensure integrity and fairness in file transfers.",
    url: "https://robinlinus.com/bitstream.pdf",
    logo: "",
  },
  {
    name: "Open Timestamps",
    description:
      "Platform offering an open standard for blockchain-based timestamping, enabling users to prove the existence of documents or data prior to a specific point in time.",
    url: "https://opentimestamps.org",
    logo: "",
  },
  {
    name: "UTXOracle",
    description:
      "Python script for creating a decentralized and trustless way to calculate Bitcoin price using a novel UTXO-based approach.",
    url: "https://utxo.live",
    logo: "",
  },
  {
    name: "Warnet",
    description:
      "Tool to launch a simulated bitcoin network for monitoring and analyzing emergent behavior in order to increase security and prevent possible threats on the live bitcoin network.",
    url: "https://warnet.dev",
    logo: "",
  },
  {
    name: "Sulu",
    description:
      "Platform designed for the monetization of APIs using Bitcoin and the Lightning Network, featuring the innovative L402 protocol for efficient and profitable digital transactions between API providers and consumers.",
    url: "https://docs.sulu.sh/",
    logo: "",
  },
  {
    name: "Ordinal Theory",
    description:
      "Numbering scheme for satoshis that allows for tracking and transferring individual units by assining numbers to satoshis based on the order they are mined and transferred, without requiring additional tokens or changes to Bitcoin.",
    url: "https://rodarmor.com/blog/ordinal-theory",
    logo: "",
  },
  {
    name: "BBQr - Better Bitcoin QR",
    description:
      'Protocol enabling large files that can fit into a single QR to be sent as a series of QR codes (an "animated QR").',
    url: "https://bbqr.org",
    logo: "",
  },
  {
    name: "Silent Payments",
    description: "Privacy-preserving static addresses for Bitcoin.",
    url: "https://silentpayments.xyz",
    logo: "",
  },
  {
    name: "DotNut",
    description: "C# Cashu library for the .NET framework.",
    url: "https://github.com/Kukks/DotNut",
    logo: "",
  },
  {
    name: "Simfony Web IDE",
    description:
      "Web based IDE for writing bitcoin scripts written in simfony to be deployed to Liquid.",
    url: "https://simfony.dev",
    logo: "",
  },
  {
    name: "Bitcoin Development Environment",
    description:
      "Project aiming to simplify the creation and management of developer environments used to compile and test Bitcoin software, such as Bitcoin Core.",
    url: "https://daniel-lima.github.io/bitcoin-devenv",
    logo: "",
  },
  {
    name: "shinigami",
    description:
      "Bitcoin Script library for generic Script VM execution in Cairo, enabling the generation of STARK proofs for Bitcoin Script computation and Bitcoin transaction execution.",
    url: "https://github.com/keep-starknet-strange/shinigami/tree/6496bc124167658168f9e2835b58534967240ff3",
    logo: "",
  },
  {
    name: "Semaphore",
    description:
      "A simple proof of concept by Supertestnet allowing people to crowdfund projects with bitcoin.",
    url: "https://github.com/supertestnet/semaphore",
    logo: "",
  },
  {
    name: "Nostr",
    description:
      "Simple, open protocol that enables global, decentralized, and censorship-resistant social media.",
    url: "https://nostr.com",
    logo: "",
  },
];
