---
title: "CHAPTER 29 - Protective and Trailing Stops"
tags: [PriceAction, TradeManagement, RiskManagement, StopLoss, TrailingStop]
order: 36
---
> [!abstract] 核心逻辑：防守与进攻的止损 (Protective & Trailing Stops)
> *   **必然性**：大多数交易的胜率最高只有 60%，因此必须为那 40% 的失败情况制定计划。**止损单 (Protective Stop)** 必须在市场中实际挂出，而非仅仅存在于脑海中。
> *   **类型**：
>     *   **Price Action Stop**：基于图表结构（如信号棒极值）。
>     *   **Money Management Stop**：基于固定风险额度（如固定点数）。
> *   **Trailing (移动止损)**：随着趋势发展，将止损移动到新的 Swing Low/High 之外，以锁定利润。
> *   **黄金法则**：如果你现在的持仓让你感到不安，问自己：“如果我现在是空仓，我会在这里开仓吗？”如果答案是否定的，**立即离场**。

## 1. 初始止损设置 (Initial Protective Stop)

### A. 基于价格行为 (Price Action Stop)
这是最常用的方法。
*   **做多**：止损设在**信号棒 (Signal Bar) 最低价下方 1 tick**。
*   **做空**：止损设在**信号棒 (Signal Bar) 最高价上方 1 tick**。
*   **大K线调整**：如果信号棒过大（如 Emini 中 >6 点），为了控制风险，可以：
    1.  减小仓位。
    2.  改用资金管理止损（如固定 3-4 点）。
    3.  将止损设在信号棒中点或 60-70% 回撤处。

### B. 基于资金管理 (Money Management Stop)
*   设定一个最大允许亏损（如 Emini 2 点或 8 ticks）。
*   主要用于信号棒过大，或市场波动剧烈时的“灾难止损”。

---

## 2. 移动止损与管理 (Trailing Stops)

### A. 剥头皮 (Scalping)
*   **目标**：不希望看到任何深度回调。
*   **操作**：一旦入场棒 (Entry Bar) 收盘且为强趋势棒，立即将止损移至**入场棒极值外 1 tick**。如果市场迟疑或回调，立即保本离场。

### B. 波段交易 (Swing Trading)
*   **目标**：捕捉大趋势，愿意忍受回调。
*   **操作**：
    1.  **Breakeven**: 当价格走出一定距离（如 1 倍风险或到达第一个获利目标）后，将止损移至保本位。
    2.  **Trailing**: 随着市场创出新高/新低，将止损移至**最新的 Swing Low/High 外 1 tick**。
    3.  **Trend Change**: 如果市场进入 Trading Range，不要再期待趋势延续，应在区间边缘主动止盈，而不是等待止损被触发生。

### C. 宽止损策略 (Wide Stops)
*   在震荡或趋势初期，为了避免被噪音洗出，Swing Trader 可能会使用更宽的止损（如 Average Daily Range 的 50%）。
*   前提：即便使用宽止损，Reward 潜力仍需 $\ge$ Risk。

---

## 3. 案例图解解析

### Figure 29.1：止损的微调

![[Images/nc29f001.jpg]]

*   **Bar 1 (Short)**: 初始止损在 Signal Bar 高点上方。Entry Bar 强劲，止损可下移至 Entry Bar 高点上方。
*   **Bar 3 (Long)**: 逆势接飞刀。入场后市场下跌，但未触及 Signal Bar 低点止损。随后形成 Double Bottom (Entry Bar Low test)，最终获利。
    *   *教训*：除非止损被触发或前提失效，否则不要因为恐惧而过早离场。
*   **Bar 4 (Short)**: Low 2 @ EMA。止损在 Signal Bar 上方。Entry Bar 是 Doji，**不要**急于收紧止损，给予市场波动空间。
*   **Bar 7 (Long)**: High 2。市场两次测试止损位（Signal Bar 低点和 Entry Bar 低点），均未触及，最终大幅上涨。

### Figure 29.2：强趋势中的移动止损

![[Images/nc29f002.jpg]]

*   **Bar 2/4 Buy**: 初始止损在 Signal Bar 下方。
*   **Trailing**:
    *   Bar 5 创新高 -> 止损移至 Bar 3 低点下方。
    *   Bar 7 创新高 -> 止损移至 Bar 6 低点下方。
    *   Bar 9 创新高 -> 止损移至 Bar 10 低点下方。
*   **Bar 19 (Buy Climax)**: 连续大阳线后出现 Reversal Bar。此时应主动止盈，而不是等待 Trailing Stop 被打掉，因为市场可能进入 Trading Range。

### Figure 29.3：风险与回报的对称性

![[Images/nc29f003.jpg]]

*   **Bar 5 Long**: 市场回调测试了 Bar 7 低点。如果止损在 Bar 5 低点，最大浮亏（Risk）确定。
*   **Symmetry**: 市场随后的上涨幅度（Reward）往往精确等于之前的最大回撤幅度（Risk）。
    *   *原理*：机构算法在确保 Trader's Equation 为正的前提下运作。如果必须承受 X 的风险，它们会追求至少 X 的回报。

### Figure 29.5：不要过早收紧止损

![[Images/nc29f005.jpg]]

*   **Bar 2 Short**: 入场后出现 Doji (Bar 3)。
    *   **错误操作**: 将止损移至 Doji 高点上方。这会导致在 Bar 4 被洗出。
    *   **正确操作**: Doji 是单K线区间，意味着不确定性。应保持初始止损，直到出现强阴线 breakout。
*   **Bar 16 Long**: 入场后接 Doji。同理，保持止损在 Signal Bar 下方，直到 Bar 18 强阳线出现后再移动止损。

---

> [!math] 交易者方程：止损与头寸
>
> $$ \text{Position Size} = \frac{\text{Total Risk Amount (\$)}}{\text{Distance to Stop (Points)} \times \text{Point Value}} $$
>
> *   **原则**：如果是大波动行情（Wide Bars），止损距离变大，必须**减小仓位**以保持总风险恒定。
> *   **Breakeven 悖论**：过早移至保本会降低胜率；过晚移至保本会增加风险。**最佳时机**通常是市场证明了你的方向正确（如突破前期微型高点）之后。