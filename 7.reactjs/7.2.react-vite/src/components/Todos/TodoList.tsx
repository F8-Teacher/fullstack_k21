import { use } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "@/context/TodoContext";
export default function TodoList() {
  const { todoList } = use(TodoContext);
  return (
    <div className="p-5 border border-gray-200 rounded-lg">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </div>
  );
}
