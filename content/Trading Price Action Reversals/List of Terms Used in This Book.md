---
title: "List of Terms Used in This Book"
order: 1
---

> [!abstract] 核心逻辑
> 本章汇总了 Al Brooks 价格行为交易体系的专用术语。这些定义是**实用导向（Practical）**而非纯理论导向。
> 关键认知：
> 1.  所有定义服务于通过**K线关系**判断市场意图。
> 2.  **胜率（Probability）**与**盈亏比（Risk/Reward）**的平衡（Trader's Equation）是决策核心。
> 3.  市场处于**趋势（Trend）**或**交易区间（Trading Range）**的不断转化中。

---

### 1. 市场状态与宏观结构 (Market Context)

*   **Always In (必在模式)**: 假设如果必须时刻持有仓位（多或空），当前应持有的方向。
    *   确立：通常需要一个强趋势突破（Spike）来建立信心。
    *   逆转：当反向信号足够强，迫使你改变持仓方向时。
*   **Trend (趋势)**: 价格主要向一个方向移动（牛市或熊市）。
    *   组成：由 **Spike (突破)**、**Channel (通道)** 和 **Pullback (回调)** 构成。
    *   **Trend From The Open**: 开盘即形成的趋势，全天无深幅回调。
*   **Trading Range (交易区间)**: 价格横向移动，多空平衡。
    *   特征：K线重叠，缺乏持续性。
    *   **Tight Trading Range (TTR)**: 极窄的区间，多空完全平衡，难以通过止损单盈利。
    *   **Barbwire (铁丝网)**: 3根或更多重叠K线，其中包含Doji，这是TTR的一种，容易双向止损。
*   **Climax (高潮)**: 价格移动过快过远，随之而来的是反转或进入整理（Trading Range）。
*   **Vacuum (真空效应)**: 价格被快速吸向支撑/阻力位（Magnet），加速移动后通常会发生反转。

### 2. K线形态与计数 (Bars & Counting)

*   **Trend Bar (趋势K线)**: 收盘价远离主要实体，表明一方控制局面（有实体）。
*   **Doji (十字星)**: 实体极小或无实体，表明多空犹豫或平衡。
*   **Reversal Bar (反转K线)**:
    *   **Bull Reversal**: 下影线长，收盘在上方（跌势中出现）。
    *   **Bear Reversal**: 上影线长，收盘在下方（涨势中出现）。
*   **Inside Bar (内包线)**: 高点 $\le$ 前高，低点 $\ge$ 前低。代表暂停或压缩。
    *   **ii / iii**: 连续2根或3根内包线，由于压缩极致，通常视为突破模式（Breakout Mode）。
    *   **ioi (外-内-外)**: 也是一种突破模式。
*   **Outside Bar (外包线)**: 高点 > 前高，低点 < 前低。代表波动扩大，有时是陷阱。
*   **High/Low 1, 2, 3, 4 (回调计数法)**:
    *   **H1 (High 1)**: 牛旗中第一根高点超越前一根高点的K线。
    *   **H2 (High 2)**: 第二次尝试恢复趋势，通常是更可靠的入场点。
    *   **H3/L3**: 第三次尝试，通常对应 **Wedge (楔形)** 形态。
    *   **L1/L2**: 熊旗中的对应计数。

### 3. 常见图形与设置 (Setups & Patterns)

*   **Breakout (突破)**: 价格超越重要点位（前高/低、趋势线）。
    *   **Breakout Pullback (BP)**: 突破后的小幅回调（1-5根K线），预期趋势将延续。
    *   **Failed Failure**: 失败形态的失败（负负得正）。例如：突破失败变成了一个Pullback，这使得原始突破更加可信。
*   **Wedge (楔形)**: 三推浪（Three Pushes）结构，趋势线和通道线收敛。
    *   功能：极佳的反转信号，或趋势中的回调形态（Bull/Bear Flag）。
*   **Double Top/Bottom (双顶/双底)**:
    *   定义：两次尝试冲击同一价格区域（无需精准同价）。
    *   **Double Bottom Bull Flag**: 牛市回调中的双底，是强力做多形态。
*   **Gap (缺口)**:
    *   常规缺口：K线之间无重叠。
    *   **Moving Average Gap Bar (均线缺口)**: 强趋势中，K线完全不触碰20 EMA。第一次触碰EMA通常会引发对极值的测试。
    *   **Micro Measuring Gap**: 强趋势中，前后两根K线的影线不重叠，预示强势。
*   **Spike and Channel**: 突破（Spike）后动能减弱转为通道（Channel），通道本质是弱趋势。

### 4. 交易执行与管理 (Execution & Management)

*   **Scalp (剥头皮)**:
    *   目标：快速获取小额利润（Emini < 4点）。
    *   要求：高胜率（>70%），因为回报通常小于或等于风险。
*   **Swing (波段交易)**:
    *   目标：持有仓位经历回调，追求大波段。
    *   方程：回报 > 风险，胜率要求可降低（40-60%）。
*   **Signal Bar vs. Entry Bar**:
    *   Signal Bar：触发生之前的最后一根K线（设置止损单的基础）。
    *   Entry Bar：实际成交的那根K线。
*   **Trapped (被套/踏空)**:
    *   Trapped In: 交易反向，亏损被锁。
    *   Trapped Out: 止损后行情立即按原方向运行，导致不敢追单。

### 5. 交易者方程 (The Trader's Equation)

> [!math] 决策模型
> $$ Expectancy = (Probability \times Reward) - (Failure \times Risk) $$

*   **Probability (胜率)**:
    *   **High Probability**: > 60% (通常出现在顺势突破回调 H2/L2)。
    *   **Uncertain**: ~50% (大部分时间市场处于此状态)。
    *   **Low Probability**: < 40% (逆势交易)。
*   **Setup Quality**:
    *   **Reasonable**: 方程结果为正。
    *   **Edge (优势)**: 短暂存在的数学优势，需要快速识别。

### 6. 其他关键术语

*   **Buying/Selling Pressure**: 强趋势K线、长影线累计出现的视觉效果，预示价格惯性。
*   **Institution**: 机构/聪明钱。决定市场方向的力量。
*   **HFT (高频交易)**: 算法交易，提供流动性并制造大部分日内噪音和微观形态。
*   **Fractal (分形)**: 任何周期的形态都可以在更大或更小周期找到对应（如5分钟图的微型通道是1分钟图的通道）。