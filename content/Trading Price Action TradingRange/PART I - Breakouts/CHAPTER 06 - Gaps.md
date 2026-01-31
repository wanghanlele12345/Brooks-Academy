---
title: "CHAPTER 6 - Gaps"
tags: [PriceAction, Gap, Breakout, Setup, MeasuredMove]
order: 9
---

> [!abstract] 核心逻辑
> 缺口（Gap）本质上是价格区间。在日内图表上，**Trend Bar = Gap**。
> *   **功能分类**：所有缺口（包括 Trend Bar）根据其在趋势中的位置，可归类为 Breakaway（突破）、Measuring（测量）、Exhaustion（衰竭）。
> *   **Micro Gaps**：K 线之间的微小不重叠（如前一根 High 与后一根 Low 之间）是强趋势的重要标志，也常作为测量缺口。
> *   **交易意义**：不要迷信“缺口必补”。缺口是磁铁，也是力量的象征。未补的缺口代表强势，填补的缺口代表衰竭或震荡。

---

# 1. 缺口的类型与演变

在日内交易中，不必拘泥于日线级别的传统缺口定义。任何 Trend Bar 都可以视作 Gap。

1.  **Breakout / Breakaway Gap (突破缺口)**
    *   **位置**：趋势初期，脱离 Trading Range 或反转点。
    *   **特征**：大实体 K 线，伴随成交量放大。
    *   **意义**：强势信号。通常不要急于用它来测量目标，因为趋势才刚开始，空间可能很大。

2.  **Measuring Gap (测量缺口)**
    *   **位置**：趋势中段。
    *   **特征**：Breakout Test（回调）未触及 Breakout Point，留下的空间。
    *   **用法**：作为 Measured Move 的中点。
        *   `Target = Middle of Gap + (Middle of Gap - Start of Trend)`

3.  **Exhaustion Gap (衰竭缺口)**
    *   **位置**：趋势末端。
    *   **特征**：巨大的 Trend Bar（Buy/Sell Climax），随后快速被填补。
    *   **后果**：通常引发 10-bar Two-legged Correction 或反转。

---

# 2. 特殊缺口形态

### Micro Measuring Gaps
*   **定义**：在强趋势中，前一根 K 线的 High 与后一根 K 线的 Low 没有重叠（牛市）。
*   **意义**：这是微观层面的 Gap，代表强劲的 Buying Pressure。
*   **用法**：可用作短线 Measured Move 的参考，但更多作为持有信心。

### Moving Average Gaps
*   **定义**：价格长时间在 EMA 一侧后，首次回调触及或穿过 EMA 的 K 线。
*   **20 Gap Bar Buy/Short**: 价格连续 20+ 根 K 线未触碰 EMA，第一次回踩通常是极佳的顺势入场点（First MA Gap Bar）。

### Negative Gaps
*   **定义**：回调轻微刺破了 Breakout Point（重叠），数值上是负的 Gap。
*   **意义**：虽然不如未重叠的 Gap 强，但仍可作为测量参考，只是可靠性略降。

---

# 3. 交易策略

### 缺口作为磁铁 (Gap as Magnet)
*   **Gap Closure**: 如果趋势疲软，市场倾向于回补缺口。回补行为本身可能成为反向交易的触发点（如回补后反转）。
*   **Open of the Day**: 当日开盘价与昨日收盘价的缺口是重要的日内支撑/阻力。

### 趋势K线即缺口 (Trend Bars are Gaps)
*   **操作**：当你看到巨大的 Trend Bar 时，将其视为 Gap 处理。
    *   如果在趋势初/中期 $\rightarrow$ 等待回调买入，预期 Measured Move。
    *   如果在趋势末期（Climax） $\rightarrow$ 准备 Fade（逆向交易），预期 Gap 被填补。

---

# 4. 图表案例分析

### Figure 6.1: Gap 的生命周期
![[Trading Price Action TradingRange/Images/nc06f001.jpg]]
*   **Gap 5 (Exhaustion)**: 看起来像 Measuring Gap，但随即被填补，转性为 Exhaustion Gap。
*   **Gap 24 (Negative Gap)**: 回调低点低于突破高点，虽为负值，仍作为测量中点。

### Figure 6.3: Trend Bar = Gap
![[Trading Price Action TradingRange/Images/nc06f003.jpg]]
*   **Bar 5, 6, 7**: 连续的 Trend Bars 等同于 Gaps，显示强趋势。
*   **Bar 11**: Breakout Gap & Measuring Gap。突破开盘区间，预期翻倍距离。
*   **Bar 17 (Exhaustion)**: 趋势后期的巨大阳线，典型的 Buy Climax，随后进入震荡。

### Figure 6.4: Intraday Gaps & MA Gaps
![[Trading Price Action TradingRange/Images/nc06f004.jpg]]
*   **Bar 14 (MA Gap)**: 两个多小时来首次收盘价在 EMA 上方（虽然 Low 没破），随后 Bar 15 确认反转。
*   **Bar 10 (Sell Climax)**: 巨大的阴线 Gap，随后 Gap 被填补（Exhaustion），引发 Low 2 Short。

> [!tip] 交易心法
> 不要因为看到 Gap 就想去做填补交易（Fade）。在强趋势中，未填补的 Gap 是常态。只有当 Gap 发生在趋势末端（Climax）且伴随其他反转信号时，才考虑 Fade。

