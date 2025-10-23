export default function Footer() {
  const items = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ] as const;

  return (
    <footer className="full-bleed bg-dark-600 py-6 text-xs text-white/90">
      <div className="container mx-auto flex flex-wrap items-center gap-8 px-4">
        {items.map((t) => (
          <span key={t} className="whitespace-nowrap opacity-90">
            {t}
          </span>
        ))}
      </div>
    </footer>
  );
}
