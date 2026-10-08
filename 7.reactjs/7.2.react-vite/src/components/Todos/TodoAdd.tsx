import type { TodoData } from "@/types/todo.type";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
type TodoAddProps = {
  onSubmit?: (data: TodoData) => void;
};
export default function TodoAdd({ onSubmit }: TodoAddProps) {
  const [name, setName] = useState<string>("");
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.({
      id: crypto.randomUUID(),
      name,
      completed: false,
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
