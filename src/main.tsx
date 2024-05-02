import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { route } from "./router/index.tsx";

let query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <React.StrictMode>
      <ReactQueryDevtools />

      <RouterProvider router={route} />
    </React.StrictMode>
  </QueryClientProvider>,
);
