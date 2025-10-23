import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

export default function RootLayout() {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className={cn("container mx-auto px-4 relative")}>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
