import * as fs from "fs";
import * as path from "path";

function main() {
  // Load files
  const file1 = JSON.parse(fs.readFileSync(path.join(process.cwd(), "templates_1_5.json"), "utf8"));
  const file2 = JSON.parse(fs.readFileSync(path.join(process.cwd(), "templates_6_10.json"), "utf8"));
  const file3 = JSON.parse(fs.readFileSync(path.join(process.cwd(), "templates_11_15.json"), "utf8"));
  const file4 = JSON.parse(fs.readFileSync(path.join(process.cwd(), "templates_16_20.json"), "utf8"));

  const allTemplates: string[] = [...file1, ...file2, ...file3, ...file4];

  console.log(`Total templates loaded: ${allTemplates.length}`);

  // Validation
  let badCount = 0;
  allTemplates.forEach((template, index) => {
    const placeholders = template.match(/\{[^}]+\}/g) || [];
    if (placeholders.length !== 5) {
      console.error(`[ERROR] Template index ${index} has ${placeholders.length} placeholders instead of 5: "${template}"`);
      badCount++;
    }
  });

  if (badCount > 0) {
    console.error(`Found ${badCount} bad templates.`);
    process.exit(1);
  } else {
    console.log("All 200 templates successfully verified with exactly 5 placeholders each!");
    // Write to easy_templates_flat.ts
    const outputContent = `export const EASY_TEMPLATES_200: string[] = ${JSON.stringify(allTemplates, null, 2)};\n`;
    fs.writeFileSync(path.join(process.cwd(), "easy_templates_flat.ts"), outputContent, "utf8");
    fs.writeFileSync(path.join(process.cwd(), "src", "easy_templates_flat.ts"), outputContent, "utf8");
    console.log("Successfully wrote easy_templates_flat.ts and src/easy_templates_flat.ts!");
  }
}

main();
