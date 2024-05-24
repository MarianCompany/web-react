import { FC } from "react";
import {RouteObject, useRoutes} from "react-router-dom"
import {HomePage} from "../pages/root";
import routes from "./routes.ts"
import {PDFPage} from "../pages/pdf";
import {PaginationPage} from "../pages/pagination";

export const Router: FC = () => {
    const paths: RouteObject[] = [
      {
        path: routes.ROOT,
        element: <HomePage />,
      },
      {
        path: routes.PDF,
        element: <PDFPage />
      },
      {
        path: routes.PAGINATION,
        element: <PaginationPage />
      }
    ];

    return useRoutes(paths)
}
