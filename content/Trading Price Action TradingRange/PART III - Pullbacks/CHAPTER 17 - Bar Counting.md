---
title: "CHAPTER 17 - Bar Counting: High and Low 1, 2, 3, and 4 Patterns and ABC Corrections"
tags: [PriceAction, BarCounting, Setups, MarketStructure, ABC]
order: 22
---

> [!math] 交易者方程：计数与概率
>
> | 信号类型 | 环境 | 胜率 | 风险 | 策略 |
> | :--- | :--- | :--- | :--- | :--- |
> | **H1 / L1** | 强趋势 Spike | 高 | 低 (紧止损) | 积极入场 |
> | **H1 / L1** | 震荡 / 弱趋势 | 低 | 高 | **禁止交易**，等待 H2/L2 |
> | **H2 / L2** | 趋势回调至 EMA | 极高 | 中 | 最佳 Swing 交易点 |
> | **H2 / L2** | 交易区间边缘 | 低 | 高 | **反向交易** (Fade) |
> | **H3 / L3** | 通道 / Wedge | 高 | 中 | 反转交易 (Reversal) |
> | **H4 / L4** | 复杂修正 | 中 | 中 | 若失败则是强反转信号 |

## 3. 核心技术细节
1.  **Stop Run (止损猎杀)**: 信号棒如果是小 Doji，入场后很容易回调打掉 1 tick 的止损。**对策**：将止损放宽至信号棒外 2-3 ticks，或使用资金管理止损（如 2 points）。
2.  **Counting Reset (计数重置)**: 
    *   如果出现强趋势极值（Breakout to new high/low），计数通常重置。
    *   如果回调演变成宽幅震荡，之前的计数失效，需等待新的清晰形态。
3.  **Failed Failure**: 
    *   High 2 失败（跌破 H2 低点）= 强空头信号。
    *   Low 2 失败（突破 L2 高点）= 强多头信号。
    *   High 4 失败 = 趋势可能反转为熊市。
    *   Low 4 失败 = 趋势可能反转为牛市 (见 Figure 17.6)。
