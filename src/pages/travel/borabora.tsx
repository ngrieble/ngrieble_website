import { TravelPageTemplate } from "@/components/travel/travel-page-template"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const exampleData = {
    title: "Bora Bora Honeymoon",
    date: "July 2022",
    description: "We were so lucky to have such a stunning honeymoon in Bora Bora.",
    videoUrl: "https://www.youtube.com/embed/lJlfXWPFasc?si=3snjSuV1tHh2eN8d",
    excursions: [
        {
            title: "Tandem ATV + Lunch + Jet Ski Adventure",
            description: "Moana Adventure Tours",
        },
        {
            title: "Sunset Cruise & Romantic Dinner at St James",
            description: "Bora Bora Romantic Tour",
        },
        {
            title: "Shark & Ray Lagoon Cruise with Motu Lunch",
            description: "Lagoon Service Bora Bora",
        },
    ],
    additionalPhotos: [
        { src: "/travel/japan/photo1.jpg", alt: "Cherry Blossoms in Ueno Park" },
        // ... more photos
    ]
}

export default function TravelPage() {
    return (
        <div className="min-h-screen">
            <SiteHeader />
            <TravelPageTemplate data={exampleData} />
            <SiteFooter />
        </div>
    )
}