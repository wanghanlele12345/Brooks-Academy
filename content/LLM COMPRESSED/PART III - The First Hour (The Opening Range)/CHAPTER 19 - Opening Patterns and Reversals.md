---
title: "CHAPTER 19 - Opening Patterns and Reversals"
order: 24
---

> [!abstract] 核心逻辑：真空效应与开盘反转
> 机构交易者倾向于在价值区间成交。
> *   **真空效应 (Vacuum Effect)**：如果开盘跳空高开 (Gap Up)，机构会等待价格回调至支撑位（MA, Trend Line, Swing Low）再买入；反之亦然。这种等待制造了向反方向的急速运动。
> *   **开盘反转 (Opening Reversal)**：急速运动触及支撑/阻力后，机构进场，导致强烈的反转，往往形成当天的最高点或最低点 (HOD/LOD)。
> *   **核心时机**：90% 的日子里，HOD/LOD 在开盘 1-2 小时内形成。

## 1. 开盘形态统计特征

### HOD/LOD 形成时间分布
*   **Bar 1**：约 20% 概率成为全天 HOD/LOD（若是无影线的强趋势棒，概率提升至 30%）。
*   **前 5 Bars**：约 50% 概率形成 HOD/LOD。
*   **前 60-120 分钟**：90% 概率形成 HOD/LOD。

### 交易策略概率
*   **Swing Trade (波段)**：开盘区间的反转形态约有 30% 概率达到 2R (Reward = 2 * Risk)。
*   **Scalp (剥头皮)**：约 60% 概率达到 1R。
*   **最佳入场**：通常等待 **Double Top/Bottom** (双顶/双底) 确认后再进行波段交易，成功率提升至 40-50%。

