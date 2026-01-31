---
title: "Chapter 5: Trading Ranges"
tags: [PriceAction, TradingRanges, BarbWire, Reversal]
sidebar_order: 5
---

> [!abstract] 核心逻辑
> *   **市场状态**：多空力量平衡，交替控制市场。
> *   **方向预判**：Trading Range (TR) 通常是 **Continuation Pattern**（中继形态），大概率顺原趋势方向突破。
> *   **EMA原则**：
>     *   价格在 EMA 下方形成的 TR $\rightarrow$ 倾向向下突破。
>     *   价格在 EMA 上方形成的 TR $\rightarrow$ 倾向向上突破。
> *   **操作核心**：避免追涨杀跌（Breakout），倾向于**高抛低吸（Fade）**，特别是 Fade Breakout。
> *   **Barb Wire 警告**：密集重叠的十字星区域是亏损高发区，要么不操作，要么只做 Failed Breakout。

# 1. Trading Range Basics

当屏幕上充满上下波动的 Swing，且没有明显的主导方时，即为 Trading Range。

*   **持续时间**：5-20 根 K 线的窄幅震荡意味着极度平衡，突破交易风险极高（易出现影线反转）。
*   **反转风险**：TR 持续时间越长，转化为反转形态（Accumulation/Distribution）的概率越高。
*   **时间框架**：5分钟图上混乱的 TR，在 15或 60分钟图上可能清晰易读。

---

# 2. Tight Trading Ranges (TTR)

**定义**：2 根或以上 K 线高度重叠，多空平衡。即使有轻微倾斜，仍视为 TTR。

*   **策略**：
    1.  等待突破失败（Failed Breakout）。
    2.  等待突破回调（Breakout Pullback, BOPB）。
    3.  **Setup Bar**：只在 TTR 边界处的小 K 线（Small Bar）入场，做 Fade。

![[Reading Price Charts Bar by Bar/Images/138-1.jpg]]
> [!note] Figure 5.1 向上倾斜的 TTR
> *   **Bar 1**: 结束了一个小的 TTR。
> *   **Bar 2**: 急跌后的 TTR，通常作为 Bear Flag，但也可能演变为两段式反弹（Bar 3 是第一段）。此形态难交易，建议观望。

![[Reading Price Charts Bar by Bar/Images/140-1.jpg]]
> [!note] Figure 5.2 TTR 演变为三角形
> *   **Context**: 位于 EMA 上方的 Triangle，倾向向上突破。
> *   **Bar 5 & 6**: 向上突破失败，但并未引发大跌。
> *   **Bar 7**: High 2 Pullback，激进买点。
> *   **Bar 9**: First Pullback。反转了 Bar 8 Bear Reversal Bar 的低点仅 1 tick（Trap Shorts），高胜率买点。
> *   **Bar 10**: M2B (High 2 at EMA)，高胜率。

![[Reading Price Charts Bar by Bar/Images/141-1.jpg]]
> [!note] Figure 5.3 Higher Low in TR
> *   **Bar 6**: 突破趋势线后的 Higher Low。
> *   **Bar 9**: Breakout 后的 First Pullback (Inside Bar)，高胜率买点。
> *   **Bar 10**: False Breakout of a small flag，回撤了 Bar 1 下跌幅度的 ~65%。

---

# 3. Barb Wire (刺网形态)

**定义**：3 根或以上 K 线高度重叠，且至少有一根是 **Doji**。通常发生在日内中期、区间中部、紧贴 EMA。**这是交易者最大的亏损来源之一。**

> [!danger] 交易禁忌
> *   **禁止**在 Barb Wire 中交易突破（Breakout）。
> *   **禁止**在 EMA 下方买入，**禁止**在 EMA 上方卖出。

**策略**：
1.  **Fade the Breakout**：等待一根 Trend Bar 突破，一旦收盘，在反方向 1 tick 挂单（Fade）。
2.  **Failed Failure**：如果 Fade 单止损，反手做 Breakout Pullback（通常非常可靠）。
3.  **Fade Extremes**：在区间顶部下方卖出小 K 线，在底部上方买入小 K 线。

![[Reading Price Charts Bar by Bar/Images/142-1.jpg]]
> [!note] Figure 5.4 Barb Wire Setups
> *   **Bar 3**: 典型的 Barb Wire (3 根横盘 + Doji)。
> *   **Bar 6**: Bear Trend Bar Breakout 失败，后接 ii setup，做多。
> *   **Bar 7**: Bull Trend Bar Breakout 失败 (Failed Failure / Second Entry)，且是 Expanding Triangle 顶部，做空。

