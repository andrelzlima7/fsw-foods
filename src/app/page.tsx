import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import ProductsList from "@/components/products-list";
import PromoBanner from "@/components/promo-banner";
import Search from "@/components/search";

export default function Home() {
  return (
    <main>
      <Header />
      <Search />
      <CategoryList />
      <PromoBanner src="/Banner-Pizza.png" alt="Banner Promocional desconto 30%" />
      <ProductsList />
      <PromoBanner src="/Banner-hamburguer.png" alt="Banner Promocional lanches a partir de 17,90" />
    </main>
  );
}
