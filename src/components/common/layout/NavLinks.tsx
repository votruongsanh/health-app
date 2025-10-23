import iconChallenge from "@/assets/images/header/icon_challenge.png";
import iconInfo from "@/assets/images/header/icon_info.png";
import iconMemo from "@/assets/images/header/icon_memo.png";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type NavLinksProps = {
  linkBaseClass?: string;
  onItemClick?: () => void;
};

export default function NavLinks({
  linkBaseClass,
  onItemClick,
}: NavLinksProps) {
  const { pathname } = useLocation();

  const items = [
    {
      to: "/top-page",
      label: "トップ",
      icon: iconChallenge,
      active: pathname.startsWith("/top-page"),
    },
    {
      to: "/my-record",
      label: "自分の記録",
      icon: iconMemo,
      active: pathname.startsWith("/my-record"),
    },
    {
      to: "/column",
      label: "コラム",
      icon: iconInfo,
      active: pathname.startsWith("/column"),
    },
  ];

  const base =
    linkBaseClass || "flex items-center gap-2 text-sm hover:opacity-90";

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onItemClick}
          className={cn(base, item.active ? "opacity-100" : "opacity-80")}
        >
          <img src={item.icon} alt={item.label} className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </>
  );
}
