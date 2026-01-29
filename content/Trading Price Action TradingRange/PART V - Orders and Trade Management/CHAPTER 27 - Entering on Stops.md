---
title: "CHAPTER 27 - Entering on Stops"
tags: [PriceAction, Entry, StopOrder, Momentum, Scalping]
order: 34
---

## 2. 案例图解：剥头皮的数学现实

### Figure 27.1：6 ticks 换取 4 ticks

![[Trading Price Action TradingRange/Images/nc27f001.jpg]]

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
