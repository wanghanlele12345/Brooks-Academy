---
title: "PART IV - Trading Ranges"
order: 27
---
> [!abstract] 核心逻辑：不确定性与双向交易 (Uncertainty & Two-Sided Trading)
> 交易区间 (Trading Range) 的本质是**双向交易 (Two-sided trading)** 区域，多空双方力量处于暂时平衡。
> *   **核心特征**：不确定性 (Uncertainty)。这也是区间与趋势最大的区别（趋势具有紧迫感）。
> *   **概率法则**：80% 的突破尝试会失败。
> *   **交易格言**：**Buy Low, Sell High, Scalp (低买高卖，剥头皮)**。
> *   **磁力与真空**：区间边缘的强趋势K线往往是**真空效应 (Vacuum Effect)** 导致的陷阱，而非突破信号。

## 1. 交易区间识别特征

### A. 价格行为特征
1.  **不确定性**：大多数 K 线看似胜率仅有 55% 左右。
2.  **重叠 (Overlap)**：K 线之间存在大量重叠（50% 以上），常常出现连续 3 根以上的重叠 K 线。
3.  **K 线形态**：多为 Doji，影线（Tails）较长，缺乏连续的大实体趋势 K 线。
4.  **均线**：均线走平，价格围绕均线反复穿越。
5.  **止损猎杀**：经常出现跌破前低后立即反转上涨，或突破前高后立即反转下跌的现象。
6.  **真空效应 (Vacuum Effect)**：
    *   在区间顶部出现强阳线：由于空头挂单位置更高（等待更好的价格），多头急于获利了结，导致价格被“吸”向阻力位，随后反转。
    *   在区间底部出现强阴线：同理，多头等待更低价格买入，空头急于平仓，导致价格被“吸”向支撑位。

### B. 市场结构逻辑
*   **分形属性**：所有的交易区间本质上都是更大级别图表上的**回调 (Pullback)**。
*   **通道演变**：
    *   牛市中的交易区间，其最后一腿通常是**熊市通道 (Bear Channel)**，这实际上是 **Bull Flag**。
    *   熊市中的交易区间，其最后一腿通常是**牛市通道 (Bull Channel)**，这实际上是 **Bear Flag**。

---

## 2. 交易策略原则

### A. 通用策略
*   **逆势操作 (Fade)**：
    *   在区间底部：买入跌破支撑的 K 线，或买入随后的反转 K 线。
    *   在区间顶部：卖出突破阻力的 K 线，或卖出随后的反转 K 线。
*   **只做剥头皮 (Scalp)**：除非在极佳的支撑/阻力位且顺应大级别趋势，否则不要期待波段持有。
*   **避免中间区域**：在区间中部（Middle Third），概率接近 50/50，此时不应进行交易，除非是极有经验的交易者。

### B. 突破交易
*   **失败预期**：默认所有突破都会失败，直到看到明显的强趋势跟随。
*   **入场时机**：如果突破成功（20% 概率），不要追单，等待 **Breakout Pullback** 再次入场。

---

## 3. 案例图解解析

### Figure PIV.1：区间嵌套与结构

![[Images/nc21uf001.jpg]]

*   **结构**：大级别区间（A, B）包含小级别区间（数字标号）。
*   **Range B**: 包含了三次下推（Triangle），每次下跌都测试了 Range A 的顶部。
*   **Range 8**: 也是 Range 6 之后的 Double Bottom Bull Flag。
*   **关键逻辑**: 牛市中交易区间的**最后一腿通常是熊市通道**（Bear Channel），这是多头买入的最佳时机（Bull Flag）。

### Figure PIV.2：交易区间日 (Trading Range Day)

![[Images/nc21uf002.jpg]]

*   **开盘特征**: 早期出现多次反转（Bar 1 下跌，Bar 2 上涨，Bar 3 失败，Bar 4 通道失败），预示当日为震荡日。
*   **Bar 7 (Vacuum Effect)**: 突破新高的强阳线，紧接着出现 Bear Inside Bar。这是典型的真空效应引发的顶部反转。
*   **Bar 12 (Double Top)**: 价格回到区间中部。尽管 Bar 12 是阳线实体，但在区间交易中，位于顶部的二次测试是合理的做空点。
*   **策略**:
    *   在 Bar 7, 9, 10, 12 等高点做空。
    *   在 Bar 6, 8 等低点做多。
    *   **Fade Breakouts**: 看到强阳线突破高点时卖出，看到强阴线跌破低点时买入。

### Figure PIV.3：区间内的波段交易 (Swing Trades)

![[Images/nc21uf003.jpg]]

