"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Search, SlidersHorizontal, Sparkles,X } from "lucide-react";
import { useMemo, useState } from "react";
import { StaggerItem } from "@/components/stagger-item";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { productCategories, products } from "@/utils/products";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const sortOptions = ["Featured", "Lowest price", "Highest savings"];

function priceValue(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}



export default function ProductBrowser() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Featured");

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => {
        if (!normalizedQuery) {
          return true;
        }

        return [product.title, product.category, product.description]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      })
      .sort((first, second) => {
        if (sort === "A to Z") {
          return first.title.localeCompare(second.title);
        }

  

        return 0;
      });
  }, [category, query, sort]);

  const hasFilters = category !== "All" || query.length > 0;

  return (
    <CardContent className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col gap-4 ">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap gap-2">
            {productCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                data-active={category === item}
                className="h-8 rounded-full border bg-background px-3 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-foreground data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-cols-[minmax(0,18rem)_9.5rem]">
            <label className="flex h-9 min-w-0 items-center gap-2 rounded-lg border bg-background px-3 text-sm text-muted-foreground focus-within:border-primary/50 focus-within:text-foreground">
              <Search className="size-4 shrink-0" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                placeholder="Search products"
                type="search"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded-full p-0.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </label>

            <label className="flex h-9 items-center gap-2 rounded-lg border bg-background px-3 text-sm text-muted-foreground">
              <SlidersHorizontal className="size-4 shrink-0" />
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-foreground outline-none"
                aria-label="Sort products"
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

         <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((tool) => (
                <StaggerItem key={tool.title}>
                  <Link
                    href={tool.href}
                    className="group  overflow-hiddenshadow-sm  hover:-translate-y-0.5 group flex h-full flex-col rounded-3xl border bg-background p-4 ring-1 ring-foreground/5 transition hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* <div className={`flex size-9 items-center justify-center rounded-lg ${tool.accent} text-white`}>
                        <Image src={tool.image} width={30} height={30} alt={tool.imageAlt}/>
                      </div> */}
                      <div className={` relative flex h-14 w-14 tems-center justify-center overflow-hidden rounded-xl ${tool.accent} text-white`}>
                          <Image
                            src={tool.image}
                            alt={tool.imageAlt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      <div className="flex flex-row gap-2 items-center">
                         {tool.isFree && (
                          <Badge variant={"outline"}>In Free</Badge>
                      )}
                        <div className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[0.68rem] font-semibold uppercase text-primary">
                        {tool.category}
                      </div>
                      </div>
                    </div>

                    <h2 className="mt-4 font-semibold">{tool.title}</h2>
                    <div className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                      {tool.description}
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4">
                    <div>
                      <div className="text-xl font-bold text-primary">{tool.price}<span className="text-sm font-medium ml-1">/mo</span></div>
                    </div>
                      <div className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition group-hover:opacity-90">
                        {tool.isFree ? "View" : "Subscribe"}
                        <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))} 
          </div>

        {visibleProducts.length === 0 && (
          <div className="rounded-lg border bg-background p-8 text-center">
            <div className="text-base font-semibold">No products found</div>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Try another search term or reset the current filters.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

          <div className=" w-full flex items-center flex-col justify-between gap-3 pt-4 text-xs text-muted-foreground">
            <Separator/>
          <span className="text-center w-full">
            Showing {visibleProducts.length} of {products.length} products
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>        
      </div>
    </CardContent>
  );
}
