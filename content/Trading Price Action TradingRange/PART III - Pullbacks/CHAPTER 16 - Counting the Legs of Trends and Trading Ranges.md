---
title: "CHAPTER 16 - Counting the Legs of Trends and Trading Ranges"
tags: [PriceAction, Reversal, Trading, MarketStructure, LegCounting]
order: 21
---
> [!abstract] 核心逻辑：Bar Counting (K线计数)
> 市场的分形特征导致绝大多数回调（Pullback）呈现**两段式结构（Two-legged）**。
> *   **计数定义**：
>     *   **High 1 (H1)**: 回调中第一根突破前一根K线**最高价**的K线（Bull Setup）。
>     *   **Low 1 (L1)**: 回调中第一根跌破前一根K线**最低价**的K线（Bear Setup）。
>     *   **H2/L2**: 第二次尝试，通常对应 **ABC 调整** (A=Leg 1, B=Correction, C=Leg 2)。
> *   **交易原则**：
>     *   **强趋势 (Spike)**: 可交易 H1/L1。
>     *   **通道/正常趋势**: 等待 H2/L2（胜率更高）。
>     *   **复杂回调**: H3/L3 等同于 **Wedge (楔形)**，H4/L4 通常意味着震荡或反转失败。
> *   **关键禁忌**: 在强多头趋势中禁止做空 L2，在强空头趋势中禁止做多 H2，除非有明确的大级别趋势线突破。

## 1. 计数基本法则与情境

### A. 计数机制
1.  **High 1 (H1)**: 牛市回调或震荡区间中，第一根 High > Previous High 的 K 线。
2.  **High 2 (H2)**: H1 失败后（价格重新下跌），再次出现 High > Previous High。
    *   *注*: H1 和 H2 之间必须有小级别的趋势线突破（即便只是微小的反向运动），否则视为第一腿的复杂延伸。
3.  **ABC 结构**: H2/L2 通常对应 ABC 调整。
    *   A = 第一腿 (First Leg)。
    *   B = H1/L1 形成的转折。
    *   C = 最后一腿，突破 C 即触发 H2/L2 入场。

### B. 环境决定策略 (Context)
*   **趋势中 (Trend)**:
    *   **H2 (Bull Trend)**: 通常发生在均线附近，是高胜率顺势交易。
    *   **L2 (Bear Trend)**: 通常发生在均线附近，可靠的顺势做空点。
*   **交易区间 (Trading Range)**:
    *   **陷阱**: 位于区间顶部的 H2 买入通常会失败（应做空）；位于区间底部的 L2 卖出通常会失败（应做多）。
    *   **逆向逻辑**: 机构在区间顶部卖出 High 2 信号的上方（Limit Order），利用多头止损制造反转。

---

## 2. 案例图解解析

### Figure 17.1：基础计数与过滤

![[Images/nc17f001.jpg]]

*   **Bar 8 (High 1)**: 强趋势中的 H1。由于此前有6根无重叠的强阳线，这是一个高胜率买点。
*   **Bar 10 (Bad H1)**: 位于 **Buy Climax** 之后，且是 Final Flag 的突破，不做多。
*   **Bar 13 - 17**: 形成了两段式回调（Complex pullback）。
    *   **Bar 13**: 第一段回调结束。
    *   **Bar 17 (High 2)**: 整个结构的第二腿结束，也是较小级别的 High 2（Bar 15 为 H1）。
*   **Bar 25 & 27 (Low 1)**: 强熊市尖峰（Spike）中的 L1 做空。尽管 Bar 26 是强反转阳线，但在强空头趋势中，这往往是个 High 2 陷阱，做空 Bar 27 意味着做空这个失败的 High 2。

### Figure 17.2：区间 vs 趋势的计数差异

![[Images/nc17f002.jpg]]

*   **左图 (Trading Range)**:
    *   **Bar 7 (H1)**: 虽然是强阳线后的 H1，但位于区间顶部且为 Doji，失败概率高。
    *   **Bar 9 (H2)**: 均线上方、区间顶部，典型的多头陷阱。
*   **右图 (Strong Trend)**:
    *   **Bar 22 (L1)**: 强熊市 Spike 后的 L1，高胜率做空。
    *   **Bar 26 (H1)**: 强牛市 Spike 后的 H1，高胜率做多。

### Figure 17.3：计数难点与变体

![[Images/nc17f003.jpg]]

*   **Bar 4 (High 3)**: 也就是 Wedge Bottom。Bar 2 和 Bar 3 都没有突破前一根K线高点，但实际上构成了两段下跌。Bar 4 突破后确认反转。
*   **Bar 7 (Low 3/Channel Top)**: 通道顶部的第三次推升，也是对 EMA 的测试，做空信号。
*   **Bar 11 (Failed H2 / L2)**: Bar 11 是 H1（变体），也是 L2 做空点（位于 EMA 下方）。此处 H2 失败导致多头离场，推动价格下跌。
*   **Bar 17 (High 2)**: 第二腿下跌结束。
*   **Bar 18 (High 2 Second Entry)**: Bar 17 后市场犹豫，Bar 18 提供了二次入场机会（ii pattern / Double Bottom pullback）。

