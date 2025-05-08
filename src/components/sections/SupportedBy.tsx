
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

const brands = [
  {
    name: "Unternehmertum",
    logo: "/lovable-uploads/9ebf2069-ac51-4559-bcfc-a9e09b866b87.png"
  },
  {
    name: "Digital Product School",
    logo: "/lovable-uploads/6f273bba-56ed-4e45-a95d-78d5eabc2611.png"
  }
]

export function SupportedBy() {
  return (
    <div className="w-[940px] max-w-full mt-[60px] mb-[60px] max-md:mt-10 text-center">
      <h2 className="text-[22px] font-light text-[#C8C8C9] mb-8">
        Supported By
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-5">
        {brands.map((brand, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white bg-opacity-90">
            <CardContent className="flex items-center justify-center p-6 h-[150px]">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-full max-w-[200px] object-contain opacity-80"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
