import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const isProtected =
    pathname.startsWith("/top-page") || pathname.startsWith("/my-record");

  if (!isAuthenticated && isProtected) {
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
