import { Layer1DevResources } from "@/types";

export const researchEn: Layer1DevResources["research"] = [
  {
    name: "Glassnode Insights",
    description:
      "In-depth analysis and research on Bitcoin providing comprehensive on-chain market intelligence used for understanding market trends and dynamics",
    url: "https://insights.glassnode.com",
    logo: "https://insights.glassnode.com/content/images/2020/02/1000w_logo_insights_white.png",
  },
  {
    name: "Bitmex Research",
    description:
      "Extensive collection of in-depth research articles and analyses on various aspects of Bitcoin featuring best-in-class evidence-based reports.​",
    url: "https://blog.bitmex.com/category/research/?lang=en_us",
    logo: "https://pbs.twimg.com/profile_images/1973590923356545027/tN034ARZ_400x400.jpg",
  },
  {
    name: "Bitcoin Policy Institute",
    description:
      "Think tank that conducts research and advocacy to enhance understanding of Bitcoin and monetary networks, focusing on issues like national security, financial inclusion, human rights, and the environmental impact of Bitcoin mining",
    url: "https://www.btcpolicy.org",
    logo: "https://cdn.prod.website-files.com/627aa615676bdd562bec97cd/627aa6ed93b68da9457b4582_BPI-white.svg",
  },
  {
    name: "Bitcoin Legal Defense Fund",
    description:
      "Founded in 2021 as a non-profit foundation to support Bitcoin developers and protect the Bitcoin ecosystem",
    url: "https://bitcoindefense.org",
    logo: "https://placehold.co/80x80?text=LDF",
  },
  {
    name: "BCAP",
    description:
      "Research paper that provides an analysis of bitcoin's consensus mechanism, focusing on the roles of various stakeholders, their powers, and the incentives that guide their actions",
    url: "https://github.com/bitcoin-cap/bcap?tab=readme-ov-file",
    logo: "https://avatars.githubusercontent.com/u/186951360?s=200&v=4",
  },
  {
    name: "Discreet Log Contracts (DLCs)",
    description:
      "Privacy-focused, scalable smart contract system for Bitcoin, using a unique Schnorr signature-based protocol that minimizes trust in oracles providing external data",
    url: "https://adiabat.github.io/dlc.pdf",
    logo: "https://placehold.co/80x80?text=DLCs",
  },
  {
    name: "Covenants Paper",
    description:
      "Proposal of using a new 'CHECKSIGFROMSTACK' operation for signature verification of message arguments, enabling the creation of Bitcoin Script programs that restrict fund usage which can help with scaling custody",
    url: "https://fc17.ifca.ai/bitcoin/papers/bitcoin17-final28.pdf",
    logo: "https://placehold.co/80x80?text=Covenants",
  },
  {
    name: "UTXOs.org",
    description:
      "Provides detailed information relating to BIP 119 including specs, pull requests, workshops, use cases, signaling, scaling custody and much more",
    url: "https://utxos.org",
    logo: "https://utxos.org/images/logo.svg",
  },
  {
    name: "Covenants.Info",
    description:
      "Provides detailed overviews of various covenant use cases and consensus change proposals, such as ANYPREVOUT, Template Key, CTV, and others",
    url: "https://covenants.info",
    logo: "https://placehold.co/80x80?text=Covenants.Info",
  },
  {
    name: "BitVM",
    description:
      "Novel computing paradigm for expressing Turing-complete Bitcoin contracts without altering the network's consensus rules, leveraging a system where computations are verified rather than executed on Bitcoin",
    url: "https://bitvm.org/bitvm.pdf",
    logo: "https://placehold.co/80x80?text=BitVM",
  },
  {
    name: "Tapleaf Circuits",
    description:
      "Proof-of-concept implementation of BitVM for bristol circuits",
    url: "https://github.com/supertestnet/tapleaf-circuits",
    logo: "https://placehold.co/80x80?text=Tapleaf",
  },
  {
    name: "8bit cpu for BitVM",
    description:
      "Proof-of-concept turing complete 8-bit VM allowing you to write BitVM programs in assembly",
    url: "https://github.com/supertestnet/8bit-cpu-for-bitvm",
    logo: "https://placehold.co/80x80?text=8bit",
  },
  {
    name: "Bitcoin PIPEs",
    description:
      "Research paper that proposes a novel method for verifying zero-knowledge proofs (ZKPs) on Bitcoin's Layer 1 (L1) blockchain without requiring soft forks, by utilizing a Polynomial Inner Product Encryption (PIPE) framework to emulate absent covenants, thus enabling applications like zkRollups and enhancing Bitcoin's programmability despite current limitations in Bitcoin Script",
    url: "https://www.allocin.it/uploads/placeholder-bitcoin.pdf",
    logo: "https://placehold.co/80x80?text=PIPEs",
  },
  {
    name: "ColliderScript",
    description:
      "Research paper that introduces ColliderScript, a method to enforce covenants in Bitcoin without protocol changes by leveraging hash collisions in 160-bit hash functions, enabling transaction introspection and arbitrary spending conditions",
    url: "https://colliderscript.co/colliderscript.pdf",
    logo: "https://placehold.co/80x80?text=ColliderScript",
  },
  {
    name: "BitStream",
    description:
      "Efficient, decentralized file hosting protocol incentivized through Bitcoin payments that utilizes off-chain transactions, verifiable encryption, and a bond contract to ensure integrity and fairness in file transfers",
    url: "https://robinlinus.com/bitstream.pdf",
    logo: "https://placehold.co/80x80?text=BitStream",
  },
  {
    name: "Open Timestamps",
    description:
      "Platform offering an open standard for blockchain-based timestamping, enabling users to prove the existence of documents or data prior to a specific point in time",
    url: "https://opentimestamps.org",
    logo: "https://avatars.githubusercontent.com/u/2550462?s=200&v=4",
  },
  {
    name: "UTXOracle",
    description:
      "Python script for creating a decentralized and trustless way to calculate Bitcoin price using a novel UTXO-based approach",
    url: "https://utxo.live",
    logo: "https://placehold.co/80x80?text=UTXOracle",
  },
  {
    name: "Warnet",
    description:
      "Tool to launch a simulated bitcoin network for monitoring and analyzing emergent behavior in order to increase security and prevent possible threats on the live bitcoin network",
    url: "https://warnet.dev",
    logo: "https://warnet.dev/_next/static/media/bitcoin-logo.7e5733a7.svg",
  },
  {
    name: "Ordinal Theory",
    description:
      "Numbering scheme for satoshis that allows for tracking and transferring individual units by assining numbers to satoshis based on the order they are mined and transferred, without requiring additional tokens or changes to Bitcoin",
    url: "https://rodarmor.com/blog/ordinal-theory",
    logo: "https://placehold.co/80x80?text=Ordinal Theory",
  },
  {
    name: "BBQr - Better Bitcoin QR",
    description:
      'Protocol enabling large files that can fit into a single QR to be sent as a series of QR codes (an "animated QR").',
    url: "https://bbqr.org",
    logo: "https://avatars.githubusercontent.com/u/5586849?s=200&v=4",
  },
  {
    name: "Silent Payments",
    description: "Privacy-preserving static addresses for Bitcoin",
    url: "https://silentpayments.xyz",
    logo: "https://silentpayments.xyz/images/logo-dark.svg",
  },
  {
    name: "DotNut",
    description: "C# Cashu library for the .NET framework",
    url: "https://github.com/Kukks/DotNut",
    logo: "https://placehold.co/80x80?text=DotNut",
  },
  {
    name: "Simfony Web IDE",
    description:
      "Web based IDE for writing bitcoin scripts written in simfony to be deployed to Liquid",
    url: "https://simfony.dev",
    logo: "https://avatars.githubusercontent.com/u/126093814?s=200&v=4",
  },
  {
    name: "Bitcoin Development Environment",
    description:
      "Project aiming to simplify the creation and management of developer environments used to compile and test Bitcoin software, such as Bitcoin Core",
    url: "https://daniel-lima.github.io/bitcoin-devenv",
    logo: "https://placehold.co/80x80?text=devenv",
  },
  {
    name: "shinigami",
    description:
      "Bitcoin Script library for generic Script VM execution in Cairo, enabling the generation of STARK proofs for Bitcoin Script computation and Bitcoin transaction execution",
    url: "https://github.com/keep-starknet-strange/shinigami/tree/6496bc124167658168f9e2835b58534967240ff3",
    logo: "https://avatars.githubusercontent.com/u/217019248?s=200&v=4",
  },
  {
    name: "Semaphore",
    description:
      "A simple proof of concept by Supertestnet allowing people to crowdfund projects with bitcoin",
    url: "https://github.com/supertestnet/semaphore",
    logo: "https://placehold.co/80x80?text=Semaphore",
  },
  {
    name: "Nostr",
    description:
      "Simple, open protocol that enables global, decentralized, and censorship-resistant social media",
    url: "https://nostr.com",
    logo: "https://raw.githubusercontent.com/satscoffee/nostr_icons/75b4f001d517220748d36360d21fc21f59ad431e/nostr_logo_prpl.svg",
  },
];

