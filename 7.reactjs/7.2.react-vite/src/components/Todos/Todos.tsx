import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import type { TodoData } from "@/types/todo.type";
export default function Todos() {
  const [todoList, setTodoList] = useState<TodoData[]>([]);
  const handleAddTodo = (data: TodoData) => {
    setTodoList([...todoList, data]);
  };
  const handleDelete = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div className="mx-auto py-5 max-w-1/2">
      <h1 className="mb-3 font-medium text-3xl">Todo App</h1>
      <TodoList data={todoList} onDelete={handleDelete} />
      <TodoAdd onSubmit={handleAddTodo} />
    </div>
  );
}
