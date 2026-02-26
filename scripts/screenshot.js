const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, '../screenshots');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const PAGES = [
  { url: 'http://localhost:3000/dashboard',   file: '01_dashboard.png',    label: 'Dashboard' },
  { url: 'http://localhost:3000/ships',        file: '02_ships.png',        label: 'Ship List' },
  { url: 'http://localhost:3000/voyages',      file: '03_voyages.png',      label: 'Voyage List' },
  { url: 'http://localhost:3000/maintenance',  file: '04_maintenance.png',  label: 'Maintenance' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // dark 모드 활성화
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);

  for (const { url, file, label } of PAGES) {
    console.log(`Capturing: ${label} → ${file}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
    // dark 클래스 강제 적용
    await page.evaluate(() => document.documentElement.classList.add('dark'));
    await new Promise(r => setTimeout(r, 800)); // 차트 렌더 대기
    await page.screenshot({ path: path.join(OUTPUT_DIR, file), fullPage: false });
    console.log(`  ✓ saved`);
  }

  await browser.close();
  console.log('\nAll screenshots saved to ./screenshots/');
})();
