---
title: github搭建博客笔记
date: 2025-01-03 06:00:00
categories: 教程
tags: [github, blog]
description: 这是一篇关于github搭建博客的基础教学
---

{% alertBlockquote info %}
Welcome to my first passage!
{% endalertBlockquote %}

# 任务1. 关于搭建github博客的步骤学习笔记

<span class="c-gray">（所用设备：拯救者y9000p）</span>

{% timeline 搭建流程总览, blue %}
<!-- timeline 准备工作 -->
注册 GitHub 账号
<!-- timeline STEP1 -->
Fork 博客模板仓库
<!-- timeline STEP2 -->
配置 _config.yml、评论系统、谷歌分析
<!-- timeline 完成 -->
博客上线，个性化装饰
{% endtimeline %}

## 准备工作——注册github

首先，打开 [github.com](https://github.com)，来到github的主界面（如下）

![GitHub首页](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/01.png)

点击右上角进行注册（使用邮箱注册），登录。

## STEP1 — 进行 <span class="c-red">Fork</span>（重要）

打开 [mzlogin.github.io](https://mzlogin.github.io)，进入以下页面：

![博客模板主页](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/02.png)

上图即为博客的模版，往下拉：

{% gallery %}
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/03.png)
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/04.png)
{% endgallery %}

接下来开始进行 <span class="c-red">Fork</span>。

{% alertBlockquote info %}
往下拉页面会有 Fork 指南，下面讲述详细步骤。
{% endalertBlockquote %}

点击 Fork 选项，然后 **Create a new fork**。*由于个人账号已经完成，以下部分图片来自王鑫学长教学截取。*

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/05.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/06.png" style="width: 48%;">
</div>

<span class="c-gray">Description 描述自己博客，由自己撰写，可选可不选。</span>

进行设置 Settings：

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/07.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/08.png" style="width: 48%;">
</div>

Fork 后在浏览器网址搜索自己的网站（如上图：`ZenQG.github.io`），进入以下界面，加载不出来需等几分钟。

![博客首次加载成功](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/09.png)

{% alertBlockquote tip SUCCESS %}
当出现这个界面，证明前面的步骤已经成功，{% badge 第一步完成 green %}！
{% endalertBlockquote %}

## STEP2——处理细节，装饰博客

### 第一步：删除 CNAME 文件

此文件与域名有关，有需要可自行修改。

![找到CNAME文件](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/10.png)

![进入CNAME文件](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/11.png)

![删除CNAME文件步骤1](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/12.png)

![删除CNAME文件步骤2](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/13.png)

### 第二步——修改配置，装饰自己博客

首先，打开 `_config.yml`，进入编辑：

![打开_config.yml](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/14.png)

然后，根据自己的要求更改一些内容：

{% gallery %}
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/15.png)
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/16.png)
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/17.png)
{% endgallery %}

### 第三步——配置评论系统（giscus）

接着是修改评论方面，打开 [giscus.app/zh-CN](https://giscus.app/zh-CN)：

![giscus首页](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/18.png)

完成相应要求：

![giscus配置步骤1](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/19.png)

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/20.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/21.png" style="width: 48%;">
</div>

{% alertBlockquote warning %}
确保自己的账号是 **公开的**。
{% endalertBlockquote %}

![检查账号公开状态](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/22.png)

打开 Settings，往下拉找到 Discussions 勾选，勾选后出现绿色的 **Set up discussions** 进行点击（账号已完成，故省略）：

![Settings页面](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/23.png)

![Discussions设置1](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/24.png)

![Discussions设置2](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/25.png)

{% alertBlockquote tip SUCCESS %}
Discussions 打开成功！
{% endalertBlockquote %}

**安装 giscus 这个 App：**

![安装giscus App](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/26.png)

**打开后进行下载和配置，完成后来到以下界面：**

![giscus配置完成](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/27.png)

**重新回到 [giscus.app/zh-CN](https://giscus.app/zh-CN) 进行仓库验证：**

![仓库验证](https://cdn.jsdelivr.net/gh/bistutzyy/tzyy/image-20241001150351940.png)

**验证成功后进入 Discussion 分类：**

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/28.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/29.png" style="width: 48%;">
</div>

**启用 giscus，首先进行复制（由于不兼容可不复制后面比对修改）：**

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/30.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/31.png" style="width: 48%;">
</div>

### 第四步——谷歌数据分析

接下来是进行谷歌数据分析，打开 [analytics.google.com](https://analytics.google.com)，没有账号需自己注册 + 科学上网工具。

![Google Analytics](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/32.png)

谷歌分析展示的页面由于为手机操作效果不好，建议使用电脑，展示如下：

![Google Analytics面板](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/33.jpg)

<span class="c-gray">将自己的 ID 输入后完成配置操作。</span>

{% alertBlockquote tip SUCCESS %}
以上便是博客的初步搭建！
{% endalertBlockquote %}

---

## 附录

{% details 附1. 关于部分文件夹的讲解 %}

![文件夹结构讲解](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/34.png)

{% enddetails %}

{% details 附2. 修改博客图标网址 %}

图标资源网站：[primer.style/foundations/icons](https://primer.style/foundations/icons/)

{% enddetails %}

{% details 附3. 关于新建文件和上传文件 %}

![新建文件入口](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/35.png)

**关于新建文件和文件夹的方法如下：**

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/36.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/37.png" style="width: 48%;">
</div>

{% enddetails %}

{% details 附4. 关于谷歌账号的注册 %}

*谷歌账号注册需要科学上网工具，正常注册是需邮箱和国外手机号。*

*根据我的尝试（用的vivo手机）可以通过下载谷歌商店（Google Play）在里面注册可以跳过手机号验证。*

{% alertBlockquote info %}
以上只是个人尝试，不一定有用，建议上网查查解决方案。
{% endalertBlockquote %}

{% enddetails %}

{% details 附5. 成果展示 %}

**下面是个人搭建博客的结果：**

{% gallery %}
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/38.png)
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/39.png)
![](https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/40.png)
{% endgallery %}

{% enddetails %}

{% details 附6. 感悟分享 %}

{% alertBlockquote info %}
学习github的搭建是对我的一个考验，当我真正想要去完成这个博客的搭建...有勇气去向王鑫学长请教问题，有毅力去完成这么一个完整的文件。在这其中自然是有方方面面的不足，但我还是很欣喜能够完成这么一个对我而言看起来高深莫测的一个方向，也让我有自信去面对学习上的挑战。感谢王鑫学长的帮助，感谢iflab学长们提供的学习机会！
{% endalertBlockquote %}

{% enddetails %}

# 感谢观看！！
