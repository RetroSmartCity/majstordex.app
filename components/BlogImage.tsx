// components/BlogImage.tsx
type BlogImageProps = {
  src: string;
  alt: string;
};

export default function BlogImage({ src, alt }: BlogImageProps) {
  return (
    <div className="my-4">
      <img src={src} alt={alt} className="rounded-xl shadow-md w-full" />
      <p className="text-sm text-gray-600 mt-1">{alt}</p>
    </div>
  );
}
