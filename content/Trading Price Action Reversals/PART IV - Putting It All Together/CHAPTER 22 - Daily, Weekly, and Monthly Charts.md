---
title: "CHAPTER 22 - Daily, Weekly, and Monthly Charts"
order: 28
---

> [!abstract] 核心逻辑：分形市场与时间周期
> *   **通用性 (Universality)**：价格行为是人性的体现，具有分形特征 (Fractal)。1932 年的日线图与今日的 5 分钟图在技术形态上无异。
> *   **日内交易者准则**：大周期图表虽然有效，但信号稀疏且易分心。建议仅在收盘后扫描日线寻找次日机会。
> *   **隔夜风险**：大周期交易需大幅降低仓位或使用期权 (Options) 以规避跳空风险。
> *   **圆孔数字 (Round Numbers)**：作为强磁力位 (Magnet)，引发真空效应 (Vacuum Effect)，常导致价格快速穿越并回调。

## 1. 高时间周期 (HTF) 交易原则

### 交易策略与风险管理
1.  **日内交易者的处理**：
    *   不要在盘中盯着日线/周线，以免错过高频的日内信号。
    *   主要关注昨日最高价/最低价 (Yhigh/Ylow) 对当日的影响。
2.  **仓位控制**：
    *   由于止损幅度大且存在隔夜跳空风险，必须显著降低合约数量。
    *   替代方案：购买期权 (Put/Call) 或价差策略 (Spreads) 锁定风险。
3.  **不确定性**：
    *   日线回调往往缺乏经典的“反转棒”信号，不确定性意味着高风险。
    *   **应对**：分批建仓 (Scale in)。

### 特殊情境处理
*   **高 Beta / 新闻股 (High-Beta/News Stocks)**：
    *   小盘股或药企 (如 DNDN) 可能因 FDA 批准或收购消息出现 1000% 的波动。
    *   **建议**：避免交易。虽然波动巨大，但需极度缩小仓位，且滑点 (Bad Fills) 严重，风险收益比不佳。
*   **圆孔数字 (Round Numbers)**：
    *   **磁力效应**：如 FCX 接近 $100。空头撤退，多头抢进 -> 价格快速吸向目标。
    *   **过冲 (Overshoot)**：通常穿越目标 5%-10% 后才会回调。
    *   **策略**：多头在接近时持有，空头等待穿越后并在测试该水平时入场。

---

## 2. 经典图表案例分析

### 价格行为的时间跨度一致性
![[Trading Price Action Reversals/Images/nc22f001.jpg]]
**图 22.1 (Dow Jones 1932-1933)**：证明价格行为并未随时间改变。
*   **Bar 2**: Low 2，跌破趋势线。
*   **Bar 3**: 小 Final Flag 反转，跌破趋势线后的 Lower Low Test。
*   **Bar 6**: Wedge Channel，紧随 Bull Spike 之后。
*   **Bar 7**: 趋势线跌破 + 两段式回调。
*   **Bar 8**: **Lower Low Major Trend Reversal (MTR)**，大型 Wedge Bull Flag。
*   **Bar 14**: Wedge + Final Flag Reversal。
*   **Bar 15**: 强劲逆势动能，暗示 Always-in Short 或至少会二次探底。
*   **Bar 18**: Wedge Lower High Breakout Pullback (测试 Bar 14 信号低点)。

### 利用日线设置进行日内交易
![[Trading Price Action Reversals/Images/nc22f002.jpg]]
**图 22.2 (AAPL Daily vs 5-min)**：处理日线买入信号遭遇跳空高开。
*   **Context**: 日线 (左下) 处于强多头趋势，Bar 2 为强反转棒。
*   **Problem**: 次日开盘大幅跳空 (Gap Up)，直接买入风险过大。
*   **Solution (5-min chart)**:
    *   等待回调填补缺口。
    *   **Bar 6**: Gap Close + Moving Average Gap Bar + Bear Trend Channel Line Overshoot Reversal。
    *   **Action**: 在 Bar 6 上方做多，止损设其下方。

