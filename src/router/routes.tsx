import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { PublicLayout, SupportLayout } from "../layouts";
import { SectionSupport } from "../components";
import { loaderMenu } from "../loaders/loaderMenu";
import { HomePage } from "../pages/Home";

const PagoOnline = lazy(() => import("../pages/rentas/PagoOnline"));
const Comprobantes = lazy(() => import("../pages/rentas/Comprobantes"));
const AdhesionOnline = lazy(() => import("../pages/rentas/AdhesionOnline"));
const Haberes = lazy(() => import("../pages/rrhh/Haberes"));
const Licitaciones = lazy(() => import("../pages/compras/Licitaciones"));
const Ingresar = lazy(() => import("../pages/ddjj/Ingresar"));
const Autoridades = lazy(() => import("../pages/institucional/Autoridades"));
const Sueldos = lazy(() => import("../pages/institucional/Sueldos"));
const Expedientes = lazy(() => import("../pages/institucional/Expedientes"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    loader: loaderMenu,
    children: [
      {
        errorElement: <SectionSupport />,
        children: [
          {
            index: true,
            errorElement: <SupportLayout />,
            element: <HomePage />,
            loader: loaderMenu,
          },
          {
            path: "rentas/",
            children: [
              {
                path: "pagar",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <PagoOnline />
                  </Suspense>
                ),
              },
              {
                path: "adhesion",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <AdhesionOnline />
                  </Suspense>
                ),
              },
              {
                path: "busqueda-comprobantes-de-pago",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Comprobantes />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "rrhh/",
            children: [
              {
                path: "solicitudrecibohaberes",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Haberes />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "ddjj/",
            children: [
              {
                path: "ingresar",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Ingresar />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "institucional/",
            children: [
              {
                path: "sueldos",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Sueldos />
                  </Suspense>
                ),
              },
              {
                path: "autoridades",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Autoridades />
                  </Suspense>
                ),
              },
              {
                path: "expediente-movimientos",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Expedientes />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "compras/",
            children: [
              {
                path: "licitaciones",
                element: (
                  <Suspense fallback={<CircularProgress />}>
                    <Licitaciones />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
