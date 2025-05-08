
import * as React from "react"
import { Link } from "react-router-dom"
import { NavigationItem } from "@/components/ui/Navigation"

export function Header() {
  return (
    <div className="flex w-full flex-col items-stretch pb-[18px]">
      <div className="bg-[#F6F6F6] flex flex-col items-center text-2xl text-[#81C784] font-bold whitespace-nowrap uppercase tracking-[1px] pt-6">
        <div className="max-w-[1266px] w-full pl-[63px] pr-10 max-md:px-5">
          <div className="justify-center items-center flex min-h-[84px] w-full pr-[19px] py-5">
            <div className="self-stretch flex min-w-60 w-full flex-col justify-center flex-1 shrink basis-[0%] my-auto py-1">
              <Link to="/" className="text-2xl font-bold leading-[36px]">
                AutoCycle
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="self-center z-10 flex text-[15px] font-medium text-center capitalize tracking-[0.11px] leading-none bg-[#EBEFEB] -mt-16">
        <NavigationItem active={window.location.pathname === "/"}>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem active={window.location.pathname === "/welcome"}>
          <Link to="/welcome">Get Started</Link>
        </NavigationItem>
        <NavigationItem active={false}>
          <Link to="/#faq">FAQ</Link>
        </NavigationItem>
        <NavigationItem active={false}>
          <Link to="/#about">About us</Link>
        </NavigationItem>
      </nav>
    </div>
  )
}
