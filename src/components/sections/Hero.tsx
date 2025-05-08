
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Hero() {
  const navigate = useNavigate()
  
  const handleStartMatchmaking = () => {
    navigate('/welcome')
  }
  
  return (
    <>
      <div className="flex w-[989px] max-w-full flex-col items-center text-[#39302D] font-normal text-center mt-[60px] px-[19px] max-md:mt-10">
        <h1 className="text-[40px] leading-[52px] tracking-[0.8px] max-md:max-w-full">
          Transform your recycling goals into
          <br />
          powerful brand partnerships
        </h1>
        <p className="text-2xl leading-9 self-stretch mt-[38px] max-md:max-w-full">
          We give plastic a{" "}
          <span className="font-extrabold italic text-[#2A08E9]">
            second life
          </span>{" "}
          by turning it into{" "}
          <span className="font-extrabold italic text-[#FF8A65]">
            unique products
          </span>.
        </p>
        <Button className="mt-[26px] bg-[#81C784]" onClick={handleStartMatchmaking}>
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
