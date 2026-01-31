---
title: "CHAPTER 7 - Measured Moves Based on the Size of the First Leg (the Spike)"
tags: [PriceAction, MeasuredMove, Spike, TradingRange, Psychology]
order: 11
---
> [!abstract] 核心逻辑
> 测量移动（Measured Move）是基于市场“惯性”的预测。
> *   **逻辑基础**：如果市场在第一波行情（Spike）中展示了某种力度，那么第二波行情往往具有相似的规模。这基于 **60% 的胜率预期**：当形态确立时，交易者相信达到目标的概率 >60%，使得 1:1 的风险回报比（RR）具有正期望值。
> *   **类型**：主要基于 **Spike** 或 **Trading Range** 的高度进行测量。
> *   **本质**：测量目标位是市场从不平衡（Trend）回归平衡（50/50）过程中的“超调点”，通常是获利了结（Profit Taking）的最佳位置。

---

# 1. 测量移动的数学与心理

### 为什么有效？
*   **60% Rule**：当出现强 Spike 时，交易者假设有 60% 的概率市场会再走一段等距行情。
*   **Trader's Equation**：假设风险为 Spike 高度（止损在底部），回报为 Spike 高度（目标在顶部上方一倍处）。若胜率 >60%，则期望值为正。
    > [!math] Trader's Equation
    > $$ E = (0.6 \times R) - (0.4 \times R) = 0.2R > 0 $$

### 市场平衡理论
*   **Spike = Imbalance**：强趋势是概率失衡（>60%）。
*   **Target = Balance**：到达测量目标位后，获利盘涌出，多空力量重新平衡，概率回归 50/50（Trading Range）。
*   **Cycle**：Imbalance (Spike) -> Balance (Channel/TR) -> Imbalance (Breakout)。

---

# 2. 常见的测量方法

### A. 基于 Spike (Leg 1 = Leg 2)
这是最常见的形态，也称为 **ABC** 或 **AB=CD**。
*   **测量基准**：
    *   **Open to Close**: Spike 第一根 Open 到最后一根 Close 的垂直高度（最保守/常用）。
    *   **Low to High**: Spike 最低点到最高点。
*   **投射起点**：
    *   通常加在 Spike 结束后的 Close 上。
    *   或者加在 Pullback 结束后的 Low 上（Leg 1 = Leg 2）。

### B. 基于 Trading Range / Flag
*   **原理**：Trading Range 是中间休息站。
*   **测量**：取 Trading Range 的高度，向上/下投射。
*   **Midpoint Method**：将 Trading Range 的中点视为整个趋势的中点。

### C. Spike and Channel
*   **特征**：Channel 的高度通常等于 Spike 的高度。
*   **目标**：Spike 形成后，市场进入 Channel，通常会在达到 Spike 高度的 Measured Move 处遇到阻力并回落。

---

# 3. 交易策略

### 获利了结 (Profit Taking)
*   **位置**：Measured Move Target 是绝佳的平仓点。
*   **原因**：大多数算法和机构都在此盯着，容易引发反转或深度回调。

### 趋势跟踪
*   **Stop Loss**：在 Spike 形成初期，止损放在 Spike 底部。随着 Measured Move 概率增加（Spike 变大），虽然绝对风险增加，但胜率提高维持了正期望。
*   **Position Sizing**：如果不愿承担大止损，缩小仓位（1/4 size），但必须要进场。

---

# 4. 图表案例分析

### Figure 7.1: Leg 1 = Leg 2
![[Trading Price Action TradingRange/Images/nc07f001.jpg]]
*   **形态**：Daily Chart 上的清晰两段式上涨。
*   **测量**：Bar A 到 Bar B 是 Leg 1。Bar C（Higher Low）是 Pullback 结束点。Leg 2 目标为 $C + (B - A)$。
*   **Bar D**: 略微未达目标即回调，但在该区域遇阻符合预期。
*   **Bar E**: 更大的结构，AD 为 Leg 1，测量目标为 F（Solid Line）。

### Figure 7.2: 复杂的 Leg 1 定义 (Variant)
![[Trading Price Action TradingRange/Images/nc07f002.jpg]]
*   **难点**：Pullback（Bar 6）跌破了 Leg 1 起点（Bar 4）。
*   **Elliott Wave 视角**：这是 Flat Correction。Leg 1 的终点可以是 Bar 4 或 Bar 6。
*   **测量验证**：
    *   Bar 1 到 Bar 4 作为 Leg 1。
    *   Bar 9 作为 Pullback 结束点。
    *   **Bar 12**: 市场精确地在基于 Bar 4 的 Measured Move 处见底反转。

### Figure 7.3: 基于交易区间中点的测量
![[Trading Price Action TradingRange/Images/nc07f003.jpg]]
*   **Line B**: 随着 Trading Range 发展，不断调整 Line B 至区间中点。
*   **Breakout**: 当 Bar 6 突破后，从底部 Line A 向上投射等距目标。

### Figure 7.4: 新闻导致的 Spike (News Spike)
![[Trading Price Action TradingRange/Images/nc07f004.jpg]]
*   **背景**：新闻导致的突发 Spike（Bar 1-2 两根大阴线）。
*   **Spike 结束**：出现 Doji 或 Pause Bar 时，Spike 结束。
*   **测量**：Open of Bar 1 到 Close of Bar 2 的距离。
*   **投射**：从 Bar 2 Close 向下投射等距。市场精确到达目标后进入 Trading Range。

### Figure 7.5: Spike 方向逆转
![[Trading Price Action TradingRange/Images/nc07f005.jpg]]
*   **初始**：开盘 6 根阳线构成 Strong Bull Spike。
*   **失败**：在 EMA 处失败，未能延续。
*   **反向测量**：当市场反转下跌时，使用 Bull Spike 的高度（Open of Bar 1 to Close of Final Spike Bar）向下投射，同样构成了下跌的目标位。

> [!tip] 交易技巧
> 不要执着于某一种测量方法（Open-Close vs High-Low）。先看最近的目标（Conservative），如果被强势突破，再看更远的目标。**Measured Move 是区域，不是精确的点。**