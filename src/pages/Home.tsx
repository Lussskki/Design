import Reveal from "../components/Reveal";
import type { LightboxItem } from "../components/Lightbox";

export default function Home({
  content,
  onOpenLightbox,
  onOpenDetail,
}: {
  content: any;
  onOpenLightbox: (item: LightboxItem) => void;
  onOpenDetail: (idx: number) => void;
}) {
  const hero = content.hero;

  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">{hero.badge}</div>
          <h1 className="hero-title">
            {hero.titleTop}
            <br />
            <em>{hero.titleEm}</em>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-cta">
            <a href={hero.cta1.href} className="btn-primary">
              {hero.cta1.label}
            </a>
            <a href={hero.cta2.href} className="btn-outline">
              {hero.cta2.label}
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>{hero.scroll}</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-text">
              <span className="section-label">{content.about.label}</span>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: content.about.titleHtml }}
              />
              <br />
              {content.about.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}

              <div className="stats-row">
                {content.about.stats.map((s: any, i: number) => (
                  <div className="stat" key={i}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="about-image" delay={0.2}>
              <img className="about-img-main" src={content.about.images.main} alt="" loading="lazy" />
              <img className="about-img-accent" src={content.about.images.accent} alt="" loading="lazy" />
              <div className="about-year">{content.about.images.yearText}</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="container">
          <Reveal className="gallery-intro">
            <span className="section-label">{content.gallery.label}</span>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: content.gallery.titleHtml }}
            />
            <p>{content.gallery.desc}</p>
          </Reveal>

          <div className="gallery-grid">
            {content.gallery.items.map((it: any, i: number) => (
              <Reveal key={i} className="gallery-item" delay={(i % 4) * 0.1}>
                <button
                  className="gallery-link"
                  type="button"
                  onClick={() => onOpenLightbox(it)}
                  aria-label="Open image"
                >
                  <img src={it.src} alt="" loading="lazy" />
                  <div className="gallery-item-overlay">
                    <div className="gallery-overlay-text">
                      <span>{it.caption}</span>
                      <span className="gallery-view-link">{content.gallery.viewOnMaps}</span>
                    </div>
                    <div className="gallery-ext-icon">↗</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS (your “Attractions” -> scouting programs) */}
      <section id="programs" className="light-section">
        <div className="container">
          <div className="attractions-header">
            <div>
              <span className="section-label">{content.programs.label}</span>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: content.programs.titleHtml }}
              />
              <p className="attractions-desc">{content.programs.desc}</p>
            </div>
          </div>

          <div className="attractions-grid">
            {content.programs.cards.map((c: any, idx: number) => (
              <Reveal className="attraction-card" key={idx} delay={(idx % 3) * 0.1}>
                <span className="attraction-icon">{c.icon}</span>
                <h3 className="attraction-name">{c.name}</h3>
                <p className="attraction-desc">{c.desc}</p>
                <button className="attraction-btn" onClick={() => onOpenDetail(idx)}>
                  <span>{content.programs.learnMore}</span> <span className="btn-arrow">→</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section id="history">
        <div className="history-bg-text">⚜</div>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <Reveal>
              <span className="section-label">{content.history.label}</span>
            </Reveal>
            <Reveal>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: content.history.titleHtml }}
              />
            </Reveal>
          </div>

          <div className="timeline">
            {content.history.timeline.map((x: any, i: number) => (
              <div className="timeline-item visible" key={i}>
                <div className="timeline-dot">{x.year}</div>
                <div className="timeline-content">
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section id="location" className="light-section">
        <div className="container">
          <Reveal>
            <span className="section-label">{content.contact.label}</span>
          </Reveal>
          <Reveal>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: content.contact.titleHtml }}
            />
          </Reveal>

          <div className="location-grid">
            <Reveal>
              <h3>{content.contact.h3}</h3>

              {content.contact.details.map((d: any, i: number) => (
                <div className="location-detail" key={i}>
                  <div className="detail-icon">{d.icon}</div>
                  <div className="detail-text">
                    <strong>{d.strong}</strong>
                    <span dangerouslySetInnerHTML={{ __html: d.text }} />
                  </div>
                </div>
              ))}

              <a className="map-cta" href={content.contact.mapCtaUrl} target="_blank" rel="noreferrer">
                {content.contact.mapCtaLabel}
              </a>
            </Reveal>

            <Reveal className="map-embed" delay={0.15}>
              <iframe src={content.contact.mapEmbedUrl} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate">
        <div className="container">
          <Reveal>
            <span className="section-label">{content.donate.label}</span>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: content.donate.titleHtml }}
            />
            <p className="attractions-desc" style={{ marginTop: 14 }}>
              {content.donate.desc}
            </p>

            <DonateBox donate={content.donate} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function DonateBox({ donate }: { donate: any }) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(donate.ibanValue);
      const el = document.getElementById("copyStatus");
      if (el) {
        el.textContent = donate.copiedLabel;
        setTimeout(() => (el.textContent = ""), 1200);
      }
    } catch {
      // fallback: select text (simple)
      alert(donate.ibanValue);
    }
  };

  return (
    <div style={{ marginTop: 26, maxWidth: 680 }}>
      <div className="detail-meta-tag" style={{ justifyContent: "space-between" }}>
        <span>
          <strong style={{ marginRight: 10 }}>{donate.ibanLabel}:</strong>
          {donate.ibanValue}
        </span>
        <button className="attraction-btn" onClick={onCopy}>
          {donate.copyLabel}
        </button>
      </div>
      <div id="copyStatus" style={{ marginTop: 10, opacity: 0.8 }} />
      <div className="detail-tip-box">
        <strong>Tip</strong>
        <p>{donate.note}</p>
      </div>
    </div>
  );
}