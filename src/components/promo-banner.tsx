import Image from "next/image";

interface PromoBannerProps {
  src: string;
  alt: string;
}

const PromoBanner = ({ ...props }: PromoBannerProps) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      height={0}
      width={0}
      className="h-auto w-full object-contain px-5 py-6"
      sizes="100%"
      quality={100}
    />
  );
};

export default PromoBanner;
