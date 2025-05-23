import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar,
    SidebarMenuSub
  } from "@/components/ui/sidebar"
import { ChevronRightIcon, HomeIcon, InfoIcon, SettingsIcon, UserIcon } from "lucide-react";
import { useNavigate } from "react-router"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useState } from "react";
import { cn } from "@/lib/utils";


interface RouteItem {
    path: string;
    name: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: RouteItem[];
}

interface SidebarGroupItem {
    label?: string;
    routes: RouteItem[];
}

const navConfig: SidebarGroupItem[] = [
    {
        label: "Navigation",
        routes: [
            {
                path: "/",
                name: "Home",
                icon: HomeIcon,
            },
            {
                path: "/about",
                name: "About",
                icon: InfoIcon,
                children: [
                    {
                        path: "/about/settings",
                        name: "Settings",
                    },
                    {
                        path: "/about/user",
                        name: "User",
                    }
                ]
            }
        ]      
    }
]

  
  export function AppSidebar() {

    return (
      <Sidebar>
        <SidebarHeader>Welcome to Bundlrr app</SidebarHeader>
        <SidebarContent>
            {navConfig.map((group) => (
                <SidebarGroup>
                    <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group.routes.map((route) => (
                                <TopLevelMenuItem key={route.path} route={route} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </SidebarContent>
        <SidebarFooter>
            footer
        </SidebarFooter>
      </Sidebar>
    )
  }
  
  const TopLevelMenuItem = ({route}: {route: RouteItem}) => {
    const { toggleSidebar } = useSidebar()
    const [collapsibleOpen, setCollapsibleOpen] = useState(false)
    const navigate = useNavigate()
    const handleMenuClick = (path: string) => {
        toggleSidebar()
        navigate(path)
    }
    const Icon = route.icon;
    return (
        <>
        {route.children ? (
            <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                            <div className="inline-flex justify-between w-full pr-8">
                                <div className="flex items-center gap-2">
                                    <Icon className="w-5 h-5" />
                                    {route.name}
                                </div>
                                <ChevronRightIcon className={cn("w-4 h-4", collapsibleOpen && "rotate-90")} />
                            </div>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {route.children.map((child) => (
                                <SubMenuItem key={child.path} route={child} />
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem> 
            </Collapsible>
            ) : (
                <SidebarMenuItem>
                    <SidebarMenuButton onClick={()=>handleMenuClick(route.path)}>
                            <div className="inline-flex justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <Icon className="w-5 h-5" />
                                    {route.name}
                                </div>
                            </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )}
        </>
    )
}

const SubMenuItem = ({route}: {route: RouteItem}) => {
    const { toggleSidebar } = useSidebar()
    const navigate = useNavigate()
    const handleMenuClick = (path: string) => {
        toggleSidebar()
        navigate(path)
    }
    return (
        <SidebarMenuItem>
            <SidebarMenuButton onClick={()=>handleMenuClick(route.path)}>
                {route.name}
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}