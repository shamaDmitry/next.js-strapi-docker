import Navigation from "@/components/custom/core/navigation";
import Footer from "@/components/custom/core/footer";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <header className="absolute top-0 left-0 w-full bg-white border-b shadow">
        <div className="container">
          <Navigation className="" />
        </div>
      </header>

      <main className="pt-[100px] flex flex-col items-center justify-center flex-1 bg-gray-100 py-12">
        {children}
      </main>

      <Footer />
    </>
  );
}
