
import * as React from "react"

const features = [
  "List Your Requirements",
  "Material Matching",
  "Connect The Best Deal"
]

export function Features() {
  return (
    <div className="flex w-full flex-col items-center mt-[60px] max-md:mt-10">
      <h2 className="text-[#39302D] text-center text-5xl font-semibold max-md:text-[40px]">
        From Waste to Value
      </h2>

      <div className="relative w-full max-w-[960px] mt-14">
        {/* Use the uploaded image instead of building the component with individual elements */}
        <img 
          src="/lovable-uploads/bcf905a3-38e2-4ab1-b2f0-d2035fbd429e.png" 
          alt="From Waste to Value Process"
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}
