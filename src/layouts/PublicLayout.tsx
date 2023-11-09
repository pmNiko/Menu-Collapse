import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

export const PublicLayout = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
