
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
        <div className="absolute left-[10%] top-[40px] hidden md:block">
          <svg width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q 160 80, 320 10" stroke="#6DB86F" strokeWidth="2" fill="none" />
            <path d="M320 10 L 315 15 M 320 10 L 325 15" stroke="#6DB86F" strokeWidth="2" />
          </svg>
        </div>

        {/* Arrow from See Matching Results to Connect to the Company */}
        <div className="absolute left-[42%] top-[-10px] hidden md:block">
          <svg width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 70 Q 160 0, 320 70" stroke="#6DB86F" strokeWidth="2" fill="none" />
            <path d="M320 70 L 315 65 M 320 70 L 325 65" stroke="#6DB86F" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}