![[Reading Price Charts Bar by Bar/Images/144-1.jpg]]
> [!note] Figure 5.5 Barb Wire 失败的突破
> *   **Bar 1**: Outside Bar + Doji Inside Bar = 失控状态，观望。
> *   **Bar 2**: Bull Trend Bar 未能有效突破（仅 1 tick），不可做空。
> *   **Bar 3**: Bear Trend Bar 向下突破失败。
> *   **Bar 5**: Second Entry / High 2 above EMA。这是机构入场点（Bar 2/3 的散户被清洗）。

![[Reading Price Charts Bar by Bar/Images/145-1.jpg]]
> [!note] Figure 5.6 顺势 Fade
> *   **Context**: 位于 EMA 下方。
> *   **Setup**: 向上突破 High 2 失败，立即反转向下突破。
> *   **Action**: 在 Failed H2 处做空 (M2S)。必须时刻准备 Fade 那个诱人的 Bull Trend Bar Breakout。

![[Reading Price Charts Bar by Bar/Images/146-1.jpg]]
> [!note] Figure 5.7 趋势中的 Barb Wire
> *   **Context**: 强趋势突破后的高位整理。
> *   **Bar 1**: 试图向下反转（Failed Bull Breakout），但立即失败。
> *   **Entry**: Failed Failure (即 Breakout Pullback)，顺势做多。

![[Reading Price Charts Bar by Bar/Images/147-1.jpg]]
> [!note] Figure 5.8 Bear Barb Wire
> *   **Bar 2**: 位于区间顶部的 Small Bear Reversal Bar，紧贴 EMA。风险极小（Bar 高度 + 2 ticks），盈亏比极佳。

![[Reading Price Charts Bar by Bar/Images/148-1.jpg]]
> [!note] Figure 5.9 Barb Wire Reversal
> *   **Bar 2**: 向上突破 EMA 失败 (Low 2 Short)。
> *   **Bar 3**: 向下突破失败 (Failed Failure)。同时是 Double Bottom Pullback Buy Setup。

---

# 4. Middle of the Day, Middle of the Range

*   **时间**：约 8:30 A.M. - 10:30 A.M. PST。
*   **特征**：低胜率区域。K 线重叠，多空不明。
*   **策略**：
    *   新手应停止交易。
    *   高手只做 Barb Wire 类型的 Fade（高抛低吸）。
    *   最好等待测试日内高点或低点。

![[Reading Price Charts Bar by Bar/Images/149-1.jpg]]
> [!note] Figure 5.10 "The Middle is Bad"
> *   图示展示了在日内中期、区间中部的混乱走势。充满 Small Dojis 和 Failed Breakouts。最佳策略是观望直到测试区间边界。

---

# 5. Big Up, Big Down (大涨大跌)

**形态**：市场经历一波急涨，随后急跌回撤几乎 100% 的涨幅（或反之）。
*   **含义**：巨大的困惑（Indecision）。
*   **后果**：通常演变为 Trading Range。
*   **目标**：第二条腿（Second Leg）的目标通常是第一条腿高度的 2 倍（Measured Move），或者测试通道起点。

![[Reading Price Charts Bar by Bar/Images/150-1.jpg]]
> [!note] Figure 5.11 Big Up, Big Down
> *   **Bar 2**: Failed Final Flag，急涨结束。
> *   **Bar 4**: Low 2 Breakout Pullback Short (Below EMA)。
> *   **Bar 8**: Spike and Channel Bear 的终点，测试了 Bar 4 的通道起点。

![[Reading Price Charts Bar by Bar/Images/151-1.jpg]]
> [!note] Figure 5.12 Momentum Trap
> *   **Bar 5**: 动能耗尽，突破失败。
> *   **Bar 9**: 急跌至 "Value Zone"。Three Push Down pattern。此时 Value Traders 认为价格便宜开始买入，形成大区间底部。
> *   **Bar 13**: Spike and Channel Bull Overshoot，随后回测 Bar 12 通道起点。

---

# 6. Reversals from Trading Ranges

Trending Trading Range Days 通常在尾盘出现反转。

*   **特征**：在极端位置出现大区间 K 线（Big Range Bars）或大 Doji，意味着双向交易剧烈，不宜追单。
*   **Traps**：区间内的反转形态通常是陷阱。

![[Reading Price Charts Bar by Bar/Images/152-1.jpg]]
> [!note] Figure 5.13 TR Leading to Reversal
> *   急跌后的大 K 线震荡整理 (Trading Range)。
> *   同时构成了 Double Bottom Pullback，引发反转。

![[Reading Price Charts Bar by Bar/Images/153-1.jpg]]
> [!note] Figure 5.14 Failed Reversals become Traps
> *   **Bar 2**: M2B (High 2 at EMA)，但在 Trading Range 顶部且 K 线过大，风险高。
> *   **Bar 3**: Failed High 2 = Trapped Bulls。同时是 Low 2 和 Double Top Bear Flag。
> *   **Bar 8/10**: Traps。在区间边界出现诱人的 Doji/Reversal Bar 往往是陷阱，应寻找 Small Setup Bar 做 Fade（反向交易）。