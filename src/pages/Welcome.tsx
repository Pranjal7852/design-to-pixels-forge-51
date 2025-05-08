
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleFadingPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Skeleton } from "@/components/ui/skeleton"

const formSchema = z.object({
  companyName: z.string().min(1, { message: "Company name is required" }),
  plasticType: z.string().min(1, { message: "Plastic type is required" }),
  location: z.string().min(1, { message: "Location is required" }),
})

type FormValues = z.infer<typeof formSchema>

export default function Welcome() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(false)
  const [loadingStep, setLoadingStep] = React.useState(0)
  const loadingSteps = ["Spinning drives...", "Curating list...", "Designing posters..."]
  const [imageLoaded, setImageLoaded] = React.useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      plasticType: "",
      location: "",
    },
  })

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingSteps.length - 1) {
            return prev + 1
          }
          
          // When we reach the last step, navigate to results after a short delay
          setTimeout(() => {
            navigate("/results")
          }, 800)
          
          return prev
        })
      }, 1200)
      
      return () => clearInterval(interval)
    }
  }, [isLoading, navigate])

  function onSubmit(data: FormValues) {
    console.log(data)
    setIsLoading(true)
  }

  const plasticTypes = [
    "Polyethylene Terephthalate (PET)",
    "High-Density Polyethylene (HDPE)",
    "Polyvinyl Chloride (PVC)",
    "Low-Density Polyethylene (LDPE)",
    "Polypropylene (PP)",
    "Polystyrene (PS)",
    "Other Plastics",
  ]

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center px-4 py-12 pt-32">
        <div className="text-center">
          {!imageLoaded && (
            <CircleFadingPlus className="animate-spin h-16 w-16 text-[#81C784] mx-auto mb-4" />
          )}
          <div className="relative mb-6">
            <img
              src="/lovable-uploads/6acdf04b-f51f-4fa6-b56c-2462b0ca4c1d.png"
              alt="BMW Collaborations"
              className={`max-w-[800px] w-full h-auto ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={handleImageLoad}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Skeleton className="w-full h-full rounded-md" />
              </div>
            )}
          </div>
          <h2 className="text-2xl font-medium text-[#39302D] mb-2">Processing your data</h2>
          <p className="text-[#39302D] text-lg">{loadingSteps[loadingStep]}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-[600px] flex flex-col items-center mt-16">
        <h1 className="text-4xl text-[#81C784] font-normal mb-4">Welcome</h1>
        
        <div className="w-full text-center mb-12">
          <p className="text-lg text-[#39302D]">
            Tell us a bit about your plastic waste.
          </p>
          <p className="text-lg text-[#39302D]">
            We'll match you with brands that can turn it into something valuable.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium text-[#39302D]">Your Company Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Company Name" 
                      className="h-14 text-base border-gray-300" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="plasticType"
                render={({ field }) => (
                  <FormItem className="flex flex-col h-[120px]">
                    <FormLabel className="text-lg font-medium text-[#39302D] mb-2">What type of plastic waste do you have?</FormLabel>
                    <div className="flex-grow flex flex-col justify-end">
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-14 text-base border-gray-300">
                            <SelectValue placeholder="Select plastic type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {plasticTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex flex-col h-[120px]">
                    <FormLabel className="text-lg font-medium text-[#39302D] mb-2">Where is your plastic located?</FormLabel>
                    <div className="flex-grow flex flex-col justify-end">
                      <FormControl>
                        <Input 
                          placeholder="City and country (e.g., München, Germany)" 
                          className="h-14 text-base border-gray-300" 
                          {...field} 
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                className="w-[180px] h-14 bg-[#81C784] hover:bg-[#66BB6A] text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
