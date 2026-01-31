---
title: "CHAPTER 5 - Failed Breakouts, Breakout Pullbacks, and Breakout Tests"
tags: [PriceAction, Breakout, Reversal, Setup, Pullback]
order: 8
---
> [!abstract] 核心逻辑
> 市场的所有行为都可以归纳为：突破（Breakout） -> 失败（Failed Breakout） -> 反转（Trend Reversal）或 回调继续（Breakout Pullback -> Resumption）。
> *   **失败的失败是成功**：如果突破后的“反转尝试”失败了（Failed Breakout Fails），它就变成了 **Breakout Pullback**，这是最可靠的顺势交易形态之一。
> *   **测试原理**：所有突破最终都会被测试（Breakout Test）。测试成功的标志是买家（在牛市突破后）在突破点附近再次进场，而不是让价格跌破该点。

---

# 1. 突破后的路径演变

当一个 Breakout 发生后，市场会进入测试阶段：

1.  **Breakout Test Succeeds (Trend Resumes)**:
    *   价格回踩突破点（或 Entry Price），多头获利了结，空头尝试做空。
    *   **关键点**：如果多头在回调中再次买入（Defend the price），价格止跌回升，突破测试成功。
    *   **形态**：Breakout Pullback (BPB)，Cup and Handle。
    *   **GAP**：如果回调不触及突破点，形成 Measuring Gap，暗示极强趋势。

2.  **Breakout Fails (Trend Reversal)**:
    *   突破 K 线弱（小实体、长影线），随后紧跟强反向 K 线。
    *   多头止损离场，空头加仓。
    *   **后果**：价格跌破突破点，并在下方持续运行。

---

# 2. 常见的测试目标位 (Testing Targets)

突破发生后，回调通常会测试以下价位：
*   **Breakout Point**: 突破发生的具体价位。
*   **High of Signal Bar**: 突破 K 线的前一根 K 线高点。
*   **Low of Entry Bar**: 突破进场 K 线的低点。
*   **Spike Top**: 在 Spike and Channel 形态中，通道跌破后通常回测 Spike 顶部。
*   **Moving Average / Trend Lines**: 均线和趋势线支撑。

---

# 3. 交易策略：Breakout Pullback (BPB)

**这是本书最核心的顺势交易策略之一。**

### 识别 BPB
*   **Failed Failure**: 市场尝试反转突破（Failed Breakout），但反转动能不足（只持续 1-2 根 K 线），随即恢复原趋势。
*   **形态**：
    *   **High 1 / High 2**: 牛市突破后的第一次或第二次回调。
    *   **Small Trading Range**: 在高位横盘整理（Time Correction），这也是一种 Pullback。

### 交易时机
*   **Immediate Test**: 突破后的下一根 K 线就回踩。
*   **Delayed Test**: 20 根 K 线后的回踩测试。
*   **Implicit Breakout**: 即使没有创新高，接近前高后的回调也应视为 BPB 处理。

### 止损管理 (Breakeven Stops)
*   **现象**：许多强趋势的回调会精确触及 Breakeven Stop（入场价）。
*   **对策**：
    *   **宽松止损**：如果是强趋势，允许回调超过入场价一定幅度（如 10-30 cents），避免被精确扫损。
    *   **再次入场**：如果被扫损，但趋势结构未坏，在 Test Bar 恢复方向时重新入场（Re-enter）。

---

# 4. 图表案例分析

### Figure 5.1: 趋势末端的突破 (Climax vs Breakout)
![[Trading Price Action TradingRange/Images/nc05f001.jpg]]
*   **Bar 4 (Sell Climax)**: 巨大的阴线突破，可能是最后的空头投降。随后的反弹（Bar 8）确认了这是一个 Climax 导致的两段式回调。
*   **Bar 19 (Buy Climax)**: 牛市中的大阳线突破，成功突破了楔形通道，但随后进入震荡。
*   **逻辑**：连续的高潮（Consecutive Climaxes）通常导致至少 10 根 K 线、两段式的修正。

### Figure 5.2: 突破回调作为最佳入场
![[Trading Price Action TradingRange/Images/nc05f002.jpg]]
*   **Bar 8**: 强力 Bear Spike，看似 Failed Breakout，但其实是 Breakout 的开始。
*   **Bar 10 (Breakout Pullback)**: Low 2 Short @ EMA。这是最可靠的顺势做空点。
*   **Bar 12 (Failed Breakout of Low)**: 尝试跌破 Bar 1 低点失败，多头反攻。
*   **Bar 31 (Implicit BPB)**: 接近新高后的回调，视为 BPB 买入。

### Figure 5.6: 连续的 BPB 交易 (Google)
![[Trading Price Action TradingRange/Images/nc05f006.jpg]]
*   **Bar 5**: High 1 Pullback。由于动能极强，回调甚至未触及 EMA。
*   **Bar 6**: High 2 Pullback。强趋势中 High 2 低点有时比 High 1 还高。
*   **Bar 9/10/12**: 熊市反转后的 Low 2 / Breakout Pullback Short。
    *   **Bar 14/15**: Low 2 Short (Outside Bar)，特别是 Bar 15 利用了被套的多头（Trapped Bulls）。

### Figure 5.9: Final Flag & Double Bottom
![[Trading Price Action TradingRange/Images/nc05f009.jpg]]
*   **Bar 2**: Final Bear Flag。
*   **Bar 3 (Double Bottom)**: 跌破 Bar 1 后立即拉起。
*   **视角转换**：回过头看，Bar 2 的 Bear Flag 其实是新牛市的第一波上涨（First Leg Up），而 Bar 3 的下跌是 Bull Breakout Pullback。
*   **特征**：Bar 3 之后的 Spike 直接冲过了 Bar 2 高点，毫无停顿，表明趋势极强。

---

> [!tip] Final Flag Concept
> 趋势的最后一个旗形（Final Flag）往往是反转后新趋势的第一条腿（First Leg）。
> *   **Bear Trend -> Final Flag (Up) -> New Low (Trap) -> Bull Trend**
> *   此时，那个“旗形”实际上构成了新通道的一部分。