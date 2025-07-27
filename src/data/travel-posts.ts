import {TravelPostByYear} from "@/types/travel";

export const travelPostsByYear: TravelPostByYear[]    = [
    {
        year: "2025",
        posts: [
            {
                id: "alaska",
                title: "Alaskan Cruise: Celebrity Edge",
                date: "June 2025",
                description: "Ten day cruise out of Seattle up to Alaska and BC",
                slug: "/travel/alaska",
                length: "Medium",
                features: ["Video", "Photos", "Excursions"],
                days: 10,
                thumbnails:
                    [
                        {
                            src: "/travel/alaska.jpg",
                            alt: ""
                        }
                    ]
            },
            {
                id: "new-york",
                title: "Long Weekend in New York City",
                date: "March 2025",
                description: "A long weekend eating our way through New York City.",
                slug: "/travel/new-york",
                length: "Quick",
                features: ["Photos", "Food"],
                days: 3,
                thumbnails:
                    [
                        {
                            src: "/travel/new-york.jpg",
                            alt: ""
                        }
                    ]
            },
        ],
    },
    {
        year: "2024",
        posts: [
            {
                id: "amsterdam-mumbai",
                title: "Amsterdam & Mumbai: A trip around the world",
                date: "February 2024",
                description: "Attending a wedding in Mumbai with a stopover in Amsterdam",
                slug: "/travel/amsterdam",
                length: "Extended",
                features: ["Photos"],
                days: 14,
                thumbnails:
                    [
                        {
                            src: "/travel/amsterdam.jpg",
                            alt: ""
                        },
                        {
                            src: "/travel/mumbai.jpg",
                            alt: ""
                        }
                    ]
            },
        ]
    },
    {
        year: "2023",
        posts: [
            {
                id: "hawaii",
                title: "Hawaii: Exploring Maui",
                date: "September 2023",
                description: "Road trip on the road to Hana, snorkeling, and exploring Maui",
                slug: "/travel/hawaii",
                length: "Medium",
                features: ["Video", "Photos", "Excursions"],
                days: 5,
                thumbnails:
                    [
                        {
                            src: "/travel/hawaii.jpg",
                            alt: ""
                        }
                    ]
            },
        ]
    }
]