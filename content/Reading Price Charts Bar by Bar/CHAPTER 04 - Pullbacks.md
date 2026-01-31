---
title: "Chapter 4: Pullbacks"
tags: [PriceAction, Pullbacks, EMA, Setup]
sidebar_order: 4
---

> [!abstract] 核心逻辑
> *   **定义**：Pullback 是趋势中的任何暂停（Pause），哪怕只是单根 Inside Bar 或 1 tick 的反向移动。
> *   **结构**：所有 Pullback 本质上都是 **Two Legs (ABC correction)**。如果当前周期看不出，小周期上通常也是两段式。
> *   **序列**：趋势中的回调通常遵循由弱到强的演变：Micro Trendline Break $\rightarrow$ EMA touch $\rightarrow$ EMA Gap Bar $\rightarrow$ Major Trendline Break。
> *   **入场**：在趋势中，Reversal Patterns（反转形态）通常会失败并成为 Continuation Patterns（中继形态）。利用这些失败（Traps）顺势入场。

# Pullback 基础与两段式结构

*   **广义定义**：任何动能的暂停（包括 Inside Bar 或反向 Trend Bar）。
*   **Two Legs (两段式)**：
    *   市场倾向于做两次尝试（Second attempt）。如果第二次反转尝试失败，趋势通常继续。
    *   **识别**：Countertrend move (A) $\rightarrow$ Small With Trend move (B) $\rightarrow$ Second Countertrend move (C)。
    *   **推断**：如果当前图表不明显，需假设小周期上存在两段式结构。例如，一个 Bear Trend Bar 后跟一个 Bull Close Bar，再接一个 Lower Low，这构成了隐含的两段式。

# First Pullback Sequence (回调层级)

每种类型的首次回调通常会被随后的**极值测试 (Test of Extreme)** 所跟随。

1.  **Minor Pullback**: 1-2 根 K 线 (High/Low 1)，通常伴随 Micro Trendline 突破。
2.  **EMA Pullback**: 趋势触碰 EMA。
3.  **EMA Gap Bar**: K 线完全位于 EMA 对侧（如多头中，K 线 High 低于 EMA）。通常出现在打破 Major Trendline 之后。
4.  **Major Trendline Break**: 趋势线被打破。

> [!tip] 交易原则
> 只要 Major Trendline 未被强力打破，任何 First Pullback (无论是 EMA 还是 Gap Bar) 都是顺势入场的机会。

![[Reading Price Charts Bar by Bar/Images/103-1.jpg]]
> [!note] Figure 4.1 案例解析
> **Bar 3**: Two-bar pullback，Breakout Pullback Short。
> **Bar 4**: 首次轻微跌破 Trendline 和 EMA，Low 2 Short，随后创新低。
> **Bar 5**: 第二次测试 EMA，Low 2 Short。
> **Bar 8**: 打破 Major Trendline 并形成 **First EMA Gap Bar** (Low > EMA)。通常随后会测试低点（Bar 9 Double Bottom Bull Flag）。

![[Reading Price Charts Bar by Bar/Images/103-2.jpg]]
> [!note] Figure 4.2 EMA 测试
> **Bar 5**: 测试 15-min EMA (虚线)，随后 Bar 6 创新高。
> **Bar 7**: Gap Down，测试 60-min EMA，随后 Bar 8 创新高。
> *结论*: 各周期的 EMA 回调通常都会导致至少一次对趋势极值的测试。

# Double Top/Bottom Flags (双顶/底旗形)

强趋势后的横盘整理常表现为双顶/双底结构。它们是**顺势 (With Trend)** 形态。

*   **逻辑**：第一次极值作为磁铁吸引价格回测。如果回测不破（或微破但拉回），确认趋势继续。
*   **Double Bottom Bull Flag**: 多头旗形。在第二个底部上方 1 tick 买入。
*   **Double Top Bear Flag**: 空头旗形。在第二个顶部下方 1 tick 卖出。

![[Reading Price Charts Bar by Bar/Images/105-1.jpg]]
> [!note] Figure 4.3 案例解析
> **Bar 2**: Double Top Bear Flag。失败后反转向上（同时构成头肩底）。

![[Reading Price Charts Bar by Bar/Images/105-2.jpg]]
> [!note] Figure 4.4 案例解析
> **Bar 5 & 7**: Double Bottom Bull Flag。Bar 5 是牛市最后一个 Higher Low，Bar 7 测试该区域。

![[Reading Price Charts Bar by Bar/Images/106-1.jpg]]
> [!note] Figure 4.5 案例解析
> **Bar 2 & 3**: Double Bottom Bull Flag。Bar 3 略微未触及 Bar 2 低点。
> **Bar 5 & 6**: 另一个 Double Bottom Bull Flag。

![[Reading Price Charts Bar by Bar/Images/107-1.jpg]]
> [!note] Figure 4.6 案例解析
> **Bar 3 & 4**: Small Double Bottom Bull Flag。
> **Bar 2 vs 6**: 潜在的头肩顶熊旗 (Head and Shoulders Bear Flag)。若跌破 Bar 6，目标为 Bar 1 的极值低点。

