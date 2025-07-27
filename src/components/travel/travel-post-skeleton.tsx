
export function TravelPostSkeleton() {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
                {/* Title skeleton */}
                <div className="h-6 w-48 bg-muted animate-pulse rounded" />
                {/* Date skeleton */}
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
            </div>
            {/* Description skeleton */}
            <div className="space-y-2 mb-3">
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
            </div>
            {/* Badges skeleton */}
            <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="h-5 w-20 bg-muted animate-pulse rounded-full"
                    />
                ))}
            </div>
        </div>
    )
}
