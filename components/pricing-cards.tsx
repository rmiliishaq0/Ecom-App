import { Card, CardContent, CardTitle,CardHeader,CardDescription } from "@/components/ui/card"
import SimplePricing from "@/components/pricing"
import AnimateTitle from "./animate-title"
import { Stagger } from "./stagger"

export default function PricingCards() {
    return(
        <Stagger>
                    <Card>
                <AnimateTitle>
                    <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Transparent Pricing</CardTitle>
                    <CardDescription>
                   Choose the access level that fits your workflow.
                    </CardDescription>
                </CardHeader>
                </AnimateTitle>
                <CardContent>
                    <SimplePricing/>
                </CardContent>
                </Card>
                </Stagger>
    )
}