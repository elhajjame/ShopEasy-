import HeroSection from "./_components/HeroSection";
import ProductCard from "./_components/ProductCard";
import { Products } from "./_lib/productsData";
import { ProductsData } from "./_lib/productsData";

function page() {
  return (
    <div>
      <HeroSection />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
        {ProductsData.slice(0, 3).map((product: Products) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default page;
