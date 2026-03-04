import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
      ring.remove();
    };
  }, []);

  return null;
}