![[Reading Price Charts Bar by Bar/Images/108-1.jpg]]
> [!note] Figure 4.7 案例解析
> **Bar 5**: 试图形成 Double Bottom Bull Flag，但跌破 Bar 4 低点（False Breakout）。
> **Bar 6**: 精确测试 Bar 5 的假突破点。
> **Bar 8**: 跌破 Bar 6 低点，确认熊市。随后 Bar 9 形成 Lower High (Second Entry Short)。

# EMA Gap Bars & 2HM

*   **EMA Gap 2 Bar**: 第一次 Gap Bar 后的第二次尝试（Second Attempt to fill/create gap）。高胜率顺势交易。
*   **2HM (2 Hours Moving Average)**: 价格远离 EMA 超过 2 小时 = 强趋势。
    *   **策略**: Fade (逆势交易) 第一次 EMA Gap Bar。因为强趋势中，第一次明显的反向突破通常会失败，并回测极值。

![[Reading Price Charts Bar by Bar/Images/109-1.jpg]]
> [!note] Figure 4.8 EMA Gap 2 Bar
> **Bar 2**: 第二次尝试填补 EMA 下方缺口 (EMA Gap 2 Bar Buy)。
> **Bar 6 & 9**: EMA Gap 2 Bar Shorts。

![[Reading Price Charts Bar by Bar/Images/111-1.jpg]]
> [!note] Figure 4.9 2HM Setup
> **Bar 2**: 2HM 后的第一次 EMA 测试，Low 2 Short。
> **Bar 4**: First EMA Gap Bar (Low > EMA)，Failed ii breakout。Scalp Short。
> **Bar 8**: Breakout Pullback Short。

![[Reading Price Charts Bar by Bar/Images/112-1.jpg]]
> [!note] Figure 4.10 2HM Variation
> **Bar 5**: 3.5小时后首次触碰 EMA。
> **Context**: Bar 1-2 抛物线高潮 (Climax)，Bar 5-7 进入 Tight Trading Range。此时风险回报比差，建议等待突破。

# 11:30 Stop Run Trap

强趋势日中，常在 11:00 - 11:30 PST 出现剧烈的 Countertrend Move。
*   **目的**：机构制造恐慌扫损，以便在更好价格顺势加仓。
*   **特征**：看起来像趋势反转，但迅速失败。

![[Reading Price Charts Bar by Bar/Images/113-1.jpg]]
> [!note] Figure 4.11 Stop Run
> **Bar 5**: 11:25 PST 扫损后的 Gap 2 Long。强力 Bear Trend Bar 诱空，却是买入机会。
> **Bar 10**: 12:15 PST 扫损后的 EMA Gap Short。

![[Reading Price Charts Bar by Bar/Images/114-1.jpg]]
> [!note] Figure 4.12 11:30 Trap
> **Bar 3**: 试图破坏 Double Top Bear Flag，突破 Bar 1 高点扫损，随后迅速反转下跌。Trapped Bears out, Trapped Bulls in.

# Counting Legs (数腿)

*   **基本原则**：Breakout Test 经常精准测试突破点（High/Low matches exact tick）。
*   **Measured Move**: 完美的 Breakout Test 通常预示着 AB=CD 的等距运动。

![[Reading Price Charts Bar by Bar/Images/116-1.jpg]]
> [!note] Figure 4.13 Two-Legged Moves
> **Bar 6**: 两段下跌结束。
> **Bar 12**: Breakout Test，精确测试 Bar 6 高点，随后展开 Measured Move。

![[Reading Price Charts Bar by Bar/Images/116-2.jpg]]
> [!note] Figure 4.14 Chart Patterns
> **Bar 1 & 4**: Double Bottom Bull Flag (First Pullback)。
> **Bar 12 & 13**: Double Top Short。Bar 13 是 Overshoot Trend Channel Line 后的 Second Entry。

![[Reading Price Charts Bar by Bar/Images/117-1.jpg]]
> [!note] Figure 4.15 Double Top Bear Flag
> **Bar 2**: Double Top Bear Flag (与 Bar 1 相比)，同时是 EMA 处的 Low 2 (M2S)。

# High/Low 1, 2, 3, 4 (Bar Counting)

这是精确识别 Entry 的核心技术。

*   **定义 (Bull Pullback)**:
    *   **H1 (High 1)**: 回调中，第一根 High 高于前一根 High 的 K 线。
    *   **H2 (High 2)**: 出现 H1 后，价格继续回落，再次出现 High 高于前一根 High 的 K 线。
    *   **H3/H4**: 以此类推。
*   **规则**:
    *   **H2/L2**: 最可靠的顺势入场点 (ABC Correction)。
    *   **H4/L4**: 往往是 Failed Failure，胜率极高。
    *   **Trendline Break**: 必须有 Minor Trendline Break，H2/L2 才有作为 reversal setup 的效力；否则只是顺势中继。
    *   **Micro Trendline**: 强趋势中，Micro Trendline 的假突破构成最佳的 H1/L1 Scalp。

