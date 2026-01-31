---
title: "Chapter 6: Breakouts"
tags: [PriceAction, Breakouts, Trading, Trend]
sidebar_order: 6
---

> [!abstract] 核心逻辑
> *   **突破定义**：价格超越重要点位（趋势线、前高/低）。意味着强度和潜在新趋势。
> *   **交易原则**：
>     *   **Fade (逆势)**：大多数突破会失败，适合做逆势。
>     *   **With Trend (顺势)**：若突破失败后再次失败（Failed Failure），即形成 **Breakout Pullback (BOPB)**，这是极佳的顺势入场点。
>     *   **Strong Trend (强趋势)**：趋势极其强劲时，每一笔交易都是顺势，可市价入场，但**Pullback** 入场风险回报比更优。

# Breakout Entries in Strong Trend

当趋势强劲（大阳线/大阴线、成交量大、无明显回调）时，虽然 Smart Money 会在突破时入场，但 Price Action 交易者更倾向于寻找更早的入场点（如 High 1/2）以降低风险。

*   **强趋势特征**：突破K线实体大、后续K线延续性好。
*   **入场策略**：
    1.  **Price Action Entry**：在突破前的 High 1 或 High 2 入场。
    2.  **Market Entry**：若错过早期入场，可随时市价入场（Swing Size），使用较宽的 Swing Stop。
    3.  **1-3 Minute Pullback**：等待 1-3 分钟图上的微型回调入场。

![[Reading Price Charts Bar by Bar/Images/156-1.jpg]]
> [!note] Figure 6.1 案例解析：突破 vs 回调
> *   **背景**：Bar 4 Higher Low 后的强多头趋势，连续 7 根阳线。
> *   **Breakout Traders (追高风险)**：在 Swing Highs (Bar 5, 6, 8, 11, 13, 16) 突破时买入。这是专业交易者获利平仓的区域。
> *   **Price Action Traders (低吸优势)**：
>     *   **Bar 6**: High 1 Pullback。
>     *   **Bar 8**: High 2 Pullback。
>     *   **Bar 10**: Failed Reversal。
>     *   **Bar 12**: High 2 & 趋势线突破。
>     *   **Bar 15**: High 2 (测试 EMA 下方)。
> *   **结论**：虽然强趋势中追高也能获利，但买回调的风险回报比（Risk/Reward）远优于买突破。

![[Reading Price Charts Bar by Bar/Images/157-1.jpg]]
> [!note] Figure 6.2 案例解析：预期突破
> *   **Bar 2**: Small Higher Low & EMA Gap Bar Second Entry。虽然 Signal Bar 收盘为阴，但处于强趋势背景下。
> *   **Bar 3**: 趋势线突破的大阳线。若此前未入场，此处应 Swing 入场。
> *   **Bar 4**: Pause Bar。在昨日高点下方停顿，买入点（Buy 1 tick above）。
> *   **Bar 8**: Countertrend Scalp (Expanding Triangle Top)，但在 EMA 上方运行超过 2 小时，趋势仍为多头。

---

# Breakout Pullbacks (BOPB) & Breakout Tests

**Breakout Pullback (BOPB)** 是指突破发生后的回调。如果回调失败（即趋势恢复），它就变成了 **Failed Failure**（失败的突破失败），这是一个高胜率的 **Second Entry**。

### 关键概念
1.  **Breakout Test**: 回调精准测试突破点位（Breakeven Point）。
2.  **Implied Breakout**: 价格接近前极值但未突破即回调，随后如同已突破一样运行。应视为 BOPB 处理。
3.  **Failed Failure**: 所有的 BOPB 本质上都是 Failed Failures，类似于 Cup and Handle 形态。

### 股票特性与止损
> [!info] 止损管理
> *   **AAPL / RIMM**: 通常精准回测突破点，适合严格的 Breakeven Stop。
> *   **GS (高盛)**: 经常扫掉 Breakeven Stop (by 10-30 cents) 后再延续趋势。交易此类品种需放宽止损，或准备在扫损后重新入场。

![[Reading Price Charts Bar by Bar/Images/160-1.jpg]]
> [!note] Figure 6.3 案例解析：BOPB 变体
> *   **Bar 1**: 潜在的 Failed Breakout，但随后 3 根阴线确认跌势。
> *   **Bar 3**: Failed Final Flag。第二次尝试跌破开盘低点，ii pattern 变体，做空。
> *   **Bar 5**: Variant BOPB。价格接近前高未突破即回调，视同突破处理。精准测试 Bar 4 Signal Bar 高点。
> *   **Bar 6**: 实际突破新高后的 BOPB Long。

![[Reading Price Charts Bar by Bar/Images/161-1.jpg]]
> [!note] Figure 6.4 案例解析：Breakout Tests
> *   **LEH**: 走势规范，多次精准回测突破点。
> *   **策略**: 许多交易者会在突破信号棒外 1 tick 入场，精准回测会扫掉保本损。若被扫损，应在 Test Bar 外 1 tick 重新入场（如 Bar 2 低点下方重新做空）。

![[Reading Price Charts Bar by Bar/Images/161-2.jpg]]
> [!note] Figure 6.5 案例解析：Overshoot Tests
> *   **GS**: 典型扫损行为。
> *   **Bar 8**: 回调超过 Bar 6 Signal Low 6美分。
> *   **Bar 10**: 回调超过 Bar 9 Signal Low 2美分。
> *   **Bar 5**: 通道线过冲 (Overshoot) + 反转。
> *   **Bar 8**: Lower High (在 Bar 7 打破趋势线后)，确立空头波段。

![[Reading Price Charts Bar by Bar/Images/162-1.jpg]]
> [!note] Figure 6.6 案例解析：GOOG 连续 BOPB
> *   **Bar 5**: High 1 Pullback。动能强劲时，H1 即可买入（Signal bar 为 Doji Inside Bar）。
> *   **Bar 6**: High 2 Long。
> *   **Bar 8 & 9**: Breakout Tests (做空)。
> *   **Bar 10**: Breakout Pullback Short (Inside Bar)。
> *   **Bar 12**: Breakout Pullback Short at EMA。
> *   **Bar 14**: Low 1 Short。
> *   **Bar 15**: Low 2 Short (Outside Bar)。困住了在 Bar 14 后做多的多头。
> *   **Bar 16**: Barb Wire Low 2 Pullback。

> [!math] Trader's Equation: Breakout vs. Pullback
> *   **Buying Breakout**: 胜率较低，风险较高（止损远），但能捕捉动能。
> *   **Buying Pullback**: 胜率高，风险低（止损近），风险回报比更优。
> *   **结论**: 除非是极强趋势（Runaway Trend），否则首选 Pullback Entry。