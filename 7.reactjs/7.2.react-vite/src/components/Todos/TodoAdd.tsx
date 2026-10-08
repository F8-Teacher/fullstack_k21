import { TodoContext } from "@/context/TodoContext";
import { use, useState, type ChangeEvent, type SubmitEvent } from "react";

export default function TodoAdd() {
  const { dispatch } = use(TodoContext);
  const [name, setName] = useState<string>("");
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
    setName("");
  };
  return (
    <form className="flex mt-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-1 px-3 py-1 border border-gray-200 outline-none"
        placeholder="Title..."
        onChange={handleChangeValue}
        value={name}
      />
      <button
        className="bg-green-600 disabled:opacity-50 px-3 py-1 text-white"
        disabled={name.length < 3}
      >
        Add
      </button>
    </form>
  );
}
