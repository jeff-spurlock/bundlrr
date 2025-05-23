import { Home } from "@/components/views/Home";
import { About } from "@/components/views/About";

interface RouteItem {
    path: string;
    name: string;
    element: React.ReactNode;
}

export const routes: RouteItem[] = [
    {
        path: "/",
        name: "Home",
        element: <Home />,
    },
    {
        path: "/about",
        name: "About",
        element: <About />,
    }
]