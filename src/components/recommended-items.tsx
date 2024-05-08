import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface RecommendedItemsProps {
  url: string;
  title: string;
}

const RecommendedItems = ({ ...props }: RecommendedItemsProps) => {
  return (
    <div className="flex items-center justify-between px-5">
      <h3 className="text-base font-semibold">{props.title}</h3>
      <Link
        href={props.url}
        className="flex border-none bg-transparent text-xs text-primary"
      >
        Ver Todos
        <ChevronRight size={16} />
      </Link>
    </div>
  );
};

export default RecommendedItems;
