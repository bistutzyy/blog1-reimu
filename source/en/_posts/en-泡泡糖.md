---
title: Bubble Pop — A Java Game Project
lang: en
categories: Projects
date: 2025-09-22 00:00:00
tags: Java
description: A JavaFX bubble elimination game with level progression
---

{% alertBlockquote warning %}
📝 Summarized English version. For the complete article, switch to 中文.
{% endalertBlockquote %}

{% alertBlockquote info %}
Repository: [bistutzyy/Bubble](https://github.com/bistutzyy/Bubble)
{% endalertBlockquote %}

# Demo

{% video https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/%E6%B3%A1%E6%B3%A1%E7%B3%96%E5%AD%98%E5%82%A8/%E8%A7%86%E9%A2%91/QQ20251024-184318-HD.mp4 %}

# Chapter 1: Requirements

A casual elimination game. Click matching bubbles to eliminate connected same-color groups. Features {% badge level design blue %} and scoring rewards.

{% alertBlockquote tip SUCCESS %}
**Core mechanic:** Click a bubble → recursive search finds all connected same-colored neighbors → eliminate them all at once.
{% endalertBlockquote %}

<div style="display: flex; gap: 10px;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/%E6%B3%A1%E6%B3%A1%E7%B3%96%E5%AD%98%E5%82%A8/01/1.1.2.01.png" style="width: 48%;">
  <img src="https://tzyy-1330068502.cos.ap-beijing.myqcloud.com/%E6%B3%A1%E6%B3%A1%E7%B3%96%E5%AD%98%E5%82%A8/01/1.1.2.02.jpg" style="width: 48%;">
</div>

# Chapter 2: High-Level Design

Built with **Java + JavaFX**, MVC architecture: Star entity (model), FXML layouts (view), MainForm controller.

{% timeline Game Flow, blue %}
<!-- timeline Start --> Player clicks "Start"
<!-- timeline Eliminate --> Click bubble → connected group cleared
<!-- timeline Score --> Calculate points → level check → continue
{% endtimeline %}

# Chapter 3: Core Entities

{% details Position Class %}
```java
public class Position {
  private int row, column;
  public Position(int row, int column) { ... }
}
```
{% enddetails %}

{% details StarType Enum %}
```java
public enum StarType {
  BLUE(0), GREEN(1), YELLOW(2), RED(3), PURPLE(4);
  public static StarType valueOf(int value) { ... }
}
```
{% enddetails %}

Generate a random 10×10 grid using `Math.random()`.

# Chapter 4: Elimination Algorithm

Recursive four-direction lookup from clicked bubble. Clone function avoids reference sharing. `lookupByPath()` searches left/right/up/down for connected same-color bubbles.

# Chapter 5: Bubble Movement

Bubble sort algorithm for vertical drop. `getNullColumns()` detects empty columns. `getXMovedStars()` shifts bubbles horizontally.

# Chapter 6: Scoring

- Elimination: `stars² × LOWER_SCORE`
- Bonus: awarded when remaining < limit
- Level progression from `score.conf`

{% tabs Interface Demo %}
<!-- tab StarServiceTester --> Test implementation
<!-- tab StarServiceImpl --> Production implementation
{% endtabs %}

# Chapter 7: Game Experience

Skin switching via CSS, JAR packaging, and runtime configuration.

# Chapter 8: Q&A

{% details Q: Constructor purpose? %} Initializes member variables. Overloadable. Private = prevents instantiation. {% enddetails %}
{% details Q: Math.random()? %} Returns [0, 1). Scale with `(int)(Math.random() * N) + offset`. {% enddetails %}
{% details Q: Recursion usage? %} `lookupByPath` searches four directions. Must define entry/exit points. {% enddetails %}
{% details Q: Interfaces role? %} Setting standards + decoupling. StarService separates UI from business logic. {% enddetails %}

# Chapter 9: Summary

This project demonstrates JavaFX UI, recursive algorithms, MVC architecture, and interface-based decoupling in a complete game.
