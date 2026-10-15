import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product.service";
import { CACHE_KEYS } from "../constants/cache";
import { Link, useSearchParams } from "react-router-dom";
import ProductSearch from "../components/products/ProductSearch";
import { cn } from "cn";
import ProductAddModal from "../components/modals/ProductAddModal";
import { useState } from "react";

export default function Products() {
  const [addModal, setAddModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const page = searchParams.get("page") ?? 1;
  const currentQuery = Object.fromEntries(searchParams.entries());
  const {
    data,
    error,
    // isFetching,
  } = useQuery({
    queryKey: CACHE_KEYS.PRODUCTS.LISTS({ q, page: page.toString() }), //['products', {q: 'abc', page: 1}]
    queryFn: () => getProducts({ q, page: +page }),
    staleTime: 2 * 60 * 1000,
    // initialData: {
    //   products: [],
    //   maxPage: 0,
    // },
  });

  if (!data) {
    return;
  }

  const { products, maxPage } = data;

  if (error) {
    return <h3 className="text-3xl">{error.message}</h3>;
  }

  return (
    <div className="mx-auto py-5 max-w-300">
      <h1 className="mb-3 font-semibold text-3xl">Products</h1>
      <button
        className="bg-green-600 my-3 px-3 py-1 text-white cursor-pointer"
        onClick={() => setAddModal(true)}
      >
        Add
      </button>
      <ProductSearch />
      <div className="gap-3 grid grid-cols-4">
        {products.map((product) => (
          <div className="p-3 border border-gray-200" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt="" className="mb-2" />
            </Link>
            <h3 className="font-medium text-xl">
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h3>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {[...Array(maxPage)].map((_, index) => {
          const p = index + 1;
          return (
            <button
              key={p}
              className={cn(
                "bg-green-600 hover:bg-red-600 px-3 py-1 text-white cursor-pointer",
                +page === p && "bg-red-600",
              )}
              onClick={() =>
                setSearchParams({ ...currentQuery, page: p.toString() })
              }
            >
              {p}
            </button>
          );
        })}
      </div>
      <ProductAddModal open={addModal} onClose={() => setAddModal(false)} />
    </div>
  );
}
