---
title: “Chapter 1： Price Action”
tags: [PriceAction, Reversal, Trading]
sidebar_order: 1
---

> [!abstract] 核心逻辑
> *   **市场状态判定**：交易者的首要任务是判断市场处于 **Trending**（趋势）还是 **Trading Range**（震荡）。趋势中顺势（With Trend），震荡中逆势（Countertrend/Fade）。
> *   **价格行为本质**：价格行为是机构资金寻找价值的足迹。机构无法隐藏其巨大的成交量，散户通过解读K线（Trend Bars/Dojis）跟随机构动向。
> *   **入场原则**：依靠 **Setup**（形态）+ **Signal Bar**（信号K线）+ **Entry Bar**（入场触发）。
> *   **概率思维**：与其寻求完美的入场价位（Good Fill），不如寻求高胜率的结构（Second Entry）。

# Trend Bars vs. Doji Bars

所有K线在功能上仅分为两类：
1.  **Trend Bar (趋势K线)**：实体较大，收盘价远离核心区域，代表一方控盘。
    *   **Bull Trend Bar**：收盘高于开盘。
    *   **Bear Trend Bar**：收盘低于开盘。
    *   **强度信号**：实体占比大、影线短、收盘在最高/最低处。
2.  **Doji Bar (十字星/非趋势K线)**：实体极小或无实体，代表多空平衡（单根K线的交易区间）。
    *   **交易含义**：通常作为中继或犹豫信号。若在趋势中连续出现且高低点递进，可视为 **Trending Dojis**。

![[Reading Price Charts Bar by Bar/Images/8-1.jpg]]
> [!note] Figure 1.1 解析
> 图中展示了各类 Doji。对于交易者而言，任何实体微小的 K 线都应视为 Doji，意味着多空暂时平衡。

![[Reading Price Charts Bar by Bar/Images/9-1.jpg]]
> [!note] Figure 1.2 解析
> **Bar 1-4 (右侧5min图):** 连续四个 Doji，但高点和低点上移（Trending Dojis），视作多头趋势延续。
> **Bar 4:** Doji 也是 setup bar。此处为 Failed Final Flag (ii flag) 及 EMA Gap Bar 做空信号。

![[Reading Price Charts Bar by Bar/Images/10-1.jpg]]
> [!note] Figure 1.3 解析
> **Bar 1:** 强多头趋势棒突破，但缺乏后续。
> **Next Bar:** 仅向上突破 1 tick 后收于低位（Bear pause bar），多头突破失败，空头入场点。

---

# Signal Bars: Reversal Bars (反转K线)

最经典的信号棒。必须结合 **Context**（背景），如趋势线突破或对极值的测试。

### 理想特征
| 特征 | Bull Reversal Bar | Bear Reversal Bar |
| :--- | :--- | :--- |
| **开/收盘** | 开盘近低点，收盘高于开盘且高于前K收盘 | 开盘近高点，收盘低于开盘且低于前K收盘 |
| **影线** | 下影线占全长 1/3~1/2，上影线极短 | 上影线占全长 1/3~1/2，下影线极短 |
| **重叠** | 与前K线重叠少 | 与前K线重叠少 |

### 交易陷阱
*   **强趋势中的逆势**：若无趋势线突破，强趋势中的反转棒通常会失败并成为顺势中继（With Trend Setup）。
*   **大 Doji 反转**：若反转棒是巨大的 Doji，意味着交易区间，不宜直接操作。
*   **重叠过多**：若反转棒与前几根K线高度重叠，视为 Trading Range，需等待二次信号。

![[Reading Price Charts Bar by Bar/Images/12-1.jpg]]
> [!note] Figure 1.4 解析
> **Bar 2:** iii 形态结束第一波下跌。
> **Bar 3:** 强多头反转棒，测试 Bear Trendline 并反转昨日低点。Signal Bar。
> **Bar 4:** ii setup，预期第二波上涨，Entry Bar。
> **Bar 5:** Inside bar Breakout Pullback，也是 High 1 long。

