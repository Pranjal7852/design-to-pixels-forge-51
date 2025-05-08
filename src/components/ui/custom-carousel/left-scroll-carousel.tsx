
import * as React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

interface LeftScrollCarouselProps {
  images: string[];
}

export function LeftScrollCarousel({ images }: LeftScrollCarouselProps) {
  // Plugin for left scroll direction (default)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        containScroll: false,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={`left-${index}`} className="pl-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-1 h-full">
              <div className="relative h-[240px] w-full overflow-hidden">
                <img
                  src={image}
                  alt={`Partnership ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
