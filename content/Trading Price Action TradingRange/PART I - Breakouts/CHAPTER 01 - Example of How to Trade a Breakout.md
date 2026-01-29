---
title: "CHAPTER 01 - Example of How to Trade a Breakout"
tags: [PriceAction, Breakout, Spike, MeasuredMove, RiskManagement]
order: 4
---

> [!abstract] 核心逻辑
> 突破交易（Trading Breakouts）虽然因行情快、风险大而令人恐惧，但具有极高的数学优势。
> *   **高胜率**：强劲的突破 Spike 有 **60% - 80%** 的概率达到基于 Spike 高度的等距目标位（Measured Move）。
> *   **心理博弈**：当所有人都渴望回调（Pullback）买入时，回调往往不会发生。必须克服恐惧，以小仓位市价入场（"I don't care" size）。
> *   **风险管理**：随着 Spike 延伸，虽然绝对风险增加，但因胜率极高，Trader's Equation 依然成立。

---

# 1. 突破的数学优势与交易者方程

成功的突破通常伴随着巨大的动能（Momentum）和极少的重叠（Overlap）。

### 案例分析：强劲的牛市突破
![[AL Brooks/TradingRange/Trading Price Action TradingRange/Images/nc01f001.jpg]]

**图解拆解 (Figure 1.1):**
*   **Bar 5**: 市场转为 Always-In Long 的起点。
*   **Bar 11**: 突破 Wedge Bear Flag 高点，预期将有 Measured Move。
*   **Bar 14-15 (The Spike)**: 连续的强趋势阳线，实体大且影线短。
    *   **Bar 15 Close Entry**: 买入收盘价。
    *   **Risk**: 止损放在 Spike 底部（Bar 14 低点下方 1 tick），约 7 ticks 风险。
    *   **Reward**: 60% 概率上涨至少 6 ticks (Spike 高度)。
*   **Bar 16 vs 18 (Micro Measuring Gap)**: Bar 18 低点高于 Bar 16 高点，形成微型缺口，这是强势特征。激进者可将止损上移至 Bar 18 低点。
*   **Bar 19 (Spike Growth)**: Spike 延伸至 17 ticks 高。
    *   此时入场风险为 18 ticks（至 Bar 14 底），但目标位也相应提高。
    *   随后 Bar 20 出现 Bear Inside Bar，标志着 Spike 结束，进入 Channel 阶段.
*   **Bar 24**: 达到并超过了 Measured Move 目标。

> [!math] Trader's Equation (Bar 15 Entry)
>
> $$ Probability (>= 60%) × Reward (High) > Risk (7 	ext{ ticks}) $$
> *即使 Spike 延伸导致止损距离变大，高胜率依然保证了正期望值。*

---

# 2. 突破交易执行策略

### A. 克服心理障碍 (The "I Don't Care" Size)
*   **现象**：交易者害怕在 Spike 顶部买入，期待回调。但强趋势中，Smart Bears 停止做空，Smart Bulls 持续小单买入，导致回调迟迟不来。
*   **对策**：必须强迫自己**立即市价买入**。
    *   为了应对较远的止损（Spike 底部），将仓位缩减至平时 1/3 或 1/4。
    *   一旦市场证明方向正确，再寻找机会加仓。

### B. 入场技术细节
1.  **Breakout Entry**:
    *   买入强趋势 K 线的 Close (如 Bar 14, 15)。
    *   买入前一根 K 线高点的突破（Buy Stop）。
2.  **Pullback Entry (随着趋势老化)**:
    *   趋势初期（Spike Phase）：直接买入 breakout 优于等待 pullback。
    *   趋势中期/末期（Channel/Climax Phase）：等待回调买入更安全。
    *   **Bar 22**: 突破 ii 形态，也是潜在的 Final Flag，此时买回调优于买收盘。
3.  **Last-Ditch Buy Stop (最后的上车机会)**:
    *   在 Spike 高点（如 Bar 19 High）上方 1 tick 放置 Buy Stop。
    *   **逻辑**：防止市场不进行深幅回调直接上涨，确保不错过强趋势。如果回调发生（如 Bar 20），可取消订单并寻找更低入场点。

### C. 具体的 Setup 清单 (Figure 1.1)
*   **Bar 8**: High 2 Bull Flag（针对 Bar 3-5 熊市通道突破后的回调）。
*   **Bar 12**: High 2 @ EMA（Bar 11 突破后的回调）。
*   **Bar 20**: ii pattern (Inside-Inside)，High 1 setup。
*   **Bar 23**: High 2。
*   **Bar 25**: High 2 (Double Bottom)。

---

# 3. 突破缺口与利润回吐 (Breakout Gaps & Profit Taking)

### 案例分析：缺口回测与高潮反转
![[AL Brooks/TradingRange/Trading Price Action TradingRange/Images/nc01f002.jpg]]

**图解拆解 (Figure 1.2):**
*   **Bar 5-8 (Sell Climax)**: 连续出现 3 个抛售高潮（无回调下跌）。
    *   **Bar 8 后**: 出现 Inside Bar (Potential Final Flag)。
    *   **Profit Taking**: 空头在连续高潮后倾向于获利了结，导致市场进入约 10-bar 的反弹/修正。
*   **Bar 13 (Breakout Spike)**: 强力突破 Bar 11 高点。
*   **Breakout Gap**: Bar 11 高点与 Bar 13 之后的低点之间留有缺口。
    *   这是强势的标志。缺口中点或第一波上涨高点常作为 Measured Move 的基准。
*   **Bar 19 (Breakout Test)**: 市场回落测试了 Bar 13 形成的 Channel 底部，并填补/测试了 Breakout Gap 区域。

> [!tip] 核心原则
> *   **Climax -> Correction**: 连续的高潮（Climaxes）通常导致至少 10 根 K 线、两段式（Two-legged）的修正。
> *   **Gap Test**: 突破后的通道回调（Channel Pullback）通常会测试突破缺口（Breakout Gap）。