import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AutoCycle?",
    answer: "Autocycle is a Munich-based platform that connects companies with hard-to-recycle plastic parts to brands that can transform them into unique, high-value products. By encouraging creative brand collaborations, Autocycle helps make recycling economically viable and environmentally impactful."
  },
  {
    question: "How does matchmaking work?",
    answer: "Autocycle uses more than just material data to make matches. It considers the type and quantity of plastic, as well as the brand-identity, advertisement value of potential partner companies."
  },
  {
    question: "What is the next step after matchmaking?",
    answer: "Once a match is made, the two companies collaborate directly to co-develop products, align marketing strategies, and bring the recycled product to market. This early-stage partnership helps overcome the economic challenges of plastic recycling."
  }
]

export function FAQ() {
  return (
    <div className="w-[940px] max-w-full mt-[60px] max-md:mt-10">
      <div className="flex text-[#39302D] font-normal max-md:max-w-full">
        <div className="min-w-60 w-[434px] max-md:max-w-full">
          <h2 className="font-normal w-full text-[35px] leading-none max-md:max-w-full">
            Frequently Asked Questions
          </h2>
          <div className="font-normal w-full text-lg leading-none mt-[9px] max-md:max-w-full">
            Answers to common queries about AutoCycle.
          </div>
        </div>
        <div className="text-2xl text-center underline capitalize tracking-[0.08px] leading-none">
          <a href="#contact" className="font-normal underline decoration-solid decoration-auto underline-offset-auto self-stretch min-w-[166px] pl-[52px] pr-[51px] py-[15px] rounded-[77px] max-md:px-5">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="mt-[25px] pt-3 max-md:max-w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#FBFAFA] mb-4">
              <AccordionTrigger className="text-xl text-[#39302D] font-normal px-[19px] py-[19px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-[19px] pb-[19px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
