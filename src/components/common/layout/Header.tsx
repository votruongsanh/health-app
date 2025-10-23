import iconChallenge from "@/assets/images/header/icon_challenge.png";
import iconInfo from "@/assets/images/header/icon_info.png";
import iconMemo from "@/assets/images/header/icon_memo.png";
import iconMenu from "@/assets/images/header/icon_menu.png";
import logo from "@/assets/images/header/logo.png";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

// navigation items are inlined below with icons

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-600 text-white">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Healthy" className="h-6 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/my-record"
            className={cn(
              "flex items-center gap-2 text-sm hover:opacity-90",
              location.pathname === "/my-record" ? "opacity-100" : "opacity-80"
            )}
          >
            <img src={iconMemo} alt="record" className="h-5 w-5" />
            <span>自分の記録</span>
          </Link>
          <Link
            to="/"
            className={cn(
              "flex items-center gap-2 text-sm hover:opacity-90",
              location.pathname === "/challenge" ? "opacity-100" : "opacity-80"
            )}
          >
            <img src={iconChallenge} alt="challenge" className="h-5 w-5" />
            <span>チャレンジ</span>
          </Link>
          <Link
            to="/"
            className="relative flex items-center gap-2 text-sm opacity-80 hover:opacity-90"
          >
            <img src={iconInfo} alt="notice" className="h-5 w-5" />
            <span>お知らせ</span>
            <span className="absolute -right-3 -top-2 rounded-full bg-primary-400 px-1 text-[10px] leading-4 text-black">
              1
            </span>
          </Link>
        </nav>
        <button className="inline-flex items-center md:hidden">
          <img src={iconMenu} alt="menu" className="h-5 w-5" />
        </button>
        <button className="hidden md:inline-flex">
          <img src={iconMenu} alt="menu" className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
