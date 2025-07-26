import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {GamepadIcon, CakeIcon, HeartIcon, VolleyballIcon, TrophyIcon, PawPrintIcon} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Geist, Geist_Mono } from "next/font/google"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import {SiteFooter} from "@/components/site-footer";
import * as React from "react";

// Baking images
const bakingImages = [
  { src: "/donuts.jpg", alt: "Homemade donuts" },
  { src: "/danish.jpg", alt: "Cheese and cherry danish" },
  { src: "/buns.jpg", alt: "Fresh cinnamon rolls" },
  { src: "/rolls.jpg", alt: "Fresh dinner rolls" },
]

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Add auto-sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bakingImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Changes every 3 seconds

    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen`}>
      <SiteHeader />
      <div className="py-8">
        {/* Page Introduction */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">A Little More About Me</h1>
          <p className="text-muted-foreground text-md max-w-2xl mx-auto">
            This page is a snapshot of the people and passions that make up my life. From my husband and
            our ridiculously cute pup, to the things that keep me inspired — like gaming, knitting,
            and Michigan football — these are the things that bring me joy and keep me sane.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Family Card with Image */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartIcon className="h-6 w-6" />
                My Husband
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src="/nick-and-nicole.jpg"
                  alt="Me and my husband"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardDescription className="text-sm">
                My partner-in-crime, best friend, and the one who keeps me laughing through it all. He helped me build
                my first gaming PC, which sparked my love for video games. I returned the favor by inspiring his love
                for travel — and dragging him all over the world. We met at the University of Michigan and tied the
                knot in May 2025 with our dream wedding.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Valkyrie Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PawPrintIcon className="h-6 w-6" />
                Meet Valkyrie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                    src="/valkyrie.jpg"
                    alt="My puppy Valkyrie"
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardDescription>
                Our lovable Australian Labradoodle, Valkyrie joined the family in October 2025 and quickly stole our
                hearts. She’s incredibly smart and has a way of charming everyone (and getting her way) with those big,
                brown eyes. Always full of energy, she loves to play and run as fast as she can — bringing joy and a
                little bit of chaos wherever she goes.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Video Gaming Card with Steam Link */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GamepadIcon className="h-6 w-6" />
                Video Gaming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Video games are one of my favorite ways to unwind and get completely absorbed. I especially love city
                builders and simulation games, and I’ll try just about any indie title that catches my eye. Some games
                I’ve sunk countless hours into include Oxygen Not Included, Stardew Valley, The Sims, and Apex Legends
                (usually with my husband). A few all-time favorites are The Last of Us, Hollow Knight, and the entire
                Nancy Drew series — a nostalgic classic I’ll never quit. I also have a soft spot for offbeat indie
                games, with recent favorites like Dredge, The Roottrees Are Dead, Strange Horticulture, and Cult of the Lamb.
              </CardDescription>
              <Button asChild variant="outline" className="w-full text-foreground">
                <a href="https://steamcommunity.com/id/ngoblue/" target="_blank" rel="noopener noreferrer">
                  View My Steam Profile
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Knitting Card with Ravelry Link */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <VolleyballIcon className="h-6 w-6" />
                Knitting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Knitting is my meditation — still a beginner, but I’m hooked on making cozy hats and chunky
                blankets for me and my friends. It’s the perfect way to unwind and add some handmade warmth to life.
              </CardDescription>
              <Button asChild variant="outline" className="w-full text-foreground">
                <a href="https://www.ravelry.com/projects/ngrieble" target="_blank" rel="noopener noreferrer">
                  See My Ravelry Projects
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Football Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrophyIcon className="h-6 w-6" />
                Football
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                    src="/rose-bowl.jpg"
                    alt="Husband and I at University of Michigan football game"
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardDescription className="mb-4">
                Football has been a lifelong love of mine — I grew up a diehard Chicago Bears fan and still remember
                watching them lose to the Colts in the Super Bowl when I was in high school (yes, it still stings).
                Attending the University of Michigan only deepened my obsession — I was fully inducted into the
                Wolverine cult and don’t miss a single game. Getting to attend the Rose Bowl for the 2024 championship
                season was an unforgettable, once-in-a-lifetime moment. I am also a big fantasy football fan — I play
                in multiple leagues each year, run our work league, and have taken home more than a few championships.
                Outside of football, I’m always game to catch just about any sport in person — baseball, hockey,
                you name it.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Baking Card with Image */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CakeIcon className="h-6 w-6" />
                Baking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src={bakingImages[currentImageIndex].src}
                  alt={bakingImages[currentImageIndex].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
                
                {/* Navigation dots */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                  {bakingImages.map((_, index) => (
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
              </div>
              <CardDescription>
                My sister and mom are my baking inspirations — I’m always trying out their recipe recommendations. While I
                cook too, my sweet tooth and love of precise measurements keep pulling me back to baking. Favorites
                include Claire Saffitz’s sour cream & chive dinner rolls, my dad’s chocolate chip cookies, and Rachael
                Ray’s chocolate chip banana bread.
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})