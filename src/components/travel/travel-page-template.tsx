import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TravelPageData } from "@/types/travel-page"
import Image from "next/image"
import {LightbulbIcon, UtensilsIcon, MapIcon, CameraIcon, VideoIcon} from "lucide-react"
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export function TravelPageTemplate({ data }: { data: TravelPageData }) {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-muted-foreground mb-2">{data.date}</p>
        <p className="text-lg">{data.description}</p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <VideoIcon className="h-5 w-5"/>
            Travel Vlog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <iframe
                src={data.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
            />
          </AspectRatio>
        </CardContent>
      </Card>

    {/* Top Tips Section */}
    {data.topTips && data.topTips.length > 0 && (
      <div className="grid w-full items-start gap-4 mb-8">
      {data.topTips.map((tip, index) => (
        <Alert key={index}>
          <LightbulbIcon />
          <AlertTitle>Travel tip!</AlertTitle>
          <AlertDescription>
            {tip.description}
          </AlertDescription>
        </Alert>
      ))}
      </div>
    )}


      {/*<Card className="mb-8">*/}
      {/*  <CardHeader>*/}
      {/*    <CardTitle className="flex items-center gap-2">*/}
      {/*      <LightbulbIcon className="h-5 w-5"/>*/}
      {/*      Top Tips*/}
      {/*    </CardTitle>*/}
      {/*  </CardHeader>*/}
      {/*  <CardContent>*/}
      {/*    <ul className="space-y-4">*/}
      {/*      {data.topTips.map((tip, index) => (*/}
      {/*        <li key={index}>*/}
      {/*          <h3 className="font-medium mb-1">{tip.title}</h3>*/}
      {/*          <p className="text-muted-foreground">{tip.description}</p>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </CardContent>*/}
      {/*</Card>*/}

      {/* Food Recommendations */}
      {data.foodRecommendations && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UtensilsIcon className="h-5 w-5" />
              Food Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.foodRecommendations.map((food, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-medium">{food.name}</h3>
                  <p className="text-muted-foreground">{food.description}</p>
                  {food.images && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {food.images.map((image, imgIndex) => (
                        <AspectRatio key={imgIndex} ratio={4 / 3}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="rounded-md object-cover"
                          />
                        </AspectRatio>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Excursions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapIcon className="h-5 w-5" />
            Excursions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.excursions.map((excursion, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium">{excursion.title}</h3>
                <p className="text-muted-foreground">{excursion.description}</p>
                {excursion.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {excursion.images.map((image, imgIndex) => (
                      <AspectRatio key={imgIndex} ratio={4 / 3}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Photo Gallery */}
        {data.additionalPhotos && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CameraIcon className="h-5 w-5" />
                Photo Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.additionalPhotos.map((photo, index) => (
                  <AspectRatio
                    key={index}
                    ratio={1}
                    className="group cursor-pointer overflow-hidden rounded-md"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
    </div>
  )
}