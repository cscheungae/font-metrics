// Ref: https://glitch.com/edit/#!/fontkit-font-metrics-demo?path=font-metrics.js%3A1%3A0
// Ref: https://developer.chrome.com/blog/font-fallbacks/

import fs from "fs";
import path from "path";

const fontPath = path.resolve("fonts/Arial.ttf");
console.log(fontPath);

// Initialize
import "./font-kit.js";

const getFontMetric = (fontBuffer) => {
  const font = fontkit.create(fontBuffer);
  const formatForCSS = (x) => `${Math.abs(x * 100)}%`;
  const ascentOverride = formatForCSS(font.ascent / font.unitsPerEm);
  const descentOverride = formatForCSS(font.descent / font.unitsPerEm);
  const lineGapOverride = formatForCSS(font.lineGap / font.unitsPerEm);

  return { ascentOverride, descentOverride, lineGapOverride };
};

fs.readFile(fontPath, (err, data) => {
  if (err) throw err;

  const fontMetrics = getFontMetric(data);
  console.log(fontMetrics);
});
