---
title: "Chapter 2: Trendlines and Trend Channels"
tags: [PriceAction, Trendlines, Channels, Trading]
sidebar_order: 2
---

> [!abstract] 核心逻辑
> *   **Trendlines (趋势线)**：主要用于寻找**顺势 (With Trend)** 入场点（回调测试趋势线时）。
> *   **Trend Channel Lines (通道线)**：主要用于寻找**逆势 (Countertrend)** 反转点（过冲/Overshoot 时）。
> *   **趋势线突破**：是市场进入双边交易（Two-sided trading）或反转的第一个信号。
> *   **Micro Trendlines (微型趋势线)**：在强趋势中，微型趋势线的假突破是极高胜率的顺势入场点（High/Low 1）。

# 1. Trendlines (趋势线)

趋势线连接极值点（Swing Points），用于界定趋势方向。

1.  **绘制原则**：
    *   使用极值点或最佳拟合（Best fit）。
    *   不需要完美，大致近似即可，确认测试后可删除以保持图表整洁。
    *   **Gap (缺口)** 和**大实体趋势K线**应视为“1根K线的趋势”，其后的盘整即为对该趋势线的突破。
2.  **交易策略**：
    *   **未突破前**：在价格回调测试趋势线附近时，顺势入场。
    *   **突破后**：趋势线断裂意味着多空力量平衡。若突破强劲，需等待回调测试极值（Higher High 或 Lower Low）后寻找反转机会。
    *   **演变**：随着趋势发展，回调打破旧趋势线，会形成坡度更缓的新趋势线，直到反向趋势线占据主导。

![[Reading Price Charts Bar by Bar/Images/53-1.jpg]]
> [!note] Figure 2.1 案例解析
> *   图示展示了所有潜在的趋势线。
> *   随着趋势推进，每一条新的趋势线斜率逐渐变缓（Flatter），直到反向趋势线变得更重要。

![[Reading Price Charts Bar by Bar/Images/54-1.jpg]]
> [!note] Figure 2.2 案例解析
> *   **Bar 1-4**: Bear Trend Channel Line。
> *   **Bar 2-5**: 将通道线平移至 Bar 2 高点形成的趋势线。
> *   **Bar 6**: 二次尝试反转突破该线失败，也是通道线（3-5连线）的过冲失败，绝佳做空点。

![[Reading Price Charts Bar by Bar/Images/54-2.jpg]]
> [!note] Figure 2.3 案例解析
> *   **Bar 2-3**: 根据这两点画出通道线，平移至 **Bar 1** 形成趋势线。
> *   **Price Action**: 价格在接触该衍生趋势线时发生两段式回调（Two-legged pullback）并过冲，随后反转向上。

---

# 2. Micro Trendlines (微型趋势线)

在强趋势中，由 2 到 10 根 K 线组成的陡峭趋势线。

1.  **顺势交易 (With Trend)**：
    *   **High/Low 1**: 微型趋势线的**假突破 (False Breakout)** 是最可靠的顺势信号。
    *   在多头中，买单设在跌破微型趋势线的 K 线高点上方 1 tick。
    *   本质是极小型的 Bull/Bear Flags。
2.  **逆势/失败交易 (Failure)**：
    *   若微型趋势线突破后没有反转，而是继续运行（Breakout Pullback entry 失败），则可能形成 **Low 2** (空头中) 或 **High 2** (多头中)，预示更深的回调或反转。
3.  **与 1-Minute 图的关系**：
    *   5分钟图上的 Micro Trendline 假突破，通常对应 1分钟图上的 High/Low 2 回调。直接交易 5分钟图更高效，避免 1分钟图的噪音。

![[Reading Price Charts Bar by Bar/Images/57-1.jpg]]
> [!note] Figure 2.5 案例解析 (左1min vs 右5min)
> *   **Bar 3, 5, 6, 7 (5min)**: 都是微型趋势线的假突破。
> *   **Bar 5 (5min)**: 特别重要，是第二次尝试突破 Bear Trendline 失败，导致很好的 Scalp 空单。
> *   **Bar 8 (1min)**: Higher High Breakout Test long setup。

![[Reading Price Charts Bar by Bar/Images/58-1.jpg]]
> [!note] Figure 2.6 案例解析
> *   **Bar 1**: 跌破 3-bar trendline 后反转向上，在上一根 K 线高点上方做多。
> *   **Bar 2**: 跌破 6-bar trendline。买单设在其高点上方，未成交。
> *   **Bar 3**: 移动买单至 Bar 2 高点上方，在此处成交。
> *   **Bar 4**: 小 Inside Bar 跌破 2-bar trendline，在其高点上方做多。
> *   **Bar 5**: 打破了当天的主趋势线，预示可能出现两段式回调 (Two-legged pullback)。

![[Reading Price Charts Bar by Bar/Images/59-1.jpg]]
> [!note] Figure 2.7 案例解析
> *   展示了强趋势中通过 Micro Trendline 寻找 High/Low 2 结构。无需看 1分钟图，5分钟图上的假突破即为入场信号。

![[Reading Price Charts Bar by Bar/Images/60-1.jpg]]
> [!note] Figure 2.8 案例解析
> *   全天展示了多次趋势线测试和通道线过冲。
> *   许多突破幅度不到 1 tick，但在技术分析上依然有效。

