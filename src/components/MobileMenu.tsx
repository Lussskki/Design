import LangSwitcher from "./LangSwitcher";
import type { Lang } from "../content/i18n";

export default function MobileMenu({
  open,
  onClose,
  nav,
  lang,
  setLang,
}: {
  open: boolean;
  onClose: () => void;
  nav: { id: string; label: string }[];
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      {nav.map((x) => (
        <a key={x.id} href={`#${x.id}`} onClick={onClose}>
          {x.label}
        </a>
      ))}
      <div className="mobile-lang" style={{ marginTop: 18 }}>
        <LangSwitcher lang={lang} setLang={setLang} />
      </div>

      <button
        className="lightbox-close"
        style={{ top: 22, right: 24, position: "fixed" }}
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>
    </div>
  );
}