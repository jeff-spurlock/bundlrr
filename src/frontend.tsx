import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { routes } from "./routes";
import RootLayout from "./components/layouts/RootLayout";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: routes.map((routeItem)=>{
      const { name, ...route } = routeItem;
      return route;
    })
  }
])

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
