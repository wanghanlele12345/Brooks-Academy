---
title: "CHAPTER 12 - Double Top Bear Flags and Double Bottom Bull Flags"
tags: [PriceAction, DoubleTop, DoubleBottom, BullFlag, BearFlag, Setup]
order: 17
---
> [!abstract] 核心逻辑
> 双顶/双底不仅是反转形态，更是极为可靠的**顺势延续形态**（Continuation Patterns）。
> *   **Double Bottom Bull Flag**: 牛市回调形成的双底，本质是 Strong High 2 Buy Setup。多头在 Swing Low 附近防守，空头第二次尝试推动价格下跌失败。
> *   **Double Top Bear Flag**: 熊市反弹形成的双顶，本质是 Strong Low 2 Sell Setup。空头在 Swing High 附近防守，多头第二次尝试推动价格上涨失败。
> *   **Breakout Mode**: 如果形态演变为小交易区间，顺势突破的概率远大于逆势反转。

---

# 1. 形态原理与心理博弈

### 牛市中的双底牛旗 (Double Bottom Bull Flag)
*   **形成过程**: 牛市回调 -> Leg 1 Down -> 反弹 -> Leg 2 Down (测试 Leg 1 低点)。
*   **多头心理**: 许多多头将追踪止损（Trailing Stop）设在最近的 Swing Low 下方。当价格再次测试该低点时，多头会积极买入防守，防止止损被触发。
*   **空头失败**: 空头尝试制造 Lower Low 以扭转趋势，但在同一价位两次失败，这通常意味着市场将向阻力最小的方向（上涨）运行。
*   **Failed Low 2**: 双底牛旗本质上是一个 Failed Low 2（空头做空失败），因此是强力的买入信号。

### 熊市中的双顶熊旗 (Double Top Bear Flag)
*   **形成过程**: 熊市反弹 -> Leg 1 Up -> 回落 -> Leg 2 Up (测试 Leg 1 高点)。
*   **空头心理**: 空头在 Swing High 附近积极做空，防守止损位。
*   **多头失败**: 多头两次尝试突破 Swing High 失败，表明买盘枯竭，趋势将恢复下跌。

---

# 2. 交易策略

### 识别与入场
*   **Trend Context**: 必须确认大趋势方向。只有在牛市中做双底，熊市中做双顶。
*   **Leg 2 Confirmation**: 第二只脚（Leg 2）不需要与第一只脚完全同价，稍微 Overshoot 或 Undershoot 均可。
*   **Entry**:
    *   **Aggressive**: 在 Leg 2 形成的 Reversal Bar 突破时入场。
    *   **Conservative**: 等待形态突破颈线（Neckline）后，买入 Breakout Pullback。

### 失败形态的演变 (Failed Flags)
*   **Wedge Flag**: 如果双底牛旗向下突破（Failed Double Bottom），但随即反转向上，这构成了 **Wedge Bull Flag**（三推：Leg 1, Leg 2, Failed Breakout）。这是一个更强的反转买入信号。
*   **Measured Move**: 如果形态突破失败并真的反转（如双底牛旗变成双底反转下跌），目标位通常是基于形态高度的 Measured Move。

---

# 3. 图表案例分析

### Figure 12.1: 失败的双顶熊旗
![[Trading Price Action TradingRange/Images/nc12f001.jpg]]
*   **Bar 2**: Double Top Bear Flag。市场尝试下跌但失败，随后转为 Small Head and Shoulders Bottom。
*   **Bar 7**: 另一个潜在的双底/双顶区域。由于此前动能向上（Bar 3-6），预期向上突破（Double Bottom Bull Flag）。

### Figure 12.2: 强趋势中的双底牛旗
![[Trading Price Action TradingRange/Images/nc12f002.jpg]]
*   **Bar 5 & 7**: 构成 Double Bottom Bull Flag。
*   **细节**: 尽管 Bar 6 创了新高，Bar 7 仍可视作对 Bar 5 的测试。这是一个非常可靠的 High 2 Buy Setup。
*   **After Bar 3**: 两个小回调构成了微型的 Double Bottom Bull Flag (Failed Low 2)。

### Figure 12.6: 连续的双底牛旗与 Measured Move
![[Trading Price Action TradingRange/Images/nc12f006.jpg]]
*   **Bar 1 & 8**: 大级别的 Double Bottom Bull Flag。Bar 10 的强势突破预示着 Measured Move。
*   **Bar 11 & 14**: 另一个 Double Bottom Bull Flag（Leg 1 是 Bar 11, Leg 2 是 Bar 14）。
*   **Bar 16 & 18**: 又一个 Double Bottom Bull Flag。
*   **特征**: 在强趋势日（Trend Day），这种形态反复出现，是加仓或重新入场的最佳时机。

### Figure 12.7: 失败的双底演变为楔形
![[Trading Price Action TradingRange/Images/nc12f007.jpg]]
*   **Bar 1 & 3**: 尝试形成 Double Bottom，但 Bar 3 跌破了 Bar 1。
*   **Bar 4**: 跌破失败并反转。
*   **形态**: Bar 1, 3, 4 构成了 **Wedge Bull Flag**（Three Pushes Down）。
*   **Bar 6, 8, 9**: 同样的逻辑，Failed Double Bottom 演变为 Wedge Bull Flag。

> [!tip] 交易心法
> **Trend Continuation > Reversal**: 在趋势中，即使形态像反转（如双顶），它更大概率是中继形态（Bear Flag）。直到主要趋势线被有效跌破前，永远优先假设它是 Flag。