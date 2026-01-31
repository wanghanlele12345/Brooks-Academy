---
title: "CHAPTER 12 - Detailed Day Trading Examples"
tags: [PriceAction, Reversal, Trading, Scalping, ChartPatterns]
sidebar_order: 12
---

> [!abstract] 核心逻辑
> 本章通过极高密度的案例（涵盖日内波段到1分钟超短线），演示了如何将 **Spike and Channel**、**Failed Breakouts**（失败突破）、**M2B/M2S**（均线策略）以及 **Trap**（陷阱）综合运用。
> 
> **关键原则：**
> *   **背景重于信号**：强趋势中的逆势信号往往形成 Flag，而非反转。
> *   **突破测试 (Breakout Test)**：突破后回调测试突破点是高胜率入场位。
> *   **陷阱交易**：利用 Doji 或 Inside Bar 困住一方（如 Bar 12 in Fig 12.3），是极佳的动能反转点。
> *   **分形性质**：价格行为法则在 10,000 tick 图、5分钟图甚至 1分钟图上完全一致。

# TY Futures (10,000-Share Chart)
![[Images/325-1.jpg]]

该案例展示了 **Spike and Channel** 熊市向牛市反转的过程。

*   **Bar 3, 4, 5**: 熊市中测试 EMA 的做空点。
*   **Bar 6**: 熊市趋势通道线 (Trend Channel Line) 刺穿 (Overshoot) + 楔形反转 (Wedge Reversal)。随后的反弹打破了趋势线。
*   **Bar 9 (Key Reversal)**:
    *   对 Bar 6 的 Lower Low 测试。
    *   **Failed Failed Wedge**: Bar 6 的楔形失败后，价格虽创新低，但迅速反转。这是一个强力的买入信号。
*   **Bar 10**: Inside Bar。
    *   结束了第一波微小回调。
    *   **Context**: 经历了 Spike (Bar 2) & Channel (Push 2, 6, 9)，预期会有两段式上涨回到通道起点 (Bar 3 High)。
*   **Bar 11**: **M2B** 买入架构。突破趋势线后的第一次回调 (First Pullback)。

---

# EURUSD (5-Minute)
![[Images/326-1.jpg]]

展示了强趋势后的复杂调整与 **Tight Trading Range (TTR)** 的处理。

*   **Bar 1-2 (Context)**: 强多头腿 (8 bars 无熊烛)。预期会有 Higher Low 测试 Bar 2 高点。
*   **Bar 3**: **EMA Gap Bar** + 针对 Bar 1 起涨点的 Breakout Test。随后形成三角形收敛至 TTR。
*   **Bar 8**: 失败的向上突破 (False Breakout)，形成 **Double Top Bear Flag** (与 Bar 6)。
*   **Bar 9**: 位于 Outside Bar 中部的 **Breakout Pullback (BP)** 做空点。
*   **Bar 10**: 第二个 BP 做空点。
    *   *Rule*: **下跌趋势中不要在 Doji (单K线区间) 上方买入。**
*   **Bar 11, 12**: **M2S** 做空架构。持续做空直到趋势明确反转。
*   **Bar 13**: **ii setup**。趋势通道线刺穿后的反转。
*   **Bar 15**: Three Pushes Up + First EMA Gap Bar。
*   **Bar 16**: **ii setup** + **Double Bottom Bull Flag** (与 Bar 14)。大阴线诱空陷阱 (Bear Trap)，随后反转向上。

---

# Soybeans (5-Minute)
![[Images/327-1.jpg]]

重点在于识别 **Failed Final Flag** 和利用 **Trapped Traders**。

*   **Bar 2**: Bar 1 Spike 后的交易区间。
*   **Bar 3 (Short)**: **Failed Final Flag**。Bar 1 下跌后的第二段微小反弹试图突破 TR 顶部失败。
*   **Bar 4**: 熊市微观通道刺穿 (Overshoot) 并反转。
*   **Bar 6**: **ii setup** (收盘看涨)，做多入场点。
*   **Bar 9**: **Wedge / Low 4**。试图测试 Bar 3 高点但失败 (Imperfect Double Top Bear Flag)。
*   **Bar 11**: 巨大的阳线反转 (Bull Reversal Bar)。
*   **Bar 12 (Key Short)**:
    *   Inside Bear Trend Bar。
    *   **Trap**: 无法突破 Bar 11 高点，困住了在 Bar 11 追高的多头。极佳的做空点。
*   **Bar 13**: Breakout Pullback。

---

# Crude Oil (High Momentum)
![[Images/328-1.jpg]]

*   **Bar 1**: High 1 Breakout Pullback。
*   **Bar 3**: **High 2**。尽管有 Barb Wire 形态，但因 Bar 2 并非高潮 (Climax) 且动能强劲，仍可做多。
*   **Bar 5**: **Three Push High / Climax**。高潮后通常接两段式回调 (Two Countertrend Legs)。
*   **Bar 7**:
    *   针对 Bar 5 的两段式 **Breakout Test**。
    *   **Lower High** + **Up Down Twin** 卖出形态。
    *   价格在 EMA 处被拒绝。

---

# Emini (1-Minute Scalping)
> [!NOTE] 极速交易
> 下图展示了价格行为在 1分钟图上的有效性。此类交易要求极快的反应速度，核心在于连续识别标准形态。

![[Images/329-1.jpg]]
![[Images/329-2.jpg]]

*   **Bar 1**: Failed Low 2 $\rightarrow$ 等效于 **High 2 Long**。
*   **Bar 2**: Wedge Short + Failed Bull Flag Breakout。
*   **Bar 3**: Breakout Pullback (Short)。
*   **Bar 4**: **Breakout Test (Short)**。尽管创出 Higher High，但属于突破测试。
*   **Bar 5**: Lower High + **M2S** (EMA下方)。
*   **Bar 6**: Wedge Long + Expanding Triangle Bottom。
*   **Bar 7**: Failed Trendline Breakout (Short)。
*   **Bar 8**: 趋势线跌破后的 Two-legged Lower Low。
*   **Bar 10**: Wedge + Lower Low (在震荡日背景下)。
*   **Bar 11**: 趋势线跌破后的 First Pullback (**M2B Long**)。
*   **Bar 13**: Wedge Short + Double Top Bear Flag。
*   **Bar 14**: Failed Breakout + Double Bottom Bull Flag。
*   **Bar 15**: High 2 (Bar 13 后紧接 Breakout Test)。
*   **Bar 17**: Wedge + Failed Test of High of Day (HOD) $\rightarrow$ Lower High。
*   **Bar 19**: Bear Low 2 (**M2S**) + Five-Tick Failure (困住 Bar 18 买家)。
*   **Bar 20**: 当日新低 (New LOD) 仅1个tick后反转 + Wedge。
*   **Bar 22**: 趋势线跌破后的 Two-legged Pullback (Higher Low)。
*   **Bar 23**: Failed Trendline Break + Double Bottom Bull Flag。