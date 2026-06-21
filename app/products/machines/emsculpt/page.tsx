import ProductDetail from "@/components/Products/ProductDetail";
import { productsData } from "@/components/Products/productsData";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const product = productsData.find(p => p.id === "emsculpt" && p.category === "Machines");
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
