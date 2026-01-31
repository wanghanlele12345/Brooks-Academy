---
title: "CHAPTER 23 - Triangles"
tags: [PriceAction, Triangle, Wedge, TradingRange, BreakoutMode]
order: 29
---
> [!abstract] 核心逻辑：三角形作为整理形态 (Triangles as Trading Ranges)
> 三角形是**交易区间 (Trading Range)** 的一种，具有三段式推进结构。
> *   **定义**：至少有三次向上或向下的推升/回撤 (Three Pushes)。
> *   **分类**：
>     *   **Wedge (楔形)**：有明显斜率的三角形。Bull Flag 或 Bear Flag 的一种。
>     *   **Expanding Triangle (扩散三角形)**：高点更高，低点更低。
>     *   **Contracting Triangle (收敛三角形)**：高点降低，低点抬高。包括 ii pattern (微型三角形)。
>     *   **Ascending/Descending Triangle**：有一条水平边界。
> *   **模式 (Mode)**：处于**突破模式 (Breakout Mode)**，即将选择方向。通常倾向于顺应前一趋势突破，但也常演变为大区间或作为趋势末端的 Final Flag。
> *   **策略**：对于大部分三角形，最佳策略是**等待突破**及随后的**突破确认**（Follow-through 或 Breakout Pullback）。

## 1. 三角形的性质与识别

### A. 结构本质
*   **Three Pushes**：所有的三角形本质上都是**三推结构**。任何具有三推特征的盘整形态，功能上等同于三角形。
*   **Trading Range**: 它们是趋势中的暂停。多空力量暂时平衡，都在等待价值区域的偏离（突破）。
*   **Wedge vs. Triangle**: 仅仅是斜率的区别。Wedge 是有斜率的通道，Triangle 是相对水平的区间。Wedge 作为反转形态的概率略高，而水平 Triangle 作为中继形态的概率略高。

### B. 突破预期
*   **Continuation**: 作为中继形态，通常顺势突破。
*   **Final Flag**: 位于趋势末端的三角形往往是 **Final Flag**。其顺势突破容易失败，随后引发反转。
*   **Expanding Triangle**: 既可以是反转形态（高点更高低点更低的震荡导致反转），也可以是中继形态。往往会演变成更大的 Expanding Triangle（反转后再反转）。

### C. 紧密通道陷阱
*   如果“楔形/三角形”处于非常紧密的通道中，不要急于做反转。紧密通道往往会延续，即使有三推结构。**必须等待强有力的反向突破**（Trend Line Break）后再考虑反转交易。

---

## 2. 交易策略

### A. 突破交易 (Breakout)
*   **等待确认**: 鉴于三角形是平衡区域，突破失败率较高。建议等待 Strong Breakout Bar 或 Breakout Pullback。
*   **Strong Spike**: 如果突破非常强劲（连续趋势K线），视为 Always-In，可追涨杀跌。

### B. 震荡交易 (Fade)
*   **区间足够大时**: 可以在三角形边界进行高抛低吸（Fade Extremes）。
*   **Expanding Triangle**: 适合 Fade 策略，因为高点创新高（Bull Trap）和低点创新低（Bear Trap）是其常态。

---

## 3. 案例图解解析

### Figure 23.1：三角形的多种画法

![[Trading Price Action TradingRange/Images/nc23f001.jpg]]

*   **识别灵活性**: 无论如何连接高低点，只要识别出**三推 (Three Pushes)** 结构，就是三角形交易逻辑。
    *   **Low 4, 7, 9**: 三次下探支撑 = Triangle。
    *   **High 4, 6, 8**: 三次上攻阻力 = Triangle。
*   **ii Pattern**: Bar 5, 24 等处的 ii pattern 本质上是小级别图表上的三角形（收敛整理）。
*   **Bar 24 Breakout**: 大级别三角形（Bar 3-18）向上突破。
*   **Bar 26**: 对 Bar 24 突破的 **Breakout Pullback**（Two-bar reversal buy setup），这是高胜率顺势入场点。

### Figure 23.2：日线图上的三角形变体

![[Trading Price Action TradingRange/Images/nc23f002.jpg]]

*   **Triangle A (Rising Wedge)**: 在上升趋势中，通常看跌。但此处突破向下无力，演变为 Tight Trading Range，最终多头获胜。这显示了多头强势（Bulls buy back shorts）。
*   **Triangle B & E (Descending Triangles)**: 
    *   B: 向上突破（反直觉，但在强趋势中常见）。
    *   E: 先向上假突破，再向下假突破（典型的区间行为），最终才选择方向。
*   **Triangle C (Expanding Triangle)**:
    *   **Bar 3 High**: 创新高后做空（Fade Top）。
    *   **Bar 3 Low**: 创新低后做多（Fade Bottom）。
    *   这是 Expanding Triangle 的典型特征：由连续的 Higher Highs 和 Lower Lows 组成。
*   **Triangle D (Symmetrical Triangle)**: 本质就是 Trading Range，策略是高抛低吸或等待突破。

---

> [!math] 交易者方程：三角形突破
>
> | 形态位置 | 预期方向 | 概率 | 策略 |
> | :--- | :--- | :--- | :--- |
> | **Bull Trend 中继** | 向上 | > 55% | 突破回踩买入 |
> | **Bear Trend 中继** | 向下 | > 55% | 突破回踩卖出 |
> | **Final Flag (趋势末端)** | 顺势突破后反转 | 高 | 此时顺势突破往往是陷阱，关注 Failed Breakout |
> | **Expanding Triangle** | 双向扫荡 | 中 | 在边缘逆势操作 (Fade) |
>
> *注：三角形突破后的目标位通常等于三角形最宽处的高度（Measured Move）。*