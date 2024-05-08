import { ROUTE_CATEGORIES } from "@/api/routes";
import Image from "next/image";

interface Categories {
  id: number;
  name: string;
  imageUrl: string;
}

const CategoryList = async () => {
  const response = await fetch(ROUTE_CATEGORIES);
  const categories = await response.json();

  return (
    <ul className="ml-5 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {categories.map((category: Categories) => (
        <li key={category.id} className="flex gap-3 px-4 py-3">
          <Image
            className="h-auto w-auto object-contain"
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
          />
          <span className="font-semibold text-sm">{category.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
