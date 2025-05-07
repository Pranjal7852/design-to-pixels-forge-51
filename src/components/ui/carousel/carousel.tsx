
import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { CarouselContext, CarouselProps } from "./context"

export const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, carouselApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: UseEmblaCarouselType[1]) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      carouselApi?.scrollPrev()
    }, [carouselApi])

    const scrollNext = React.useCallback(() => {
      carouselApi?.scrollNext()
    }, [carouselApi])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!carouselApi || !setApi) {
        return
      }

      setApi(carouselApi)
    }, [carouselApi, setApi])

    React.useEffect(() => {
      if (!carouselApi) {
        return
      }

      onSelect(carouselApi)
      carouselApi.on("reInit", () => onSelect(carouselApi))
      carouselApi.on("select", () => onSelect(carouselApi))

      return () => {
        carouselApi?.off("select", () => onSelect(carouselApi))
      }
    }, [carouselApi, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: carouselApi,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"
