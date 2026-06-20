import {Sparkles } from "lucide-react";
import Footer from "@/components/footer";
import ProductBrowser from "@/components/product-browser";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Products() {
  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="overflow-hidden">
          <CardHeader className="pt-4 text-center md:pt-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <StaggerItem>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                  <Sparkles className="size-4" />
                  Product library
                </div>
              </StaggerItem>
              <div className="max-w-3xl">
                <StaggerItem>
                  <CardTitle className="text-2xl font-bold tracking-tight md:text-4xl leading-tight ">
                    Discover premium digital tools at unbeatable prices.
                  </CardTitle>
                </StaggerItem>
                <StaggerItem>
                  <CardDescription className="mx-auto mt-2 max-w-2xl leading-6 text-muted-foreground md:text-base">
                    Get access to premium AI tools, streaming services, design software, and productivity apps, all at affordable monthly prices.
                  </CardDescription>
                </StaggerItem>
              </div>
            </div>
          </CardHeader>
          <ProductBrowser />
        </Card>
      </Stagger>

      <Footer />
    </main>

    
  );
}