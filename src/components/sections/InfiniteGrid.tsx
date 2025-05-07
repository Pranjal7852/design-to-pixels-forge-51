
import * as React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface GridImage {
  src: string;
  alt: string;
}

const topRowImages: GridImage[] = [
  {
    src: "/lovable-uploads/018592c4-63a0-43a7-9c0f-5f6e66692c2d.png", 
    alt: "BMW Partnerships Grid"
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 1"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 2"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 3"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 4"
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 5"
  }
];

const bottomRowImages: GridImage[] = [
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 6"
  },
  {
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 7"
  },
  {
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 8"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 9"
  },
  {
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=300&h=200",
    alt: "Tech image 10"
  },
  {
    src: "/lovable-uploads/018592c4-63a0-43a7-9c0f-5f6e66692c2d.png", 
    alt: "BMW Partnerships Grid"
  }
];

export function InfiniteGrid() {
  // Create double sets of images for seamless infinite loop effect
  const topImagesDouble = [...topRowImages, ...topRowImages];
  const bottomImagesDouble = [...bottomRowImages, ...bottomRowImages];
  
  return (
    <div className="w-full py-12 overflow-hidden bg-[#F0F0F0]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#39302D]">
        Our Partnerships
      </h2>
      
      {/* Top row - scrolling left */}
      <div className="mb-8 relative">
        <div className="animate-scroll-left overflow-hidden">
          <div className="flex whitespace-nowrap">
            {topImagesDouble.map((image, index) => (
              <div key={index} className="inline-block px-2 w-[250px] h-[200px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom row - scrolling right */}
      <div className="relative">
        <div className="animate-scroll-right overflow-hidden">
          <div className="flex whitespace-nowrap">
            {bottomImagesDouble.map((image, index) => (
              <div key={index} className="inline-block px-2 w-[250px] h-[200px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
