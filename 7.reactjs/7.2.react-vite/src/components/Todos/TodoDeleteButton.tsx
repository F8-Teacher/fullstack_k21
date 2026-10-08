import { TodoContext } from "@/context/TodoContext";
import { use } from "react";

export default function TodoDeleteButton({ id }: { id: string }) {
  const { dispatch } = use(TodoContext);
  return (
    <button
      className="ml-auto font-semibold text-red-600 cursor-pointer"
      onClick={() => {
        if (!confirm("Are you sure?")) {
          return;
        }
        dispatch({
          type: "DELETE_TODO",
          payload: id,
        });
      }}
    >
      &times;
    </button>
  );
}