![[Reading Price Charts Bar by Bar/Images/16-1.jpg]]
> [!note] Figure 1.5 解析
> **Bar 1:** 与前四根K线重叠，震荡区间，非有效反转信号。
> **Bar 2:** 极佳的空头信号棒。反转了 Bar 1 的突破（Trapped Longs），且反转了下降趋势线突破。

![[Reading Price Charts Bar by Bar/Images/17-1.jpg]]
> [!note] Figure 1.6 解析
> **Bar 1:** Doji Bar，虽在超卖区但需二次信号。
> **Bar 2:** 与前棒重叠 50%，未跌破前低，视为 1min 图上的 Trading Range，不操作。

---

# Signal Bars: Other Types (其他类型)

### Small Bars (小K线)
*   **Inside Bar**: 孕线。若发生在强趋势突破后，可能是 Breakout Pullback（顺势）或失败（逆势）。
*   **ii / iii Pattern**: 连续两/三根内包线。
    *   **Failed Final Flag**: 趋势末端的 ii 突破常引发反转。
    *   **Bonanza**: 5分钟图的 ii 常对应 1分钟图的 Double Bottom/Top Pullback。
*   **Context**: 
    *   Trading Range 高低点的小反转棒是绝佳 Fade 机会。
    *   Barb Wire（密集重叠）中的小 Doji 禁止操作。

### Twins & Shaved Bars
*   **Double Top/Bottom Twin**: 连续两根K线具有相同的高点（Top）或低点（Bottom）。
*   **Opposite Twins**: 
    *   **Up Down Twin**: 阳线后紧接阴线，实体相当（等同于大周期的反转棒）。
    *   **Down Up Twin**: 阴线后紧接阳线。
*   **Shaved Bar (光头/光脚)**: 无影线，代表极端强势力。
    *   强趋势中：顺势突破买入/卖出。
    *   Climax：若出现在长期趋势末端的巨大光头光脚K线，可能是耗尽（Exhaustion）。

![[Reading Price Charts Bar by Bar/Images/22-1.jpg]]
> [!note] Figure 1.7 解析
> **Bar 1, 2, 4, 6:** 回调中的 Small Bars (Dojis)。虽弱，但在强空头趋势中是顺势 Setup (With Trend)，跌破低点做空。
> **Bar 3:** High 4 Long (Low 2 Short 的反转)。
> **Bar 5:** High 2 Long，处于 Trading Range 低点。
> **Bar 8:** Inside Bear Trend Bar，Breakout Pullback Short，也是 Microtrendline Low 1。

![[Reading Price Charts Bar by Bar/Images/23-1.jpg]]
> [!note] Figure 1.8 解析
> **Bar 1:** 失败的 Bear Reversal Bar。空头入场未触发，反向成为多头 Setup (Failed Reversal)。

![[Reading Price Charts Bar by Bar/Images/24-1.jpg]]
> [!note] Figure 1.9 解析
> **Bar 3:** 巨大趋势棒击穿趋势通道线（Exhaustion）。
> **Next Bar:** Inside Bar with Shaved Top，买盘强劲，预示至少两段式反弹。
> **Bar 5:** Outside Bar。Bar 4 是失败的 Low 2 且未打破趋势线，Bar 5 困住了在 Bar 4 做空的交易者。

![[Reading Price Charts Bar by Bar/Images/24-2.jpg]]
> [!note] Figure 1.10 解析
> **Bar 3:** 强多头反转棒，反转昨日低点。
> **Bar 4:** EMA Gap Bar short。
> **Bar 5:** 虽是 Bear Trend Bar，但不构成买入信号（逆势买入需 Bull Signal Bar）。
> **Bar 8:** ii pattern，Bull Inside Bar。这是对 Bar 3 低点的 Higher Low 测试，且 Bar 4 后的上涨已打破所有下跌趋势线，绝佳做多点。

