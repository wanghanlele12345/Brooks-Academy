---
title: "Chapter 22: Trending Trading Range Days"
sidebar:
  order: 30
---

> [!abstract] 核心逻辑
> **震荡趋势日 (Trending Trading Range Day)** 是一种“弱趋势”形态，由一系列被突破分隔开的交易区间 (Trading Range) 组成。
> *   **结构特征：** 初始区间 (Initial Range) -> 突破 (Breakout) -> 第二个区间 (Second Range)。
> *   **范围暗示：** 如果开盘 1-2 小时内的波动范围仅为近期均幅的 1/3 到 1/2，预示着随后会有突破，使全天波幅翻倍（Measured Move）。
> *   **操作策略：** 在区间内高抛低吸（Scalp），在突破时顺势交易（Swing），在第二个区间形成后再次转为区间交易。

---

## 1. 结构与识别

### 开盘特征
*   **Opening Range:** 较小，通常为 ADR (Average Daily Range) 的 1/3 ~ 1/2。
*   **Lack of Urgency:** 相比于 Spike and Channel 趋势日的急迫感，这种日子的开盘更加犹豫，K 线重叠较多，影线较长。

### 演变过程
1.  **Initial Trading Range:** 市场在开盘后陷入震荡。
2.  **Breakout:** 市场突破区间（通常顺应大趋势）。
3.  **Measured Move:** 突破目标通常是初始区间高度的 1 倍距离。
4.  **Upper/Lower Trading Range:** 达到目标后，市场再次进入震荡，形成第二个区间。
5.  **Reversal (Common):** 在尾盘，市场经常反转，回测甚至穿透之前的区间（Breakout Test）。

---

## 2. 交易策略

### 顺势阶段 (The Breakout)
*   **入场：** 尽管突破交易区间的胜率通常较低，但如果在 Trending Trading Range 日，突破 K 线强劲（大实体、少影线），可以尝试跟进。
*   **目标：** 测量运动 (Measured Move)。

### 震荡阶段 (The Ranges)
*   **策略：** Buy Low, Sell High。
*   **Fade Breakouts:** 在第二个区间形成后，尤其是在测量目标位附近，逆势交易（Fade）大阳线/大阴线是高胜率策略。
    *   *例子：* 上涨突破后形成第二个高位区间，当出现巨大的阳线突破该区间顶部时，反手做空（Fade the Buy Climax）。

### 尾盘反转 (Late Reversal)
*   **现象：** 这种日子经常演变为 **Reversal Day**。市场冲高回落（或探底回升），收盘在全天波幅的中部。
*   **操作：** 在第二个区间的边界寻找反转信号，目标是回补突破缺口 (Breakout Gap)。

---

## 3. 图解案例深度解析

![[Trading Price Action Trends/Images/nc22f001.jpg]]
**Figure 22.1: Trending Trading Range Days**
*   **Day 2 Structure:**
    *   **Initial Range:** 开盘后陷入震荡。
    *   **Breakout (Bar 10):** 强力阳线突破。
    *   **Second Range:** 突破后并未形成强劲通道，而是立即进入高位震荡。
*   **Gap Test:** Day 3 回补了 Day 2 的突破缺口（Bar 9 和 Bar 12 之间的区域）。

![[Trading Price Action Trends/Images/nc22f002.jpg]]
**Figure 22.2: Initial Range is Half of ADR**
*   **Recognition:** 前两个小时波幅很小（约为均幅一半）。
*   **Action:** 预期会有突破。
*   **Breakout:** 市场向下突破，形成 Lower Trading Range。
*   **Measured Move:** 向下的幅度大约等于上方区间的高度。

![[Trading Price Action Trends/Images/nc22f005.jpg]]
**Figure 22.5: Trading Ranges Separated by Breakouts**
*   **Step-by-Step:** 市场像阶梯一样运行。Range 1 -> Breakout -> Range 2 -> Breakout -> Range 3。
*   **Reversal (Bar 10):** 最后的突破（Bar 10）失败（Final Flag Reversal），市场反转跌穿 Range 3 和 Range 2。
*   **Strategy:** 在阶梯上升过程中顺势做多，在 Bar 10 这种明显的衰竭点反手做空。

![[Trading Price Action Trends/Images/nc22f008.jpg]]
**Figure 22.8: Trending within Range**
*   **Clue:** 尽管前 2.5 小时在震荡，但摆动低点（Swing Lows）在不断抬高（Bar 2, 5, 6, 8）。
*   **Implication:** 这暗示了潜在的多头趋势。
*   **Breakout (Bar 9):** 最终向上突破，形成高位区间。
*   **Breakout Test (Bar 13):** 回调精准测试了下方区间的顶部（Bar 7）。这是多头强度的体现。