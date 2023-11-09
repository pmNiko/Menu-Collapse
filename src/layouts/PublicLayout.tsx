import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { HomePage } from "../pages";

export const PublicLayout = () => {
  return (
    <div>
      <NavBar />

      <HomePage />
      {/* <main>
        <Outlet />
      </main> */}
      <Footer />
    </div>
  );
};
