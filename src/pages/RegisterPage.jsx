import { useAuth } from "@context/AuthProvider";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const result = register(
      formData.username,
      formData.email,
      formData.password,
    );

    if (result.success) {
      alert("Registration successful! Please login.");
      navigate("/");
    } else {
      setErrors({ submit: result.message });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="mx-4 w-full max-w-md">
        <div className="rounded-lg border border-gray-800 bg-black/60 p-8 shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <Link to="/" className="mb-4 inline-block">
              <img src="/netflix.png" className="mx-auto w-32" alt="SunMovie" />
            </Link>
            <h2 className="mb-2 text-3xl font-bold text-white">
              Create Account
            </h2>
            <p className="text-gray-400">Join SunMovie today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.submit && (
              <div className="rounded-md border border-red-500 bg-red-500/20 px-4 py-3 text-sm text-red-400">
                {errors.submit}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border bg-gray-800 px-4 py-3 ${
                  errors.username ? "border-red-500" : "border-gray-700"
                } rounded-md text-white placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500`}
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-400">{errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border bg-gray-800 px-4 py-3 ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded-md text-white placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border bg-gray-800 px-4 py-3 ${
                  errors.password ? "border-red-500" : "border-gray-700"
                } rounded-md text-white placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border bg-gray-800 px-4 py-3 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-700"
                } rounded-md text-white placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-red-600 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-medium text-red-500 transition-colors hover:text-red-400"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Demo Accounts Info */}
          <div className="mt-6 rounded-md border border-gray-700 bg-gray-800/50 p-4">
            <h4 className="mb-2 text-sm font-medium text-gray-300">
              Demo Accounts:
            </h4>
            <div className="space-y-1 text-xs text-gray-400">
              <p>admin / admin123</p>
              <p>user1 / password123</p>
              <p>demo / demo123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
