import type { TodoData } from "@/types/todo.type";
import TodoItem from "./TodoItem";
type TodoListProps = {
  data: TodoData[];
  onDelete?: (id: string) => void;
};
export default function TodoList({ data, onDelete }: TodoListProps) {
  return (
    <div className="p-5 border border-gray-200 rounded-lg">
      {data.map((todo) => (
        <TodoItem key={todo.id} data={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}
