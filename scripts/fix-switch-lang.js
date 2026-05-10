// Override switch_lang to use en- slug prefix (not /en/ URL prefix)
// This runs during Vercel build, after npm install
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules/hexo-theme-reimu/scripts/helper/i18n.js');
if (!fs.existsSync(target)) { console.log('i18n.js not found, skipping'); process.exit(0); }

let content = fs.readFileSync(target, 'utf-8');

// Replace the entire switch_lang function with our version
const newSwitchLang = `hexo.extend.helper.register("switch_lang", function (lang) {
  const languages = this.get_langs();
  let path = this.page.path;
  const root = this.config.root || "";
  if (!path.startsWith("/")) path = "/" + path;
  const parts = path.split('/');
  const last = parts[parts.length - 1];
  const isEn = last && last.startsWith('en-');
  if (lang === languages[0]) {
    if (isEn) parts[parts.length - 1] = last.substring(3);
    return prettyUrls(root + parts.join('/').substring(1), { trailing_index: false, trailing_html: false });
  } else {
    if (!isEn && last) parts[parts.length - 1] = 'en-' + last;
    return prettyUrls(root + parts.join('/').substring(1), { trailing_index: false, trailing_html: false });
  }
});`;

// Remove old switch_lang
content = content.replace(/hexo\.extend\.helper\.register\("switch_lang", function[\s\S]*?\}\);\s*\}?\s*\);/m, newSwitchLang);

fs.writeFileSync(target, content);
console.log('Patched switch_lang');
