'use strict'

// {% badge text color %} - inline colored badge
hexo.extend.tag.register('badge', function(args) {
  let [text, color = 'blue'] = args
  return '<mark class="rm-badge ' + color + '">' + text + '</mark>'
})

// {% blockquote [author] %}...{% endblockquote %}
hexo.extend.tag.register('blockquote', function(args, content) {
  const author = args[0] ? '<p class="rm-bq-author">—— ' + args[0] + '</p>' : ''
  const html = hexo.render.renderSync({ text: content, engine: 'markdown' })
  return '<blockquote class="rm-blockquote">' + html + author + '</blockquote>'
}, { ends: true })

// {% mermaid %}...{% endmermaid %}
hexo.extend.tag.register('mermaid', function(args, content) {
  return '<div class="mermaid">' + content + '</div>'
}, { ends: true })

// {% timeline title, color %}...{% endtimeline %}
hexo.extend.tag.register('timeline', function(args, content) {
  let [title = '', color = ''] = args.join(' ').split(',')
  color = color.trim()
  let items = content
    .split(/<!--\s*timeline\s*(.*?)\s*-->/)
    .filter(function(item) { return item.trim().length > 0 })
  let html = '<div class="rm-timeline ' + color + '">'
  html += '<div class="rm-tl-head">' + title.trim() + '</div>'
  for (let i = 0; i < items.length; i += 2) {
    let label = items[i] ? items[i].trim() : ''
    let body = items[i + 1] || ''
    html += '<div class="rm-tl-item">'
    html += '<div class="rm-tl-label">' + label + '</div>'
    html += '<div class="rm-tl-content">' + hexo.render.renderSync({ text: body, engine: 'markdown' }) + '</div>'
    html += '</div>'
  }
  html += '</div>'
  return html
}, { ends: true })