![[Reading Price Charts Bar by Bar/Images/120-1.jpg]]
> [!note] Figure 4.16 Bar Counting Mechanics
> 图解展示了标准的 H1, H2, H3, H4 及 L1, L2 计数方式。

![[Reading Price Charts Bar by Bar/Images/121-1.jpg]]
> [!note] Figure 4.17 Complex Counting
> **Bar 2**: L1 Short (Micro Trendline break)。
> **Bar 4**: Wedge Bottom / High 3 Long。
> **Bar 7**: Failed L2 / Low 4 Short (Two legs up)。
> **Bar 10**: EMA Gap 2 Bar Buy / High 2。
> **Bar 12**: Bull Reversal Bar，High 2 (若视 Bar 11 为 H1 变体)。
> **Bar 17 & 18**: High 2 Buy (Bar 18 是 Second Chance Entry)。
> **Bar 20**: Failed Low 2 Short (Bull Trap)，导致两段式上涨。

![[Reading Price Charts Bar by Bar/Images/124-1.jpg]]
> [!note] Figure 4.18 Trendline Break
> **Context**: 跌破趋势线 + 两段式下跌 (Bar 1)。
> **Bar 5**: Low 4 Short at EMA。
> **Bar 9**: Tight Trading Range 后的 Failed Downside Breakout。

# M2B / M2S (Moving Average Entry)

*   **M2B**: High 2 Buy at EMA.
*   **M2S**: Low 2 Sell at EMA.
*   **特征**：结合了 EMA 支撑/阻力和两段式回调结构，是强趋势中极高胜率的 Setup。

![[Reading Price Charts Bar by Bar/Images/125-1.jpg]]
> [!note] Figure 4.19 M2B/M2S
> **Bar 2, 4**: M2B Buy Setups。
> **Bar 5, 6, 8**: M2S Sell Setups。

# Variations & Inverse Charts

当 K 线形态不标准时，需灵活处理：
*   **Sideways**: 横盘也可以算作一个 Leg。
*   **Tails**: 长影线有时代表小周期上的一个 Leg。
*   **Inverse Charts**: 使用反向图表（如 SDS vs SPY）确认信号强度。如果反向图表不值得买，那么原图表就不值得卖。

![[Reading Price Charts Bar by Bar/Images/126-1.jpg]]
> [!note] Figure 4.20 Inverse Chart (Emini vs SDS)
> **Bar 5 (Emini)**: High 2 Buy，但是 Doji 且重叠（Barb Wire），信号弱。
> **Bar 5 (SDS)**: 对应的 Low 2 Sell，但在强多头中没人会卖。结论：Emini 这边也不要买 High 2，等待更好机会。

![[Reading Price Charts Bar by Bar/Images/127-1.jpg]]
> [!note] Figure 4.21 Failed Low 2
> **Bar 2**: Failed Low 2。通常导致 Low 4 (Bar A 之后)。

![[Reading Price Charts Bar by Bar/Images/129-1.jpg]]
> [!note] Figure 4.22 Tail as a Leg
> **Bar 2**: Doji 的长上影线代表了小周期的一推（Leg），因此 Bar 3 可视为 High 2 Long。

![[Reading Price Charts Bar by Bar/Images/130-1.jpg]]
> [!note] Figure 4.24 Low 2 Variations
> **Bar 9**: Low 2 Short at EMA (Bar 8 inside bar 结束第一腿)。
> **Bar 12**: Outside Bar 跌破前 K 线，视为 Low 1。Next Bar 再次跌破，确认为 Low 2 (M2S)。

# Three Push Pullbacks / Wedge

强趋势中的长时间回调（中午时段常见）常呈三推结构（Three Push / Wedge）。
*   **陷阱**：第三推常被误认为是新趋势，但实际上是 Trap，随后原趋势恢复。

![[Reading Price Charts Bar by Bar/Images/131-1.jpg]]
> [!note] Figure 4.25 Wedge Pullback
> **Bar 3 & 4**: Wedge 的内部细分结构。Wedge 往往也是 Two Legs (其中一条腿包含两小腿)。

![[Reading Price Charts Bar by Bar/Images/132-1.jpg]]
> [!note] Figure 4.26 Three Push Top
> **Bar 4, 6, 8**: 三次向上推进 (Higher Highs)，形成 Three Push Top / Wedge。由于缺乏多头动能，在 Bar 8 做空。

![[Reading Price Charts Bar by Bar/Images/134-1.jpg]]
> [!note] Figure 4.28 Failed Third Push
> **Bar 3**: 第三推未能创新低 (Failure Swing)，构成 Head and Shoulders Bull Flag。Trend Resumption。

![[Reading Price Charts Bar by Bar/Images/135-1.jpg]]
> [!note] Figure 4.30 Failed Failed Wedge
> **Bar 6**: Failed Failed Wedge。Wedge 跌破失败（Bar 5），反向向上突破也失败（Bar 6），通常是极佳的反转入场点。