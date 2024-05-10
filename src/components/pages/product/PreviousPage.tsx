"use client"
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const PreviousPage = () => {
  const router = useRouter();

  return (
    <Button onClick={router.back} className="rounded-full p-0 w-10 bg-muted text-foreground">
      <ChevronLeft />
    </Button>
  );
};

export default PreviousPage;
