---
title: "CHAPTER 8 - Measured Moves Based on Gaps and Trading Ranges"
tags: [PriceAction, MeasuredMove, Gap, TradingRange, Psychology]
order: 12
---
> [!abstract] 核心逻辑
> 市场倾向于对称性。当出现强劲的突破（Gap / Breakout）或长时间的共识区域（Trading Range）时，交易者利用其作为“中点”或“度量尺”来预测未来的目标位。
> *   **Gaps as Midpoints**: 突破缺口（或 Trend Bar 的中间）常被视为趋势的中点。
> *   **Trading Ranges as Rulers**: 交易区间代表多空平衡，一旦突破，市场往往移动该区间等宽的距离（Measured Move），寻找新的平衡。
> *   **Logic**: 目标位是获利了结（Profit Taking）和反向交易的逻辑区域，因而是重要的支撑/阻力位。

---

# 1. 基于 Gap (薄弱区) 的测量

**核心概念**：Gap 或快速移动的 K 线（Spike）是多空双方一致认为“当前价格不合理”的区域，称为 Thin Area。

### 测量方法
1.  **Measuring Gap**: 
    *   **定义**：Breakout Point 和 Breakout Pullback 之间的空间。如果重叠（Negative Gap），取两者的中点。
    *   **公式**：$Target = Middle \ of \ Gap + (Middle \ of \ Gap - Start \ of \ Trend)$
    *   **应用**：此 Gap 被视为趋势的**中点**。

2.  **Trend Bar Middle**: 
    *   如果 Gap 不明显，直接使用**突破 K 线的中点**作为测量的中点。

3.  **Negative Gap**:
    *   当回调略微跌破突破点时，缺口为负值。此时可使用突破点（Breakout Point）和回调低点（Pullback Low）的中点，或者直接用突破点作为基准。

---

# 2. 基于 Trading Range (厚实区) 的测量

**核心概念**：Trading Range 是多空双方一致认为“当前价格合理”的区域，称为 Fat Area / Thick Area。

### 测量方法
*   **Height Projection**: 取 Trading Range 的高度（Top - Bottom），从突破点向外投射等距离。
    *   $Target = Breakout \ Point + Height \ of \ TR$

---

# 3. 交易策略与目标位管理

> [!tip] 获利原则
> Measured Move Target 是部分或全部**获利了结 (Take Profit)** 的最佳位置，而不是立即反向交易的位置。
> 只有当在目标位附近出现强反转信号（Reversal Setup），且此前已有反向力量的迹象（如趋势线被打破）时，才考虑逆势交易。

*   **Undershoot/Overshoot**: 市场很少精确到达目标位。
    *   **Undershoot**: 略微未达目标即反转，显示反向力量强。
    *   **Overshoot**: 强力突破目标，显示趋势极强，可能迈向下一个目标。
*   **Multiple Targets**: 总是先关注最近的目标（Nearest Target）。只有被强力突破后，才看更远的目标。

---

# 4. 图表案例分析

### Figure 8.1: Measuring Gap
![[Trading Price Action TradingRange/Images/nc08f001.jpg]]
*   **Bar 3 Gap**: 开盘跳空缺口。
*   **测量**：从 Bar 1 底部到 Gap 中点，向上投射等距。
*   **结果**：Bar 4 高点略微未达目标（Undershoot），随后两日的回调确认了该阻力的有效性。

### Figure 8.2: Negative Gap & Thin Area
![[Trading Price Action TradingRange/Images/nc08f002.jpg]]
*   **Bar 2 High vs Bar 4 Low**: Bar 4 回调略低于 Bar 2 高点（Negative Gap）。
*   **测量**：使用 Bar 2（突破点）和 Bar 1（区间底）的高度进行测量。
*   **Line C Target**: 市场在收盘前精确到达测量目标。

### Figure 8.4: Spike & Flag Projection
![[Trading Price Action TradingRange/Images/nc08f004.jpg]]
*   **Bar 3 Flag**: 下跌趋势中的 Breakout Pullback Bear Flag。
*   **测量**：从趋势起点（Bar 2）到 Flag 中点（Line C），向下投射等距至 Line D。
*   **结果**：Line D 被短暂 Overshoot 后引发反弹。

### Figure 8.5: Thin Area Midpoint
![[Trading Price Action TradingRange/Images/nc08f005.jpg]]
*   **Line B**: 突破 K 线（Bar 2）与第一次回调（Bar 5）之间的 Gap 中点。
*   **结果**：Bar 8 精确到达测量目标位。
*   **Context**: 尽管目标位是阻力，但强的反向交易（Short）需要看到先前的趋势线被打破（如 Bar 7 之后的走势）。

> [!math] Trader's Equation
> 在 Measured Move 目标位附近：
> *   **Trend Traders**: 获利了结，降低仓位。
> *   **Counter-Trend Traders**: 等待 Second Entry 或强 Reversal Bar 进场，止损设在 Swing Extreme 之外。