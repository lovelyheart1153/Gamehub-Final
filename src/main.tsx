import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import GameQueryProvider from "./providers/GameQueryProvider.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <GameQueryProvider>
        <RouterProvider router={router} />
      </GameQueryProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
