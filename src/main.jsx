import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import ModalProvider from "@context/ModalProvider";
import AuthProvider from "@context/AuthProvider";
import { lazy } from "react";
import SearchPage from "@pages/SearchPage";
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";
import { requestLocalApi } from "@libs/localApi";

const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const TVShowDetail = lazy(() => import("@pages/TVShowDetail"));
const HomePage = lazy(() => import("@pages/HomePage"));
const PeoplePage = lazy(() => import("@pages/PeoplePage"));

const useLocalDatabase = import.meta.env.VITE_USE_LOCAL_DB === "true";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          if (useLocalDatabase) {
            return requestLocalApi(
              `/person/${params.id}?append_to_response=combined_credits`,
            );
          }

          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );
          return res.json();
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ModalProvider>,
);