![[Reading Price Charts Bar by Bar/Images/25-1.jpg]]
> [!note] Figure 1.11 解析
> **Bar 5:** ii setup。Aggressive Long (Double Bottom Pullback)。
> **Bar 6:** ii setup，Second Entry，且打破了 Bar 4 下来的微型趋势线。
> **Bar 7:** Failed Failure (Breakout Pullback Long)，Microtrendline High 1。

![[Reading Price Charts Bar by Bar/Images/26-1.jpg]]
> [!note] Figure 1.12 解析
> **Bar 2:** 极小的 Higher Low 信号棒 (11 cents)，Second Entry (Failed Final Flag)。
> **Bar 1:** High 1，但不推荐，因为没有 Bull Trend Bar 且之前有 5 根阴线。

![[Reading Price Charts Bar by Bar/Images/27-1.jpg]]
> [!note] Figure 1.13 解析
> **Chart:** 左侧 1min，右侧 5min。
> **Pattern:** 5min 图上的 ii pattern 对应 1min 图上的 Double Bottom Pullback (Bar 1) 和 Failed Low 2 (Bar 2)。

![[Reading Price Charts Bar by Bar/Images/28-1.jpg]]
> [!note] Figure 1.14 解析
> **Bar 1:** Double Bottom Twin (连续平底)，强空头中做空。
> **Bar 2:** 另一个 Double Bottom Twin。
> **Bar 3:** Double Top Twin (连续平顶)，做多。

![[Reading Price Charts Bar by Bar/Images/28-2.jpg]]
> [!note] Figure 1.15 解析
> **Pattern:** Down Up Twin Bar reversal。
> **Context:** 测试 Bear Trend Channel Line。此前 17 根K线有 16 根高点降低，极度超卖 (Climax)，预期两段式反弹。

![[Reading Price Charts Bar by Bar/Images/29-1.jpg]]
> [!note] Figure 1.16 解析
> **Bar 4:** Up Down Twin sell setup。突破昨日高点及通道线后的反转。
> **Bar 2:** 做空。困住了在 Up Down Twin (back-to-back) 做多的交易者，且是 EMA 处的两段式回调结束点。

![[Reading Price Charts Bar by Bar/Images/30-1.jpg]]
> [!note] Figure 1.17 解析
> **Bar 1:** Shaved Top and Bottom (光头光脚)，强趋势中顺势做空。
> **Bar 2:** Shaved Top，Low 1 short (Inside bar breakdown)。
> **Bar 3:** Shaved Top/Bottom 阳线，但在空头趋势中无效。Next bar 是 High 2 及 Failed Trading Range Breakout，可做多。

![[Reading Price Charts Bar by Bar/Images/31-1.jpg]]
> [!note] Figure 1.18 解析 (综合案例)
> **Bar 1:** Doji in Barb Wire (Bear Flag)，不要买入。
> **Bar 2:** High 2 Long，Opening Reversal。
> **Bar 3:** Outside Up Bar，Microtrendline Long。
> **Bar 4:** Bear Doji at new high，动能太强暂不做空。
> **Bar 5:** Outside Up Bar，First Pullback (High 1)。
> **Bar 6:** Low 4 Short / Wedge (Three Pushes Up)。
> **Bar 7:** ii short。Barb Wire 止损需放宽。
> **Bar 8:** Lower High / Second Entry Short。
> **Bar 9:** Down Up Twin reversal，Double Bottom Bull Flag 测试 Bar 5 低点。
> **Bar 10:** Double Bottom Twin short / Breakout Pullback。
> **Bar 11:** 弱多头反转棒（重叠大），大概率是 Trading Range。

