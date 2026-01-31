---
title: "CHAPTER 28 - Entering on Limits"
tags: [PriceAction, LimitOrders, Entry, ScalingIn, TraderMath]
order: 35
---
> [!abstract] 核心逻辑：Limit Order 入场 (逆势挂单)
> **Limit Entry (限价单入场)** 是在价格反向运动时买入或卖出。这通常意味着你在**赌市场反转**。
> *   **专家游戏**：虽然这能获得更好的入场价格，但你是在接飞刀。成功需要极高的图表阅读能力和资金管理（如 Scaling In）。
> *   **与 Stop Entry 对比**：
>     *   **Stop Entry**：顺势动能，胜率较高，价格较差。
>     *   **Limit Entry**：逆势反转，胜率较低，价格较好，需要更宽的止损。
> *   **核心场景**：Limit Order 最适用于 **Trading Range (Fade Extremes)** 和 **Weak Trends (Fade Breakouts)**。

## 1. 为什么使用 Limit Orders?

### A. 价格优势
*   如果你确信市场处于 Trading Range，在支撑位下方买入比等待反转确认能获得更好的盈亏比。
*   在强趋势的深度回调中，Limit Order 买入可以减少止损距离。

### B. 机构行为
*   机构无法在 Stop Order 位置（突破点）全部成交，他们必须使用 Limit Order 在区间内慢慢建仓 (Scale In)。
*   你的 Limit Order 本质上是在模仿机构的“低买高卖”行为。

---

## 2. 适合 Limit Entry 的高胜率场景

### A. Trading Range (Fade Extremes)
*   **Buy Low**: 在区间底部的 Bear Spike 收盘价挂单买入，或在 Swing Low 下方挂单买入。
*   **Sell High**: 在区间顶部的 Bull Spike 收盘价挂单卖出，或在 Swing High 上方挂单卖出。
*   **Fade Breakouts**: 赌突破失败。例如，在区间突破 K 线的收盘价反向开仓。

### B. Strong Trend Pullbacks
*   **Buy Limit @ Prior Low**: 在强牛市中，如果出现 High 1 信号，可以在前一根 K 线的低点挂单买入（赌空头突破失败）。
*   **Buy Limit @ EMA**: 在强趋势中，第一次回撤至 EMA 时挂单买入。

### C. Scalps (Fading Weak Signals)
*   **Fade Weak Stop Entries**: 如果看到一个很弱的 High 1 Buy Signal（如在 Bear Trend 中），可以在该信号棒的高点上方挂 **Sell Limit**。因为你预期那些在该位置买入 Stop Order 的多头会被套住。

---

## 3. Limit Order 的风险管理：Scaling In

使用 Limit Order 意味着你入场后市场可能继续对你不利。**Scaling In (分批加仓)** 是配套的生存法则。

*   **策略**：
    1.  初始仓位减半。
    2.  如果市场继续反向运行（例如下跌 4-8 ticks），在更低的位置加仓。
    3.  **出口策略**：当价格回到**第一笔入场价**时，全部平仓。
        *   结果：第一笔保本，第二笔获利。
*   **警告**：这需要宽止损和足够的资金。如果市场进入强劲的 Breakout Mode，必须止损，不能死扛。

---

## 4. 案例图解解析

### Figure 28.1：Limit Order 实战

![[Trading Price Action TradingRange/Images/nc28f001.jpg]]

*   **Bar 3 Buy Limit**: 强上涨后的 Doji，未能触及 EMA。激进多头在 Bar 3 低点下方挂单买入，赌测试 EMA。
*   **Bar 6 Sell Limit**: Bar 5 跌破 EMA 后收在低位，空头在 Bar 6 高点挂单做空，赌 Low 2 Short。
*   **Bar 12 Buy Limit**:
    *   **背景**: 底部 Tight Trading Range，Double Bottom Bull Flag (Bar 10-11)。
    *   **操作**: 在 Bar 11 低点附近挂单买入。
    *   **逻辑**: 风险极小（止损在 Bar 11 低点下方几 tick），潜在回报巨大（测试区间顶部）。这是一个 50% 胜率但盈亏比极佳的交易。

### Figure 28.2：清淡市场的 Limit Order

![[Trading Price Action TradingRange/Images/nc28f002.jpg]]

*   **Bar 8 Buy Limit**: 市场进入 Bull Micro Channel。多头在每一根 K 线的低点挂单买入（赌回调幅度极小）。
*   **Bar 11/12 Buy Limit**: 强趋势中的 High 1/2，多头在 Bar 11/12 低点挂单买入。
*   **Bar 17 Sell Limit**: 在 Bar 14 Bear Spike 后的反弹中，空头在 Bar 14 高点下方挂单做空（Lower High）。

### Figure 28.3：Scaling In 的应用

![[Trading Price Action TradingRange/Images/nc28f003.jpg]]

*   **Bar 4 Area**: 巨大的 Bear Channel Bottom。多头在 Bar 4 低点下方分批挂单买入 (Scale In)，赌反弹。
*   **Bar 10**: 突破 Bull Flag 后回踩。多头在 Bar 7 高点附近挂单买入。
*   **Bar 16/18**: 强趋势中的 Trend Line Test，多头直接挂单买入。

### Figure 28.4：Fade Trend Lines

![[Trading Price Action TradingRange/Images/nc28f004.jpg]]

*   **Bar 6 & 10**: 价格测试 Bear Trend Line。激进交易者挂 Limit Order 做空。
*   **Better Strategy**: 等待价格触及趋势线后，出现反转 K 线（如 Bar 7 Low 2），再使用 Stop Order 入场。Limit Order 虽然价格好，但容易被强突破打损。

---

> [!math] 交易者方程：Limit Order
>
> $$ \text{Expectancy} = (\text{High Probability of Small Scalp}) - (\text{Low Probability of Large Loss}) $$
>
> *   **优势**：由于你是“提供流动性”的一方，你买在 bid，卖在 ask，通常能获得更好的执行价格。
> *   **劣势**：一旦市场进入强劲的单边趋势（Spike），逆势 Limit Order 会遭受巨大亏损。**必须识别 Trend From Open 或 Strong Breakout，并避免在此时逆势挂单。**