### Figure 17.5：失败的 Low 2 演变为 Low 4

![[Images/nc17f005.jpg]]

*   **Bar 2 (Failed L2)**: L2 入场后并未大幅下跌，市场反而突破其高点。
*   **预期**: L2 失败通常意味着会有更多反弹，可能形成 L4 或 Wedge Bear Flag。
*   **Bar B**: 完美的 L1 做空（触及 EMA，微趋势线跌破）。

### Figure 17.6：失败的 Low 4 (趋势反转信号)

![[Images/nc17f006.jpg]]

*   **Bar 3 (Low 4 Short)**: 触发入场。
*   **Bar 5 (Failed L4)**: 市场突破了 L4 信号的高点。
    *   **逻辑**: L4 是空头非常强的尝试，如果失败，意味着空头放弃抵抗，趋势可能反转为多头。
*   **Bar 8**: 随后的上涨形成了 Measuring Gap。
*   **Bar 7**: 牛市中的首次回调（L1/L2 失败），多头买入点。

### Figure 17.7：牛市中不做空 Low 2

![[Images/nc17f007.jpg]]

*   **Bar 4 & 6**: 都是 L2 形态。
*   **禁忌**: 在强牛市中，**L2 通常会失败并转化为 H2 买点**。
*   **策略**: 此时应在 Bar 4 或 6 的低点下方放置 Limit Buy Order（赌空头突破失败），或者等待 L2 失败后顺势做多。

### Figure 17.9：通道中的 High/Low 计数

![[Images/nc17f009.jpg]]

*   **Bar 5**: 失败的 L2，随即转为强劲的牛市通道。
*   **Bar 6 (Low 4)**: 这是一个 Wedge 顶部的第四次推升（或 L4），但在强多头通道中做空需谨慎。
*   **Bar 10**: 强力回调测试通道起点（Bar 2 area）后的 Higher Low，买入点。

### Figure 17.10：复杂的 High 2 变体

![[Images/nc17f010.jpg]]

*   **Bar 12**: 虽然是 L2，但位于区间底部且是大阳线，做空极度危险。
*   **Bar 17**: 巨大的 Bear Spike，看似恐慌，实为 **High 2 / Wedge Bull Flag** 的入场点（Bar 5 和 Bar 11 为前两个低点）。
*   **Bar 19**: L2 做空信号，但紧随强阳线，大概率失败。

### Figure 17.12：Low 2 的多种形态

![[Images/nc17f012.jpg]]

*   **Bar 4**: 典型的 L2。
*   **Bar 7**: 虽然低点比 L1 低，但仍视为第二腿（L2）。
*   **Bar 12 (Outside Bar)**: 实际上是 L1，但在 1分钟图上可能包含复杂的两腿结构。
*   **Bar 15 (Wedge Flag)**: 第三次推升，可视作 L3。

### Figure 17.13：Spike and Channel

![[Images/nc17f013.jpg]]

*   **结构**: Spike (Bar 2) = 第一推 (Leg 1)；Channel (Bar 2-4) = 第二推 (Leg 2)。
*   **Bar 4**: Wedge Top，也就是第三推，通常是反转信号。

---

> [!math] 交易者方程：计数与概率
>
> | 信号类型 | 环境 | 胜率 | 风险 | 策略 |
> | :--- | :--- | :--- | :--- | :--- |
> | **H1 / L1** | 强趋势 Spike | 高 | 低 (紧止损) | 积极入场 |
> | **H1 / L1** | 震荡 / 弱趋势 | 低 | 高 | **禁止交易**，等待 H2/L2 |
> | **H2 / L2** | 趋势回调至 EMA | 极高 | 中 | 最佳 Swing 交易点 |
> | **H2 / L2** | 交易区间边缘 | 低 | 高 | **反向交易** (Fade) |
> | **H3 / L3** | 通道 / Wedge | 高 | 中 | 反转交易 (Reversal) |
> | **H4 / L4** | 复杂修正 | 中 | 中 | 若失败则是强反转信号 |

## 3. 核心技术细节
1.  **Stop Run (止损猎杀)**: 信号棒如果是小 Doji，入场后很容易回调打掉 1 tick 的止损。**对策**：将止损放宽至信号棒外 2-3 ticks，或使用资金管理止损（如 2 points）。
2.  **Counting Reset (计数重置)**: 
    *   如果出现强趋势极值（Breakout to new high/low），计数通常重置。
    *   如果回调演变成宽幅震荡，之前的计数失效，需等待新的清晰形态。
3.  **Failed Failure**: 
    *   High 2 失败（跌破 H2 低点）= 强空头信号。
    *   Low 2 失败（突破 L2 高点）= 强多头信号。
    *   High 4 失败 = 趋势可能反转为熊市。
    *   Low 4 失败 = 趋势可能反转为牛市 (见 Figure 17.6)。