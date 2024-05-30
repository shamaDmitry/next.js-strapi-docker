import React, { FC, PropsWithChildren } from "react";
import Navigation from "@/components/custom/core/navigation";
import Footer from "@/components/custom/core/footer";
import { cn } from "@/lib/utils";

interface MainLayoutProps extends PropsWithChildren {
  className?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <>
      <header className="absolute top-0 left-0 w-full bg-white border-b shadow">
        <div className="container">
          <Navigation />
        </div>
      </header>

      <main
        className={cn({
          "pt-20 flex flex-col flex-1 bg-gray-100 py-12": true,
          [`${className}`]: className,
        })}
      >
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
