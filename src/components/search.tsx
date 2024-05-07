import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="my-6 flex px-5">
      <Input placeholder="Buscar Restaurantes" className="bg-muted" />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
