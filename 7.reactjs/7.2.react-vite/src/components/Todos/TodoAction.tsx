import { AppContext } from "@/context/AppContext";
import { use } from "react";

export default function TodoAction() {
  const { message, setMessage } = use(AppContext);
  return (
    <div>
      <p className="font-medium text-lg">{message}</p>
      <button
        className="bg-red-600 px-3 py-1"
        onClick={() => setMessage("Học React không khó")}
      >
        Change
      </button>
    </div>
  );
}
