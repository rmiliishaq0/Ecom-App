import {useIsMobile} from "@/hooks/useIsMobile"
import { cn } from "@/lib/utils"

export default function CustomButton({isActive,children,className}:{isActive:boolean,children:React.ReactNode,className?:string}){
    return(
        <button
                    className={cn(
                      className,
                      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full group cursor-pointer',
                    isActive
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20'
                        : 'border border-input bg-background hover:border-primary/30 hover:bg-primary/5 hover:text-primary',
                    )}
                  >
                    {children}
                  </button>
    )
}