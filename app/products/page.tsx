import ProductCard from "../_components/ProductCard";
import { ProductsData } from "../_lib/productsData";
import { Products } from "../_lib/productsData";


function page() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
      {ProductsData.map((product: Products) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default page;
