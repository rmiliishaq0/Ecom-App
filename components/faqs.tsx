import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {AccordionData} from "@/utils/constants"
import { Card, CardContent, CardTitle,CardHeader,CardDescription } from "@/components/ui/card"
import AnimateTitle from "./animate-title"
import { Stagger } from "./stagger"
import { StaggerItem } from "./stagger-item"

export default function Faqs(){
    return(
        <Stagger>
                    <Card>
                <AnimateTitle>
                    <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                </AnimateTitle>
                <CardContent className="p-4 md:p-6">
                    <Accordion
                        type="single"
                        collapsible
                        className="rounded-lg border"
                        defaultValue=""
                        >
                        {AccordionData.map((item) => (
                            <StaggerItem key={item.value}>
                                <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="border-b px-4 last:border-b-0 "
                            >
                            <AccordionTrigger>{item.trigger}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                            </AccordionItem>
                            </StaggerItem>
                        ))}
                        </Accordion>
                </CardContent>
            </Card>
                </Stagger>
    )
}