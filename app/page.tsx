import Hero from "@/components/hero"
import { Card, CardContent, CardTitle,CardHeader,CardDescription } from "@/components/ui/card"
import { features } from "@/utils/constants"
import Feature from "@/components/feature-card"
import SimplePricing from "@/components/pricing"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {AccordionData} from "@/utils/constants"
import CustomButton from "@/components/button"
import {ArrowRight} from "lucide-react"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:pb-6 pb-4">
            <section className="md:mt-6 lg:mt-8 mt-4">
               <Hero/> 
            </section>
            <section>
                <Card>
                <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Everything You Need, One Place</CardTitle>
                    <CardDescription>
                    Seamless access to global tools without the overhead of multiple expensive subscriptions.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
                    {features.map((item,index)=>
                    <Feature key={index} Icon={item.icon} title={item.title} description={item.description}/>
                )}
                </CardContent>
                </Card>
            </section>
            <section>
                <Card>
                <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Everything You Need, One Place</CardTitle>
                    <CardDescription>
                    Seamless access to global tools without the overhead of multiple expensive subscriptions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SimplePricing/>
                </CardContent>
                </Card>
            </section>
            <section>
                <Card>
                <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                    <Accordion
                        type="single"
                        collapsible
                        className="rounded-lg border"
                        defaultValue=""
                        >
                        {AccordionData.map((item) => (
                            <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="border-b px-4 last:border-b-0 "
                            >
                            <AccordionTrigger>{item.trigger}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                        </Accordion>
                </CardContent>
            </Card>
            </section>
            <section>
               <Card>
                <CardHeader className=" pt-4 md:pt-6 text-center">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Unlock Premium Access for Less</CardTitle>
                    <CardDescription>
                    Stream, play, create, and work smarter with affordable access to premium digital subscriptions and tools.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 flex  gap-2 justify-center items-center">
                        <CustomButton isActive className="!w-fit">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </CustomButton>
                        <CustomButton isActive={false} className="!w-fit">
                            Explore Tools
                        </CustomButton>
                </CardContent>
                </Card> 
            </section>  
            <section>
                <Card>
                    <Footer/>
                </Card> 
            </section>  
        </main>
    )
}