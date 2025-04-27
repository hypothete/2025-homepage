import { useEffect } from "react";

interface CharPoint {
  x: number;
  y: number;
}

export default function Background() {
  useEffect(() => {
    const chars = "⸮⚯⟁☖⚘⧈ꙮ⚿⪥⧉⊛⧋⬰⌑⌖⍾⌬⧊⧠⧰⬱";
    const can = document.createElement("canvas");
    const ctx = can.getContext("2d");
    can.width = 240;
    can.height = 240;
    const fontSize = Math.round((can.width * 4) / 15);

    const grabThree = [
      chars[Math.floor(Math.random() * chars.length)],
      chars[Math.floor(Math.random() * chars.length)],
      chars[Math.floor(Math.random() * chars.length)],
    ];
    const charPoints: CharPoint[] = [];

    initialDraw();

    function initialDraw() {
      if (!ctx) return;
      ctx.fillStyle = "#c00a86";
      ctx.fillRect(0, 0, can.width, can.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "#8c0762";

      grabThree.forEach((char) => {
        const point = generatePoint();
        drawChar(char, point);
      });

      document.body.style.backgroundImage = `url(${can.toDataURL()})`;
      document.body.style.backgroundSize = `${can.width / 2}px ${
        can.height / 2
      }px`;
    }

    function generatePoint(): CharPoint {
      let attempts = 0;
      const maxAttempts = 100;
      const minDist = 50;
      while (attempts < maxAttempts) {
        const x = Math.random() * can.width;
        const y = Math.random() * can.height;
        const tooClose = charPoints.some((p) => {
          const dx = p.x - x;
          const dy = p.y - y;
          return Math.sqrt(dx * dx + dy * dy) < minDist;
        });
        if (!tooClose) {
          charPoints.push({ x, y });
          return { x, y };
        }
        attempts++;
      }
      return { x: 0, y: 0 };
    }

    function drawChar(char: string, point: CharPoint) {
      if (!ctx) return;
      // draw text so that image is tileable;
      ctx.fillText(char, point.x, point.y - can.height);
      ctx.fillText(char, point.x - can.width, point.y - can.height);
      ctx.fillText(char, point.x + can.width, point.y - can.height);
      ctx.fillText(char, point.x, point.y);
      ctx.fillText(char, point.x - can.width, point.y);
      ctx.fillText(char, point.x + can.width, point.y);
      ctx.fillText(char, point.x, point.y + can.height);
      ctx.fillText(char, point.x - can.width, point.y + can.height);
      ctx.fillText(char, point.x + can.width, point.y + can.height);
    }
  }, []);
  return null;
}