### 周线图的大局观与量度移动
![[Trading Price Action Reversals/Images/nc22f003.jpg]]
**图 22.3 (SPY Weekly)**：熊市反弹 vs 大型震荡区间。
*   **Context**: 市场从 Bar 16 的大幅反弹使其进入大型 Trading Range。
*   **Bar 16**: 刚好达到 Measured Move 目标位。
    *   *机构逻辑*：需要 >60% 胜率 + 达到 MM 目标位，交易者方程才为正。
*   **Bar 13-16**: Wedge Bottom + 3rd Sell Climax。
*   **Bar 21-32**: 形成 Expanding Triangle。
*   **形态辨识**: Bar 21-28 形成头肩顶 (Head and Shoulders Top)，但 80% 的顶部形态实为 Bull Flag (延续形态)，随后突破向上。

### 月线图的通道分析
![[Trading Price Action Reversals/Images/nc22f004.jpg]]
**图 22.4 (Gold Monthly)**：楔形通道。
*   **Bar 7-8**: Bull Spike。
*   **Bar 10-Current**: Wedge Channel。
*   **原理**: 当 5-10 根 K 线紧贴趋势线运行时，跌破概率大增。当前位于通道线顶部 + 量度移动目标位，预期两段式回调 (Two-legged sell-off)。

### 强趋势反转与交易者方程
![[Trading Price Action Reversals/Images/nc22f005.jpg]]
**图 22.5 (Dollar Index Monthly)**：
*   **Bar 13**: Lower High Major Trend Reversal (MTR)。
*   **Bar 18**: Sell Climax (熊市趋势末端的第 5 根 K 线)，也是 Double Bottom (与 Bar 1)。
*   **Bar 22**: Lower Low MTR，随后出现 Parabolic Channel。
*   **Bar 27**: Double Bottom MTR。
*   **Bar 29**: Double Bottom Bull Flag (TR 底部买入)。

> [!math] 交易者方程 (Bar 29 Long)
> *   **Setup**: Trading Range 底部买入，目标为顶部 (Bar 28)。
> *   **Probability**: ~60% (双底牛旗 + 区间底部)。
> *   **Risk**: ~$5.00 (止损设在低点下方)。
> *   **Reward**: ~$10.00 (目标区间顶部)。
> *   **结论**: 极佳的风险回报比。即使只有 40% 胜率也值得博弈，何况胜率偏高。

### 圆孔数字磁力效应
![[Trading Price Action Reversals/Images/nc22f006.jpg]]
**图 22.6 (AAPL Daily)**：$300 整数关口。
*   **Vacuum Effect**: 空头在 $300 前撤退，多头推升 -> 价格被吸向磁力位。
*   **Overshoot**: 市场通常会超越目标 5-10% ($315)。
*   **Bar 12**: 回调测试 $300 (最低 $300.01) 后强力反弹。

### 多周期冲突与消息面误区
![[Trading Price Action Reversals/Images/nc22f007.jpg]]
**图 22.7 (Wheat)**：不要听信电视专家。
*   **Daily (右)**: 抛物线式买入高潮 (Parabolic Climax)。
*   **Monthly (左)**: Bar 10 是 Bear Trend 中的 Moving Average Gap Bar + Double Top Bear Flag。
*   **结论**: 即使基本面利好，图表显示 smart money 正在做空或等待回调。遵循图表而非新闻。

### 消息驱动的高波动风险
![[Trading Price Action Reversals/Images/nc22f008.jpg]]
**图 22.8 (DNDN Daily)**：
*   **特征**: 受药物审批新闻驱动，数月内暴涨 800-2000%，随后腰斩。
*   **教训**: 极难进行风险管理，主要作为反面教材。**Avoid these stocks.**