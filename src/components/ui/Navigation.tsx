import * as React from "react"
import { cn } from "@/lib/utils"

interface NavigationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
}

const NavigationItem = React.forwardRef<HTMLDivElement, NavigationItemProps>(
  ({ className, active, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "font-medium px-[25px] py-3 rounded-[106px] cursor-pointer",
          active ? "text-[#5BC80C] font-semibold" : "text-[#1A1C1E]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationItem.displayName = "NavigationItem"

export { NavigationItem }
