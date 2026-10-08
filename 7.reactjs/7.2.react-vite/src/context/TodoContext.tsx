import type { ActionType } from "@/reducer/todo.reducer";
import type { TodoData } from "@/types/todo.type";
import { createContext, type ActionDispatch } from "react";
type TodoContextData = {
  todoList: TodoData[];
  dispatch: ActionDispatch<[action: ActionType]>;
  // setTodoList?: Dispatch<SetStateAction<TodoData[]>>;
  // handleAddTodo?: (data: TodoData) => void;
  // handleDelete?: (id: string) => void;
  // handleCompleted?: (id: string) => void;
};
export const TodoContext = createContext<TodoContextData>(
  {} as TodoContextData,
);
