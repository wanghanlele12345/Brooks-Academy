---
title: "CHAPTER 21 - Example of How to Trade a Trading Range"
tags: [PriceAction, TradingRange, Scalping, Fade, Setup]
order: 27
---
> [!abstract] 核心逻辑：低买高卖与剥头皮 (Buy Low, Sell High, Scalp)
> 在交易区间中，遵循**“低买高卖”**原则，并将每笔交易视为**剥头皮 (Scalp)**。
> *   **胜率与盈亏比**：80% 的突破尝试会失败。因此，不要期待突破持有（Swings），而应设定合理的止盈目标（Reward >= Risk）。
> *   **入场法则**：
>     *   **Stop Entries**：适合初学者，利用市场的动能入场（如 High 2 at Bottom, Low 2 at Top）。
>     *   **Limit Entries**：适合专家，在市场反向时逆势挂单入场（Fade Breakouts），需要能够承受浮亏并可能需要加仓（Scale In）。
> *   **心理建设**：如果在区间中部，市场已经上涨了 5-10 根 K 线，此时只考虑做空或平多；反之亦然。**永远不要在区间中部追单。**

## 1. 交易区间的高胜率形态 (Setup)

### A. 适合初学者的 Stop Order 入场
利用 Stop Order 意味着等待市场朝你的方向移动后再入场，确认动能。
1.  **High 2 at Bottom**: 位于区间底部的 High 2 买点（通常也是 Double Bottom）。
2.  **Low 2 at Top**: 位于区间顶部的 Low 2 卖点（通常也是 Double Top）。
3.  **Wedge Bull/Bear Flag**: 位于底部的楔形牛旗买入，位于顶部的楔形熊旗卖出。
4.  **Reversal Patterns**: 
    *   底部 swing low 跌破后的 Bull Reversal Bar (Spring/Final Flag)。
    *   顶部 swing high 突破后的 Bear Reversal Bar (Upthrust/Final Flag)。
5.  **Breakout Pullback**: 
    *   底部向上突破后的回调买入（Higher Low）。
    *   顶部向下突破后的回调卖出（Lower High）。

### B. 适合专家的 Limit Order 入场
利用 Limit Order 逆势入场（Fade），赌突破失败。
1.  **Fade Spikes**: 在区间底部，挂单买入 Bear Spike 的收盘价或前低点下方；在区间顶部，挂单卖出 Bull Spike 的收盘价或前高点上方。
2.  **Exhaustive Climaxes**: 在区间边缘出现巨大趋势 K 线（Climax）时，反向挂单入场。
3.  **Weak Signal Bars**: 在区间顶部卖出 High 1/2 弱信号的上方；在区间底部买入 Low 1/2 弱信号的下方。

---

## 2. 案例图解解析：QQQ 交易区间实战

### Figure 21.1：Fade Extremes (逆势操作区间边缘)

![[Trading Price Action TradingRange/Images/nc21f001.jpg]]

*   **识别交易区间 (Early Signs)**:
    *   开盘即出现 Doji (Bar 1)，随后 Bar 2-4 频繁反转，Bar 2-7 多空拉锯，缺乏连续性。
    *   **Bar 6**: 强力 Bull Trend Bar 却在均线处停滞，且被随后的 Doji 和 Bear Bar 抵消，确认市场进入双向交易（Two-sided trading）。
    *   **结论**: 市场处于 Trading Range，策略转为 Scalping。

*   **关键交易点位解析**:
    *   **Bar 4 (Fade High)**: Bar 2 虽强，但 Bar 4 是区间高点的 Bear Reversal Bar。可以在 Bar 4 低点下方挂单做空，或在 Bar 4 高点上方挂单做空（赌突破失败）。
    *   **Bar 6 (Buy Vacuum)**: 强阳线突破均线，看似突破，实为买盘真空（Buy Vacuum）。在区间顶部，这往往是多头获利了结和空头建仓的区域。
    *   **Bar 9 (Bull Trap)**: 位于中间区域的 Doji，作为买入信号极差。许多交易者在 Doji 高点上方挂 Limit Sell Order 做空，赌 High 1 失败。
    *   **Bar 10 - 18 (Bottom Accumulation)**:
        *   **Bar 12**: High 2 买点（Bar 8 是 High 1），也是 Double Bottom（与 Bar 3/5 区域）。
        *   **Bar 16**: **High 2 / Wedge Bull Flag Entry**。Bar 10 是第一推，Bar 12 是第二推，Bar 16 是第三推（楔形底）。同时也是 Double Bottom Bull Flag。这是高质量的 Stop Order 买入点。
        *   **Bar 18 Breakout**: 强阳线突破小区间，随后出现 ii pattern（Bar 19）。
    *   **Bar 20 - 22 (Top Distribution)**:
        *   **Bar 20**: 抛物线高潮（Parabolic Climax）后的 Two-bar Reversal，做空。
        *   **Bar 22**: Lower High，且是 Bull Trap（多头在区间顶部被套后离场）。
    *   **Bar 26 (Bottom Reversal)**:
        *   Bar 25 下跌看似强劲，但在此位置（区间底部）并未出现连续阴线突破，反而是犹豫的小阴线。
        *   **Bar 26**: High 2 Buy，且是强 Bull Reversal Bar。这是对底部支撑的有效测试（Double Bottom Bull Flag with Bar 12-16 area）。
    *   **Bar 30 - 32 (Final Top)**:
        *   **Bar 30**: 触及 Dueling Lines（趋势线阻力），出现上影线。
        *   **Bar 31**: Doji High 1 at Top = Short Signal。
        *   **Bar 32**: Bear Reversal Bar，Micro Double Top，做空。

*   **专家策略 (Scaling In)**:
    *   在 Bar 10-18 区域，专家交易者会在跌破前一根 K 线低点时使用 Limit Order 买入（如低于 Bar 10, 13, 15），并随着价格下跌加仓，利用胜率优势（70-80%）进行剥头皮。

---

> [!math] 交易方程：区间策略选择
>
> | 策略类型 | 入场方式 | 胜率 | 风险 | 适用人群 |
> | :--- | :--- | :--- | :--- | :--- |
> | **Stop Entry** (顺势) | 等待反转 K 线确立，突破高/低点入场 | 中 (50-60%) | 低 (明确止损) | **初学者/大多数人** |
> | **Limit Entry** (逆势) | 在突破前高/前低时挂单反向操作 | 高 (60-80%) | 高 (需宽止损/加仓) | **专家/资金充裕者** |
>
> *注：在区间中，如果使用 Stop Entry，必须确保 Reward >= Risk（例如 risking 2 points to make 2 points）。如果使用 Limit Entry，通常胜率较高但单笔盈亏比较低。*