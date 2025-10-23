import iconMenu from "@/assets/images/header/icon_menu.png";
import logo from "@/assets/images/header/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-600 text-white">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Healthy" className="h-6 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLinks />
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="inline-flex items-center md:hidden"
              aria-label="Open menu"
            >
              <img src={iconMenu} alt="menu" className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 border-white/10 bg-dark-600 p-0 text-white"
          >
            <nav className="flex flex-col py-2 text-sm">
              <NavLinks
                linkBaseClass="flex items-center gap-2 px-4 py-3 hover:bg-white/10"
                onItemClick={() => setOpen(false)}
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
