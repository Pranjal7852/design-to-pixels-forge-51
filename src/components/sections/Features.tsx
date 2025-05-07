import * as React from "react"

const features = [
  "List Your Requirements",
  "Material Matching",
  "Connect the Best Deal"
]

export function Features() {
  return (
    <div className="flex w-[1198px] max-w-full flex-col items-center mt-[60px] max-md:mt-10">
      <h2 className="text-[#39302D] text-center text-5xl font-normal leading-none max-md:max-w-full max-md:text-[40px]">
        From Waste to Value
      </h2>
      <div className="w-[960px] max-w-full mt-7 py-16 rounded-[0px_0px_0px_0px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="font-normal self-stretch min-w-[90px] min-h-11 overflow-hidden text-[27px] text-[#39302D] text-center capitalize leading-none max-w-[360px] px-[17px] py-[13px] rounded-[40px] max-md:mt-10">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
