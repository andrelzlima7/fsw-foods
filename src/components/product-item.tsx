import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  imageUrl: string;
  name: string;
  discountPercentage: number;
  price: number;
}

const ProductItem = ({ ...props }: ProductItemProps) => {
  return (
    <div>
      <div className="relative h-[150px] w-[150px]">
        <Image
          src={props.imageUrl}
          alt={props.name}
          width={0}
          height={0}
          className="h-full w-full rounded-lg object-fill drop-shadow-md"
          sizes="100%"
          quality={100}
        />
        <div className="absolute left-2 top-2  rounded-xl bg-primary text-xs font-semibold text-secondary">
          <span className="flex items-center p-1">
            <ArrowDown size={12} />
            {props.discountPercentage}%
          </span>
        </div>
      </div>
      <div className="mt-2">
        <h4 className="text-sm text-accent-foreground">{props.name}</h4>
        <div>
          <span className="font-semibold">
            {(
              props.price -
              props.price * (props.discountPercentage / 100)
            ).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="m-2 text-xs text-muted-foreground line-through">
            {props.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
