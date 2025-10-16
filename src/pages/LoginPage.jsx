import { useAuth } from "@context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trong ứng dụng thực tế, bạn sẽ xác thực thông tin đăng nhập ở đây
    login(username);
    navigate("/home");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded bg-slate-800 p-8"
      >
        <h1 className="text-2xl">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded bg-slate-700 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded bg-slate-700 p-2"
        />
        <button type="submit" className="rounded bg-red-600 p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
