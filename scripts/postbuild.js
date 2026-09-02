import fs from 'node:fs';

// 1. Convert paths to universal relative paths in dist/index.html
if (fs.existsSync('dist/index.html')) {
  let html = fs.readFileSync('dist/index.html', 'utf8');
  html = html.replace(/\/website\/_astro\//g, './_astro/');
  html = html.replace(/\/website\/assets\//g, './assets/');
  html = html.replace(/src="assets\//g, 'src="./assets/');
  html = html.replace(/href="assets\//g, 'href="./assets/');
  fs.writeFileSync('dist/index.html', html);
  fs.copyFileSync('dist/index.html', 'index.html');
}

// 2. Sync sitemaps and robots to root
const sitemapFiles = fs.readdirSync('dist').filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));
for (const sf of sitemapFiles) {
  fs.copyFileSync(`dist/${sf}`, sf);
}

if (fs.existsSync('dist/robots.txt')) {
  fs.copyFileSync('dist/robots.txt', 'robots.txt');
}

// 3. Sync _astro bundle
if (fs.existsSync('dist/_astro')) {
  fs.cpSync('dist/_astro', '_astro', { recursive: true });
}

console.log('✅ Postbuild complete: universal relative paths, sitemaps & root deployment verified');
