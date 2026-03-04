export type LightboxItem = { src: string; caption?: string; mapsUrl?: string };

export default function Lightbox({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: LightboxItem | null;
  onClose: () => void;
}) {
  return (
    <div className={`lightbox ${open ? "open" : ""}`} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>

      {item && (
        <>
          <img src={item.src} alt={item.caption ?? ""} onClick={(e) => e.stopPropagation()} />
          {item.mapsUrl && (
            <a
              href={item.mapsUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                bottom: 32,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.5)",
                color: "#e8c96d",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              ↗ Open
            </a>
          )}
        </>
      )}
    </div>
  );
}