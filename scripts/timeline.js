'use strict'
// Reimu tag：官方 npm 包 1.12.4 未打包此脚本，供 Vercel 等干净安装使用。
hexo.extend.tag.register('timeline', function(args, content) {
  let [title = '', color = ''] = args.join(' ').split(',')
  color = color.trim()
  let items = content.split('\n').filter(l => l.trim()).join('\n')
  let html = hexo.render.renderSync({ text: items, engine: 'markdown' })
  return `<div class="rm-timeline ${color}">
    <div class="rm-tl-head">${title.trim()}</div>
    ${html}
  </div>`
}, { ends: true })
