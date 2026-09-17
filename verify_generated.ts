import { EASY_TEMPLATES_200 } from "./easy_templates_flat";

let badCount = 0;
EASY_TEMPLATES_200.forEach((template, idx) => {
  const matches = template.match(/\{[^{}]+\}/g) || [];
  if (matches.length !== 5) {
    console.error(`[ERROR] Template index ${idx} has ${matches.length} placeholders instead of 5: "${template}"`);
    badCount++;
  }
});

if (badCount === 0) {
  console.log("All 200 templates successfully verified! Every single one has exactly 5 placeholders.");
} else {
  console.error(`Found ${badCount} bad templates.`);
}
