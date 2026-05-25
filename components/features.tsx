import { features } from "@/utils/constants"
import Feature from "@/components/feature-card"
import { Card, CardContent, CardTitle,CardHeader,CardDescription } from "@/components/ui/card"
import AnimateTitle from "./animate-title"
import { Stagger } from "./stagger"
import { StaggerItem } from "./stagger-item"

export default function Features() {
    return(
        <Stagger>
                    <Card>
                <AnimateTitle>
                    <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Everything You Need, One Place</CardTitle>
                    <CardDescription>
                    Seamless access to global tools without the overhead of multiple expensive subscriptions.
                    </CardDescription>
                </CardHeader>
                </AnimateTitle>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
                    {features.map((item,index)=>
                    <StaggerItem key={index}>
                        <Feature  Icon={item.icon} title={item.title} description={item.description}/>
                    </StaggerItem>
                )}
                </CardContent>
                    </Card>
        </Stagger>
    )
}