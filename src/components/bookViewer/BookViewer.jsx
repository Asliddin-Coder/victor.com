import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.min.js?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export default function BookViewer({ book }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = "";

    async function loadPDF() {
      try {
        console.log("PDF yuklanmoqda:", book.file);
        const loadingTask = pdfjsLib.getDocument(book.file);
        const pdf = await loadingTask.promise;
        console.log("PDF topildi:", pdf.numPages, "sahifa");

        const total = Math.min(book.previewPages, pdf.numPages);

        for (let i = 1; i <= total; i++) {
          const page = await pdf.getPage(i);

          // 📱 RESPONSIVE SCALE hisoblash
          const screenWidth = window.innerWidth;
          let scale = 1.2;
          if (screenWidth <= 480) scale = 0.7;
          else if (screenWidth <= 768) scale = 0.9;
          else if (screenWidth <= 992) scale = 1.05;

          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: ctx, viewport }).promise;
          container.appendChild(canvas);
        }
      } catch (err) {
        console.error("❌ PDF yuklashda xato:", err);
      }
    }

    loadPDF();
  }, [book]);

  return (
    <div
      className="book-viewer"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        background: "#111",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <h2>{book.title}</h2>
      <div ref={containerRef} style={{ marginTop: "1rem" }}></div>
    </div>
  );
}