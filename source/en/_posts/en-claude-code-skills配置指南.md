---
title: Claude Code Skills Guide — Build Your AI Superpower Toolbox
lang: en
date: 2026-05-09 06:00:00
tags: [Claude-Code, Skills, Efficiency, AI-Tools]
categories: [AI Tutorial]
description: Complete guide to Claude Code skills
---

{% alertBlockquote warning %}
📝 Summarized English version. For the complete article, switch to 中文.
{% endalertBlockquote %}

## What Are Skills?

Pre-defined prompts that transform Claude Code from general assistant to domain expert. Like loading a "personality card" — Blog Skill makes it a blog manager, Tag Skill makes it a formatting expert.

## Installing Skills

Browse [awesome-claude-code](https://github.com) or use `/find-skills`. Install via git clone to `.claude/skills/`.

{% details Blog Skill %} Manages Hexo blog: checks connection, writes posts, deploys. {% enddetails %}
{% details Blog Tag Skill %} Complete reference of 42 Butterfly theme tag plugins. {% enddetails %}

## Creating Your Own

Skills are Markdown files with YAML frontmatter. Define when to trigger, what tools to use, and the workflow to follow.

{% alertBlockquote tip %}
Keep instructions specific. Test thoroughly. Share with the community.
{% endalertBlockquote %}
