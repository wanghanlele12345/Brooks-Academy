---
title: "Chapter 11: The First Hour"
tags: [PriceAction, FirstHour, Opening, Gap]
sidebar_order: 11
---

> [!abstract] 核心逻辑
> *   **波动性 (Volatility)**：开盘第一小时的形态本质与全天其他时间相同，但波动更大，速度更快，反转更猛烈。
> *   **相关性 (Context)**：开盘交易高度依赖昨日的收盘形态（Flags, Breakouts）和今日的开盘缺口（Gap）。
> *   **日内极值 (High/Low of Day)**：日内的高点或低点大概率在第一小时内形成，因此必须 Swing 部分仓位。
> *   **Opening Reversal**: 大多数日子里，开盘后的第一波强力运动是假的，会被反转。

# 1. Patterns Related to Premarket & Yesterday

开盘走势通常是对昨日尾盘形态的延续或测试。

*   **昨日形态**: 关注昨日最后1-2小时形成的 Large Flags, Trading Ranges 或 Trendlines。
*   **Gap (缺口)**: 巨大的跳空缺口（特别是 Gap from Close）是极端行为，通常引发强趋势（趋势延续或反转）。
    *   **Gap Spike**: 缺口本身可视作一根巨大的隐形 Trend Bar。

![[Reading Price Charts Bar by Bar/Images/293-1.jpg]]
> [!note] Figure 11.2 Failed Breakout of Yesterday's Range
> *   **昨日**: 尾盘形成 Large Bear Flag (两段式反弹)。
> *   **今日**: Gap Down 跌破 Bear Flag，但在 Bar 7 处反转。
> *   **Strategy**: Bar 7 是 Failed Breakout Buy Setup，且是对昨日低点的测试 (Opening Reversal)，大概率形成日内低点，应持有 Swing。

# 2. Trend Bar on Open

如果开盘第一根或第二根 K 线是巨大的 Trend Bar（实体大、影线短），这通常预示着当天的方向。

*   **Gap + Trend Bar**: 如果跳空方向与第一根趋势线方向一致，极大概率形成 **Trend from the Open**。
*   **Failed Entry**: 如果在第一根趋势线突破后进场被止损，**立即反手**。反向运动通常幅度很大。

![[Reading Price Charts Bar by Bar/Images/303-1.jpg]]
> [!note] Figure 11.9 Reverse on Failure
> *   **Open**: Gap Down。
> *   **Bar 1**: Bull Trend Bar。尝试做多（Bet on Gap Close）。
> *   **Failure**: 下一根 K 线跌破 Bar 1 低点（One-Tick Failure）。
> *   **Action**: 立即在 Bar 1 低点下方反手做空，抓住了全天的下跌趋势。

![[Reading Price Charts Bar by Bar/Images/304-1.jpg]]
> [!note] Figure 11.10 Gap Openings
> *   **左图**: Gap Up + Big Bull Bar (Bar 1) $\rightarrow$ Trend from Open Bull。
> *   **中图**: Gap Up + Bear Bar + Failed Breakout $\rightarrow$ Trading Range。
> *   **右图**: Gap Down + Bear Bar (Bar 9)。Bar 10 反转向上形成 Low 2 Short Failure，可能引发大反弹。

# 3. Trend from the Open

最强的趋势类型。开盘即为全天极值（或在前几根 K 线内形成）。

*   **特征**: 开盘后几乎无回调，或者回调极浅（Micro Trendline Break）。
*   **策略**: 必须在第一个小时内入场。如果错过了开盘突破，必须抓 **First Pullback**（通常是 High/Low 1）。

![[Reading Price Charts Bar by Bar/Images/306-1.jpg]]
> [!note] Figure 11.11 Trend from the Open Bear
> *   **Open**: Gap Down。
> *   **Bar 1**: Breakout Pullback Short。第一根 K 线是 Bull Bar，但迅速被跌破，困住多头。
> *   **Bar 2**: Failed Low 2 (Trap)，但对于 Smart Traders 来说，在强趋势日应持有空单或等待 Second Entry (Bar 3)。

# 4. Opening Reversals

大多数日子（非 Trend from Open）在开盘后会有一波强力运动去测试关键点位（如昨日高低点、EMA、趋势线），然后反转。

*   **逻辑**: 机构利用开盘流动性推动价格到“价值区”或“止损区”，然后反向操作。
*   **目标**: 这种反转通常会形成当天的 High 或 Low。
*   **Setup**: Double Top/Bottom Flags, Wedge Reversals, Failed Breakouts。

![[Reading Price Charts Bar by Bar/Images/315-1.jpg]]
> [!note] Figure 11.17 Opening Reversals in GOOG
> *   **Bar 1**: M2S Short。向下填补昨日低点缺口后反转，形成日内高点。
> *   **Bar 3**: Failed Breakout。跌破昨日尾盘趋势线后反转向上。

![[Reading Price Charts Bar by Bar/Images/316-1.jpg]]
> [!note] Figure 11.18 Opening Reversals in AAPL
> *   **Bar 1**: Low 2 Short。对 Trend Channel Line Overshoot 的反转。
> *   **Bar 2**: Failed Breakout。突破昨日尾盘 Trading Range 后反转。
> *   **Bar 3**: Breakout Pullback / Higher Low。

# 5. Double Top/Bottom Flags

这是开盘第一小时最常见的**中继形态 (Continuation Pattern)**。

*   **Double Top Bear Flag**: 在下跌趋势（或 Gap Down）中，价格反弹形成双顶，随后继续下跌。
*   **Double Bottom Bull Flag**: 在上涨趋势（或 Gap Up）中，价格回撤形成双底，随后继续上涨。

![[Reading Price Charts Bar by Bar/Images/318-1.jpg]]
> [!note] Figure 11.20 Double Top Bear Flag
> *   **Open**: Big Gap Down (Flag Pole)。
> *   **Bar 2 & 3**: 形成 Double Top Bear Flag。这是绝佳的做空点，预期趋势延续。

![[Reading Price Charts Bar by Bar/Images/319-1.jpg]]
> [!note] Figure 11.21 Double Bottom Bull Flag
> *   **Bar 3 & 4**: 强力上涨后的 Double Bottom Bull Flag。
> *   **Bar 6 & 7**: 强力下跌后的 Double Top Bear Flag。

# 6. First Pullback

在强劲的第一波趋势（First Leg）之后，首次回调（First Pullback）是极高胜率的顺势入场点。

*   **定义**: 第一次打破微型趋势线或触及 EMA 的回调。
*   **入场**: 通常是 High 1 或 High 2 (在多头中)。
*   **心理**: 很多交易者错过了开盘的爆发，First Pullback 是他们（以及机构）加仓或上车的机会。

![[Reading Price Charts Bar by Bar/Images/322-1.jpg]]
> [!note] Figure 11.25 First Pullback
> *   **Context**: Bull Trend from the Open。
> *   **Bar 2**: 跌破 Micro Trendline 的 First Pullback。尽管信号棒一般，但在强趋势中必须买入 High 1。

![[Reading Price Charts Bar by Bar/Images/323-1.jpg]]
> [!note] Figure 11.26 Unclear First Pullback
> *   在极强趋势中，回调可能非常微弱（甚至没有 Bear Trend Bar）。
> *   **Bar 1 (ii)**, **Bar 3 (Sideways)**: 这些微小的停顿就是 First Pullback，必须果断入场。