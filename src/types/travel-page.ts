export interface TravelTip {
    title: string
    description: string
}

export interface FoodRecommendation {
    name: string
    description: string
    images?: {
        src: string
        alt: string
    }[]
}

export interface Excursion {
    title: string
    description: string
    images?: {
        src: string
        alt: string
    }[]
}

export interface TravelPageData {
    title: string
    description: string
    date: string
    videoUrl: string
    topTips?: TravelTip[]
    foodRecommendations?: FoodRecommendation[]
    excursions: Excursion[]
    additionalPhotos?: {
        src: string
        alt: string
    }[]
}
