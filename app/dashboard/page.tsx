import { Card ,CardHeader,CardDescription,CardContent,CardTitle} from "@/components/ui/card";

export default function Dashboard(){
    return (
        <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:pb-6 pb-4">
            <section className="md:mt-6 lg:mt-8 mt-4">
                <Card>
                <CardHeader className="text-center pt-4 md:pt-6">
                    <CardTitle className="md:text-2xl font-semibold text-xl">Everything You Need, One Place</CardTitle>
                    <CardDescription>
                    Seamless access to global tools without the overhead of multiple expensive subscriptions.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
                </CardContent>
                </Card>
            </section>
        </main>
)}