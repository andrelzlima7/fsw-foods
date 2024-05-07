import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 pt-7">
      <Image src="/logo-fsw.png" alt="logo fsw" width={100} height={30} />
      <Button variant={"outline"} className="border-none bg-transparent">
        <Menu />
      </Button>
    </header>
  );
};

export default Header;
