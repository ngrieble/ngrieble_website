import { TravelPageTemplate } from "@/components/travel/travel-page-template"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const exampleData = {
    title: "Hawaii: Exploring Maui",
    date: "March 2023",
    description: "Five days exploring Maui",
    videoUrl: "https://www.youtube.com/embed/KNU61m871DQ?si=hK2vQhYsB8_--cY3",
    topTips: [
        {
            title: "Road To Hana",
            description: "Completely worth it. Beautiful way to see the island, multiple options for different stops " +
                "throughout. Highly recommend the The Shaka Guide app as your tour guide."
        },
    ],
    foodRecommendations: [
        {
            name: "Spago - Four Seasons Resort",
            description: "Eight of the best ramen shops in Tokyo, all in one place.",
            images: [
                { src: "/travel/spago.jpg", alt: "Spago Pasta" },
                { src: "/travel/spago-2.jpg", alt: "Spago Souffle" },
                { src: "/travel/spago-3.jpg", alt: "Spago Fish" },
            ]
        },
        {
            name: "Fleetwood's on Front St.",
            description: "Eight of the best ramen shops in Tokyo, all in one place.",
            images: [
                { src: "/travel/fleetwoods.jpg", alt: "Fleetwood Tacos" },
                { src: "/travel/fleetwoods-1.jpg", alt: "Fleetwood Burgers" }
            ]
        },
    ],
    excursions: [
        {
            title: "Molokini Crater Snorkeling",
            description: "Redline Rafting",
        },
        {
            title: "Road to Hana Self-Guided Tour",
            description: "Shaka Guide",
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