![[Reading Price Charts Bar by Bar/Images/33-1.jpg]]
> [!note] Figure 1.19 解析
> **Bar 1:** Failed Reversal Bar。强空头中，多头反转棒低点被击穿，困住多头，极佳做空点。
> **Bar 2 & 3:** 强空头中，Trading Range 顶部（Doji下方）做空。

![[Reading Price Charts Bar by Bar/Images/34-1.jpg]]
> [!note] Figure 1.20 解析
> **Bar 1:** Down Up Twin buy。
> **Bar 3:** Bear Inside Bar，Wedge Short。
> **Bar 5:** Failed Final Flag (ii top breakout failure)。
> **Bar 6:** Double Bottom Bull Flag (with Bar 1)。
> **Bar 8:** Inside Bear Trend Bar，Second Leg Up end。
> **Bar 10:** Outside Down Bar，困住 Bar 9 (High 1) 的多头。
> **Bar 11:** ioi pattern / High 2 Long。

![[Reading Price Charts Bar by Bar/Images/35-1.jpg]]
> [!note] Figure 1.21 解析
> **Bar 1:** 强多头动能，不宜直接做空，等待 Second Entry (Bar 2)。
> **Bar 6:** 连续4根大阴线 (Climax)，只考虑 Second Entry Long。
> **Bar 7:** Outside Up Bar，Small Higher Low，Second Entry Long。

![[Reading Price Charts Bar by Bar/Images/36-1.jpg]]
> [!note] Figure 1.22 解析
> **Bar 1:** Failed Breakout Long。测试前期低点。
> **Bar 2:** Failed Breakout Short。强阳线突破 Tight Trading Range 后立即反转。

---

# Outside Bars (外包线)

当前K线高点高于前K，低点低于前K。本质是单K线的 Trading Range。

### 交易策略
1.  **Breakout Mode (慎用)**：教科书建议突破做单，但 5min 图上风险过大（止损宽）。
2.  **作为 Trap/Reversal (推荐)**：
    *   **Failed With Trend Entry**: 强趋势中，若 Outside Bar 先触发反向入场（如 Low 1）随即反转收强，形成 **Trapped Traders**。这通常标志着新趋势的开始（Functionally the start of the trend），预期有两段式运行。
    *   **ioi (Inside-Outside-Inside)**：Breakout mode，需结合位置（Swing High/Low）。
3.  **Trend Resumption**: 强趋势中途的 Outside Bar 突破常引发两段式行情。

![[Reading Price Charts Bar by Bar/Images/39-1.jpg]]
> [!note] Figure 1.23 解析
> **Bar 1:** Outside Bar，Smart Traders 在低点下方做空（Trend Resumption）。
> **Bar 2:** Second Leg Down。
> **Bar 5:** Outside Down Bar，但在震荡区间，且后接大 ioi，不操作。

![[Reading Price Charts Bar by Bar/Images/39-2.jpg]]
> [!note] Figure 1.24 解析
> **Bar 2:** ioi 突破失败。做空 Bar 2 跌破点（Break below outside bar），引发两段下跌至 Bar 4。
> **Bar 4:** 接近 Outside Up，Second Leg Bull，Excellent Long。
> **Bar 5:** Outside Bar 后接 Small Inside Bar near high = Great Short。

![[Reading Price Charts Bar by Bar/Images/40-1.jpg]]
> [!note] Figure 1.25 解析
> **Bar 2:** Outside Up Bar，困住了 Low 1 空头。
> **Next Bar:** Bear Reversal Bar at high of Outside Bar = Fade Short。
> **Bar 4:** Outside Bar in Barb Wire。
> **Bar 5:** Long setup (Small bar near low of outside bar)。
> **Bar 6:** Bear Reversal / Low 2 near high of outside bar = Short。
> **Bar 8:** Microtrendline short，Second Leg Down from Bar 7 high。

![[Reading Price Charts Bar by Bar/Images/42-1.jpg]]
> [!note] Figure 1.26 解析
> **Bar 3:** Outside Bar，Reversal Bar & Entry Bar。
> **Bar 6:** Bull Trap / Failed High 2。Outside Down Bar 困住多头，市场转为 Bear Trend，预期两段下跌。

