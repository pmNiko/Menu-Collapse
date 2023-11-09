import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layouts";
import { loaderMenu } from "../loaders";
import { Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    loader: loaderMenu,
    children: [
      {
        path: "/inicio",
        element: <Home />,
      },
    ],
  },
]);
