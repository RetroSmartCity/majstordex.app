// components/BlogImage.tsx
import Image from 'next/image'
import React from 'react'

type BlogImageProps = {
  src: string
  alt: string
  width?: number  // opcionalno, ako želiš fiksnu širinu
  height?: number // opcionalno, ako želiš fiksnu visinu
  layout?: 'intrinsic' | 'responsive' | 'fixed' // opcionalno, default responsive
}

export default function BlogImage({
  src,
  alt,
  width,
  height,
  layout = 'responsive',
}: BlogImageProps) {
  // Ako nema width i height, daj neki default odnos širine/visine
  // Ovo će napraviti da slika zauzima širinu roditelja i proporcionalno se skalira
  const defaultWidth = width ?? 800
  const defaultHeight = height ?? 450

  return (
    <div className="my-6 rounded-xl overflow-hidden shadow-md">
      <Image
        src={src}
        alt={alt}
        width={defaultWidth}
        height={defaultHeight}
        layout={layout}
        className="rounded-xl"
        priority={true} // možeš staviti ako želiš da se slike brzo učitavaju
      />
      <p className="text-sm text-gray-600 mt-2 text-center">{alt}</p>
    </div>
  )
}
