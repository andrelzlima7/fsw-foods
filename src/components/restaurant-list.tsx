import { ROUTE_RESTAURANTS } from "@/api/routes";
import RecommendedItems from "./recommended-items";
import Image from "next/image";
import { Bike, Heart, Star, TimerReset } from "lucide-react";

interface Restaurants {
  id: string;
  name: string;
  imageUrl: string;
  deliveryFee: number;
  deliveryTimeMinutes: number;
  stars: number;
  like: boolean;
}

const RestaurantList = async () => {
  const response = await fetch(ROUTE_RESTAURANTS);
  const restaurants: Restaurants[] = await response.json();

  const orderRestaurants = restaurants.sort((a,b) => b.stars - a.stars)
  
  return (
    <div>
      <RecommendedItems title="Restaurantes Recomendados" url="" />
      <div>
        <ul className="ml-5 mt-4 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {orderRestaurants.slice(0, 5).map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <div className="relative h-[136px] w-[266px]">
                  <Image
                    src={restaurant.imageUrl}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-full w-full rounded-lg object-cover drop-shadow-md"
                    sizes="100%"
                    quality={100}
                  />
                  <div className="absolute left-2 top-2  rounded-xl bg-secondary text-xs font-semibold">
                    <span className="flex items-center p-1 gap-1 px-2">
                      <Star fill="#FFB100" stroke="" size={10} />
                      {(restaurant.stars).toFixed(1)}
                    </span>
                  </div>
                  <div className="absolute right-2 top-2  rounded-xl bg-primary text-xs font-semibold text-secondary">

                    <span className="flex items-center justify-center rounded-full p-1">
                      <Heart size={16} />
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Bike size={14} className="stroke-primary" />
                      {restaurant.deliveryFee === 0 ? (
                        "Entrega Grátis"
                      ) : (
                        <span>
                          {restaurant.deliveryFee.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <TimerReset size={14} className="stroke-primary" />
                      <span>{restaurant.deliveryTimeMinutes}min</span>
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

export default RestaurantList;
