import Image from "next/image";
import { ProductsData } from "@/app/_lib/productsData";
import AddToCart from "@/app/_components/AddToCart";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params);
  const product = ProductsData.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-white">Product not found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7 space-y-4">
        <div className="relative sm:aspect-video overflow-hidden rounded-3xl border border-[#374151] bg-[#111827]">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
        <div>
          <span className="text-[#3B82F6] text-xs font-bold uppercase">
            {product.category}
          </span>

          <h2 className="text-3xl font-extrabold text-white">
            {product.title}
          </h2>
        </div>

        <p className="text-[#9CA3AF] text-sm">{product.description}</p>

        <div className="text-white text-2xl font-bold">${product.price}</div>

        <AddToCart product={product} />
      </div>
    </div>
  );
}
