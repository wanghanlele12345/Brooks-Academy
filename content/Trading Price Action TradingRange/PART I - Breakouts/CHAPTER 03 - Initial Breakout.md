---
title: "CHAPTER 3 - Initial Breakout"
tags: [PriceAction, Breakout, Entry, SpikeAndChannel, Trap]
order: 6
---
> [!abstract] 核心逻辑
> 成功的突破（Breakout）通常伴随着**紧迫感 (Urgency)** 和**连续的趋势 K 线**。
> *   **心理难点**：强突破需要极快的决策和比平时更大的止损（风险），导致多数人选择等待回调，结果踏空。
> *   **入场策略**：如果你感到恐惧（像跳水一样），这往往是正确的交易。闭上眼，捏住鼻子，跳下去（市价买入小回调）。
> *   **失败信号**：突破后的跟随 K 线如果是 Doji、Inside Bar 或反向趋势 K 线，突破可能失败。

---

# 1. 突破的识别与入场

### 强突破特征 (Strong Breakout)
*   **连续趋势 K 线**：单根大实体 K 线或连续几根重叠极少的趋势 K 线。
*   **无回调 (No Pullback)**：Limit Order 买入前一根 Close 的交易者无法成交（被困在场外），被迫市价追涨。
*   **Urgency (紧迫感)**：市场快速远离，给交易者一种“不买就来不及”的感觉。

### 入场技巧 (Entry Techniques)
1.  **Immediate Entry**: 突破 K 线收盘后，若下一根 K 线直接高开高走，立即市价追入或挂 Limit Order 买入微小回调（1-2 ticks）。
2.  **Small Pullback**: 在强 Spike 后，利用 High 1 / High 2 的小级别回调入场。
3.  **Risk Management**: 
    *   风险较大（止损需设在 Spike 底部），因此**必须缩小仓位**。
    *   如果是强趋势，胜率极高（>70%），正期望值足以抵消大止损。

---

# 2. 测量目标与获利了结 (Measured Moves)

突破通常伴随 Measured Move，这是寻找获利平仓点的关键。

### 常见的测量方法
1.  **Spike Low/Open to Close/High**: 测量 Spike 的高度，从 Spike 顶部向上投射等距离。
2.  **Breakout Point**: 从突破点开始测量。
3.  **Gap**: 利用中间的 Gap 作为测量中点。

> [!math] Measured Move Probability
> 在强 Spike 形成后，市场有 >60-70% 的概率达到基于 Spike 高度的测量目标位。

---

# 3. 陷阱与反向交易 (Traps & Fading)

### 失败的突破 (Failed Breakouts)
*   **现象**：突破 K 线后紧接 Doji、Inside Bar 或反向 K 线。
*   **后果**：可能演变为 Trading Range 或反转。

### Candle Pattern Traps (蜡烛图形态陷阱)
*   **场景**：在强熊市趋势中，出现带长下影线的大阳线（看似反转信号）。
*   **陷阱逻辑**：
    *   在熊市中，大阳线往往意味着价格“太贵”，而非买入机会。
    *   如果在紧凑的熊市通道中没有先前的趋势线突破，这种 K 线是**完美的做空陷阱**。
    *   **操作**：在这些“看涨”K 线低点下方放置 Sell Stop，捕猎被套的多头。

---

# 4. 图表案例分析

### Figure 3.1: 连续 K 线确认强突破
![[Trading Price Action TradingRange/Images/nc03f001.jpg]]
*   **特征**：连续多根 Trend Bar，且每根 Low 都不低于前一根 Close（Limit Order 买不到）。
*   **Bar 6**: Inside Bar，强趋势中的第一次停顿，是绝佳的 High 1 买点。
*   **结论**：这种强度的 Spike 意味着 >70% 的概率会有 Measured Move。

### Figure 3.2: 成功突破后的跟随
![[Trading Price Action TradingRange/Images/nc03f002.jpg]]
*   **Bar 1**: 突破小楔形，实体大。
*   **Bar 2**: Inside Bar，既是 Failed Breakout 也是 Breakout Pullback 信号。
*   **Bar 7 (Outside Up)**: 
    *   Bar 6 跌破由 Bar 4 形成的低点，但 Bar 7 立即反包（Outside Up）。
    *   **逻辑**：强空头不愿在支撑位附近做空，缺席导致市场快速反弹。多空双方此时都转为看涨（空头平仓，多头买入），胜率 >60%。

### Figure 3.3: 忽略新闻，只看图表
![[Trading Price Action TradingRange/Images/nc03f003.jpg]]
*   **Bar 1**: 强趋势阳线陷阱。早盘买入者被套，跌破 Bar 1 低点后引发多头平仓（做空燃料）。
*   **Bar 3 & 5 (Candle Trap)**: 
    *   巨大的带长下影线 K 线（Gravestone Doji）。
    *   新手视为反转信号买入，老手视为**Bear Trend 中价格过高**的做空机会。
    *   **入场**：在这些 K 线低点下方做空。
*   **Bar 7**: 
    *   Barbwire 区域的 Failed Breakout。
    *   连续第三次 Sell Climax 后的反转，通常导致 10-bar Two-legged Correction。

---

> [!tip] 交易心法
> **不要关注新闻**。新闻只会增加思考的复杂度。图表已经通过 K 线形态（如 Bar 1 的陷阱或 Bar 7 的反转）告诉你机构在做什么。