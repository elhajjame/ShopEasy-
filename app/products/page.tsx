import { Metadata } from "next";
import ProductCard from "../_components/ProductCard";
import { ProductsData } from "../_lib/productsData";
import { Products } from "../_lib/productsData";
const metadata: Metadata = {
  title: "Easy Shop",
  description:
    "Shop high-quality, curated products at YourStoreName. Enjoy exclusive deals, secure checkout, and free shipping on orders over $50.",
};
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
