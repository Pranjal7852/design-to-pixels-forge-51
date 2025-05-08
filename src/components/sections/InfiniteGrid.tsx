
import * as React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

export function InfiniteGrid() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  
  const pluginReverse = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, reverse: true })
  );

  // Images for the first row
  const firstRowImages = [
    "/lovable-uploads/4ff0810f-ba0a-4947-a515-5eb8341c06b0.png",
    "/lovable-uploads/1cb38006-ae2f-406e-89c1-b125cb532b3e.png",
    "/lovable-uploads/1901c47e-79bb-4e60-b8ba-6e32e2cd868d.png",
    "/lovable-uploads/3884cea5-006d-4ebb-83c7-b837b0775607.png",
    "/lovable-uploads/00d1b357-c1c3-4b55-bc5a-74ffc24b742d.png",
    "/lovable-uploads/81e2c5b0-4fd1-4974-8d2c-7428605e341c.png"
  ];

  // Images for the second row
  const secondRowImages = [
    "/lovable-uploads/4f6fd0a8-9d5a-43ac-8a51-b3f8fe95163b.png",
    "/lovable-uploads/019cc325-1ae0-4a79-90ff-2653ca83cb57.png",
    "/lovable-uploads/1d23442b-2363-4405-b01f-7f4ceeb18a19.png",
    "/lovable-uploads/11c2f133-ff47-4e29-a52c-c9778f30c19b.png",
    "/lovable-uploads/fb1337bf-1a68-40ac-8ff8-ddea9dee1eab.png",
    "/lovable-uploads/7760713e-11f7-4627-a2dc-9cd0052a8628.png"
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      {/* First row - scrolling left */}
      <div className="mb-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {firstRowImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
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
      </div>
      
      {/* Second row - scrolling right */}
      <div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[pluginReverse.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {secondRowImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
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
      </div>
    </div>
  )
}
