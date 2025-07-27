import { TravelPageTemplate } from "@/components/travel/travel-page-template"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const exampleData = {
    title: "Alaskan Cruise: Celebrity Edge",
    date: "June 2025",
    description: "A breathtaking journey through the last frontier, exploring glaciers, wildlife, and stunning landscapes.",
    videoUrl: "https://www.youtube.com/embed/SWf2slNX2zU?si=3VXhdoXzX2QJN1jQ",
    excursions: [
        {
            title: "Molokini Crater Snorkeling",
            description: "Redline Rafting",
        },
        {
            title: "Road to Hana Self-Guided Tour",
            description: "Shaka Guide.",
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