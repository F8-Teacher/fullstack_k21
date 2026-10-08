import { debounce } from "@/utils/utils";
import { useEffect, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  useEffect(() => {
    const searchProducts = () => {
      if (!q) {
        return;
      }
      console.log(`Gọi api với từ khóa: ${q}`);
    };
    searchProducts();
  }, [q]);
  return (
    <div>
      <h1 className="text-3xl">Products</h1>
      <input
        type="search"
        className="my-3 px-3 py-1 border border-gray-200 outline-none w-full"
        placeholder="Từ khóa..."
        onChange={debounce((e: ChangeEvent<HTMLInputElement>) => {
          setSearchParams({
            q: e.target.value,
          });
        })}
      />
      <p>Search: {q}</p>
    </div>
  );
}