export const researchKo: Layer1DevResources["research"] = [
  {
    name: "Glassnode Insights",
    description:
      "비트코인에 대한 심층 분석 및 연구로, 시장 동향과 역학을 이해하는 데 사용되는 포괄적인 온체인 시장 인텔리전스를 제공한다",
    url: "https://insights.glassnode.com",
    logo: "https://insights.glassnode.com/content/images/2020/02/1000w_logo_insights_white.png",
  },
  {
    name: "Bitmex Research",
    description:
      "비트코인의 다양한 측면에 대한 심층 연구 기사와 분석의 광범위한 컬렉션으로, 최고 수준의 증거 기반 보고서를 제공한다",
    url: "https://blog.bitmex.com/category/research/?lang=en_us",
    logo: "https://pbs.twimg.com/profile_images/1973590923356545027/tN034ARZ_400x400.jpg",
  },
  {
    name: "Bitcoin Policy Institute",
    description:
      "비트코인과 통화 네트워크에 대한 이해를 증진시키기 위해 연구와 옹호 활동을 수행하는 싱크탱크로, 국가 안보, 금융 포용성, 인권, 비트코인 채굴의 환경적 영향과 같은 문제에 초점을 맞추고 있다",
    url: "https://www.btcpolicy.org",
    logo: "https://cdn.prod.website-files.com/627aa615676bdd562bec97cd/627aa6ed93b68da9457b4582_BPI-white.svg",
  },
  {
    name: "Bitcoin Legal Defense Fund",
    description:
      "2021년에 비영리 재단으로 설립되어 비트코인 개발자를 지원하고 비트코인 생태계를 보호한다",
    url: "https://bitcoindefense.org",
    logo: "https://placehold.co/80x80?text=LDF",
  },
  {
    name: "BCAP",
    description:
      "비트코인의 합의 메커니즘에 대한 분석을 제공하는 연구 논문으로, 다양한 이해관계자들의 역할, 권한, 행동을 유도하는 인센티브에 초점을 맞추고 있다",
    url: "https://github.com/bitcoin-cap/bcap?tab=readme-ov-file",
    logo: "https://avatars.githubusercontent.com/u/186951360?s=200&v=4",
  },
  {
    name: "Discreet Log Contracts (DLCs)",
    description:
      "외부 데이터를 제공하는 오라클에 대한 신뢰를 최소화하는 독특한 Schnorr 서명 기반 프로토콜을 사용하는 비트코인을 위한 프라이버시 중심의 확장 가능한 스마트 컨트랙트 시스템",
    url: "https://adiabat.github.io/dlc.pdf",
    logo: "https://placehold.co/80x80?text=DLCs",
  },
  {
    name: "Covenants Paper",
    description:
      "메시지 인자의 서명 검증을 위한 새로운 'CHECKSIGFROMSTACK' 연산 사용을 제안하여, 자금 사용을 제한하는 비트코인 스크립트 프로그램을 생성할 수 있게 하며, 이는 스케일링 커스터디에 도움이 될 수 있다",
    url: "https://fc17.ifca.ai/bitcoin/papers/bitcoin17-final28.pdf",
    logo: "https://placehold.co/80x80?text=Covenants",
  },
  {
    name: "UTXOs.org",
    description:
      "사양, 풀 리퀘스트, 워크숍, 사용 사례, 신호, 스케일링 커스터디 등을 포함하여 BIP 119와 관련된 상세한 정보를 제공한다",
    url: "https://utxos.org",
    logo: "https://utxos.org/images/logo.svg",
  },
  {
    name: "Covenants.Info",
    description:
      "ANYPREVOUT, Template Key, CTV 등과 같은 다양한 코버넌트 사용 사례와 합의 변경 제안에 대한 상세한 개요를 제공한다",
    url: "https://covenants.info",
    logo: "https://placehold.co/80x80?text=Covenants.Info",
  },
  {
    name: "BitVM",
    description:
      "비트코인의 합의 규칙을 변경하지 않고 튜링 완전 비트코인 컨트랙트를 표현하기 위한 새로운 컴퓨팅 패러다임으로, 비트코인에서 실행되기보다는 검증되는 시스템을 활용한다",
    url: "https://bitvm.org/bitvm.pdf",
    logo: "https://placehold.co/80x80?text=BitVM",
  },
  {
    name: "Tapleaf Circuits",
    description: "브리스톨 회로를 위한 BitVM의 증명 개념 구현",
    url: "https://github.com/supertestnet/tapleaf-circuits",
    logo: "https://placehold.co/80x80?text=Tapleaf",
  },
  {
    name: "8bit cpu for BitVM",
    description:
      "어셈블리로 BitVM 프로그램을 작성할 수 있도록 하는 증명 개념 튜링 완전 8비트 VM",
    url: "https://github.com/supertestnet/8bit-cpu-for-bitvm",
    logo: "https://placehold.co/80x80?text=8bit",
  },
  {
    name: "Bitcoin PIPEs",
    description:
      "소프트 포크를 필요로 하지 않고 비트코인 레이어 1(L1) 블록체인에서 영지식 증명(ZKPs)을 검증하기 위한 새로운 방법을 제안하는 연구 논문, 부재한 코버넌트를 에뮬레이션하기 위해 다항식 내적 암호화(PIPE) 프레임워크를 활용하여 zkRollups와 같은 응용 프로그램을 가능하게 하고, 비트코인 스크립트의 현재 제한에도 불구하고 비트코인의 프로그래밍 가능성을 향상",
    url: "https://www.allocin.it/uploads/placeholder-bitcoin.pdf",
    logo: "https://placehold.co/80x80?text=PIPEs",
  },
  {
    name: "ColliderScript",
    description:
      "160비트 해시 함수의 해시 충돌을 활용하여 프로토콜 변경 없이 비트코인에서 코버넌트를 강제하는 방법을 소개하는 연구 논문으로, 거래 내성찰과 임의의 지출 조건을 가능하게 한다",
    url: "https://colliderscript.co/colliderscript.pdf",
    logo: "https://placehold.co/80x80?text=ColliderScript",
  },
  {
    name: "BitStream",
    description:
      "오프체인 거래, 검증 가능한 암호화, 그리고 파일 전송의 무결성과 공정성을 보장하는 보증 컨트랙트를 활용하는 비트코인 지불을 통해 인센티브를 받는 효율적이고 분산된 파일 호스팅 프로토콜",
    url: "https://robinlinus.com/bitstream.pdf",
    logo: "https://placehold.co/80x80?text=BitStream",
  },
  {
    name: "Open Timestamps",
    description:
      "사용자가 특정 시점 이전에 문서나 데이터의 존재를 증명할 수 있도록 하는 블록체인 기반 타임스탬핑을 위한 개방형 표준을 제공하는 플랫폼",
    url: "https://opentimestamps.org",
    logo: "https://avatars.githubusercontent.com/u/2550462?s=200&v=4",
  },
  {
    name: "UTXOracle",
    description:
      "새로운 UTXO 기반 접근 방식을 사용하여 비트코인 가격을 계산하는 분산적이고 신뢰할 수 없는 방법을 만들기 위한 파이썬 스크립트",
    url: "https://utxo.live",
    logo: "https://placehold.co/80x80?text=UTXOracle",
  },
  {
    name: "Warnet",
    description:
      "실시간 비트코인 네트워크에서 가능한 위협을 방지하고 보안을 높이기 위해 출현하는 행동을 모니터링하고 분석하기 위한 시뮬레이션 비트코인 네트워크를 시작하는 도구",
    url: "https://warnet.dev",
    logo: "https://warnet.dev/_next/static/media/bitcoin-logo.7e5733a7.svg",
  },
  {
    name: "Ordinal Theory",
    description:
      "추가 토큰이나 비트코인의 변경을 필요로 하지 않고, 채굴되고 이전되는 순서에 따라 사토시들에게 번호를 할당함으로써 개별 단위를 추적하고 이전할 수 있도록 하는 사토시들을 위한 번호 체계",
    url: "https://rodarmor.com/blog/ordinal-theory",
    logo: "https://placehold.co/80x80?text=Ordinal Theory",
  },
  {
    name: "BBQr - Better Bitcoin QR",
    description:
      '단일 QR 코드에 맞을 수 있는 대용량 파일을 QR 코드 시리즈("애니메이션 QR")로 보낼 수 있도록 하는 프로토콜.',
    url: "https://bbqr.org",
    logo: "https://avatars.githubusercontent.com/u/5586849?s=200&v=4",
  },
  {
    name: "Silent Payments",
    description: "비트코인을 위한 프라이버시 보존 정적 주소",
    url: "https://silentpayments.xyz",
    logo: "https://silentpayments.xyz/images/logo-dark.svg",
  },
  {
    name: "DotNut",
    description: ".NET 프레임워크를 위한 C# Cashu 라이브러리",
    url: "https://github.com/Kukks/DotNut",
    logo: "https://placehold.co/80x80?text=DotNut",
  },
  {
    name: "Simfony Web IDE",
    description:
      "Liquid에 배포할 simfony로 작성된 비트코인 스크립트를 작성하기 위한 웹 기반 IDE",
    url: "https://simfony.dev",
    logo: "https://avatars.githubusercontent.com/u/126093814?s=200&v=4",
  },
  {
    name: "Bitcoin Development Environment",
    description:
      "Bitcoin Core와 같은 비트코인 소프트웨어를 컴파일하고 테스트하는 데 사용되는 개발자 환경의 생성과 관리를 단순화하는 것을 목표로 하는 프로젝트",
    url: "https://daniel-lima.github.io/bitcoin-devenv",
    logo: "https://placehold.co/80x80?text=devenv",
  },
  {
    name: "shinigami",
    description:
      "Cairo에서 일반적인 스크립트 VM 실행을 위한 비트코인 스크립트 라이브러리로, 비트코인 스크립트 계산과 비트코인 거래 실행을 위한 STARK 증명 생성",
    url: "https://github.com/keep-starknet-strange/shinigami/tree/6496bc124167658168f9e2835b58534967240ff3",
    logo: "https://avatars.githubusercontent.com/u/217019248?s=200&v=4",
  },
  {
    name: "Semaphore",
    description:
      "사람들이 비트코인으로 프로젝트에 크라우드펀딩할 수 있도록 하는 Supertestnet의 간단한 증명 개념",
    url: "https://github.com/supertestnet/semaphore",
    logo: "https://placehold.co/80x80?text=Semaphore",
  },
  {
    name: "Nostr",
    description:
      "전 세계적이고 분산적이며 검열 저항적인 소셜 미디어를 가능하게 하는 간단하고 개방된 프로토콜",
    url: "https://nostr.com",
    logo: "https://raw.githubusercontent.com/satscoffee/nostr_icons/75b4f001d517220748d36360d21fc21f59ad431e/nostr_logo_prpl.svg",
  },
];
