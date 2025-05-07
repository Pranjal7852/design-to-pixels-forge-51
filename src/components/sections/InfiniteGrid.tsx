
import * as React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from 'embla-carousel-autoplay'

interface PartnershipImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const partnershipImages: PartnershipImage[] = [
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × POLAROID",
    title: "BMW × POLAROID",
    description: "Capture the drive."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW Chair",
    title: "BMW",
    description: "Performance. Precision. Comfort."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × IKEA",
    title: "BMW × IKEA",
    description: "Born in a BMW. Designed for your home."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × TUPPERWARE",
    title: "BMW × TUPPERWARE",
    description: "Engineered for precision. Designed for freshness."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × TOYS",
    title: "BMW × TOYS",
    description: "Playful design for creative minds."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × LEGO",
    title: "BMW × LEGO",
    description: "Upcycled engineering for little engineers"
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW DECATHLON",
    title: "BMW DECATHLON",
    description: "Hybrid performance on any terrain."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × SAMSONITE",
    title: "BMW × SAMSONITE",
    description: "Performance on the road. Protection for travel."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW INTERIORS",
    title: "BUILT FROM BMW INTERIORS",
    description: "MADE FOR MODERN SPACES."
  },
  {
    src: "/lovable-uploads/3f32afaf-38a7-450e-9fdc-3be4e011390c.png",
    alt: "BMW × PLANT POTS",
    title: "BMW × GREEN LIVING",
    description: "Sustainable design for eco-conscious lifestyles."
  }
];

export function InfiniteGrid() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  
  const pluginReverse = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, direction: 'backward' })
  );

  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#39302D]">
          Our Partnerships
        </h2>
      </div>
      
      {/* First row - scrolling left */}
      <div className="mb-8">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {partnershipImages.slice(0, 5).map((image, index) => (
              <CarouselItem key={index} className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-1 h-full">
                  <div className="relative h-[240px] w-full overflow-hidden rounded-lg bg-[#f1f5f9]">
                    <img
                      src={image.src.split("?")[0]}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <h3 className="font-bold">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
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
          <CarouselContent className="-ml-1">
            {partnershipImages.slice(5, 10).map((image, index) => (
              <CarouselItem key={index} className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-1 h-full">
                  <div className="relative h-[240px] w-full overflow-hidden rounded-lg bg-[#f1f5f9]">
                    <img
                      src={image.src.split("?")[0]}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <h3 className="font-bold">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
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
