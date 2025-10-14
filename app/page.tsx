import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bitcoin, Zap, BookOpen, Globe, MapPin, Icon } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Bitcoin className="w-20 h-20 text-primary animate-fast-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
              Bitcoin Education Hub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your gateway to understanding Bitcoin, Lightning Network, and the
              future of decentralized finance. Join a global community dedicated
              to learning and sharing knowledge.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Development Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bitcoin Development</h2>
          <p className="text-muted-foreground">
            Explore development resources for Bitcoin, Lightning Network, and
            education.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card className="hover:border-primary/50 transition-colors cursor-pointer text-center">
                <CardHeader>
                  <Icon className="w-12 h-12 text-primary mb-2 mx-auto" />
                  <CardTitle>{resource.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{resource.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      {/* Global Centers & Organizations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Global Centers & Organizations
          </h2>
          <p className="text-muted-foreground">
            Explore Bitcoin education centers and organizations across all
            continents
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {continents.map((continent) => (
            <Link
              key={continent.slug}
              href={`/global/${continent.slug}`}
              className="block group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${continent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardHeader className="relative space-y-3 text-center pb-4">
                  <div className="mx-auto p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{continent.name}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const developmentResources = [
  {
    name: "Bitcoin",
    description:
      "Master the fundamentals of Bitcoin, blockchain technology, and peer-to-peer transactions.",
    icon: Bitcoin,
    slug: "bitcoin",
  },
  {
    name: "Lightning Network",
    description:
      "Explore Layer 2 scaling solutions and instant, low-cost Bitcoin transactions.",
    icon: Zap,
    slug: "lightning-network",
  },
  {
    name: "Education",
    description:
      "Access curated learning materials, documentation, and development tools.",
    icon: BookOpen,
    slug: "education",
  },
];

const continents = [
  {
    name: "Asia",
    slug: "asia",
    description: "Discover Bitcoin initiatives across Asia",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    name: "Europe",
    slug: "europe",
    description: "Explore European Bitcoin education centers",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Africa",
    slug: "africa",
    description: "Learn about Bitcoin adoption in Africa",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    name: "North America",
    slug: "north-america",
    description: "Connect with North American Bitcoin communities",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    name: "South America",
    slug: "south-america",
    description: "Explore South American Bitcoin initiatives",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "Oceania",
    slug: "oceania",
    description: "Discover Bitcoin education in Oceania",
    color: "from-teal-500/20 to-teal-500/5",
  },
];
