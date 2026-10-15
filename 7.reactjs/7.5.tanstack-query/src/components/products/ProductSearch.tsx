import type { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "../../utils/debounce";

export default function ProductSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  return (
    <input
      type="search"
      className="my-3 px-3 py-1 border border-gray-300 outline-none w-full"
      placeholder="Search..."
      onChange={debounce((e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
          q: e.target.value,
        });
      })}
      defaultValue={q}
    />
  );
}
