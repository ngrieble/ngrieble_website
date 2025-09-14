import { TravelPageTemplate } from "@/components/travel/travel-page-template"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const alaskanData = {
    title: "Alaskan Cruise: Celebrity Edge",
    date: "June 2025",
    description: "A breathtaking journey through the last frontier, exploring glaciers, wildlife, and stunning landscapes.",
    videoUrl: "https://www.youtube.com/embed/SWf2slNX2zU?si=3VXhdoXzX2QJN1jQ",
    excursions: [
        {
            title: "Totem Bight State Historical Park",
            subtitle: "Ketchikan, Alaska",
            description: " Just a quick taxi ride from the Ketchikan cruise port! We did a self-guided walk, which was " +
                "super easy thanks to the informative signs throughout the park. The totem poles are stunning, and you " +
                "can even walk through a traditional clan house. The nature is next-level—we spotted a bald eagle!",
            images: [
                 { src: "/travel/alaska/alaska-3.jpg", alt: "" }
            ]
        },
        {
            title: "Creek Street",
            subtitle: "Ketchikan, Alaska",
            description: " Charming boardwalk with colorful houses on stilts! It’s a bit tricky to tell what’s authentic " +
                "vs. touristy, but it’s totally worth a visit. I scored some beautiful Native American art and locally " +
                "made Alaskan yarn.",
            images: [
                { src: "/travel/alaska/alaska-4.jpg", alt: "" }
            ]
        },
    ],
    additionalPhotos: [
        { src: "/travel/alaska/alaska-1.jpg", alt: "" },
        { src: "/travel/alaska/alaska-2.jpg", alt: "" },
        { src: "/travel/alaska/alaska-5.jpg", alt: "" },
        { src: "/travel/alaska/alaska-6.jpg", alt: "" },
        { src: "/travel/alaska/alaska-7.jpg", alt: "" },
        { src: "/travel/alaska/alaska-8.jpg", alt: "" },
        { src: "/travel/alaska/alaska-9.jpg", alt: "" },
        { src: "/travel/alaska/alaska-10.jpg", alt: "" },
        { src: "/travel/alaska/alaska-11.jpg", alt: "" },
        { src: "/travel/alaska/alaska-12.jpg", alt: "" },
        { src: "/travel/alaska/alaska-13.jpg", alt: "" },
    ]
}

export default function TravelPage() {
    return (
        <div className="min-h-screen">
            <SiteHeader />
            <TravelPageTemplate data={alaskanData} />
            <SiteFooter />
        </div>
    )
}