---
title: "CHAPTER 27 - Entering on Stops"
tags: [PriceAction, Entry, StopOrder, Momentum, Scalping]
order: 34
---
> [!abstract] 核心逻辑：动能入场 (Entering on Stops)
> **Stop Entry (停止单入场)** 是价格行为交易中最可靠的入场方式，尤其适合初学者。
> *   **原理**：利用市场的**动能 (Momentum)** 将你带入交易。
> *   **机制**：在信号棒 (Signal Bar) 的高点上方（做多）或低点下方（做空）放置停止单。只有当价格突破该位置时，交易才会触发，这意味着你至少在顺应微观趋势（至少 1 tick）的方向交易。

## 1. 入场与止损机制

### A. 定义
*   **Signal Bar (信号棒)**：完成形态设置的 K 线。
*   **Entry Bar (入场棒)**：实际触发订单并成交的 K 线。

### B. 执行步骤
1.  **入场点 (Entry Level)**：
    *   **做多**：Buy Stop @ 信号棒最高价 + 1 tick。
    *   **做空**：Sell Stop @ 信号棒最低价 - 1 tick。
2.  **初始止损 (Initial Stop)**：
    *   放置在信号棒另一端的极值外 1 tick 处（例如做多，止损在信号棒最低价 - 1 tick）。
3.  **止损管理 (Management)**：
    *   如果 **Entry Bar** 是强趋势 K 线：入场棒收盘后，立即将止损移至入场棒极值外 1 tick。
    *   如果 **Entry Bar** 不强：保持初始止损，直到市场开始强力向有利方向移动。

---

## 2. 案例图解：剥头皮的数学现实

### Figure 27.1：6 ticks 换取 4 ticks

![[Images/nc27f001.jpg]]

在 Emini 中，要完成一个 4 ticks (1 point) 的剥头皮，市场通常需要走出 6 ticks 的距离。

*   **Line A (Entry)**: 买入停止单成交位（Bar 2 High + 1 tick）。
*   **Line B (Target)**: 利润目标位（Entry + 4 ticks）。
*   **Line C (Through Tick)**: 实际需要触及的价格（Target + 1 tick）。
    *   *原因*：限价止盈单 (Limit Order) 通常需要市场穿过该价格 1 tick 才能确保成交。

> [!math] 剥头皮方程 (Scalper's Math)
>
> 目标：获取 **4 ticks** 利润。
> 实际所需波动幅度 = **6 ticks**
>
> $$ \text{Total Move} = \text{Entry (1 tick)} + \text{Profit (4 ticks)} + \text{Fill Allowance (1 tick)} $$
>
> *   **Bar 2**: 信号棒。
> *   **Bar 2 High**: 突破基准点。
> *   **实际操作**: 只有当作为 Scalper 认为市场具备推动 6 ticks 的动能时，才应入场。