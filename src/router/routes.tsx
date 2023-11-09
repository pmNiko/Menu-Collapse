import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layouts";
import { loaderMenu } from "../loaders";
import {
  AdhesionOnline,
  Autoridades,
  Comprobantes,
  Expedientes,
  Haberes,
  HomePage,
  Ingresar,
  Licitaciones,
  PagoOnline,
  Sueldos,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    loader: loaderMenu,
    children: [
      {
        path: "inicio",
        loader: loaderMenu,
        element: <HomePage />,
      },
      {
        path: "rentas/",
        children: [
          {
            path: "pagar",
            element: <PagoOnline />,
          },
          {
            path: "adhesion",
            element: <AdhesionOnline />,
          },
          {
            path: "busqueda-comprobantes-de-pago",
            element: <Comprobantes />,
          },
        ],
      },
      {
        path: "rrhh/",
        children: [
          {
            path: "solicitudrecibohaberes",
            element: <Haberes />,
          },
        ],
      },
      {
        path: "ddjj/",
        children: [
          {
            path: "ingresar",
            element: <Ingresar />,
          },
        ],
      },
      {
        path: "institucional/",
        children: [
          {
            path: "sueldos",
            element: <Sueldos />,
          },
          {
            path: "autoridades",
            element: <Autoridades />,
          },
          {
            path: "expediente-movimientos",
            element: <Expedientes />,
          },
        ],
      },
      {
        path: "compras/",
        children: [
          {
            path: "licitaciones",
            element: <Licitaciones />,
          },
        ],
      },
    ],
  },
]);
