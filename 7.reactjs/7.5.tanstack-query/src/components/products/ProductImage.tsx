import { useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "../../constants/cache";
import type { ProductData } from "../../types/product.type";

type ProductImageProps = {
  images: string[] | undefined;
  id: number | undefined;
};
export default function ProductImage({ images, id }: ProductImageProps) {
  const queryClient = useQueryClient();
  const handleChangeImage = (url: string) => {
    queryClient.setQueryData(
      CACHE_KEYS.PRODUCTS.DETAIL(id?.toString() as string),
      (data: ProductData) => {
        return {
          ...data,
          thumbnail: url,
        };
      },
    );
  };
  return (
    <div className="flex gap-3">
      {images?.map((image, index) => (
        <img
          src={image}
          key={index}
          width={100}
          className="border border-gray-200"
          onClick={() => handleChangeImage(image)}
        />
      ))}
    </div>
  );
}
