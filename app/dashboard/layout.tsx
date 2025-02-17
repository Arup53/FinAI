import DashboardContent from "@/components/dashboardComponents/dashboardContent";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardContent />
      <main>{children}</main>
    </SidebarProvider>
  );
}
