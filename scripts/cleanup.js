import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = path.resolve(process.cwd(), 'src');
const exts = new Set(['.js', '.jsx', '.ts', '.tsx']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile() && exts.has(path.extname(entry.name))) {
      await fixFile(full);
    }
  }
}

async function fixFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    const original = content;
    // Remove stray leading "npm" token if present at start of file (possibly with BOM/newlines/whitespace)
    // e.g. "npm import ..." or files that start with "npm\nimport ..."
    content = content.replace(/^\uFEFF?\s*npm\s+/, '');
    // Also handle the case where a line starts with "npm " before an import on the same line
    content = content.replace(/^[ \t]*npm[ \t]+(?=import)/m, '');

    if (content !== original) {
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (err) {
    // Non-fatal — log and continue
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

(async () => {
  try {
    await walk(SRC_DIR);
    console.log('Cleanup finished');
  } catch (err) {
    console.error('Cleanup failed:', err.message);
    process.exit(1);
  }
})();
