import {ImageData} from "@/types/image-data";

export type TripLength = "Quick" | "Medium" | "Extended"
export type TripFeatures = "Video" | "Photos" | "Guide" | "Tips" | "Food" | "Excursions"

export interface TravelPost {
    id: string
    title: string
    date: string
    description: string
    slug: string
    length: TripLength
    features: TripFeatures[]
    days: number
    thumbnails: ImageData[]
}

export interface TravelPostByYear {
    year: string
    posts: TravelPost[]
}