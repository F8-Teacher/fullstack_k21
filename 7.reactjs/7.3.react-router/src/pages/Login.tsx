import { AppContext } from "@/components/AppContext";
import { use } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const { setAuth } = use(AppContext);
  const [searchParams] = useSearchParams();
  const continueUrl = searchParams.get("continue") ?? "/";
  const navigate = useNavigate();
  const handleLogin = () => {
    setAuth(true);
    navigate(continueUrl);
  };
  return (
    <div>
      <h1 className="mb-3 text-3xl">Login</h1>
      <button
        className="bg-green-600 px-3 py-1 text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

//Lưu trạng thái login -> Lưu tạm vào Context
