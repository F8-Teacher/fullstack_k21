import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { useLoginStore } from "@/store/useLoginStore";
import { debounce } from "@/utils/utils";
import { useEffect, type ChangeEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
const PRODUCT_DATA = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];
export default function Products() {
  const { isAuth } = useAuthStore();
  const { setOpen } = useLoginStore();
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

      <div className="gap-3 grid grid-cols-4">
        {PRODUCT_DATA.map((product) => (
          <div key={product.id}>
            <h2 className="text-xl">{product.name}</h2>
            {isAuth ? (
              <Button>
                <Link to={"/orders/" + product.id}>Đặt hàng</Link>
              </Button>
            ) : (
              <Button onClick={setOpen}>Đặt hàng</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
