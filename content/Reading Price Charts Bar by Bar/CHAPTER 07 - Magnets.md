---
title: "CHAPTER 07 - Magnets"
tags: [PriceAction, Magnets, MeasuredMove, Trading]
sidebar_order: 7
---

> [!abstract] 核心逻辑
> *   **磁铁效应 (Magnets)**：价格倾向于测试某些关键点位（如趋势线、前高/低、止损位）。
> *   **交易原则**：
>     1.  当市场向磁铁移动时，**顺势交易 (With Trend)**。
>     2.  不要在磁铁处直接逆势挂单（Fade），除非先出现**趋势线突破**且磁铁已被测试或过冲（Overshoot）。
> *   **Measured Moves (等距/测量运动)**：利用第一波推升或震荡区间的中点，预测下一波趋势的目标位。

# Measured Moves (AB = CD)

市场急剧移动后出现回调，通常会形成第二段与第一段幅度相当的走势（AB = CD）。

*   **投影方法**：
    *   **基于回调**：以回调形态的近似中点为轴，预测第二段终点。
    *   **基于突破**：以突破区域的中点（无论是有重叠的 "Fat Area" 还是无重叠的 "Thin Area"）作为整个趋势的 50% 位置进行投影。
*   **用途**：作为持有顺势仓位的目标指引，而非逆势入场的唯一依据。

![[Reading Price Charts Bar by Bar/Images/166-1.jpg]]
> [!note] Figure 7.1 基本测量
> *   **Bar A to B**: 第一段强趋势。
> *   **Bar C**: Higher Low 回调。
> *   **Bar D**: 目标位（Bar A-B = Bar C-D）。
> *   **Bar E**: Higher Low，AD 作为第一段大腿，投影至 F。

![[Reading Price Charts Bar by Bar/Images/167-1.jpg]]
> [!note] Figure 7.2 震荡区间中点投影
> *   **Line B**: 调整至 pullback 震荡区间的中点。
> *   **Target**: 以 Line B 为中轴，将下半部分（Line A）向上翻倍投影。

---

# Breakout Magnets (Thin & Fat Areas)

突破区域往往成为整个趋势的中继点（50%位置）。

*   **Thin Area (稀疏区)**：强动能突破，K线无重叠。其中点往往是 Measured Move 的中轴。
*   **Fat Area (密集区)**：突破后形成的 Trading Range / Flag。多空达成暂时平衡的价格也是中轴。

![[Reading Price Charts Bar by Bar/Images/169-1.jpg]]
> [!note] Figure 7.3 基于 Thin Area 的投影
> *   **Day 1**: Bar 2 到 Bar 4 之间存在 Thin Area（无重叠）。
> *   **Projection**: 无论以 Bar 1 还是 Bar 3 为起点，目标位均在 Line C 和 D 附近实现。
> *   **Bar 8-9**: Double Top Bear Flag。
> *   **Day 2**: Bar 7 与 Bar 8 之间的 Thin Area 中点作为投影依据，目标位 Line F 在收盘前达成。

![[Reading Price Charts Bar by Bar/Images/170-1.jpg]]
> [!note] Figure 7.4 基于 Breakout Flag 的投影
> *   **Bar 2**: 第一段下跌顶点。
> *   **Line C**: Bar 3 附近的 Breakout Flag 中点。
> *   **Target**: Line D（被过冲并导致 EMA 测试）。
> *   **Context**: Bar 2 下跌非常强劲，无趋势线突破，应坚持顺势做空。

![[Reading Price Charts Bar by Bar/Images/171-1.jpg]]
> [!note] Figure 7.5 基于突破中点
> *   **Line B**: Thin Area 中点（Bar 2 突破高点与 Bar 5 回调低点之间）。
> *   **Bar 8**: 精确触及 Measured Move 目标。
> *   **Bar 10**: Lower High，Bar 8 极值测试后的做空机会。

---

# Prior Failed Reversals (前期的失败反转点)

前期失败的反转信号棒（Signal Bars）的高点/低点，往往是未来回调的目标位。

*   **逻辑**：被套的逆势交易者（Trapped Traders）会在价格回到入场价时保本离场（"Thank you, God" exit），这种平仓行为会阻碍价格继续回撤。

![[Reading Price Charts Bar by Bar/Images/172-1.jpg]]
> [!note] Figure 7.6 失败反转点作为磁铁
> *   图示 SPY 月线图。
> *   2000年上涨过程中失败的 Bear Signal Bars 低点，成为下跌趋势的目标。
> *   2003年下跌过程中失败的 Bull Signal Bars 高点，成为反弹的目标。

---

# Other Price Magnets (其他关键磁铁)

除了上述形态，以下价格点位也具有强磁吸效应，**直到被测试或过冲前，不宜轻易逆势操作**：

1.  **Technical Lines**: Trendlines, Trend Channel Lines.
2.  **Extremes**: 昨日高低点（High/Low of Yesterday）、Swing Highs/Lows。
3.  **Patterns**:
    *   **Spike and Channel**: 通道起点（Start of the Channel）通常在几天内被测试。
    *   **Failed Final Flags**: 突破后常回测该旗形。
4.  **Stops (止损盘)**:
    *   巨大 Trend Bar 的反向极值（如大阳线的低点）。
    *   入场信号棒的止损位。
5.  **Values**: 整数关口（如 Dow 12,000, Stock $100）。

![[Reading Price Charts Bar by Bar/Images/174-1.jpg]]
> [!note] Figure 7.7 巨型 Trend Bar 的止损测试
> *   **Bar 1**: 巨大的 Bull Trend Bar（光脚）。多头止损通常放在其低点下方。
> *   **Action**: 市场回调并跌破 Bar 1 低点（运行止损盘），随后在 Bar 2 处反转向上。
> *   **Strategy**: Smart traders 会做空 Inside Bar，但在 Bar 2 反转向上时反手做多（止损盘已被清洗）。