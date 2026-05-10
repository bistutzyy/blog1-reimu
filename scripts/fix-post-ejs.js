// Patch post.ejs to hide cover images on homepage
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules/hexo-theme-reimu/layout/_partial/post.ejs');
if (!fs.existsSync(target)) process.exit(0);

let content = fs.readFileSync(target, 'utf-8');

// Replace cover div with conditional cover-only version
const oldPattern = /    <div class=<% if \(even === true\) { %>"post-cover left"<% } else { %>"post-cover right"<% } %>>\n      <%_ if \(post\.cover[\s\S]*?    <\/div>/;
const newContent = `    <%_ if (post.cover && !post.cover.startsWith("rgb")) { _%>
    <div class="post-cover <%= even === true ? 'left' : 'right' %>">
      <img data-src="<%- url_for(post.cover, {relative: false}) %>" data-sizes="auto" alt="<%= post.title %>" class="lazyload">
    </div>
    <%_ } _%>`;

if (content.match(oldPattern)) {
  content = content.replace(oldPattern, newContent);
  fs.writeFileSync(target, content);
  console.log('Patched post.ejs');
} else {
  console.log('post.ejs already patched or pattern not found');
}
