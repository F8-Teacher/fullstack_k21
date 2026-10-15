import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product.service";
import { CACHE_KEYS } from "../constants/cache";
import ProductImage from "../components/products/ProductImage";

export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    isFetching,
    error,
  } = useQuery({
    queryKey: CACHE_KEYS.PRODUCTS.DETAIL(id!),
    queryFn: () => getProduct(id!),
  });
  if (isFetching) {
    return <h3 className="text-3xl">Loading...</h3>;
  }
  if (error) {
    return <h3 className="text-3xl">{error.message}</h3>;
  }
  return (
    <div className="mx-auto py-5 max-w-300">
      <h1 className="mb-3 font-semibold text-3xl">{product?.title}</h1>
      <img src={product?.thumbnail} width={400} />
      <ProductImage id={product?.id} images={product?.images} />
    </div>
  );
}

//key: ['parent1', 'parent2', 'children']
