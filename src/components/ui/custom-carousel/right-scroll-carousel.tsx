
import * as React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

interface RightScrollCarouselProps {
  images: string[];
}

export function RightScrollCarousel({ images }: RightScrollCarouselProps) {
  // Plugin for right scroll direction
  const pluginReverse = React.useRef(
    Autoplay({ 
      delay: 2000, 
      stopOnInteraction: false, 
      direction: 'rtl' // Use rtl direction for right-to-left scrolling
    })
  );
  
  return (
    <Carousel
      opts={{ 
        align: "start", 
        loop: true,
        dragFree: true,
        containScroll: false,
        direction: 'rtl' // Set the carousel direction to right-to-left
      }}
      plugins={[pluginReverse.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={`right-${index}`} className="pl-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-1 h-full">
              <div className="relative h-[240px] w-full overflow-hidden">
                <img
                  src={image}
                  alt={`Partnership ${index + 6}`}
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
