import Image from "next/image";

export type ImageProps = {
  src?: string;
  alt: string;
  width: number;
  height: number;
};
export default function BlackImage({
  src = "",
  alt,
  width,
  height,
}: ImageProps) {
  return <Image src={src} width={width} height={height} alt={alt} />;
}
