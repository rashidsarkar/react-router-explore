import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

function Products() {
  const { products } = useLoaderData();

  return (
    <div className="grid grid-cols-3 py-6 gap-3">
      {products?.map((prodact) => (
        <ProductsCard key={prodact.id} prodact={prodact}></ProductsCard>
      ))}
    </div>
  );
}

export default Products;
