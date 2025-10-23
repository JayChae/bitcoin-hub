import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
};
function Hero({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: Props) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1
          className={cn(
            "from-primary to-primary mb-6 bg-gradient-to-r via-yellow-400/90 bg-clip-text text-4xl font-bold text-transparent md:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-muted-foreground text-lg sm:text-xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