> [!math] 交易者方程 (Trader's Equation)
> 假设 Emini 平均波幅 10-15 点，目标 4 点，止损 2 点。
> **典型 10 笔交易模型：**
> | 结果类型 | 笔数 | 单笔盈亏 | 总盈亏 |
> | :--- | :---: | :---: | :---: |
> | **大胜** | 4 | +4 pts | +16 pts |
> | **止损** | 3 | -2 pts | -6 pts |
> | **小胜/保本** | 3 | +1~3 pts | ~+6 pts |
> | **净利润** | **10** | **平均 1.6/trade**| **+16 pts** |
> *结论：即便胜率不高，只要盈亏比合理且捕捉到开盘波段，期望值为正。*

## 2. 开盘区间 (Opening Range) 的性质

开盘区间的大小决定当天的潜在走势：

1.  **小型区间 (约平均波幅的 25%)**
    *   **特征**：Bars 重叠，多空不明。
    *   **策略**：Breakout Mode（突破模式）。在区间高点上方做多，低点下方做空。
    *   **演变**：可能发展为单边趋势日 (Trend from the open)。

2.  **中型区间 (约平均波幅的 33%-50%)**
    *   **特征**：最常见。
    *   **策略**：预期突破幅度为一个 Measured Move (量度移动)。
    *   **演变**：突破后常回测突破点，若回测强劲并收于反向极端，形成 **Reversal Day**。

3.  **大型区间 (急速剧烈波动)**
    *   **特征**：由强 Spike 驱动。
    *   **演变**：Spike and Channel 趋势，或 Climactic Reversal (高潮反转)。

## 3. 关键技术形态解析

### 趋势确认信号
*   **Always-in Long**：首小时内出现连续 2 根强牛市趋势棒（大实体、小尾巴）。
*   **Always-in Short**：连续强熊市趋势棒，随后反弹被反包。

### 失败的开盘反转
*   若反转尝试仅持续数根 K 线即失败，转化为 **Breakout Pullback (BPB)**，预期接下来的走势为通道 (Channel)。

---

## 4. 图表案例深度拆解

### 案例 1：小型开盘区间的量度移动
![[Images/nc19f001.jpg]]
*   **Context**: 开盘区间仅为近期均幅的 50%，预示区间扩展。
*   **Bar 3**: 双顶 (与 Bar 1)，Breakout Pullback 至 MA，50% 概率成为 HOD。
*   **Bar 4**: 双底 (与 Bar 2)，50% 概率成为 LOD。
*   **Bar 5**: 再次双顶 (与 Bar 3)，Wedge Top + MA Gap Bar，最终确立为 HOD。
*   **Bar 6**: 强劲下跌，预期达到向下 Breakout 的 Measured Move。

### 案例 2：开盘区间大小与突破模式
![[Images/nc19f002.jpg]]
*   **Context**: FCX 5分钟图，开盘区间极小 (25% Avg Range)。
*   **Setup**: Breakout Mode。
    *   高于 Top Spike (Bar 4上方) 做多。
    *   低于 Bottom Spike (Bar 3下方) 做空。
*   **Bar 4**: 此时已出现 iii 形态突破，且为 Double Bottom Bull Flag (ii pattern 后的一tick突破失败反转)。
*   **Bar 5**: 突破小 Bear Inside Bar，强趋势棒，确立 Always-in Long。

### 案例 3：开盘 Breakout Pullbacks (BPB)
![[Images/nc19f003.jpg]]
*   **Bar 1**: Low 2 做空 (在陡峭 MA 处)，回补昨日 Gap，形成 HOD。
*   **Bar 2**: Bull ii setup，突破昨日 Swing High 后的 MA Pullback。
*   **Bar 3**: 突破 Bull Trend Line 后的 Failed Breakout (反转向上)。
*   **Bar 4**: Higher Low，与 Bar 3 构成近似双底。
*   **Bar 5**: High 2 Double Bottom Bull Flag，突破昨日高点后的首次回调。

### 案例 4：早期失败突破与终极旗形
![[Images/nc19f004.jpg]]
*   **Bar 2**: 突破昨日收盘区间及熊市趋势线失败，反转变为 Breakout Pullback。
*   **Bar 4**: 楔形通道顶部 (Wedge Shape)，Gap Spike 后的 Higher High Reversal，做空。
*   **Bar 6**: Lower High Final Flag，跌破牛市通道后的反抽。
*   **Bar 9**: 强动能新低 (Bear Spike)，形成 Climactic Reversal setup。
*   **Bar 11**: Low 2 Short。多头两次尝试反转 Bar 10 的 Lower High 失败，确立下跌。

### 案例 5：缺口后的趋势与反转
![[Images/nc19f005.jpg]]
*   **Bar 4**: 强熊反转棒，测试 MA，作为 Bar 1 跌破后的 Breakout Pullback Short。
*   **Bar 5**: High 2 variant (Bear-Bull-Small Leg)，高潮后的 Two-legged countertrend 尝试。
*   **Bar 8**: Wedge Top，Bar 5 后的第二段推升。
*   **Bar 24**: Double Bottom Bull Flag。测试昨日低点及 Bar 18-23 熊旗突破失败后的反转。
*   **Bar 26**: 小 Final Bear Flag 失败，Higher Low，ii setup 突破，多头入场。

### 案例 6：大低开后的两段式回调
![[Images/nc19f006.jpg]]
*   **Context**: 大幅 Gap Down，通常会有 Two-legged pullback 回测 MA，随后恢复熊市。
*   **Bar 2-3**: Double Top Bear Flag (三角形收敛)。
*   **Bar 3**: Low 2 Short。在 TR 顶部，做空优于做多。
*   **时间点**: 趋势常在 8:30 a.m. PST 左右开始/反转。

### 案例 7：双底/双顶旗形 (延续形态)
![[Images/nc19f007.jpg]]
*   **Bar 3-4**: Double Bottom Bull Flag (趋势延续，而非反转)。
*   **Bar 6-7**: Double Top Bear Flag。

### 案例 8：两次尝试失败引发反转
![[Images/nc19f008.jpg]]
*   **Context**: 7:00 a.m. PST 报告发布前的小 TR，三角形 Breakout Mode。
*   **Bar 5**: Low 2 Short。此前 High 2 Long 失败 (两次尝试突破顶部失败)，转为做空。
*   **Bar 2**: 连续两根强熊棒，建立 Always-in Short，暗示任何反弹 (如 Bar 5) 都是做空机会。

### 案例 9：开盘 "铁丝网" (Barbwire)
![[Images/nc19f009.jpg]]
*   **特征**: MA 走平，K 线重叠，无清晰方向。
*   **策略**: 等待一方被 Trap。
*   **Bar 6**: Outside Down Bar，看似突破，实为 Bear Trap。
*   **Bar 7**: 突破 Barbwire 底部后的 Reversal Up，High 1。
*   **Bar 9**: Lower Low Breakout Pullback (High 2)，在昨日低点处的第二次反转尝试。
*   **Bar 12**: High 2 Breakout Pullback，MA 处的 Bull Reversal Bar，确认多头趋势。