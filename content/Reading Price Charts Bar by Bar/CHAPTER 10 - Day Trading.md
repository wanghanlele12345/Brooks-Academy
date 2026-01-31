---
title: "Chapter 10: Day Trading"
tags: [PriceAction, DayTrading, Scalping, Stocks, Futures]
sidebar_order: 10
---

> [!abstract] 核心逻辑
> *   **市场选择**：选择机构参与度高、流动性好、难以被操纵的市场（如 Emini, High-Volume Stocks）。
> *   **时间框架**：**5分钟图**是数学上的“甜蜜点”。它提供了足够的交易机会，同时给足以思考和下单的时间。
> *   **交易策略**：
>     *   **Trade Selection**: 每天专注于最好的 2-5 笔交易（通常是 Second Entries）。
>     *   **Position Size**: 盈利稳定后，通过增加仓位而非增加低质量交易来扩大收益。
> *   **执行原则**：绝大多数交易应使用 **Stop Order** 入场（顺势），只有在极强趋势中可考虑 Limit Order。

# 1. Selecting a Market (市场选择)

### Emini Futures (ES)
*   **优点**：流动性巨大，可容纳无限仓位，无滑点。适合全职交易者。
*   **策略**：5分钟图是标准。

### Stocks (个股) & ETFs (SPY, QQQ)
*   **优点**：对于初学者，SPY 的 10 美分波动相当于 Emini 的 1 点，风险更可控。
*   **选择标准**：
    *   **Volume**: 日均成交量 > 500万股。
    *   **Range**: 日均波动幅度大（数美元）。
    *   **推荐列表**: AAPL, RIMM (历史案例), GOOG, AMZN, GS, 热门 ETFs。
*   **策略**：只交易一两只熟悉的股票，或者只做 Emini。不要试图同时盯太多市场。

# 2. Time Frames & Chart Types

*   **5-Minute Chart**: 最佳平衡点。
    *   **Bar Chart**: 适合 Swing Trading，屏幕可容纳更多天数。
    *   **Candle Chart**: 适合 Scalping，能快速辨识 K 线归属权（Who owns the bar）。
*   **1-Minute / 3-Minute**:
    *   **陷阱**：虽然信号更多，但假信号也更多，且执行难度极大。
    *   **唯一用途**：在 **Runaway Trend**（5分钟图无回调）时，利用 1分钟图寻找 High/Low 1 入场。**严禁在 1分钟图上做逆势交易。**

![[Reading Price Charts Bar by Bar/Images/259-1.jpg]]
> [!note] Figure 10.1 Simple Bar Chart
> *   简单的 Bar Chart 足以进行 Price Action 交易，且节省屏幕空间。

![[Reading Price Charts Bar by Bar/Images/261-1.jpg]]
> [!note] Figure 10.2 1-minute Chart for Entry
> *   **Context**: 5分钟图（缩略图）处于 Runaway Trend，无回调。
> *   **Action**: 利用 1分钟图上的 High 1 (Bar A, B, C) 入场做多。
> *   **Warning**: 绝不要因为看到 1分钟图的 High 1 就反手做空。

# 3. Trading Reports & Volatility

新闻/数据发布（如 FOMC）会导致剧烈波动。
*   **原则**：忽略新闻本身，只交易 Price Action。
*   **策略**：如果波动过大，减少仓位，放宽止损。依靠 Second Entries 和 Traps 入场。

![[Reading Price Charts Bar by Bar/Images/264-1.jpg]]
> [!note] Figure 10.5 FOMC Report
> *   **Bar 2**: 巨大的 Bull Reversal Bar，但在 Trading Range 顶部，是买入陷阱。
> *   **Bar 3**: Short Scalp。
> *   **Bar 4**: Second Entry Long (Bull Inside Bar)，且是对开盘低点的测试。绝佳的 Swing 入场点。

# 4. Scalping vs. Swinging

*   **Scalper**: 追求 4-6 ticks 利润，不忍受回调。胜率需 > 67%。
*   **Swing Trader**: 追求波段利润，忍受回调。胜率可较低，盈亏比高。
*   **Hybrid Approach (推荐)**:
    *   入场后，在 Scalp 目标位（如 Emini 4 ticks）平仓一半。
    *   将剩余仓位止损移至 Breakeven，持有 Swing。

# 5. Always In the Market

一种持续持仓的策略。
*   **逻辑**：假设你必须在当前时刻持有仓位（Long 或 Short），你会选哪边？
*   **操作**：
    *   仅在出现清晰强烈的反转信号时反手（Reverse）。
    *   如果信号不明，保持原方向。
    *   适合 Trending Trading Range Days。

![[Reading Price Charts Bar by Bar/Images/274-1.jpg]]
> [!note] Figure 10.12 Always In Swing
> *   **Bar 1**: Strong Reversal Bar at Gap Test = Go Long.
> *   **Bar 3**: Strong Bear Reversal at Channel Overshoot = Reverse to Short.
> *   **Bar 8**: Lower Low Test of Bar 6 after Trendline Break = Reverse to Long (or Exit).

# 6. Entering on Stops (Order Entry)

*   **Stop Entry**: 价格行为交易的核心。在 Signal Bar 高点/低点外 1 tick 挂停止单。
    *   **优势**：顺势入场，利用市场动能。
    *   **确认**：如果价格没触及订单，说明形态尚未触发（或失败），避免了过早入场。
*   **Limit Entry**: 仅在极强趋势中，或作为 Second Entry 在支撑位挂单买入（高级技巧）。

![[Reading Price Charts Bar by Bar/Images/279-1.jpg]]
> [!note] Figure 10.16 Scalping Math
> *   **A (Entry)**: Signal Bar 上方 1 tick。
> *   **B (Target)**: Entry + 4 ticks。
> *   **C (Fill)**: 市场通常需触及 Target + 1 tick (即 Signal Bar + 6 ticks) 才能确保限价止盈单成交。

# 7. Protective Stops & Traps

*   **Initial Stop**: Signal Bar 另一端外 1 tick。
*   **Tightened Stop**: Entry Bar 收盘后，移至 Entry Bar 另一端外 1 tick。
*   **Money Stop**: 如果 K 线过大，使用固定的点数止损（如 Emini 2 points / 8 ticks）。
*   **Trapped**: 如果止损被触发但市场立即反转回原方向，说明你被 Trap 了。**立即重新入场**。

![[Reading Price Charts Bar by Bar/Images/284-1.jpg]]
> [!note] Figure 10.19 Stop Placement
> *   **Bar 1 Short**: 初始止损在 Signal Bar 上方。Entry Bar 收盘后，止损移至 Entry Bar 上方。
> *   **Bar 3 Short**: Entry Bar 出现后立即下跌，止损下移。后续的回调（Double Bottom Trap）未触及止损。
> *   **Bar 13 Short**: 遭遇 5-Tick Failure（Failed Low 2）。
> *   **Bar 14**: Reverse to Long（因为 Bar 13 是 Trap）。

![[Reading Price Charts Bar by Bar/Images/287-1.jpg]]
> [!note] Figure 10.21 First Hour Stop Rule
> *   **经验法则**：开盘第一小时内所需的最大止损幅度（例如 9 ticks），通常适用于全天。如果常规 8 ticks 止损会被扫，全天应考虑放宽至 9-10 ticks。