
import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Results() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center px-4 py-8 pt-32">
      <div className="w-full max-w-[800px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-[#39302D]">IKEA</h1>
          <span className="bg-[#E8F5E9] text-[#81C784] px-3 py-1 rounded text-sm">Best Match</span>
        </div>
        
        {/* Main product image and description */}
        <div className="bg-[#74796a] p-4 mb-6 text-center">
          <img 
            src="/lovable-uploads/95194fdc-7220-44c7-97cd-46be5d8982d6.png"
            alt="BMW × IKEA Furniture" 
            className="mx-auto w-full h-auto"
          />
        </div>
        
        {/* Product info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#39302D] mb-2">BODARP Eco Cupboard</h2>
          
          <div className="flex justify-end mb-2">
            <button className="flex items-center text-[#81C784]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4V20H20" stroke="#81C784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L8 12L12 16L20 8" stroke="#81C784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-1">Rethink</span>
            </button>
          </div>
          
          <p className="text-[#39302D] mb-4">
            The BODARP Eco Cupboard is an extension of IKEA's BODARP line, featuring doors made from recycled wood covered with plastic foil made from recycled PET bottles. With its matte grey-green finish, it offers a modern aesthetic while promoting sustainable living. Designed for durability and style, it serves as a testament to IKEA's commitment to circular design.
          </p>
          
          <div className="mb-4">
            <h3 className="text-[#FF8A65] font-medium mb-2">Market Opportunity</h3>
            <p className="text-[#39302D]">
              Appeals to environmentally conscious homeowners seeking stylish, sustainable furniture options at an affordable price point.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-[#81C784] font-medium mb-2">Sustainability Impact</h3>
            <p className="text-[#39302D]">
              Reduces plastic waste by repurposing PET bottles into durable furniture components, supporting a circular economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-[#39302D] text-sm mb-1">Website</h4>
              <a href="https://www.companyname.com/" className="text-[#39302D] break-all">https://www.ikea.lv/</a>
            </div>
            <div>
              <h4 className="text-[#39302D] text-sm mb-1">e-mail</h4>
              <p className="text-[#39302D]">impressum.de@IKEA.com</p>
            </div>
            <div>
              <h4 className="text-[#39302D] text-sm mb-1">Location</h4>
              <p className="text-[#39302D]">Germany, München</p>
            </div>
          </div>
        </div>
        
        {/* Other Matches */}
        <div>
          <h3 className="text-xl font-bold text-[#39302D] mb-4">Other Matches</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "BMW × DECATHLON",
                description: "Hybrid performance on any terrain",
                image: "/lovable-uploads/1704c551-703b-43df-b26d-1ad14ed14bf7.png",
                color: "bg-[#2196F3]/10"
              },
              {
                title: "BMW × VITRA",
                description: "Performance. Precision. Comfort.",
                image: "/lovable-uploads/cad28c48-9926-4caf-85b9-824ba6c7bc6a.png",
                color: "bg-[#FF8A65]/10"
              },
              {
                title: "BMW × LEGO",
                description: "Upcycled engineering for little engineers",
                image: "/lovable-uploads/fa0f87d1-5f2e-4fdc-8a42-82c5208e46a7.png",
                color: "bg-[#FFC107]/10"
              },
              {
                title: "BMW × SAMSONITE",
                description: "Performance on the road. Protection for travel.",
                image: "/lovable-uploads/1474e846-0616-4b4a-8383-9d1d3ec29fd7.png",
                color: "bg-[#607D8B]/10"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-md flex flex-col`}>
                <div className="h-32 mb-2 flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.title} className="max-h-full w-full object-contain" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