*   **Upper Range (顶部区间)**:
    *   **Bar 3**: 昨日高点的 Wedge Reversal，做空点。
    *   **Bar 5**: 跌破上升趋势线后的 Lower High，做空点。
*   **Lower Range (底部区间)**:
    *   **Bar 11**: 反弹打破了熊市趋势线。
    *   **Bar 14**: 形成 **Wedge Bull Flag** (Higher Low)，强力反转阳线，波段买点。
    *   **Bar 16 & 17**: 突破后的 High 1 Breakout Pullback，加仓点。

### Figure PIV.4：中间区域陷阱 (Middle Third)

![[Images/nc21uf004.jpg]]

*   **Barbwire**: 从 Bar 2 之后到 11:45，市场处于极为窄幅的震荡，且位于当日高低的中间三分之一区域。
*   **操作建议**: K 线重叠严重，充满十字星。在此区域交易极易亏损，应**空仓等待**价格触及边缘。

### Figure PIV.5：Spike Up and Down = Trading Range

![[Images/nc21uf005.jpg]]

*   **形态**: 剧烈的上涨 (至 Bar 2) 紧接着剧烈的下跌。这种 V 型 + 倒 V 型反转通常直接导致交易区间。
*   **Bar 4**: Low 2 Breakout Pullback。
*   **Bar 8**: 对 Bar 4 低点的测试（Sell Climax），随后形成 Spike and Channel Bear Trend，并在测试支撑后反转。

### Figure PIV.6：回调演变为大区间

![[Images/nc21uf006.jpg]]

*   **Bar 1**: Buy Climax 后的剧烈回调。
*   **Bar 9**: 下跌至价值区域，出现 Three-push pattern (Wedge variant)，价值型交易者入场。
*   **Bar 13**: Spike and Channel 的通道顶部，出现 Overshoot（过冲），随后测试通道起点（Bar 12）。
*   **逻辑**: 强趋势后的深度回调往往演变为宽幅震荡，直到多空双方在新的价格水平达成共识。

### Figure PIV.7：交易区间作为反转形态

![[Images/nc21uf007.jpg]]

*   **背景**: 处于大级别牛市中的 4 天交易区间。
*   **Bar 8, 9, 12**: 三次尝试跌破昨日低点失败。
*   **Bar 12**: **Failed Low 2**。这是一个强力的反转信号，同时也是 Double Bottom Pullback 买点。
*   **结论**: 交易区间底部的 Failed Bear Setup 往往是新一轮牛市的起点。

### Figure PIV.8：Buy Climax 后的区间 (News)

![[Images/nc21uf008.jpg]]

*   **Bar 1 (FOMC)**: 巨大的 Outside Bar，随后是 Bar 3 的 Sell Climax。
*   **Bar 2 (Bull Trap)**: 位于区间顶部的 High 2，紧贴均线，是多头陷阱。
*   **Bar 3**: Failed High 2 = Low 2 Short，位于日内高点，绝佳做空机会。
*   **Bar 10**: 另一个 Bull Trap (Doji high)，随后出现连续 Sell Climax。
*   **教训**: 在区间顶部，哪怕是 High 2 这种通常的顺势信号，也往往会失败，应反向操作。

### Figure PIV.9：月线级别的区间与反转

![[Images/nc21uf009.jpg]]

*   **Bar 4, 6, 8/9**: 连续三个 Sell Climax（大阴线）。
*   **Bar 8-10**: 形成 Triple Bottom 或 Head & Shoulders Bottom。
*   **Bar 24**: 强力的 Bear Spike 跌破了 Bar 22 颈线，市场翻转为 **Always-In Short**。
*   **Bar 29/31**: 再次出现 Sell Climax，带有长下影线，预示空头动能耗尽，随后进入长期区间。
*   **策略**: 即使是长达 5 年的趋势，在更高的时间周期（如月线）上可能只是一个巨大的交易区间的一部分。在区间边缘（如 Bar 23）出现的 Wedge Top 即使突破了，也极易反转。

---

> [!math] 交易者方程：区间内的概率分布
>
> | 位置 | 方向概率 (Directional Probability) | 策略 |
> | :--- | :--- | :--- |
> | **区间中部** | 上涨/下跌各 50% | **不交易** 或极短线剥头皮 |
> | **区间顶部** | 下跌概率 > 60-70% | **做空** (Fade Breakouts/Buy Climaxes) |
> | **区间底部** | 上涨概率 > 60-70% | **做多** (Fade Breakouts/Sell Climaxes) |
>
> *注：如果在强牛市背景下的交易区间，底部做多的胜率和盈亏比通常优于顶部做空。*