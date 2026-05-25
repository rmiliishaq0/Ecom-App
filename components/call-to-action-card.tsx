import { Card, CardContent, CardTitle,CardHeader,CardDescription } from "@/components/ui/card"
import CustomButton from "@/components/button"
import {ArrowRight} from "lucide-react"
import AnimateTitle from "./animate-title"
import { Stagger } from "./stagger"
import { StaggerItem } from "./stagger-item"
export default function CallToActionCard() {
    return(
        <Stagger>
                <Card>
                <AnimateTitle>
                    <CardHeader className=" pt-4 md:pt-6 text-center">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Unlock Premium Access for Less</CardTitle>
                    <CardDescription>
                    Stream, play, create, and work smarter with affordable access to premium digital subscriptions and tools.
                    </CardDescription>
                </CardHeader>
                </AnimateTitle>
                <CardContent className="p-4 md:p-6 flex  gap-2 justify-center items-center">
                        <StaggerItem>
                            <CustomButton isActive className="!w-fit">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </CustomButton>
                        </StaggerItem>
                        <StaggerItem>
                            <CustomButton isActive={false} className="!w-fit">
                                Explore Tools
                            </CustomButton>
                        </StaggerItem>
                </CardContent>
                </Card> 
               </Stagger>
    )
}