import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Suspense } from "react";
import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
