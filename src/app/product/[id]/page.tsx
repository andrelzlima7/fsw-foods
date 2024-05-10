import { ROUTE_PRODUCTS } from "@/api/routes";
import PreviousPage from "@/components/pages/product/PreviousPage";
import PriceItem from "@/components/pages/product/PriceItem";
import ProductItem from "@/components/product-item";
import { Button } from "@/components/ui/button";
import { Bike, TimerReset } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  params: {
    id: string;
  };
}

interface Product {
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  restaurant: string;
  id: string;
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch(`${ROUTE_PRODUCTS}/${params.id}`);
  const product: Product = await response.json();

  const sucos: Product[] = await (
    await fetch(`${ROUTE_PRODUCTS}?category=Sucos`)
  ).json();

  return (
    <main className="mb-8">
      <div className="z-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={0}
          height={0}
          sizes="100%"
          quality={100}
          className="h-[332px] w-full rounded-b-3xl"
        />

        <span className="absolute left-5 top-5">
          <PreviousPage />
        </span>
      </div>
      <div>
        <h2 className="p-5 text-xl font-semibold">{product.name}</h2>
        <PriceItem
          discountPercentage={product.discountPercentage}
          price={product.price}
        />
      </div>
      <div className="mx-5 my-6 flex justify-around rounded-lg border py-3">
        <div className="text-center">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Entrega <Bike size={12} />
          </span>
          <span>valor</span>
        </div>
        <div className="text-center">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Entrega <TimerReset size={12} />
          </span>
          <span>valor</span>
        </div>
      </div>
      <div className="px-5">
        <h5 className="font-semibold">Sobre</h5>
        <p className="mt-3 text-justify text-sm text-muted-foreground">
          {product.description}
        </p>
      </div>
      <div className="mt-6 px-5">
        <h5 className="font-semibold">Sucos</h5>
        <ul className="ml-5 mt-4 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {sucos.map((suco) => {
            return (
              <li key={suco.id}>
                <Link href={`/product/${suco.id}`}>
                  <ProductItem
                    discountPercentage={suco.discountPercentage}
                    imageUrl={suco.imageUrl}
                    name={suco.name}
                    price={suco.price}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full mt-6 px-5">
        <Button className="w-full">Adicionar à Sacola</Button>
      </div>
    </main>
  );
}
