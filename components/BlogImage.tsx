// components/BlogImage.tsx
import Image from 'next/image';

type BlogImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function BlogImage({ src, alt, width = 800, height = 450 }: BlogImageProps) {
  return (
    <div className="my-6">
      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority
        />
      </div>
      <p className="text-sm text-gray-500 text-center mt-2">{alt}</p>
    </div>
  );
}
