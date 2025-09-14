"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface FullscreenImageProps {
    src: string
    alt: string
}

export function FullscreenImage({ src, alt }: FullscreenImageProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="w-full h-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                    />
                </button>
            </DialogTrigger>
            {/*<DialogContent className="max-w-none max-h-none w-screen h-screen p-0 border-none bg-black/80">*/}
            <DialogContent className="max-w-[100vw] max-h-[100vh] h-[100vh] w-[100vw] p-0 border-none bg-black/80 !rounded-none !m-0">
                <div className="relative w-full h-full p-4">
                    <div className="relative w-full h-full">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            style={{ objectFit: "contain" }}
                            className="transition-transform duration-500"
                        />
                    </div>
                    {/*<button*/}
                    {/*    className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background/90"*/}
                    {/*    onClick={() => document.querySelector('button[aria-label="Close"]')?.click()}*/}
                    {/*>*/}
                    {/*    <X className="h-6 w-6" />*/}
                    {/*    <span className="sr-only">Close</span>*/}
                    {/*</button>*/}
                </div>
            </DialogContent>
        </Dialog>
    )
}