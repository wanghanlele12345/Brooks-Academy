---
title: "CHAPTER 14 - First Moving Average Gap Bars"
tags: [PriceAction, Trend, MovingAverage, Setup, Reversal]
order: 19
---
> [!abstract] 核心逻辑
> **Moving Average Gap Bar (均线缺口K线)** 指的是完全位于均线（20 EMA）一侧的 K 线（即 High 低于 EMA 或 Low 高于 EMA）。
> *   **强趋势中**：这是趋势过热后的第一次深幅回调，通常打破了主要趋势线。它是极佳的**顺势入场点**，目标是测试趋势极值（Test of Extreme）。
> *   **震荡/弱趋势中**：它是回归均值的剥头皮机会（Scalp back to MA），特别是出现**二次信号**时。

---

# 1. 形态定义与原理

### 识别标准
*   **Bull Trend**: K 线的最高价（High）低于 EMA。
*   **Bear Trend**: K 线的最低价（Low）高于 EMA。
*   **本质**: 价格与均线之间存在物理缺口（Gap），代表价格偏离均值后的回调深度。

### 市场背景的重要性
1.  **Strong Trend (First Gap Bar)**:
    *   如果这是趋势开始以来**第一次**出现 Gap Bar（通常发生在 20 Gap Bars 之后）。
    *   **策略**: **Swing Trade**。预期市场会测试前高/前低，甚至创出新高/新低。
    *   **后续**: 测试极值后，市场通常会进入更复杂的调整（Two-legged Correction）或主要趋势反转（MTR）。

2.  **Trading Range / Weak Trend**:
    *   如果市场已经进入震荡或趋势疲软。
    *   **策略**: **Scalp**。Fade Gap Bar，目标仅为回归 EMA。
    *   **Second Signal**: 如果第一次尝试回归 EMA 失败，**Second MA Gap Bar Setup** 是胜率极高的入场点。

---

# 2. 交易策略详解

### A. 顺势波段交易 (Strong Trend)
*   **Setup**: 强趋势中的第一个 MA Gap Bar。
*   **Entry**: 在 Gap Bar 收盘后的反向突破处入场（如牛市 Gap Bar 的 High 上方 1 tick）。
*   **Scale-in**: 激进交易者会在 Gap Bar 下方加仓，因为预期极值测试是高概率事件。

### B. 二次信号交易 (Second Signals)
*   **定义**: 市场第一次尝试填补均线缺口失败（价格短暂反弹/回落后再次形成 Gap Bar）。
*   **逻辑**: 两次尝试失败通常意味着反向力量耗尽，市场将向阻力最小的方向运动。
*   **应用**: 在震荡市或弱趋势中尤为有效。

---

# 3. 图表案例分析

### Figure 14.1: 二次信号与震荡市策略
![[Trading Price Action TradingRange/Images/nc14f001.jpg]]

**图解拆解:**
*   **Context**: 市场处于横盘震荡或弱趋势中，EMA 走平。
*   **Bar 2**: **Second Attempt** to fill the gap below EMA。买入做多，目标 EMA。
*   **Bar 6 & 9**: **Second MA Gap Bar Short Setups**。
    *   Bar 6 是第二次尝试做空（First attempt 是 Bar 5）。
    *   Bar 9 是第二次尝试做空。
*   **Bar 9 Breakout**: 突破了 Bar 9 形成的 Failed Wedge Bear Flag，随后开启多头趋势。

### Figure 14.2: 强趋势中的第一次 Gap Bar
![[Trading Price Action TradingRange/Images/nc14f002.jpg]]

**图解拆解:**
*   **Bar 1 (Bear Trend)**:
    *   **形态**: 第一个 Low 高于 EMA 的 K 线（First MA Gap Bar）。
    *   **后果**: 尽管反弹强劲，但顺势做空胜率高。随后市场测试了熊市低点（Higher Low Test）。
*   **Bar 2 (Bull Trend)**:
    *   **形态**: 第一个 High 低于 EMA 的 K 线。
    *   **后果**: 多头入场，随后市场创出新高（New Trend Extreme）。

> [!math] Trader's Equation (First Gap Bar)
> *   **Probability**: 高 (>60%)，因为强趋势具有惯性，必定测试极值。
> *   **Risk**: 止损通常设在 Swing Low/High 之外。
> *   **Reward**: 测试前高/前低，甚至 Measured Move。
> *   **结论**: 适合 Swing Position。