---

# Execution: Close of Bar (收盘确认)

> [!warning] 纪律
> 必须等待 K 线收盘。

1.  **Trap Risk**: 5min K 线常在最后 5 秒发生剧烈反转（如从 Bull Reversal 变成 Bear Trend Bar）。提前入场会被套。
2.  **Stop Management**: 若 K 线收盘强势（如 Shaved Close），可减少减仓数量，持有更多仓位博取波段。
3.  **双图表陷阱**: 试图通过小周期（3min）降低风险通常会导致在 5min 的震荡中被洗出（Whipsaw）。

![[Reading Price Charts Bar by Bar/Images/44-1.jpg]]
> [!note] Figure 1.27 解析
> **Bar 10:** iiii (四根内包)，Failed Final Flag。
> **Bar 11:** Strong Bull Reversal Bar，Second Entry Long。必须等待收盘确认。
> *对比*: 3min 图上 Bar 11 的止损会被扫掉（Shaved top/bottom bear bar），导致交易者被洗出，错失 5min 图上的大行情。

---

# Advanced Concepts

### ETFs & Inverse Charts
当 Emini 图形模糊时，参考 **SPY** (ETF) 或 **SDS** (反向2倍杠杆)。
*   **SDS**: 若 Emini 显示 Bull Flag 但 SDS 显示 Rounding Bottom（看涨），则 Emini 的做多信号可疑。

![[Reading Price Charts Bar by Bar/Images/46-1.jpg]]
> [!note] Figure 1.28 解析
> 对比 Emini (上), SPY (中), SDS (下)。SDS 的价格行为有时比 Emini 更清晰，可辅助确认。

### Second Entries (二次入场)
> [!math] Trader's Equation
> Second Entry = Higher Probability.

*   **原理**: 市场第一次尝试反转往往失败，第二次尝试成功率更高。
*   **Good Fill = Bad Trade**: 如果二次入场的点位比一次入场更好（价格更便宜），通常是陷阱。好的二次入场通常价格更差（Confirmation comes at a price）。
*   **Context**: 强趋势中，若反向动能过大（如连续 4 根 Trend Bars），必须等待 Second Entry 才能 Fade。

![[Reading Price Charts Bar by Bar/Images/47-1.jpg]]
> [!note] Figure 1.29 解析
> 图中展示了大量 Second Entries。
> **Bar 10:** 这里的 Second Entry 价格比 Bar 9 更好，警惕 "Good fill, bad trade"。

![[Reading Price Charts Bar by Bar/Images/48-1.jpg]]
> [!note] Figure 1.30 解析
> **Bar 1:** Low 1，但此前有 5 根阳线（动能强），放弃。等待 Bar 2 (Second Entry)。
> **Bar 3:** First Entry Long，放弃。等待 Bar 4 (Second Entry)。
> **Bar 5:** High 2，但此前有 4 根阴线，动能过强，放弃。

### Late & Missed Entries
*   **心理障碍**: 错过最佳入场点后，不敢追单。
*   **解决方案**: 假设你已经在低位持有仓位。现在你会怎么做？你会持有 Swing 部分。
*   **操作**: 直接 **At Market** 买入 Swing 仓位大小，使用原始 Setup 的止损位（如 Signal Bar 下方）。
    *   逻辑：现在买入并承担 $1.5 风险，与持有低位买入的浮盈并承担 $1.5 回撤，数学期望完全一致。

![[Reading Price Charts Bar by Bar/Images/49-1.jpg]]
> [!note] Figure 1.31 解析
> **Bar 4:** 如果错过了 Bar 1 和 Bar 3 的入场，在 Bar 4 处仍可市价买入（Swing size），止损放在 Bar 3 低点或根据 High 2 (Bar 6) 上移。