---
title: "Chapter 13: Daily, Weekly, and Monthly Charts"
tags: [PriceAction, SwingTrading, HigherTimeFrame, GapTrading, Volume]
sidebar_order: 13
---

> [!abstract] 核心逻辑
> *   **分形本质 (Fractal Nature)**：价格行为法则适用于所有时间周期（日线/周线/月线与5分钟图逻辑一致）。
> *   **交易者方程调整**：大周期意味着更大的止损幅度，必须显著降低头寸规模 (Position Size) 以维持风险恒定。
> *   **缺口策略 (Gap Strategy)**：大周期信号常导致次日跳空。日内交易者应等待缺口回补 (Gap Pullback) 后进场，而非追单。
> *   **巨量反转 (Volume Capitulation)**：巨量下跌必须配合**强反转K线**才构成买点，仅有巨量通常意味着趋势延续。

# Higher Time Frame Principles

1.  **分形一致性**：图表形态在所有周期通用（如 Fig 13.1 显示 1933 年道指与现代图表无异）。
2.  **头寸管理**：
    *   大周期信号棒 (Signal Bar) 幅度大 $\rightarrow$ 止损宽 $\rightarrow$ 必须减少合约数量。
    *   隔夜风险 (Overnight Risk) 可通过期权策略或减仓对冲。
3.  **缺口处理**：
    *   若开盘跳空，寻找 Gap Pullback（回调测试缺口区域）。
    *   **Buy Setup**: 向上跳空 $\rightarrow$ 盘初回落 $\rightarrow$ 在缺口处获得支撑 $\rightarrow$ 突破回调高点做多。

---

# Detailed Analysis Examples

## Historical & Fractal Proof
![[Images/333-1.jpg]]
**Figure 13.1 (Dow 1933-1934)**：价格行为的历史一致性。
*   **Bar 2**: Low 2，跌破趋势线。
*   **Bar 3**: **Failed Final Flag** 反转，趋势线跌破后的 Lower Low Test。
*   **Bar 6**: **Wedge Top**，导致两段式深幅回调 (至 Bar 8)。
*   **Bar 11**: High 2 **Breakout Pullback (BP)**，突破 Failed Double Top Bear Flag (Bar 7 & 9) 后的回踩。
*   **Bar 18**: **Failed Failed Wedge** (楔形向下突破失败，随后向上突破失败)，强力反转信号。也是对 Bar 14 的 Lower High Test。

## Gap Execution
![[Images/334-1.jpg]]
**Figure 13.2 (AAPL Daily vs 5-min)**：日线信号如何转化为日内执行。
*   **Daily Chart (Bar 2)**: 强力日内反转，收盘价高。次日跳空高开。
*   **5-Minute Chart (Bar 6)**:
    *   回补缺口 (Gap Close)。
    *   **EMA Gap Bar**。
    *   熊市趋势通道线刺穿 (Overshoot) 后反转。
    *   **策略**: 在 Bar 6 上方做多，止损 Bar 6 下方。

## Major Reversals (1987 Crash)
![[Images/335-1.jpg]]
**Figure 13.3 (DuPont Daily)**
*   **Bar 7**: **Expanding Triangle** 顶部，测试 Trend Channel Line。
*   **Bar 13**: **EMA Gap 2 Bar** 做空设置（两次试图收复 EMA 缺口失败）。
*   **Bar 14**: **Breakout Pullback (BP)** 变体。虽未破 Bar 11 低点，但急跌后的停顿视为 BP，Shaved Top 显示空头控盘。
*   **Bar 16**: **Sell Climax** (第二段下跌腿)，预期会有 Two-legged Countertrend Rally。
*   **Bar 19**: **Low 2** + **Double Top Bear Flag** (与 EMA 重合)。
*   **Bar 22**: **High 2** + **Double Bottom Pullback** (测试 Bar 16 低点)。

## Weekly Chart Analysis
![[Images/336-1.jpg]]
**Figure 13.4 (GE Weekly)**
*   **Bar 6**: 牛市趋势通道线 Overshoot 反转，预期两段式下跌。
*   **Bar 13**: 下跌趋势中的第二段微小反弹 (Second Leg Up) $\rightarrow$ 做空点。
*   **Bar 17**: **Failed Final Flag**，测试前期低点。
*   **Bar 21**: 趋势线跌破后的 **Double Bottom** (与 Bar 14/17)。
*   **Bar 28**: **M2B** (High 2 at EMA) + **Cup and Handle** 形态。
*   **Bar 29**: **Breakout Test** (测试 Bar 27 高点) + Outside Bar 陷阱 (Trapped weak longs)。

## Monthly & Daily Synchronization
![[Images/339-1.jpg]]
![[Images/341-1.jpg]]
**Figure 13.5 (Monthly) & 13.6 (Daily)**：Double Bottom Pullback 结构。
*   **Bar 5**: Lower Low Test of Bar 1 (Double Bottom)。
*   **Bar 7 (Daily)**: **Double Top Bear Flag**，且为微型 Wedge。
*   **Bar 11**: **Double Bottom Pullback (DBPB)**。深度回踩 Bar 5 低点后反转，形成大级别多头起点。
*   **Bar 15 (Monthly)**: **Three Push Up** (Trendline Break 后)。

## Spike and Channel on Weekly
![[Images/342-1.jpg]]
**Figure 13.7 (Emini Weekly)**
*   **Structure**: 多个 **Spike and Channel** 结构推进 (Bars 1-6, Bars 2-9)。
*   **Bar 10**: **Gap Bars** (EMA 下方) 形成的 Double Bottom。
*   **Bar 16**: **Wedge** + **Expanding Triangle Top** (Bars 11-16)。
*   **Bar 18**: **Breakout Pullback** (空头动能极强，可视作突破) + Double Top Pullback。

---

# Huge Volume Reversals

> [!math] 交易方程：巨量交易
> **Volume Capitulation ≠ Buy Signal**
> *   **条件 A**: 巨量 (5-10倍平均) + 缺口低开 + 强阳线收盘 (Bull Reversal Bar) = **高胜率反转** (Capitulation)。
> *   **条件 B**: 巨量 + 缺口低开 + 弱收盘 (或收在低位) = **趋势中继** (Trend Continuation)。

## Successful Volume Reversal
![[Images/344-1.jpg]]
**Figure 13.8 (Lehman Brothers - LEH)**
*   **Bar 3**:
    *   巨量跳空低开。
    *   刺穿 Bear Trend Channel Line。
    *   **关键特征**: 强力反转，收盘价接近当日最高。
    *   **后续**: 预期至少两段式反弹 (Two Legs Up)。

## Failed Volume Reversal
![[Images/345-1.jpg]]
**Figure 13.9 (Bear Stearns - BSC)**
*   **Bar 2**: 巨量 (15倍)，但收盘无下影线，未反转。
*   **Bar 3**: 再次巨量跳空，但多头反攻微弱。
*   **对比**: 同样的市场环境下，LEH 有明确的价格行为买入信号 (Reversal Bar)，而 BSC 仅有恐慌抛售但无买盘支撑。**不要试图接飞刀，除非看到多头反击的证据。**