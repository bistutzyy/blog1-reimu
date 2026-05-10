// Replace reimu photoWall gallery with simple CSS grid version
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules/hexo-theme-reimu/scripts/tag/gallery.js');
if (!fs.existsSync(target)) process.exit(0);

const newContent = `let asyncCss;
hexo.extend.tag.register(
  "gallery",
  function (args, content) {
    if (!asyncCss) asyncCss = hexo.extend.helper.get("asyncCss").bind(hexo);
    const html = hexo.render.renderSync({ text: content, engine: "markdown" });
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    let match, items = [];
    while ((match = imgRegex.exec(html)) !== null) {
      let alt = '', am = match[0].match(/alt=["']([^"']*)["']/);
      if (am) alt = am[1];
      items.push({ src: match[1], alt });
    }
    if (items.length === 0) return '';
    let imgs = items.map((item, i) =>
      \`<div class="gm-item"><a href="\${item.src}" data-pswp-width="1200" data-pswp-height="900"><img src="\${item.src}" alt="\${item.alt}" loading="lazy"></a></div>\`
    ).join('');
    return \`<div class="gm-gallery">\${imgs}</div>\`;
  },
  { ends: true }
);
`;

fs.writeFileSync(target, newContent);
console.log('Patched gallery.js');
