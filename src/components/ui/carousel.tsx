
import { type UseEmblaCarouselType } from "embla-carousel-react"

// Re-export all components and types
import { Carousel } from "./carousel/carousel"
import { CarouselContent } from "./carousel/carousel-content"
import { CarouselItem } from "./carousel/carousel-item"
import { CarouselNext, CarouselPrevious } from "./carousel/carousel-navigation"

// Type export
type CarouselApi = UseEmblaCarouselType[1]

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
