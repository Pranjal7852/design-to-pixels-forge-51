
import * as React from "react"

const features = [
  "List Your Requirements",
  "Material Matching",
  "Connect The Best Deal"
]

export function Features() {
  return (
    <div className="flex w-[1198px] max-w-full flex-col items-center mt-[60px] max-md:mt-10">
      <h2 className="text-[#39302D] text-center text-5xl font-normal leading-none max-md:max-w-full max-md:text-[40px]">
        From Waste to Value
      </h2>
      <div className="w-[960px] max-w-full mt-7 py-16 rounded-[0px_0px_0px_0px] relative">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="font-normal self-stretch min-w-[90px] min-h-11 overflow-hidden text-[27px] text-[#39302D] text-center capitalize leading-none max-w-[360px] px-[17px] py-[13px] rounded-[40px] max-md:mt-10">
                {feature}
              </div>
            </div>
          ))}
        </div>
        
        {/* First arrow - from List Your Requirements to Material Matching (pointing upward) */}
        <div className="absolute left-[240px] top-[100px] hidden md:block">
          <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 70 Q 90 10, 170 70" stroke="#81C784" strokeWidth="2" fill="none" />
            <path d="M170 70 L 165 65 M 170 70 L 175 65" stroke="#81C784" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Second arrow - from Material Matching to Connect The Best Deal (pointing downward) */}
        <div className="absolute right-[240px] top-[100px] hidden md:block">
          <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 Q 90 70, 170 10" stroke="#81C784" strokeWidth="2" fill="none" />
            <path d="M170 10 L 165 15 M 170 10 L 175 15" stroke="#81C784" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}
