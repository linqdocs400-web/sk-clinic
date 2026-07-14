const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/image-data.ts');
let content = fs.readFileSync(file, 'utf8');
content = content.replace('};', '  "doctor-about-section-JPG": [480, 768, 1200, 1600, 4284],\n  "doctor-hero-section-JPG": [480, 768, 1200, 1600, 3024]\n};');
fs.writeFileSync(file, content);
console.log('patched');
