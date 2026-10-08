import { useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { TodoContext } from "@/context/TodoContext";
import { initialValue, todoReducer } from "@/reducer/todo.reducer";
export default function Todos() {
  // const [todoList, setTodoList] = useState<TodoData[]>([]);
  // const handleAddTodo = (data: TodoData) => {
  //   setTodoList([...todoList, data]);
  // };
  // const handleDelete = (id: string) => {
  //   setTodoList(todoList.filter((todo) => todo.id !== id));
  // };
  // const handleCompleted = (id: string) => {
  //   setTodoList(
  //     todoList.map((todo) => {
  //       if (id === todo.id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   );
  // };
  const [todoList, dispatch] = useReducer(todoReducer, initialValue);
  return (
    <div className="mx-auto py-5 max-w-1/2">
      <h1 className="mb-3 font-medium text-3xl">Todo App</h1>
      <TodoContext.Provider
        value={{
          todoList,
          dispatch,
        }}
      >
        <TodoList />
        <TodoAdd />
      </TodoContext.Provider>
    </div>
  );
}

/*
Props: Compoent 1 -> Component 2 -> Component 3 -> ...

App -> Todos -> TodoAction

Vấn đề:
- Props -> Giải quyết bằng Context
- Logic rải rác -> Tập trung ở component cha
- Logic nhiều lên, khó quản lý, không tách được file -> useReducer
*/
