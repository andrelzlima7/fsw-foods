import { ROUTE_PRODUCTS } from "@/api/routes";
import { ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RecommendedItems from "./recommended-items";
import ProductItem from "./product-item";

interface Products {
  name: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  restaurant: string;
  id: string;
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
          {orderProducts.slice(0, 7).map((product) => {
            return (
              <li key={product.id}>
                <Link href={`product/${product.id}`}>
                  <ProductItem
                    discountPercentage={product.discountPercentage}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
