import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { createProduct } from "../../services/product.service";
import { CACHE_KEYS } from "../../constants/cache";
import type { ProductData } from "../../types/product.type";

type ProductAddModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function ProductAddModal({
  open,
  onClose,
}: ProductAddModalProps) {
  const [form, setForm] = useState({} as { title: string; thumbnail: string });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createProduct,
    onMutate: (data: { title: string; thumbnail: string }) => {
      console.log(`onMutate`, data);
    },
    onSuccess: (newData) => {
      console.log(`onSuccess`, newData);
      // Invalidate and refetch

      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEYS.PRODUCTS.LISTS({} as { q: string; page: string }),
      // });
      const cacheKey = CACHE_KEYS.PRODUCTS.LISTS({ q: "", page: "1" } as {
        q: string;
        page: string;
      });

      queryClient.setQueryData(
        cacheKey,
        (prevData: { maxPage: number; products: ProductData[] }) => {
          return {
            ...prevData,
            products: [newData, ...prevData.products],
          };
        },
      );

      onClose(); //Close modal
    },
    onError: (error) => {
      console.log(error.message);
    },
    onSettled: (data, error) => {
      console.log(`onSettled`, data, error);
    },
  });
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(form);
  };
  return (
    <>
      {open && (
        <div>
          <div className="top-[5%] right-0 left-0 z-51 fixed bg-white mx-auto p-5 border border-gray-200 rounded-xl w-150">
            <h2 className="font-semibold text-2xl">Add Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  placeholder="Title..."
                  className="px-3 py-1 border border-gray-200 outline-none w-full"
                  name="title"
                  onChange={handleChangeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Thumbnail</label>
                <input
                  type="text"
                  placeholder="Thumbnail..."
                  name="thumbnail"
                  className="px-3 py-1 border border-gray-200 outline-none w-full"
                  onChange={handleChangeValue}
                />
              </div>
              <div className="flex gap-3">
                <button className="bg-green-600 px-3 py-1 text-white cursor-pointer">
                  Save
                </button>
                <button
                  className="bg-red-600 px-3 py-1 text-white cursor-pointer"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div
            className="z-50 fixed inset-0 bg-black/50"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
}
