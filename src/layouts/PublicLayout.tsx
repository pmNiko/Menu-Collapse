import { Outlet } from "react-router-dom";
import { CustomMenu, Footer, NavBar } from "../components";

export const PublicLayout = () => {
  return (
    <div>
      <NavBar />

      <CustomMenu />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
