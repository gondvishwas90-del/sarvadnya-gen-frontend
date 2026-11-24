const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  let list = [];
  if (!fs.existsSync(dir)) return list;
  for (const item of fs.readdirSync(dir)) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      list = list.concat(scanDir(p));
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      list.push(p);
    }
  }
  return list;
}

const genFiles = [
  ...scanDir('src/components/generators'),
  ...scanDir('src/app/generators')
];

const keysInFiles = new Set();
const reg = /t\(\s*["']([^"']+)["']/g;

genFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = reg.exec(content)) !== null) {
    keysInFiles.add(m[1]);
  }
});

const en = fs.readFileSync('src/locales/en.ts', 'utf8');
const hi = fs.readFileSync('src/locales/hi.ts', 'utf8');

// Also extract all keys in en.ts starting with "generators."
const enLines = en.split('\n');
const genKeysInEn = [];
enLines.forEach(l => {
  const m = l.match(/^\s*"(generators\.[^"]+)"\s*:\s*(.*)/);
  if (m) {
    genKeysInEn.push(m[1]);
  }
});

console.log('Total keys in files:', keysInFiles.size);
console.log('Total generators.* keys in en.ts:', genKeysInEn.length);

const allKeys = Array.from(new Set([...keysInFiles, ...genKeysInEn])).sort();
console.log('Total unique generator keys:', allKeys.length);

// Extract map from en and hi
function getMap(content) {
  const map = {};
  const lines = content.split('\n');
  let curK = null;
  let curV = '';
  let inMulti = false;
  for (const line of lines) {
    if (!inMulti) {
      const match = line.match(/^\s*"([^"]+)"\s*:\s*("([^"]*)"|`([^`]*)`),?/);
      if (match) {
        map[match[1]] = match[3] !== undefined ? match[3] : match[4];
      } else {
        const startMatch = line.match(/^\s*"([^"]+)"\s*:\s*("([^"]*)|`([^`]*))$/);
        if (startMatch) {
          curK = startMatch[1];
          curV = (startMatch[3] !== undefined ? startMatch[3] : startMatch[4]) + '\n';
          inMulti = true;
        }
      }
    } else {
      if (line.match(/["`],?\s*$/)) {
        curV += line.replace(/["`],?\s*$/, '');
        map[curK] = curV.trim();
        inMulti = false;
        curK = null;
      } else {
        curV += line + '\n';
      }
    }
  }
  return map;
}

const enMap = getMap(en);
const hiMap = getMap(hi);

const details = allKeys.map(k => ({
  key: k,
  en: enMap[k] || '',
  hi: hiMap[k] || ''
}));

fs.writeFileSync('gen_keys_dump.json', JSON.stringify(details, null, 2));
console.log('Saved to gen_keys_dump.json');
