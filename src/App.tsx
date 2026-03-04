import { useEffect, useMemo, useState } from "react";
import Navbar from "../src/components/Navbar";
import MobileMenu from "../src/components/MobileMenu";
import Cursor from "../src/components/Cursor";
import Lightbox, { type LightboxItem } from "../src/components/Lightbox";
import DetailOverlay, { type DetailItem } from "../src/components/DetailOverlay";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import { type Lang, getCopy } from "../src/content/i18n";
import { buildTbilisiContent } from "../src/content/data";

export default function App() {
  const [lang, setLang] = useState<Lang>("ka");
  const t = useMemo(() => getCopy(lang), [lang]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const content = useMemo(() => buildTbilisiContent(t), [t]);

  // Lightbox (for Gallery)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  // Detail Overlay (for “Learn More” cards)
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailIndex, setDetailIndex] = useState<number>(0);

  const detailItems: DetailItem[] = content.programDetails;

  useEffect(() => {
    // lock scroll when mobile menu or overlay is open
    const lock = mobileOpen || detailOpen || lightboxOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, detailOpen, lightboxOpen]);

  return (
    <>
      <Cursor />

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        nav={content.nav}
        lang={lang}
        setLang={setLang}
      />

      <Navbar
        brand={content.brand}
        nav={content.nav}
        onHamburger={() => setMobileOpen((v) => !v)}
        lang={lang}
        setLang={setLang}
      />

      <Home
        content={content}
        onOpenLightbox={(item) => {
          setLightboxItem(item);
          setLightboxOpen(true);
        }}
        onOpenDetail={(idx) => {
          setDetailIndex(idx);
          setDetailOpen(true);
        }}
      />

      <Footer content={content.footer} />

      <Lightbox
        open={lightboxOpen}
        item={lightboxItem}
        onClose={() => setLightboxOpen(false)}
      />

      <DetailOverlay
        open={detailOpen}
        items={detailItems}
        index={detailIndex}
        setIndex={setDetailIndex}
        onClose={() => setDetailOpen(false)}
      />
    </>
  );
}