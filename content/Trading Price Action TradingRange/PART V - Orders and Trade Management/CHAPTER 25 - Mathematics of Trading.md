---
title: "CHAPTER 25 - Mathematics of Trading: Should I Take This Trade? Will I Make Money If I Take This Trade?"
tags: [PriceAction, TraderEquation, Probability, RiskReward, Math]
order: 32
---
> [!abstract] 核心逻辑：交易者方程 (The Trader's Equation)
> 交易不是寻找完美的确定性，而是寻找**数学优势 (Edge)**。每个交易决策都必须基于三个变量的动态平衡：**概率 (Probability)**、**风险 (Risk)** 和 **回报 (Reward)**。
>
> $$ \text{Expectancy} = (\text{Probability} \times \text{Reward}) - (\text{Probability of Failure} \times \text{Risk}) $$
>
> *   **正期望值**：只有当上述公式结果为正时，交易才具有数学合理性。
> *   **平衡法则**：高胜率通常伴随低盈亏比（如 Scalping）；高盈亏比通常伴随低胜率（如 Swing Trading）。
> *   **不确定性原则**：如果你对方向不确定，概率就是 50%。如果你感到自信，概率通常也只有 60%。

## 1. 概率与设置分类

要在市场上赚钱，你必须比一半的交易者做得更好。由于机构主导市场，这意味着你必须不仅与散户竞争，还要与算法和机构竞争。不同的市场环境提供不同的胜率：

### A. 胜率 $\ge$ 70% (高胜率，低盈亏比)
*   **要求**：回报通常 $\ge$ 风险的一半即可保本。
*   **适用**：**Scalps (剥头皮)**。但大多数交易者无法维持 70% 的准确率，因此建议即便做 Scalp，也要追求回报 $\ge$ 风险。

### B. 胜率 $\ge$ 60% (中高胜率，盈亏比 1:1)
*   **要求**：回报 $\ge$ 风险。这是大多数交易者应追求的“甜蜜点”。
*   **典型设置**：
    *   **Trend Pullbacks**: Bull trend 中的 High 2 / Bear trend 中的 Low 2 (回撤至均线)。
    *   **Wedge Flags**: 趋势中的楔形旗形回撤。
    *   **Breakout Pullbacks**: 突破后的回踩确认。
    *   **Strong Spikes**: 强趋势中的 High 1 (Bull) / Low 1 (Bear) 回撤（但在高潮后除外）。
    *   **Trading Range Second Entries**: 区间顶部的二次做空，底部的二次做多。
    *   **Major Trend Reversals**: 强趋势线突破后的极值测试。

### C. 胜率 $\approx$ 50% (中等胜率，盈亏比 1.5:1 ~ 2:1)
*   **要求**：回报必须显著大于风险。
*   **典型设置**：
    *   **Trading Range Scaling**: 在交易区间内分批建仓的初始入场。
    *   **Tight Trading Range**: 赌突破，期待大幅波动。
    *   **Mid-Range Entries**: 在区间中部做多 Higher Low 或做空 Lower High。

### D. 胜率 $\le$ 40% (低胜率，高盈亏比)
*   **要求**：回报必须 $\ge$ 2倍风险。
*   **典型设置**：
    *   **Counter-Trend at Extremes**: 在强趋势极值处逆势挂单（Limit Order），赌反转。
    *   **Breakout Tests (Limit Order)**: 逆势挂单赌突破测试（如在上涨中挂单买入 Breakout Test）。
    *   **Magnets**: 反向操作 Measured Move 目标位。
    *   **Climaxes**: 在极度超买/超卖区域（Sell/Buy Climax）逆势操作。

## 2. 交易风格与数学现实

### A. 剥头皮 (Scalping) vs. 波段交易 (Swinging)
*   **Scalping**:
    *   追求高胜率，以此换取较小的利润空间。
    *   如果在强趋势中只做 Scalp，往往会错过大部分利润。
    *   **陷阱**: 试图在 1 点利润上保持 80% 的胜率极其困难，甚至对机构也是挑战。
*   **Swinging**:
    *   接受较低的胜率 (40-50%)，换取更大的盈亏比 (2:1 或更高)。
    *   这是大多数散户唯一可行的生存策略。
    *   **操作**: 在趋势初期或区间反转点入场，忍受回调，持有至趋势明确结束。

### B. 方向性概率 (Directional Probability)
*   **等距移动概率 (Equidistant Move)**: 在大部分时间里，市场上涨 X 点或下跌 X 点的概率都在 50% 左右。
*   **短暂优势**: 只有在强趋势的 **Spike** 阶段或交易区间 **极值** 处，特定方向的概率才会短暂提升至 60-70%。
    *   *例子*: 在强 Bull Spike 中，市场再涨 2 点的概率远高于下跌 2 点的概率。此时应积极追涨。

---

## 3. 案例图解解析

### Figure 25.1：Spike 高度决定目标位

![[Trading Price Action TradingRange/Images/nc25f001.jpg]]

*   **左图**: Spike 仅为 1 根 Bear Bar。Measured Move 目标仅在该 K 线收盘价下方 5 ticks 处。
*   **右图**: Spike 扩大为 4 根 Bear Bars。
    *   **测量方法**: 从第一根 K 线的开盘价 (Open) 到最后一根 K 线的收盘价 (Close)。
    *   **目标位**: 随着 Spike 变大，Measured Move 目标位不断下移（19 ticks），潜在回报增加。
*   **策略**: 随着 Spike 增长，风险（止损在 Spike 顶部）保持不变，但回报潜力增加，交易者方程变得更有利。

### Figure 25.2：捕捉短暂的高胜率时刻

![[Trading Price Action TradingRange/Images/nc25f002.jpg]]

*   **Bar 15 (Bear Spike)**: 连续三根强阴线。此时做空的胜率可能高达 70%。
*   **Bar 9 - 11 (Upper Range)**: 这是一个约 4 点宽的交易区间。
*   **Bar 20 (Lower Range Bottom)**: 这是一个 **Trending Trading Range Day**。
    *   **逻辑**: 下方区间的高度通常等于上方区间（4点）。
    *   **操作**: 在 Bar 9 低点下方 4 点处挂 Limit Order 做多（Bar 20 区域），赌市场反弹测试 Bar 9 突破点。胜率约 60-70%。
*   **Bar 14**: Tight Trading Range 中的 Lower High，胜率仅 50%，但盈亏比合理。

### Figure 25.3：Scalper 的困境 vs Swing Trader 的优势

![[Trading Price Action TradingRange/Images/nc25f003.jpg]]

*   **背景**: 巨大的熊市趋势。
*   **Scalper 视角**: Bar 18-25 之间缺乏高胜率 (60%+) 的做空形态（Setup 不完美，K 线重叠，多头抵抗）。Scalper 可能因等待完美信号而错过整个趋势。
*   **Swing Trader 视角**:
    *   **Bar 18**: Moving Average Gap Bar，做空。
    *   **Bar 21**: Two-bar Reversal Lower High，做空。
    *   **Bar 28**: Double Top Lower High，做空。
    *   **逻辑**: 虽然单笔胜率可能只有 40-50%，但潜在回报巨大（趋势延续），因此 Swing Trader 会坚决入场并持有。
*   **Bar 31**: Wedge Bottom 失败后的 Breakout Pullback，极佳的加仓做空点。

---

> [!math] 交易者方程：实战应用指南
>
> | 场景 | 预估胜率 | 策略建议 |
> | :--- | :--- | :--- |
> | **强趋势 Spike** | > 60-70% | **积极入场**。市价追单或挂单在前一根K线极值处。 |
> | **趋势回撤 (ABC/H2/L2)** | ~ 60% | **标准入场**。等待信号棒确认，止损在信号棒外。 |
> | **交易区间中部** | ~ 50% | **观望**。除非盈亏比极佳 (>2:1)，否则不做。 |
> | **逆势摸顶/底** | < 40% | **谨慎**。必须有极佳的盈亏比 (>2:1) 和明确的结构支持（如大级别阻力）。 |
>
> *提示：对于初学者，始终追求 **回报 $\ge$ 风险**，且仅在胜率预估 $\ge$ 60% 时入场。*