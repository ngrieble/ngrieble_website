import { Badge } from "@/components/ui/badge"
import {BinocularsIcon, BookOpenIcon, CalendarIcon, CameraIcon, LightbulbIcon, PizzaIcon, VideoIcon} from "lucide-react"
import Link from "next/link"
import { TravelPost } from "@/types/travel"
import {Gallery} from "@/components/ui/gallery";

export function TravelPostCard({ post }: { post: TravelPost }) {
    return (
        <Link href={post.slug} className="block group">
            <div className="flex border rounded-lg overflow-hidden transition-colors hover:bg-muted/50">
                {/* Image container */}
                <div className="w-36 h-36 shrink-0">
                    <Gallery images={post.thumbnails} />
                </div>

                <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium group-hover:text-primary">
                            {post.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                            {post.date}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                        {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="flex items-center">
                            <CalendarIcon className="mr-1 h-3 w-3" />
                            {post.days} days
                        </Badge>

                        {post.features.includes("Video") && (
                            <Badge variant="secondary" className="flex items-center">
                                <VideoIcon className="mr-1 h-3 w-3" />
                                Video
                            </Badge>
                        )}
                        {post.features.includes("Photos") && (
                            <Badge variant="secondary" className="flex items-center">
                                <CameraIcon className="mr-1 h-3 w-3" />
                                Photos
                            </Badge>
                        )}
                        {post.features.includes("Guide") && (
                            <Badge variant="outline" className="flex items-center text-primary">
                                <BookOpenIcon className="mr-1 h-3 w-3" />
                                Guide
                            </Badge>
                        )}
                        {post.features.includes("Tips") && (
                            <Badge variant="outline" className="flex items-center text-primary">
                                <LightbulbIcon className="mr-1 h-3 w-3" />
                                Tips
                            </Badge>
                        )}
                        {post.features.includes("Food") && (
                            <Badge variant="outline" className="flex items-center text-primary">
                                <PizzaIcon className="mr-1 h-3 w-3" />
                                Food Recs
                            </Badge>
                        )}
                        {post.features.includes("Excursions") && (
                            <Badge variant="outline" className="flex items-center text-primary">
                                <BinocularsIcon className="mr-1 h-3 w-3" />
                                Excursions
                            </Badge>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
