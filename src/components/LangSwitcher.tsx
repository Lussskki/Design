import type { Lang } from "../content/i18n";

export default function LangSwitcher({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const isEn = lang === "en";

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <div
        className="lang-pill"
        style={{
          transform: isEn ? "translateX(0px)" : "translateX(44px)",
          width: "40px",
        }}
      />
      <button
        className={`lang-btn ${isEn ? "active" : ""}`}
        onClick={() => setLang("en")}
        type="button"
      >
        EN
      </button>
      <button
        className={`lang-btn ${!isEn ? "active" : ""}`}
        onClick={() => setLang("ka")}
        type="button"
      >
        ქარ
      </button>
    </div>
  );
}