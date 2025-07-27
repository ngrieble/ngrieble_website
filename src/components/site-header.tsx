import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {InstagramIcon, LinkedinIcon, YoutubeIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {MobileNav} from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo/Name section */}
        <div className="flex items-center p-4">
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
        </div>

        {/* Navigation section - desktop */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/travel">Travel</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/experience">Experience</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="https://www.youtube.com/@ngrieble" className="px-2" target="_blank" >
                        <YoutubeIcon className="h-4 w-4" />
                      </Link>
                    </NavigationMenuLink>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My Youtube</p>
                  </TooltipContent>
                </Tooltip>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="https://www.instagram.com/ngrieble/" className="px-2" target="_blank" >
                        <InstagramIcon className="h-4 w-4" />
                      </Link>
                    </NavigationMenuLink>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="https://www.linkedin.com/in/nicole-grieble-096aa335/" className="px-2" target="_blank" >
                        <LinkedinIcon className="h-4 w-4" />
                      </Link>
                    </NavigationMenuLink>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          {/* We can add a mobile menu button here */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}