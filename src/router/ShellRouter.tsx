import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export const ShellRouter = () => {
  return <RouterProvider router={router} />;
};
