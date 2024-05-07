import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";

export default function Home() {
  return (
    <main>
      <Header />
      <Search />
      <CategoryList />
    </main>
  );
}
