import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { apiAuth } from "../lib/axios-auth";
import { saveToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function Login() {
  const [form, setForm] = useState({} as { email: string; password: string });
  const navigate = useNavigate();
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const queryClient = useQueryClient();
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await apiAuth.post("/auth/login", form);
    saveToken(response.data);
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
    navigate("/");
  };
  return (
    <div className="mx-auto py-5 max-w-1/2">
      <h1 className="mb-3 font-semibold text-3xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email..."
            className="px-3 py-1 border border-gray-200 outline-none w-full"
            name="email"
            onChange={handleChangeValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password..."
            name="password"
            className="px-3 py-1 border border-gray-200 outline-none w-full"
            onChange={handleChangeValue}
          />
        </div>
        <div className="flex gap-3">
          <button className="bg-green-600 px-3 py-1 text-white cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
