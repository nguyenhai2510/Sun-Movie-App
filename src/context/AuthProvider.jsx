import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Hardcoded user database
const USERS_DB = [
  {
    id: 1,
    username: "admin",
    email: "admin@sunmovie.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    username: "user1",
    email: "user1@sunmovie.com",
    password: "password123",
    role: "user",
  },
  {
    id: 3,
    username: "demo",
    email: "demo@sunmovie.com",
    password: "demo123",
    role: "user",
  },
];

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") ? true : false,
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = (username, password) => {
    // Find user in database
    const foundUser = USERS_DB.find(
      (user) => user.username === username && user.password === password,
    );

    if (foundUser) {
      // Remove password from user object before storing
      const userToStore = {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        role: foundUser.role,
      };

      localStorage.setItem("user", JSON.stringify(userToStore));
      setUser(userToStore);
      setIsAuthenticated(true);

      return { success: true, message: "Login successful!" };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  };

  const register = (username, email, password) => {
    // Check if username already exists
    const existingUser = USERS_DB.find((user) => user.username === username);
    if (existingUser) {
      return { success: false, message: "Username already exists" };
    }

    // Check if email already exists
    const existingEmail = USERS_DB.find((user) => user.email === email);
    if (existingEmail) {
      return { success: false, message: "Email already exists" };
    }

    // In a real app, you would save to database
    // For demo purposes, we'll just simulate success
    const newUser = {
      id: USERS_DB.length + 1,
      username,
      email,
      password,
      role: "user",
    };
    console.log(newUser);

    // In real app: USERS_DB.push(newUser);
    // For demo, we'll just return success without actually adding

    return {
      success: true,
      message: "Registration successful! Please login with demo accounts.",
    };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    // Redirect to login page
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
