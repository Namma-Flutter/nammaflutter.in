import fs from 'fs';
import path from 'path';

export function getFilesFromDir(dirPath: string, extensions: string[] = ['.mdx', '.md', '.tsx']) {
  const fullPath = path.join(process.cwd(), dirPath);
  return fs.readdirSync(fullPath)
    .filter(f => extensions.some(ext => f.endsWith(ext)))
    .map(f => ({
      filename: f,
      slug: f.replace(/\.[^.]+$/, ''),
    }));
}
