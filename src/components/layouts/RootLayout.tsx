import { Link, Outlet } from "react-router";
import {routes} from '@/routes'

const RootLayout = () => {
  return (
    <div>
        <h1>Root Layout</h1>
        <nav>
            {routes.map((route) => (
                <Link key={route.path} to={route.path}>{route.name}</Link>
            ))}
        </nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;