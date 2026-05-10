// Load English posts from source/en/_posts/ into Hexo database
// Uses hexo.post API to ensure full rendering pipeline (markdown + tag plugins)

const fs = require('fs');
const path = require('path');
const { parse } = require('hexo-front-matter');

hexo.extend.filter.register('before_generate', function() {

  const enPostsDir = path.join(hexo.source_dir, 'en/_posts');
  if (!fs.existsSync(enPostsDir)) return;

  const Post = hexo.model('Post');
  const enFiles = fs.readdirSync(enPostsDir).filter(f => f.endsWith('.md'));

  enFiles.forEach(function(filename) {
    const source = 'en/_posts/' + filename;
    const existing = Post.findOne({ source: source });
    if (existing) {
      Post.removeById(existing._id);
    }

    const fullPath = path.join(enPostsDir, filename);
    const raw = fs.readFileSync(fullPath, 'utf-8');

    let parsed;
    try {
      parsed = parse(raw);
    } catch(e) {
      return;
    }

    if (parsed.lang !== 'en') return;

    // Read Chinese version for shared metadata
    const zhFile = path.join(hexo.source_dir, '_posts', filename);
    let zhParsed = {};
    if (fs.existsSync(zhFile)) {
      try {
        zhParsed = parse(fs.readFileSync(zhFile, 'utf-8'));
      } catch(e) {}
    }

    const slug = filename.replace(/\.md$/, '');
    const date = parsed.date || zhParsed.date || new Date();

    // Use _content (raw body after frontmatter) for rendering
    const bodyContent = parsed._content || '';

    Post.insert({
      title: parsed.title || zhParsed.title || slug,
      date: date instanceof Date ? date : new Date(date),
      updated: parsed.updated ? new Date(parsed.updated) : new Date(),
      _content: bodyContent,
      source: source,
      slug: zhParsed.slug || slug,
      published: true,
      lang: 'en',
      layout: 'post'
    });

    // Set categories and tags using hexo helpers to ensure proper DB references
    let cats = parsed.categories || zhParsed.categories || [];
    let tags = parsed.tags || zhParsed.tags || [];
    if (typeof cats === 'string') cats = cats.length ? [cats] : [];
    if (typeof tags === 'string') tags = tags.length ? [tags] : [];
    if (!Array.isArray(cats)) cats = [];
    if (!Array.isArray(tags)) tags = [];

    var post = Post.findOne({ source: source });
    if (post) {
      if (cats.length) post.setCategories(cats);
      if (tags.length) post.setTags(tags);
    }

    hexo.log.info('Loaded EN post: ' + filename);
  });
});
