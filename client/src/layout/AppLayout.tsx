import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Appsidebar from "./AppSidebar";
import { SidebarProvider } from "../contexts/SidebarContext";
import { HeaderProvider } from "../contexts/HeaderContext";
const LayoutContent = () => {
    return (
        <>
            <div>
                <Appsidebar />
            </div>
            <div>
                <AppHeader />
            </div>
            <div className="p-20 -mnl-14 sm:ml-52">
                <Outlet />
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderProvider>
                <SidebarProvider>
                    <LayoutContent />
                </SidebarProvider>
            </HeaderProvider>
        </>
    )
}

export default AppLayout;