![[Reading Price Charts Bar by Bar/Images/60-2.jpg]]
> [!note] Figure 2.9 案例解析
> *   **Bar 5**: Micro Trend Channel 反转。ii setup，两根 K 线收盘均看涨。
> *   **Bar 7 & 9**: Micro Trendline 假突破带来的做空 Scalp (Low 1)。
> *   **Bar 10**: 二次入场做多 (Second Entry Long)。测试 Bar 5 低点后的 Lower Low，且是 failed failure of a Micro Trendline break。

---

# 3. Horizontal Lines (水平线/支撑阻力)

1.  **Trading Range Days (震荡日)**：
    *   **Fade Breakouts**: 预期前高突破失败（形成 Higher High 反转）和前低突破失败（形成 Lower Low 反转）。
    *   **Second Entry**: 第二次突破失败（Second Higher High/Lower Low）是胜率极高的逆势入场点。
2.  **Trend Days (趋势日)**：
    *   **仅做回调**: 水平线用于识别 Double Top Bear Flag 或 Double Bottom Bull Flag。
    *   **慎做逆势**: 只有在明显的趋势线突破后，才考虑 Fade 极值点。

![[Reading Price Charts Bar by Bar/Images/62-1.jpg]]
> [!note] Figure 2.10 案例解析 (震荡日)
> *   **Bar 5**: 相对于 Bar 2 的 Second Higher High，也是 Three Pushes Up，做空。
> *   **Bar 9**: 跌破开盘价的 Lower Low，Expanding Triangle Bottom 的第7个点。
> *   **Bar 13**: 大型 Double Bottom Pullback。
> *   **Bar 15**: Double Top Bear Flag。失败后市场转多。

![[Reading Price Charts Bar by Bar/Images/63-1.jpg]]
> [!note] Figure 2.11 案例解析 (趋势日)
> *   **原则**: 强趋势日（2HM, 2小时无EMA回调），仅在趋势线被打破后才考虑逆势。
> *   **Bar 4, 8, 12**: 虽是逆势，但因有趋势线突破，可尝试 Scalp。
> *   **Bar 5 & 13**: 绝佳的顺势入场 (With Trend)，基于 Swing Fades（Bar 5 跌破低点反转，Bar 13 突破高点反转）。

---

# 4. Trend Channel Lines (通道线)

位于趋势线的对侧，用于界定价格通道。

1.  **功能**：主要用于寻找**过冲 (Overshoot)** 后的反转交易。
2.  **Overshoot logic**：
    *   过冲通常意味着行情走得太快太远（Parabolic/Climax）。
    *   大多数过冲会回到通道内，甚至引发反转。
    *   与 **Wedge (楔形)** 密切相关：多数通道线过冲反转本质上是楔形反转。
3.  **绘制方法**：
    *   平移趋势线至对侧极值点。
    *   直接连接对侧的 Swing points。
4.  **机构行为**：巨量成交通常发生在通道线过冲处，表明机构正在平仓获利并反手建立逆势仓位。

![[Reading Price Charts Bar by Bar/Images/66-1.jpg]]
> [!note] Figure 2.12 案例解析
> *   **实线**: Trendline。
> *   **虚线 (Dashed)**: 平移趋势线形成的 Channel Line。
> *   **点线 (Dotted)**: 独立连接高点形成的 Channel Line。

![[Reading Price Charts Bar by Bar/Images/67-1.jpg]]
> [!note] Figure 2.13 案例解析
> *   **Slope**: 多头趋势中 Final Flag 的斜率（Bar 1-2），往往决定了随后空头趋势的斜率。
> *   **Bar 7**: 基于趋势线突破及二次测试开盘低点（Second attempt to reverse）的买入。

![[Reading Price Charts Bar by Bar/Images/67-2.jpg]]
> [!note] Figure 2.14 案例解析
> *   **Bar 6**: 突破了由 Bar 1-5 连线的简单通道线。
> *   **Setup**: 尽管 Bar 5-6 距离很近（视为 Three Pushes Down 的一部分），但 Bar 6 K线很小，风险回报比好，且是 Shrinking Stair pattern（下跌动能衰竭），值得尝试做多。

---

# 5. Dueling Lines (双线冲突)

当长期趋势线被测试，且该测试点刚好与短期反向通道线重合时。

1.  **定义**：Longer Trendline (支撑/阻力) + Shorter Trend Channel Line (过冲)。
2.  **策略**：如果测试成功（假突破反转），这是完美的**顺大势**入场点。通道线过冲表明短期回调结束，大趋势线提供主要支撑/阻力。

![[Reading Price Charts Bar by Bar/Images/68-1.jpg]]
> [!note] Figure 2.15 案例解析
> *   **Bar 6**: 处于 Dueling Lines 交汇处。
>     1.  Bull Trendline (大趋势支撑)。
>     2.  Bear Trend Channel Line (Bar 3-5 连线，短期回调的过冲支撑)。
> *   **Action**: 市场在交汇处反转。Bar 7 提供了 Higher Low Second Entry 买点。

![[Reading Price Charts Bar by Bar/Images/69-1.jpg]]
> [!note] Figure 2.16 案例解析
> *   **Bar 4**: 测试 Bear Trendline，同时过冲了微型 Bull Trend Channel Line (Bar 3-4)。
> *   **Action**: Dueling Lines 处的做空 Scalp。
> *   **Bar 6**: Nominal Higher High，二次入场点。