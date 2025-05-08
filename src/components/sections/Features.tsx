
import * as React from "react"

const features = [
  "List Your Requirements",
  "See Matching Results",
  "Connect to the Company"
]

export function Features() {
  return (
    <div className="flex w-full flex-col items-center mt-[60px] max-md:mt-10">
      <h2 className="text-[#39302D] text-center text-5xl font-semibold max-md:text-[40px]">
        From Waste to Value
      </h2>

      <div className="relative w-full max-w-[960px] mt-14">
        <div className="flex justify-between items-center px-4 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-[22px] font-semibold text-[#39302D] w-1/3">
              {feature}
            </div>
          ))}
        </div>

        {/* Arrow from List Your Requirements to See Matching Results */}
       

        {/* Arrow from See Matching Results to Connect to the Company */}
  
      </div>
    </div>
  )
}