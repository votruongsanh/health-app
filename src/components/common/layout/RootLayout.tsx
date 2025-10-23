import { Outlet, useLocation, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

export default function RootLayout() {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const isPublic = pathname.startsWith("/column");

  if (!isAuthenticated && !isPublic) {
    return <Navigate to="/column" replace />;
  }

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
