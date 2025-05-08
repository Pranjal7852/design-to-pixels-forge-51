
import * as React from "react"

const features = [
  "List Your Requirements",
  "See Matching Results",
  "Connect to the Company"
]

export function Features() {
  return (
    <div className="flex w-full flex-col items-center mt-[60px] max-md:mt-10">
      <h2 className="text-[#39302D] text-center text-5xl font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
        From Waste to Value
      </h2>
      <div className="w-full max-w-[960px] mt-7 py-16 relative">
        <div className="flex justify-between items-center relative z-10 max-md:flex-col max-md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="w-[33%] text-center text-[22px] font-semibold text-[#39302D] px-2">
              {feature}
            </div>
          ))}
        </div>

        {/* Arrows between items */}
        <div className="absolute top-[55%] left-1/6 transform -translate-y-1/2 hidden md:block">
          <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 70 Q 110 10, 210 70" stroke="#6DB86F" strokeWidth="2" fill="none" />
            <path d="M210 70 L 205 65 M 210 70 L 215 65" stroke="#6DB86F" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute top-[55%] left-1/2 transform -translate-y-1/2 hidden md:block">
          <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 Q 110 70, 210 10" stroke="#6DB86F" strokeWidth="2" fill="none" />
            <path d="M210 10 L 205 15 M 210 10 L 215 15" stroke="#6DB86F" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}