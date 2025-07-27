import {useEffect, useState} from "react"
import Image from "next/image";
import * as React from "react";
import {ImageData} from "@/types/image-data";

export function Gallery({ images }: { images: ImageData[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Add auto-sliding effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000) // Changes every 3 seconds

        return () => clearInterval(timer)
    }, [images.length])

    return (
        <div className="relative w-full h-full rounded-md overflow-hidden">
            <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-500"
            />

            {(images.length > 1) && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}