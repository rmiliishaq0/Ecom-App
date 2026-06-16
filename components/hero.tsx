import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {  Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";
import {GridBackground} from "./grid-dot-backgrounds";
import HeroAnimation from "./hero-animation";
import OpacityAnimation from "./opacity-animation";

export default function Hero() {
    return (
        <OpacityAnimation>
            <Card className="rounded-3xl md:p-6 p-4 relative ">
            <HeroAnimation>
                <div className="z-10 flex flex-col items-center justify-center lg:py-20 md:py-16 py-10 relative">
                    <div className="flex items-center justify-center flex-col gap-4">
                    <div className="bg-background  glow inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1.5 text-sm text-primary">
                        <Zap />
                        Next-Gen Access
                    </div>
                    <h1 className="text-center text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Your Favorite Tools,
                        <br />
                        <span className="text-center text-gradient opacity-90">For Less. Much Less.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl text-center">
                        Access premium digital tools and subscriptions instantly at affordable prices. The world's most sophisticated marketplace for creators and tech enthusiasts.
                    </p>
                </div>
                <Button size="lg" className=" p-5 gap-2 z-30 cursor-pointer mt-6 glow group">
                    Get Started For Free
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                </div>
                <div className="w-full absolute inset-0 rounded-xl">
                    <GridBackground/>
                </div>
            </HeroAnimation>
            
        </Card>
        </OpacityAnimation>
    )
}