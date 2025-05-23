import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject
} from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import { Home } from "./components/views/Home";
import { About } from "./components/views/About";

export const routes: RouteObject[] = [
  {
      path: "/",
      element: <Home />,
  },
  {
      path: "/about",
      element: <About />,
  }
]

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: routes.map((routeItem)=>{
      return {
        path: routeItem.path,
        element: routeItem.element,
      }
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
