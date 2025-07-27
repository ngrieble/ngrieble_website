import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import {BriefcaseIcon, CircleUserIcon, PlaneIcon} from "lucide-react";
import * as React from "react";
import {SiteFooter} from "@/components/site-footer";

export default function Home() {
  return (
    <div className={`min-h-screen`}>
      <SiteHeader />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-8">
        <Card className="w-full max-w-4xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10">
                <Image
                  src="/profile_pic.jpg"
                  alt="Nicole Grieble"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bio Section */}
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold">Hi, I&#39;m Nicole! 👋</h1>
                <p className="text-md text-muted-foreground leading-relaxed">
                  Director of Software Engineering with 10+ years in the industry and a love
                  for all things tech. When I am off the clock, you’ll usually find me baking something sweet, knitting
                  through my yarn stash, getting lost in a video game, or planning my next big trip. This site is a mix
                  of professional and personal: part resume, part sandbox, and part travel diary — basically, whatever
                  I feel like building next.
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button asChild variant="default" size="lg">
                <Link href="/about"><CircleUserIcon />More About Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-foreground">
                <Link href="/experience"><BriefcaseIcon />My Experience</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-foreground">
                <Link href="/travel"><PlaneIcon />Travel Stories</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <SiteFooter />
    </div>
  );
}