---
title: Claude Code + DeepSeek V4 Pro + Qwen VL — Zero-Cost Vision
date: 2026-05-10 14:00:00
tags: [Claude-Code, DeepSeek, Qwen, Vision, AI-Tools]
categories: [AI Tutorial]
---

{% alertBlockquote warning %}
📝 Summarized English version. For the complete article, switch to 中文.
{% endalertBlockquote %}

## Foreword

{% alertBlockquote info %}
**TL;DR:** Claude Code + DeepSeek V4 Pro codes brilliantly but is blind. A 100-line `vision.js` + Alibaba Qwen VL bridges the gap — completely free.
{% endalertBlockquote %}

{% timeline How It Works, blue %}
<!-- timeline Step 1 --> Connect DeepSeek V4 Pro via custom API URL
<!-- timeline Step 2 --> Discover the blind spot: DeepSeek is text-only
<!-- timeline Step 3 --> Add Qwen VL to convert images → text descriptions
{% endtimeline %}

{% mermaid %}
graph LR
  A[User sends image] --> B[Claude Code]
  B --> C[CLAUDE.md trigger]
  C --> D[vision.js]
  D --> E[Qwen VL API]
  E --> F[Text description]
  F --> B
  B --> G[DeepSeek analyzes]
{% endmermaid %}

## Setup

1. Register at [Alibaba Cloud Bailian](https://bailian.console.aliyun.com/), get API key (**1M free tokens**)
2. Clone [asuojun/claude-vision-skill](https://github.com/asuojun/claude-vision-skill)
3. Configure `.env` with your key, update `CLAUDE.md`

## Cost

| Solution | Monthly | Vision |
|----------|---------|--------|
| <span class="c-green">DeepSeek + Qwen VL</span> | **¥0** | ✅ |
| Claude Pro | $20 | ✅ |
| ChatGPT Plus | $20 | ✅ |

{% alertBlockquote tip %}
Zero-cost, fully-featured AI coding + vision. Perfect for students.
{% endalertBlockquote %}
