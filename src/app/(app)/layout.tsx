import AppSidebar from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:pl-14">
        <AppHeader />
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
