import type { TodoData } from "@/types/todo.type";
import TodoDeleteButton from "./TodoDeleteButton";
import { use } from "react";
import { TodoContext } from "@/context/TodoContext";

type TodoItemProps = {
  data: TodoData;
};
export default function TodoItem({ data }: TodoItemProps) {
  const { dispatch } = use(TodoContext);
  return (
    <div className="flex items-center py-3 border-gray-200 border-b">
      <div className="flex gap-3">
        <input
          type="checkbox"
          onChange={() =>
            dispatch({
              type: "COMPLETED_TODO",
              payload: data.id,
            })
          }
        />
        <span className={`${data.completed ? "line-through" : ""}`}>
          {data.name}
        </span>
        <TodoDeleteButton id={data.id} />
      </div>
    </div>
  );
}
