"use client";
import { Banner } from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { useProductContext } from "@/context/productContext";
export default function Home() {
  const { state } = useProductContext();

  const products = state.products;

  return (
    <main>
      {/* <div className="mx-auto">
        <div className="bg-[url('https://i.pinimg.com/originals/aa/ef/64/aaef64953e24f24bc9dfc5afd386f0a7.jpg')] w-[350px] h-[269px] md:w-[728px] md:h-[269px] object-cover bg-no-repeat"></div>
      </div> */}
      <div className="hidden md:block">
        <Banner />
      </div>
      {/* <div>
        <h2 className="text-2xl pt-8 text-green-400 hover:text-green-800">
          Shoes
        </h2>
      </div> */}
      <div className="relative w-[10%]">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            New shoes
          </span>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 md:gap-6 md:pt-8 gap-6 sm:mx-24">
        {products &&
          products.length > 0 &&
          products?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  );
}
