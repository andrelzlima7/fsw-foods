"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PriceItemProps {
  price: number;
  discountPercentage: number;
}

const PriceItem = ({ ...props }: PriceItemProps) => {
  const [amout, setAmout] = useState(1);

  const addProduct = () => {
    setAmout(amout + 1);
  };

  const removeProduct = () => {
    setAmout(amout - 1);
  };
  return (
    <div className="flex items-center justify-between px-5">
      <div>
        <div className="flex items-center gap-1">
          <h4 className="text-xl font-semibold">
            {(amout * (props.price - props.price * (props.discountPercentage / 100))).toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </h4>
          <div className="h-6 rounded-xl bg-primary px-1 text-xs font-semibold text-secondary">
            <span className="flex items-center p-1">
              <ArrowDown size={12} />
              {props.discountPercentage}%
            </span>
          </div>
        </div>
        <span className="text-sm text-muted-foreground">
          De:{" "}
          {(amout * props.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex items-center">
        <Button
          onClick={removeProduct}
          size={"icon"}
          variant={"outline"}
          className="rounded-2xl"
          disabled={amout === 1}
        >
          <ChevronLeft />
        </Button>
        <div className="w-8 text-center text-sm">{amout}</div>
        <Button onClick={addProduct} size={"icon"} className="rounded-2xl">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default PriceItem;
