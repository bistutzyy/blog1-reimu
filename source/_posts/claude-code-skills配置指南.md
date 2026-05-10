---
title: Claude Code Skills 配置指南 —— 打造你的 AI 超能力工具箱

date: 2026-05-09 00:00:00
categories: 教程
tags: [Claude Code, Skills, AI工具, 效率]
description: 详细介绍如何在 Claude Code 中配置和使用 Skills，打造专属的 AI 工作流工具箱。
---

{% alertBlockquote info %}
Claude Code 是 Anthropic 推出的命令行 AI 编程助手，其 **Skills（技能）** 系统是它的核心亮点之一。Skills 相当于给 AI 装上"专业插件"，让它在特定任务上表现更出色——无论是生成 Word 文档、处理 PDF、设计前端界面，还是管理 Hexo 博客，都可以通过对应的 Skill 一键调用。

这篇文章记录了我配置的 **18 个 Skills** 的分类、功能和使用体验。
{% endalertBlockquote %}

---

## <span class="c-blue">一、什么是 Skills？</span>

Skills 是 Claude Code 的可扩展能力模块。每个 Skill 本质上是一个 Markdown 文件（`SKILL.md`），包含：

- **触发条件** —— 用户说什么时自动激活
- **工作流程** —— 分步骤的操作指令
- **输出格式** —— 统一的结果呈现模板

当你输入 `/skill-name` 或提及相关关键词，Claude Code 会自动加载该 Skill 并按其流程执行。


---

## <span class="c-purple">二、我的 Skills 全家福</span>

### <span class="c-blue">🛠 文档办公类</span>

| Skill | 功能 | 一句话总结 |
|-------|------|-----------|
| {% badge docx blue %} | Word 文档创建/编辑 | 自动生成专业排版的 .docx 文件 |
| {% badge xlsx green %} | 表格数据处理 | 打开、创建、清洗、分析表格文件 |
| {% badge pdf red %} | PDF 全能操作 | 合并、拆分、加密、OCR、提取文字 |
| {% badge pptx purple %} | 幻灯片制作 | 从零生成演示文稿或编辑现有 PPT |

{% alertBlockquote info %}
日常办公场景的文档需求基本全覆盖，告别手动排版。
{% endalertBlockquote %}

### <span class="c-purple">🎨 设计与前端类</span>

| Skill | 功能 | 一句话总结 |
|-------|------|-----------|
| {% badge frontend-design blue %} | 前端界面设计 | 生成有设计感、不落俗套的网页/组件 |
| {% badge ui-ux-pro-max purple %} | UI/UX 设计智能 | 67 种风格、96 套配色、57 种字体搭配可选 |

{% alertBlockquote info %}
这两个技能配合使用，能让 AI 生成的前端界面拥有真正的"设计感"。
{% endalertBlockquote %}

### <span class="c-green">🔧 开发辅助类</span>

| Skill | 功能 | 一句话总结 |
|-------|------|-----------|
| {% badge skill-creator orange %} | 创建/优化 Skills | 用 AI 造新的 AI 技能 |
| {% badge claude-api blue %} | Claude API 开发 | 构建和调试 Anthropic SDK 应用 |
| {% badge simplify green %} | 代码审查优化 | 自动检查代码的复用性、质量和效率 |
| {% badge review blue %} | PR 审查 | 对 Pull Request 进行自动化审查 |
| {% badge security-review red %} | 安全审查 | 检查当前分支的代码安全问题 |
| {% badge init green %} | 项目初始化 | 自动生成 CLAUDE.md 项目文档 |

{% alertBlockquote tip %}
从写代码、审代码到部署前的安全检查，一条龙服务。
{% endalertBlockquote %}

### <span class="c-orange">⚙ 效率与工具类</span>

| Skill | 功能 | 一句话总结 |
|-------|------|-----------|
| {% badge loop blue %} | 定时循环任务 | 每 N 分钟自动执行指定命令 |
| {% badge find-skills green %} | 技能发现 | 搜索和安装新的 Skills |
| {% badge fewer-permission-prompts green %} | 权限优化 | 减少重复的权限确认弹窗 |
| {% badge update-config orange %} | 配置管理 | 修改 Claude Code 的 settings.json |

{% alertBlockquote warning %}
让工具本身更顺手，减少操作摩擦。
{% endalertBlockquote %}

### 📝 自建 Skills

除了官方 Skills，我还自己创建了两个专属 Skill：

