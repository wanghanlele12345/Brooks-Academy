---
title: "CHAPTER 13 - Twenty Gap Bars"
tags: [PriceAction, Trend, MovingAverage, Setup, 20GapBars]
order: 18
---
> [!abstract] 核心逻辑
> **20 Gap Bars** 是强趋势的重要标志。
> *   **定义**：市场连续 20 根或更多 K 线没有触碰移动平均线（20 EMA）。
> *   **含义**：这代表趋势非常强劲，但也暗示行情可能短期过热（Overdone）。
> *   **策略**：这种形态下的第一次回调触及 EMA（First Touch），通常是极高胜率的顺势入场点，目标是测试趋势极值（Test of Extreme）。

---

# 1. 形态识别与原理

### 识别标准
*   **Gap**: K 线的最高价（熊市）或最低价（牛市）完全在 EMA 的一侧，与 EMA 之间有间隙。
*   **Duration**: 这种状态持续 20 根 K 线以上（约 2 小时）。
*   **Context**: 只要没有出现明确的趋势反转信号，这就是强趋势的延续形态。

### 市场心理
*   **FOMO**: 踏空的交易者一直在等待回调买入，但回调迟迟不来。
*   **Value**: 当价格终于回到 EMA（均值）时，被视为极佳的折扣价。
*   **Resumption**: 强趋势具有惯性，即使回调较深，市场仍倾向于再次测试极值。

---

# 2. 交易策略

### 顺势入场 (With-Trend Entry)
1.  **First Touch**: 第一次回调触碰或接近 EMA 时。
    *   **Aggressive**: 在 EMA 处挂 Limit Order。
    *   **Prudent**: 等待价格触碰 EMA 后出现反转 K 线（Reversal Bar），在 High/Low 处挂 Stop Order 入场。
2.  **Moving Average Gap Bar**: 如果回调穿过 EMA，形成反向的 Gap Bar（如牛市中 K 线 High 低于 EMA），这是更深的回调。
    *   **Setup**: 在第一个反向 Gap Bar 的高点（牛市）上方买入。如果失败，等待第二个信号。不要尝试第三次。

### 获利了结
*   目标通常是测试趋势的前期极值（Trend Extreme）。
*   保留部分仓位（Swing），因为强趋势可能延续得比预期更远。

### 失效场景 (Failure)
*   **Climax Reversal**: 如果 20 Gap Bars 之前是一个巨大的高潮（Parabolic Climax），那么回调触及 EMA 可能只是大级别调整的第一步（Leg 1），此时做多风险较大（需等待 Two-Legged Correction）。
*   **Trend Reversal**: 如果在触及 EMA 前已经出现了明显的趋势反转信号（如 Major Trend Line Break + Lower High），则该形态失效。

---

# 3. 图表案例分析

### Figure 13.1: 标准的 20 Gap Bars Sell
![[Trading Price Action TradingRange/Images/nc13f001.jpg]]
*   **Bar 11**: 熊市中第一次触及 EMA。虽然反弹强劲（6 根阳线），但背景是强熊市。
*   **Setup**: 交易者在 EMA 附近寻找做空机会。
*   **Bar 13**: Second Entry Short。市场随后测试并跌破了 Bar 10 的低点。

### Figure 13.2: 高潮后的陷阱 (Climax Trap)
![[Trading Price Action TradingRange/Images/nc13f002.jpg]]
*   **Bar 10**: 抛物线式上涨（Parabolic Climax）。
*   **Trap**: 虽然此前有 20+ Gap Bars，但 Bar 13 触及 EMA 时不宜立即做多，因为高潮后通常有两段式回调（Two-Legged Correction）。
*   **Result**: 市场在 Bar 13 短暂停顿后继续下跌，直到完成两段式回调（Bar 13 & 15）。

> [!tip] 交易心法
> **20 Gap Bars** 是“强趋势”的代名词。在这种环境下，哪怕看起来很弱的反转信号（只要是顺势的）通常都能奏效。**Fade the first touch of the EMA!**