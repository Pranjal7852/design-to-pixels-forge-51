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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center px-4 py-12 pt-32">
        <div className="text-center">
          <CircleFadingPlus className="animate-spin h-16 w-16 text-[#81C784] mx-auto mb-4" />
          <h2 className="text-2xl font-medium text-[#39302D] mb-2">Processing your data</h2>
          <p className="text-[#39302D] text-lg">{loadingSteps[loadingStep]}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center px-4 py-12 pt-32">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <h1 className="text-4xl text-[#81C784] font-normal mb-6">Welcome</h1>
        
        <div className="w-full text-center mb-12">
          <p className="text-lg text-[#39302D]">
            We'll ask you 3 questions about your plastic to match it with potential buyers.
          </p>
          <p className="text-lg text-[#39302D]">
            After seeing the preliminary results, you can choose to provide more data to improve the matches.
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
                      className="h-14 text-base" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="plasticType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium text-[#39302D]">What type of plastic waste do you have?</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-14 text-base">
                        <SelectValue placeholder="Select plastic type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {plasticTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium text-[#39302D]">Where is your plastic located?</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="City and country (e.g., München, Germany)" 
                      className="h-14 text-base" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-4">
              <Button type="submit" className="w-[180px]">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
