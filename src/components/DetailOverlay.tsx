export type DetailItem = {
  icon: string;
  title: string;
  subtitle: string;
  heroImage: string;
  meta: { label: string; value: string }[];
  sections: { title: string; paragraphs: string[] }[];
  externalUrl?: string;
  externalLabel?: string;
};

export default function DetailOverlay({
  open,
  items,
  index,
  setIndex,
  onClose,
}: {
  open: boolean;
  items: DetailItem[];
  index: number;
  setIndex: (n: number) => void;
  onClose: () => void;
}) {
  const item = items[index];

  const prev = () => setIndex(Math.max(0, index - 1));
  const next = () => setIndex(Math.min(items.length - 1, index + 1));

  return (
    <div className={`detail-overlay ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="detail-topbar">
        <div className="detail-topbar-left">
          <button className="detail-back-btn" onClick={onClose}>
            ← Back
          </button>
          <div className="detail-breadcrumb">
            Programs / <span>{item?.title}</span>
          </div>
        </div>

        <div className="detail-nav">
          <button className="detail-nav-btn" onClick={prev} disabled={index === 0}>
            ←
          </button>
          <button
            className="detail-nav-btn"
            onClick={next}
            disabled={index === items.length - 1}
          >
            →
          </button>
        </div>
      </div>

      {item && (
        <>
          <div className="detail-hero">
            <div
              className="detail-hero-bg"
              style={{ backgroundImage: `url('${item.heroImage}')` }}
            />
            <div className="detail-hero-overlay" />
            <div className="detail-hero-content">
              <span className="detail-icon-large">{item.icon}</span>
              <div className="detail-subtitle">{item.subtitle}</div>
              <h2 className="detail-title">{item.title}</h2>
            </div>
          </div>

          <div className="detail-body">
            <div className="detail-meta-row">
              {item.meta.map((m, i) => (
                <div className="detail-meta-tag" key={i}>
                  <span className="meta-icon">•</span>
                  <span>
                    <strong>{m.label}:</strong> {m.value}
                  </span>
                </div>
              ))}
            </div>

            {item.sections.map((s, i) => (
              <div className="detail-section" key={i}>
                <div className="detail-section-title">{s.title}</div>
                {s.paragraphs.map((p, j) => (
                  <p className="detail-text" key={j}>
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {item.externalUrl && (
              <a className="detail-ext-link" href={item.externalUrl} target="_blank" rel="noreferrer">
                {item.externalLabel ?? "Open"}
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
}