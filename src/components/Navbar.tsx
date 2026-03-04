import { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import type { Lang } from "../content/i18n";

export default function Navbar({
  brand,
  nav,
  onHamburger,
  lang,
  setLang,
}: {
  brand: { name: string; accent: string };
  nav: { id: string; label: string }[];
  onHamburger: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""} id="navbar">
      <a href="#hero" className="nav-logo">
        {brand.name} <span>{brand.accent}</span>
      </a>

      <ul className="nav-links">
        {nav.map((x) => (
          <li key={x.id}>
            <a href={`#${x.id}`}>{x.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="hide-on-mobile">
          <LangSwitcher lang={lang} setLang={setLang} />
        </div>

        <button className="hamburger" onClick={onHamburger} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}