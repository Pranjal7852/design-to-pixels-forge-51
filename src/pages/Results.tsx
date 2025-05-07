import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export default function Results() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center px-4 py-8">
      <div className="text-[#81C784] text-lg font-semibold mb-2">AUTOCYCLE</div>
      
      <div className="w-full max-w-[800px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-[#39302D]">Stella McCartney</h1>
          <span className="bg-[#E8F5E9] text-[#81C784] px-3 py-1 rounded text-sm">Best Match</span>
        </div>
        
        {/* Main product image and description */}
        <div className="bg-[#74796a] p-4 mb-6 text-center">
          <div className="text-[#D9CDB8] text-4xl font-bold mb-2">BMW</div>
          <div className="text-[#D9CDB8] text-4xl font-bold mb-2">STELLA McCARTNEY</div>
          <div className="text-[#D9CDB8] text-2xl mb-6">Eco Luxe Handbag</div>
          <img 
            src="/lovable-uploads/4a6e0bdf-5c7f-451b-b5c7-649b4887edaa.png"
            alt="BMW Stella McCartney Eco Luxe Handbag" 
            className="mx-auto mb-4 max-w-full h-auto"
          />
        </div>
        
        {/* Product info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#39302D] mb-2">Eco Luxe Handbag</h2>
          
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
            This stylish handbag is crafted from upcycled BMW PCABS, merging high fashion with sustainable luxury. Each bag features a unique design, influenced by BMW's sleek aesthetics, while promoting the circular economy. Using state-of-the-art techniques, this collaboration retains the robustness of PCABS, ensuring longevity and durability. This product aligns with modern consumer trends for environmentally responsible luxury items and will be marketed through exclusive pop-up events and collaborations in high-end retail spaces.
          </p>
          
          <div className="mb-4">
            <h3 className="text-[#FF8A65] font-medium mb-2">Market Opportunity</h3>
            <p className="text-[#39302D]">
              There is a growing market for sustainable luxury items; luxury handbag sales reached $62 billion in 2023, with a significant portion attributed to eco-friendly products.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-[#81C784] font-medium mb-2">Sustainability Impact</h3>
            <p className="text-[#39302D]">
              By utilizing recycled materials, this collaboration reduces landfill waste and carbon footprint, embodying both brands' commitment to sustainability. Similar products include Stella's 'Leathers from the Future' collection, focusing on ecological integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-[#39302D] text-sm mb-1">Website</h4>
              <a href="https://www.companyname.com/" className="text-[#39302D] break-all">https://www.companyname.com/</a>
            </div>
            <div>
              <h4 className="text-[#39302D] text-sm mb-1">e-mail</h4>
              <p className="text-[#39302D]">companyname@gmail.com</p>
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
                title: "Furniture and Home Goods",
                description: "For living room furniture and home decor",
                image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b621f9fc176ff356716acd3b827a9e6a5898ac7?placeholderIfAbsent=true",
                color: "bg-[#FFC107]/10"
              },
              {
                title: "Building and Construction",
                description: "Materials for renovation and construction",
                image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b621f9fc176ff356716acd3b827a9e6a5898ac7?placeholderIfAbsent=true",
                color: "bg-[#FF8A65]/10"
              },
              {
                title: "Automotive",
                description: "For car manufacturing and parts",
                image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b621f9fc176ff356716acd3b827a9e6a5898ac7?placeholderIfAbsent=true",
                color: "bg-[#2196F3]/10"
              },
              {
                title: "Packaging",
                description: "For sustainable packaging solutions",
                image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b621f9fc176ff356716acd3b827a9e6a5898ac7?placeholderIfAbsent=true",
                color: "bg-[#81C784]/10"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-md flex flex-col`}>
                <div className="h-24 mb-2 flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="max-h-full max-w-full" />
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
