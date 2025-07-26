import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {InstagramIcon, LinkedinIcon, PalmtreeIcon, SunIcon, TentTreeIcon, YoutubeIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo/Name section */}
        <div className="flex items-center p-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                  src="/logo1.png"
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
                <NavigationMenuTrigger>Travel</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="https://www.youtube.com/watch?v=lJlfXWPFasc" target="_blank" className="flex-row items-center gap-2">
                          <PalmtreeIcon />
                          Bora Bora
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="https://www.youtube.com/watch?v=KNU61m871DQ" target="_blank" className="flex-row items-center gap-2">
                          <SunIcon />
                          Hawaii
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="https://www.youtube.com/watch?v=SWf2slNX2zU" className="flex-row items-center gap-2">
                          <TentTreeIcon />
                          Alaska
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
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
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}