import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import PromoBanner from "@/components/promo-banner";
import Search from "@/components/search";

export default function Home() {
  return (
    <main>
      <Header />
      <Search />
      <CategoryList />
      <PromoBanner src="/Banner-Pizza.png" alt="Banner Promocional desconto 30%" />
    </main>
  );
}