| Skill | 功能 | 训练来源 |
|-------|------|----------|
| {% badge blog-skill blue %} | Hexo 博客管理 | 自建 |
| {% badge blog-tag-skill purple %} | 博客美化标签 | <span class="c-green">Akilar 博客</span> |

{% details blog-skill —— Hexo 博客管理 %}
这是我自己创建的第一个 Skill，专门管理 Hexo 博客。触发词包括"博客""文章""hexo""发布"，工作目录 `C:/tzyy`，部署目标 `https://github.com/bistutzyy/bistutzyy.github.io`。

**工作流程：**

- [x] 检查 Hexo 版本和 Git 配置
- [x] 统计本地文章数量
- [x] 验证 .deploy_git 部署目录状态
- [x] 输出状态汇总表格
- [x] 提示可用的操作（写文章/改配置/部署）

{% enddetails %}

{% details blog-tag-skill —— 博客美化标签 %}
这是从 <span class="c-green">Akilar 的博客</span>（[Akilarの糖果屋](https://akilar.top/posts/615e2dec/)）学习训练的 Skill，收录了 **42 个** Hexo Butterfly 标签插件，涵盖行内文字、便签块、折叠面板、进度条、时间轴、图表等 18 大类。

包含的关键规则：
- 所有标签的正确语法（避免构建报错）
- 白底博客颜色选择规则（避开浅色/低对比度颜色）
- 42 个标签的逐一测试验证结果

写博客时自动加载，让文章排版更丰富。

{% enddetails %}


---

## <span class="c-green">三、如何创建自己的 Skill？</span>

{% details Step 1：使用 skill-creator %}
输入 `/skill-creator`，告诉它你想创建的 Skill 的功能，它会引导你完成整个创建流程。
{% enddetails %}

{% details Step 2：确定核心要素 %}

- [ ] 名称 — 简洁、易记（如 blog-skill）
- [ ] 触发条件 — 用户说什么会激活它
- [ ] 工作步骤 — 每个检查或操作的具体命令
- [ ] 输出格式 — 统一的展示模板

{% enddetails %}

{% details Step 3：测试迭代 %}
让 skill-creator 帮你跑测试用例，根据实际效果反复优化，直到满意为止。
{% enddetails %}

{% details Step 4：打包发布 %}
```bash
python -m scripts.package_skill <path/to/skill-folder>
```
生成 `.skill` 文件后可分享给其他人安装。
{% enddetails %}

---

## <span class="c-cyan">四、Skills 存放位置</span>

所有 Skills 安装后存放在：

```
C:\Users\lenovo\.claude\skills\
├── blog-skill/        # 自建 - 博客管理
├── blog-tag-skill/    # 自建 - 美化标签
├── docx/              # 文档
├── xlsx/              # 表格
├── pdf/               # PDF
├── pptx/              # 幻灯片
├── frontend-design/   # 前端设计
├── ui-ux-pro-max/     # UI/UX
├── skill-creator/     # 技能创建器
├── claude-api/        # API 开发
├── simplify/          # 代码优化
├── review/            # PR 审查
├── security-review/   # 安全审查
├── init/              # 项目初始化
├── loop/              # 定时任务
├── find-skills/       # 技能发现
├── fewer-permission-prompts/  # 权限优化
└── update-config/     # 配置管理
```

---

## <span class="c-orange">五、使用感受</span>

Skills 系统让 Claude Code 从一个"通用 AI 助手"变成了一个"可定制的工作台"：

- [x] 专业性提升 — 处理特定文件格式（docx/pdf/xlsx）时不再需要临时摸索
- [x] 效率翻倍 — 博客更新从打开编辑器 → 写 Markdown → 手动 git push → 变成一句话的事
- [x] 可扩展性 — 不满意内置 Skill？用 skill-creator 自己造一个
- [x] 减少重复劳动 — loop 可以让 AI 定时检查部署状态、PR 进度等

{% alertBlockquote tip %}
如果你也在用 Claude Code，强烈建议花点时间配置适合自己工作流的 Skills。
{% endalertBlockquote %}

---

## <span class="c-red">参考资料</span>

- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)
- [Skill Creator 使用指南](https://docs.anthropic.com/en/docs/claude-code/skills)
- [Akilarの糖果屋 — Butterfly 标签插件](https://akilar.top/posts/615e2dec/)（blog-tag-skill 训练来源）
- 本博客搭建教程：[github搭建博客笔记](/2025/01/03/github搭建博客笔记/)

---

*感谢 iflab 学长们的指导，感谢 Claude Code 让这一切变得简单。*
