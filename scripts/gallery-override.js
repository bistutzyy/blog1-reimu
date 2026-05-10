// Override reimu's photoWall gallery with clean CSS grid version
// Project scripts load after theme scripts and take priority
hexo.extend.tag.register(
  "gallery",
  function (args, content) {
    const html = hexo.render.renderSync({ text: content, engine: "markdown" });
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    let match, items = [];
    while ((match = imgRegex.exec(html)) !== null) {
      let alt = '', am = match[0].match(/alt=["']([^"']*)["']/);
      if (am) alt = am[1];
      items.push({ src: match[1], alt });
    }
    if (items.length === 0) return '';
    let imgs = items.map(item =>
      '<div class="gm-item"><a href="' + item.src + '" target="_blank"><img src="' + item.src + '" alt="' + item.alt + '" loading="lazy"></a></div>'
    ).join('');
    return '<div class="gm-gallery">' + imgs + '</div>';
  },
  { ends: true }
);
