import type { TodoData } from "@/types/todo.type";

type TodoItemProps = {
  data: TodoData;
  onDelete?: (id: string) => void;
};
export default function TodoItem({ data, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center py-3 border-gray-200 border-b">
      <div className="flex gap-3">
        <input type="checkbox" />
        <span className={`${data.completed ? "line-through" : ""}`}>
          {data.name}
        </span>
      </div>
      <button
        className="ml-auto font-semibold text-red-600 cursor-pointer"
        onClick={() => {
          if (!confirm("Are you sure?")) {
            return;
          }
          onDelete?.(data.id);
        }}
      >
        &times;
      </button>
    </div>
  );
}
