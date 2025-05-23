import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../supporting/app-sidebar";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className="m-2"/>
        <div className="px-4">
            <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;