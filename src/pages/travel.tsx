import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertCircleIcon,
    PlaneIcon,
} from "lucide-react"
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import {TravelPostByYear} from "@/types/travel";
import {useEffect, useState} from "react";
import {TravelPostCard} from "@/components/travel/travel-post-card";
import {TravelPostSkeleton} from "@/components/travel/travel-post-skeleton";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export default function TravelPage() {
    const [postsByYear, setPosts] = useState<TravelPostByYear[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/travel/posts')
                if (!response.ok) {
                    throw new Error('Failed to fetch posts. Please try again later.')
                }
                const data = await response.json()
                setPosts(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className={`min-h-screen`}>
            <SiteHeader />
            <div className="container py-8 max-w-4xl mx-auto min-h-[calc(100vh-3.5rem)]">
                <div className="space-y-8">
                    {/* Page Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
                            <PlaneIcon className="h-8 w-8" />
                            Travel Stories
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Follow along on my adventures around the world. Each post includes travel tips,
                            photo galleries, and video highlights from the trip.
                        </p>
                    </div>

                    {isLoading ? (
                        // Show 3 skeleton cards while loading
                        <>
                            {[1, 2, 3].map((i) => (
                                <TravelPostSkeleton key={i} />
                            ))}
                        </>
                    ) : error ? (
                        <div className="grid w-full items-center justify-center">
                            <Alert variant="destructive" className="min-w-md">
                                <AlertCircleIcon />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    {error}
                                </AlertDescription>
                            </Alert>
                        </div>
                    ) : (
                    postsByYear.map((postByYear) => (
                    <Card key={postByYear.year} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-lg">{postByYear.year}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {postByYear.posts.map((post) => (
                                    <TravelPostCard key={post.id} post={post} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    )))}
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}