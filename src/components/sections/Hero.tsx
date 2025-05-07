import * as React from "react"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <>
      <div className="flex w-[989px] max-w-full flex-col items-center text-[#39302D] font-normal text-center mt-[60px] px-[19px] max-md:mt-10">
        <h1 className="text-[40px] leading-[52px] tracking-[0.8px] max-md:max-w-full">
          Transform your recycling goals into
          <br />
          powerful brand partnerships
        </h1>
        <p className="text-2xl leading-9 self-stretch mt-[38px] max-md:max-w-full">
          We{" "}
          <span className="font-extrabold italic text-[#2A08E9]">
            connect
          </span>{" "}
          sellers of recycled plastic with companies that can use it and{" "}
          <span className="font-extrabold italic text-[#FF8A65]">
            match
          </span>{" "}
          companies and turn recycled plastic into collaboration ideas. We
          make recycled plastic sourcing smarter, simpler, and more valuable.
        </p>
        <Button className="mt-[26px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b621f9fc176ff356716acd3b827a9e6a5898ac7?placeholderIfAbsent=true"
            className="w-5 h-5 object-contain"
            alt=""
          />
          START MATCHMAKING
        </Button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/26a23ba2fe53926b03e302ad149a9d3abe6353c7?placeholderIfAbsent=true"
        className="aspect-[3.03] object-contain w-[1281px] max-w-full mt-[60px] max-md:mt-10"
        alt="Recycling process illustration"
      />
    </>
  )
}
