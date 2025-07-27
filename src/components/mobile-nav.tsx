"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {InstagramIcon, LinkedinIcon, MenuIcon, YoutubeIcon} from "lucide-react"
import Image from "next/image";
import * as React from "react";

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                    <MenuIcon className="h-12 w-12" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 ">
                    {/* Main Navigation Links */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-bold">Nicole Grieble</span>
                    </Link>
                    <Button asChild variant="default" size="sm">
                        <Link
                            href="/about"
                            className="block px-2 py-3 text-lg font-medium hover:text-primary"
                        >
                            About
                        </Link>
                    </Button>
                    <Button asChild variant="default" size="sm">
                        <Link
                            href="/travel"
                            className="block px-2 py-3 text-lg font-medium hover:text-primary"
                        >
                            Travel
                        </Link>
                    </Button>
                    <Button asChild variant="default" size="sm">
                        <Link
                            href="/experience"
                            className="block px-2 py-3 text-lg font-medium hover:text-primary"
                        >
                            Experience
                        </Link>
                    </Button>

                    {/* Social Links */}
                    <div className="mt-8 flex justify-center gap-4 px-2">
                        <Link
                            href="https://www.instagram.com/ngrieble/"
                            target="_blank"
                            className="hover:text-primary"
                        >
                            <InstagramIcon className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link
                            href="https://www.youtube.com/@ngrieble"
                            target="_blank"
                            className="hover:text-primary"
                        >
                            <YoutubeIcon className="h-6 w-6" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/nicole-grieble-096aa335/"
                            target="_blank"
                            className="hover:text-primary"
                        >
                            <LinkedinIcon className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
