import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Features from "@/components/features"
import PricingCards from "@/components/pricing-cards"
import Faqs from "@/components/faqs"
import CallToActionCard from "@/components/call-to-action-card"

export default function Home() {
    return (
        <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:pb-6 pb-4">
            <section className="md:mt-6 lg:mt-8 mt-4">
               <Hero/> 
            </section>
            <section id="features" className="lg:scroll-mt-32 md:scroll-mt-8 ">
                <Features/>
            </section>
            <section id="pricing" className="lg:scroll-mt-32 md:scroll-mt-8">
                <PricingCards/>
            </section>
            <section id="faq" className="lg:scroll-mt-32 md:scroll-mt-8 ">
                <Faqs/>
            </section>
            <section >
               <CallToActionCard/>
            </section>  
            <section>
                <Footer/>
            </section>  
        </main>
    )
}