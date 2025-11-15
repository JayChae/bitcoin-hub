import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt"> & {
  src?: ImageProps["src"];
  alt?: string;
};

export default function Logo({
  alt = "Logo",
  src = "/images/icon.webp",
  ...props
}: LogoProps) {
  return <Image alt={alt} src={src} {...props} priority />;
}
