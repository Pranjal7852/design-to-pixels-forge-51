
import * as React from "react"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { FAQ } from "@/components/sections/FAQ"

export default function IndexPage() {
  return (
    <div className="px-px">
      <main className="bg-[#F8F8F8] flex min-h-[1823px] flex-col overflow-hidden items-center max-md:max-w-full pt-32">
        <Hero />
        <Features />
        <FAQ />
      </main>
    </div>
  )
}
