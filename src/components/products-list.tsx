import { ROUTE_PRODUCTS } from "@/api/routes";
import { ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RecommendedItems from "./recommended-items";

interface Products {
  name: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  restaurant: string;
}

const ProductsList = async () => {
  const response = await fetch(ROUTE_PRODUCTS);
  const products: Products[] = await response.json();

  const orderProducts = products.sort(
    (a, b) => b.discountPercentage - a.discountPercentage,
  );

  return (
    <div>
      <RecommendedItems title="Pedidos Recomendados" url="" />
      <div>
        <ul className="ml-5 mt-4 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {orderProducts.slice(0, 7).map((product, id) => {
            return (
              <li key={id}>
                <div className="relative h-[150px] w-[150px]">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={0}
                    height={0}
                    className="h-full w-full rounded-lg object-fill drop-shadow-md"
                    sizes="100%"
                    quality={100}
                  />
                  <div className="absolute left-2 top-2  rounded-xl bg-primary text-xs font-semibold text-secondary">
                    <span className="flex items-center p-1">
                      <ArrowDown size={12} />
                      {product.discountPercentage}%
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm text-accent-foreground">
                    {product.name}
                  </h4>
                  <div>
                    <span className="font-semibold">
                      {(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    <span className="m-2 text-xs text-muted-foreground line-through">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
