import DashboardAside from "@/components/custom/layouts/dashboard-aside";
import DashboardHeader from "@/components/custom/layouts/dashboard-header";

export default async function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="grid auto-cols-[max-content_auto]">
      <DashboardAside className="flex flex-col flex-1" />

      <div className="w-full col-start-2 flex flex-col">
        <DashboardHeader />

        <main className="flex flex-col flex-1 bg-gray-100 overflow-y-auto py-4 px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
