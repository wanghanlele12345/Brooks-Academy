---
title: "CHAPTER 13 - Time Frames and Chart Types"
order: 17
---

> [!abstract] 核心逻辑
> 价格行为（Price Action）适用于所有市场和时间周期，因为它们反映的是人类行为。
> 1.  **最佳周期**：对于大多数日内交易者，**5分钟图表**是平衡节奏、清晰度和盈利能力的最佳选择。
> 2.  **更小周期陷阱**：1分钟/3分钟图虽然信号更多，但噪音大、滑点影响显著、决策时间短，导致胜率下降。**增加仓位比降低周期更有效。**
> 3.  **1分钟图的特定用途**：仅用于强劲趋势中寻找入场点（当5分钟图无回调时），或交易个股时的均线操作。
> 4.  **图表类型**：时间、Tick、成交量图表本质相同，但时间图表（Time-based）在绘制趋势线和预测K线收盘时更精准。

---

### 1. 时间周期选择与交易效率

#### a. 5分钟图 vs. 更小周期
*   **5分钟图优势**：
    *   **清晰度**：K线形态（Candles）能快速显示买卖控制权。
    *   **可管理性**：全天约81根K线，有足够时间判断 Setup、Signal Bar 和计算风险。
    *   **Bar Chart**: 适合多品种监控（Swing Trading），屏幕可容纳全天数据。
*   **1分钟/3分钟图劣势**：
    *   **过度交易**：虽然信号多（1分钟图约30个/天 vs 5分钟图12个/天），但很难在实盘中连续7小时保持精准执行。
    *   **胜率稀释**：为了抓更多机会，往往会由于反应不及而错过最佳交易，只抓到次级交易。
    *   **流动性限制**：大资金（如5000手Emini）在1分钟图上会导致严重滑点，破坏**交易者方程**。

> [!math] 交易者方程：周期对比
>
> | 周期 | 信号数量 | 止损风险 (Ticks) | 决策压力 | 长期盈利性 |
> | :--- | :--- | :--- | :--- | :--- |
> | **5 Min** | 中 (~12) | ~8 | 适中 | **高** (通过增加仓位扩大收益) |
> | **3 Min** | 高 (~20) | ~6 | 高 | 中 |
> | **1 Min** | 极高 (~30) | ~4 | 极高 | 低 (易疲劳、滑点、错过最佳单) |

#### b. 1分钟图的特定战术用途
仅在以下两种情况使用1分钟图作为辅助：
1.  **Runaway Trend (失控趋势)**: 5分钟图极强，没有任何回调（Pullback）。此时在1分钟图寻找 H1/L1, H2/L2 入场。
2.  **Trending Stocks (趋势个股)**:
    *   个股趋势非常尊重均线。
    *   **设置**：在1分钟图上使用 **90 EMA**（近似 5分钟图的 20 EMA）。
    *   **策略**：当价格触及 5分钟 MA 时，在 1分钟图出现的第一个反转信号入场，止损更小。

---

### 2. 图表类型 (Chart Types)

*   **Time-based (时间图)**: Brooks 首选。优点是趋势线精准，能倒数K线收盘时间，利于预判。
*   **Tick/Volume Charts (Tick/成交量图)**:
    *   基于特定交易笔数（如1500 ticks）或合约数（如20000 contracts）。
    *   **偏差**：开盘和收盘阶段K线极多，午盘K线极少。
    *   **本质**：所有图表形态皆源于人性，Price Action 规则通用。

---

### 3. 图表案例解析 (Case Studies)

#### Figure 13.1: Swing Trading with Bar Charts
![[Trading Price Action Reversals/Images/nc13f001.jpg]]
*   **Bar Chart 优势**: 适合波段交易（Swing Trading），屏幕空间利用率高，关注核心入场点。
*   **策略**:
    *   趋势中：寻找 Pullback (H2/L2)。
    *   趋势线突破后：寻找 Countertrend Test (HL/LL) 配合强反转K线。

#### Figure 13.2: 1-Minute Entries in Runaway Trend
![[Trading Price Action Reversals/Images/nc13f002.jpg]]
*   **背景**: 5分钟图（缩略图）开盘连涨 11.75点，无任何回调，无法上车。
*   **1分钟图战术**:
    *   **Bar A, B, C**: 均为 High 1 Setup。
    *   **执行**: 激进多头在 1分钟图前一根K线低点挂限价单买入（赌反转失败），或在 H1 高点上方买入。
    *   **管理**: 入场后回到 5分钟图管理交易，**切勿在1分钟图做逆势**。

#### Figure 13.3: 1-Minute MA Pullbacks (Stocks)
![[Trading Price Action Reversals/Images/nc13f003.jpg]]
*   **技术**: 1分钟图加载 **90 EMA** (模拟 5-min 20 EMA)。
*   **Bar Entry**: 价格触及均线后，出现低风险做空信号（风险仅为K线高度）。
*   **警示**: 容易陷入过度交易，新手应专注 5分钟图。

#### Figure 13.4: Chart Types Comparison
![[Trading Price Action Reversals/Images/nc13f004.jpg]]
*   **对比**: Top (5-min), Middle (1,500 Ticks), Bottom (20,000 Contracts).
*   **观察**: 价格行为形态类似，但非时间图表在开盘一小时K线密度极大。

#### Figure 13.6: News Trading (FOMC)
![[Trading Price Action Reversals/Images/nc13f006.jpg]]
*   **原则**: 消息公布瞬间机构有速度优势，**不要竞争**。等待 1-3 根K线后，优势消失再入场。
*   **Bar 2**: 大阳线反转，但重叠多（Overlap），疑似 Trading Range，不可追高。
*   **Bar 3**: 极佳的空头剥头皮（Short Scalp），利用 Bar 2 诱多被套的交易者。
*   **Bar 4 (Second Entry)**: 二次尝试反转日内低点。
    *   **Setup**: Bull Inside Bar，预期两段式上涨（Two legs up）。
    *   **结果**: 情绪化行情引发了 30点的超大趋势。**Swing part with breakeven stop.**

#### Figure 13.7: 1-Minute Scalping (High Intensity)
![[Trading Price Action Reversals/Images/nc13f007.jpg]]
*   **警告**: 这种高频剥头皮压力极大，仅供高级交易者参考。
*   **Bar 1**: iii 形态假突破，Lower High。
*   **Bar 2**: MA 处的 High 2，Wedge Bull Flag。
*   **Bar 5**: MA 处的 Low 3 (Triple Top Bear Flag)。
*   **Bar 7**: Steep Channel 后的 Wedge Reversal，不可直接做多，需等待更高低点。
*   **Bar 8**: Failed Trend Line Breakout + Low 2 Short。
*   **Bar 10**: 错误的做空点（预期会有 Second Leg Up）。
*   **Bar 11**: Double Bottom Bull Flag (Bar 10 的失败成为了 Bar 11 的动力)。
*   **Bar 14**: Expanding Triangle Top 的 Second Entry Short。