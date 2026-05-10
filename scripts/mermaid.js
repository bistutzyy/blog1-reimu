'use strict'
// Reimu tag：官方 npm 包 1.12.4 未打包此脚本，供 Vercel 等干净安装使用。
hexo.extend.tag.register('mermaid', function(args, content) {
  return `<div class="mermaid">${content}</div>`
}, { ends: true })
