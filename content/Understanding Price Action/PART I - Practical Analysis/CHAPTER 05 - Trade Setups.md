---
title: "CHAPTER 05 - Trade Setups"
tags: [Setups, PatternBreak, Pullback]
order: 8
---

# 第五章：交易形态 (Trade Setups)

> **核心提示**：前四章搭建了理论和管理的框架，**第五章**则是全书的**执行中枢**。本章详细定义了**三种核心突破形态**以及**一种反转形态**。
>
> 我们不再谈论抽象的“压力”和“支撑”，而是具体到：**哪一根K线是信号棒 (Signal Bar)？哪一根是入场棒 (Entry Bar)？在什么位置扣动扳机？**

本章涵盖的四大形态：
1.  **Pattern Break (标准形态突破)**
2.  **Pattern Break Pullback (突破回调)**
3.  **Pattern Break Combi (组合突破)**
4.  **Pullback Reversal (回调反转)**

---

## 5.1 形态突破 (Pattern Break)

### 核心逻辑
这是最基础、最通用的突破策略。虽然形态千变万化（箱体、旗形、楔形等），但它们都有一个共同点：**有一条清晰的边界 (Boundary)**。
我们的任务不是在边界被触碰时猜测，而是等待边界附近的**Buildup (蓄势)**。

### 识别流程 (The 4-Step Process)
在一个理想的世界里，形态突破遵循四个步骤：
1.  **攻击 (Attack)**：价格冲向关键边界。
2.  **防守 (Defense)**：防守方挡住第一波冲击。
3.  **蓄势 (Buildup)**：在边界附近形成一簇紧密的K线（Tug-o-war），多空双方在此肉搏。
4.  **突破 (Breakout)**：价格突破Buildup，引发双重压力爆发。

### 信号棒与入场棒 (Signal Bar & Entry Bar)
这是执行层面的关键定义：
*   **信号棒 (Signal Bar)**：Buildup中的最后一根K线，通常紧贴着边界收盘。它为突破“设定”了条件。
    *   **做空信号棒**：应该是一根阴线（或中性线），收盘价接近支撑位。
    *   **做多信号棒**：应该是一根阳线（或中性线），收盘价接近阻力位。
*   **入场棒 (Entry Bar)**：紧随信号棒之后的那根K线。
    *   **触发点 (Trigger)**：当入场棒的价格**超过信号棒的高点（做多）或跌破信号棒的低点（做空）** 1个点 (1 pip) 时，市价入场。

> **重要提示**：一定要使用**One-Pip Chart**（价格以1点为最小波动单位的图表，而非0.1点的Pipettes），这样能更清晰地看到关键的高低点排列。

---

## 5.2 图表复盘：标准形态突破实战

*(基于 Figure 5.1)*

![[Understanding Price Action/Images/Understanding-Price-Action-Practical-Analysis-of-the-5-minute-time-frame-(Bob-Volman)-(Z-Library).pdf-87-0.png]]

这张图展示了如何在震荡下行的市场中捕捉高胜率的做空机会。

### 市场背景分析
*   **W-Pattern (W底反弹)**：3-4段是一个W底反弹，暂时打破了下跌趋势，多头试图反攻。
*   **Skirmish at 25EMA (均线争夺)**：价格在4-12之间围绕25EMA反复缠绕。多头试图站稳均线，但屡次失败（8-9, 10-11）。
*   **Failed Magnet (磁力失效)**：多头多次尝试攻击上方的1.3600整数关口（点1, 4, 6, 8, 10, 12），全部失败。这表明多头动能不足，是一个**Power Shift (力量转移)** 的信号。

### 交易设置：挤压与突破 (The Squeeze & Break)
*   **Pattern Line (形态线)**：连接高点，画出下降趋势线。
*   **Squeeze (挤压)**：
    *   在11-13区域，价格被挤压在下降趋势线（阻力）和25EMA（此时已变平）之间。
    *   这是一个经典的**7根K线挤压**。
*   **Bar 12 (False High)**：
    *   多头试图向上突破，制造了一个微小的假高点，随即失败。这是多头最后的挣扎。
*   **Bar 13 (Signal Bar)**：
    *   **特征**：这是一根阴线，收盘极差（Close on lows），紧贴着下方的支撑线。它完美地填补了均线和趋势线之间的最后一点空间。
    *   **确认**：它确认了Bar 12的假突破。
*   **Entry (入场)**：
    *   在Bar 13的低点下方1个点挂单做空。
    *   **目标**：下方25点处就是1.3550整数关口，这是一个极佳的磁力目标。
    *   **管理**：标准的20点止盈/10点止损。

---

## 5.3 图表复盘：牛旗与二次突破

*(基于 Figure 5.2)*

![[Understanding Price Action/Images/Understanding-Price-Action-Practical-Analysis-of-the-5-minute-time-frame-(Bob-Volman)-(Z-Library).pdf-91-0.png]]

这张图展示了两个典型的Pattern Break：一个是牛旗突破，一个是挤压做空。

### 交易1：牛旗突破 (Bull Flag Break)
*   **1-2 Rally (旗杆)**：开盘强劲上涨，确立多头主导。
*   **Pullback (旗面)**：
    *   价格回调到60%位置（点6），这是多头的最后防线。
    *   **6-8 (Micro Squeeze)**：在回调底部，价格形成了一个微型的挤压形态（由两个Doji Bar组成）。
*   **Signal Bar (Bar 8)**：
    *   Bar 8是一根Doji，收盘在挤压区间的上沿。
*   **False Low Setup**：
    *   入场棒（箭头所示）先跌破了前一根K线的低点（False Low），然后反身向上突破。这是最佳的触发方式。
*   **Target**：目标是前高（点2）和上方的1.3350整数关口。虽然在点9遭遇了阻力，但在趋势交易中，耐心等待是关键。

### 交易2：挤压做空 (Bearish Squeeze)
*   **10-13 Squeeze**：
    *   价格在上涨受阻后，被挤压在上升趋势线（支撑）和1.3350整数关口（阻力）之间。
*   **Bar 12 (False High)**：多头试图向上突破，失败。
*   **Bar 13 (Signal Bar)**：
    *   阴线收盘，紧贴趋势线。确认了Bar 12的失败。
*   **Entry**：跌破Bar 13低点做空。
    *   **原理**：这是趋势线支撑失效的时刻。多头止损盘涌出，形成双重压力。

> **关键教训**：不要在入场棒（Entry Bar）没有立即引发大跌时就惊慌失措并手动平仓。只要止损没到，且逻辑未变，就给市场一点时间。

---

## 5.4 图表复盘：拱形与挤压 (Arches & Squeezes)

*(基于 Figure 5.3 - 描述部分)*

虽然Figure 5.3的图片未完全展示，但文本描述了一个非常重要的概念：**Arches (拱形结构)**。
*   **观察拱形**：在横盘震荡中，通过观察连续的拱形（1-2-F, F-3-T...）的大小变化，可以判断动能的衰竭。
*   **由大变小**：如果拱形变得越来越小、越来越扁平，说明波动率正在压缩，**爆发即将来临**。
*   **最后压缩**：最后一个拱形通常会演变成一个几乎看不出的**扁平挤压 (Squeeze)**。这就是我们等待的猎物。

---

## 5.5 突破回调 (Pattern Break Pullback)

### 为什么需要它？
在标准的**Pattern Break**中，我们需要看到突破前的Buildup。但如果价格从很远的地方直接冲破了边界（Direct Drive），没有任何停顿，我们该怎么办？
*   **不要追涨杀跌**：追这种单子很容易被反向拉回（Snap back）。
*   **等待回踩**：等待价格回头测试被突破的边界。

### 识别流程
1.  **初始突破 (Initial Breakout)**：价格突破了某个形态边界，但缺乏Buildup，因此我们在第一时间选择观望。
2.  **回调 (Pullback)**：价格回落，去测试被突破的边界（原来的支撑变阻力，或反之）。
3.  **技术测试 (Technical Test)**：回调在边界附近停滞，形成一个新的信号棒。
4.  **二次突破 (Second Break)**：当这个新的信号棒被突破时，入场。

### 优势
*   **确认突破有效性**：回踩不破，说明原来的突破是真实的。
*   **优化止损**：相比于追第一波突破，在回踩后入场，止损可以放得更紧（就在回踩高点上方）。

---

## 5.6 图表复盘：M顶中继与回踩入场

*(基于 Figure 5.6)*

![[Understanding Price Action/Images/Understanding-Price-Action-Practical-Analysis-of-the-5-minute-time-frame-(Bob-Volman)-(Z-Library).pdf-107-0.png]]

这张图展示了如何处理一个“错过”的突破。

### 市场背景
*   **Bear Flag (熊旗)**：1-2是旗杆，2-7是旗面。这是一个看跌的中继形态。
*   **Contrarian Traps (逆势陷阱)**：在旗形内部，多头两次尝试向上突破（点3和5），都形成了False High。
*   **M-Pattern (M顶)**：4-5-6-7-8 构成了一个M顶。Bar 7的假突破是右肩。

### 交易逻辑：突破回调
*   **The Missed Break (错过的突破)**：
    *   Bar 8一根大阴线直接跌破了旗形下沿。
    *   **为什么不做？** 它是从旗形中间直接冲下来的，没有在边界处做Buildup。这种突破很容易反弹。
*   **The Pullback (回调)**：
    *   Bar 9向上反弹，测试了被突破的旗形下沿。
    *   **Triple Confluence (三重共振)**：
        1.  测试了旗形下沿（阻力）。
        2.  测试了1.3200整数关口。
        3.  测试了25EMA。
        4.  同时也是M顶颈线（6-7底部）的天花板测试。
*   **Signal Bar (Bar 9)**：
    *   Bar 9虽然一度冲高，但收盘是一根阴线，留下了长上影线。这表明多头反攻失败。
*   **Entry (入场)**：
    *   在Bar 9低点下方做空。这是完美的**Pattern Break Pullback**。

---

## 5.7 组合形态 (Pattern Break Combi)

### 定义
这是本书最高级的形态。它本质上是 **Pattern Break** 和 **Pullback Reversal** 的结合体。
*   **场景**：价格在突破一个大形态（如箱体）之前，先在形态内部形成了一个小的回调反转形态。
*   **威力**：这种形态不仅拥有大形态突破的动能，还拥有回调反转的止损优势。

### 识别特征
1.  **大背景**：有一个清晰的大形态（如箱体、旗形）。
2.  **小结构**：在即将突破边界的位置，价格没有直接冲过去，而是先做了一个微小的回调（Pullback），然后在这个微小回调的末端形成了一个**更小的反转形态**（如Higher Low或Lower High）。
3.  **触发**：交易这个微小反转形态的突破，往往会直接引发大形态的突破。

---

## 5.8 图表复盘：教科书级的做空

*(基于 Figure 5.5)*

![[Understanding Price Action/Images/Understanding-Price-Action-Practical-Analysis-of-the-5-minute-time-frame-(Bob-Volman)-(Z-Library).pdf-103-0.png]]

这张图虽然放在了Pattern Break章节，但它其实隐含了Combi的精髓。

### 完美风暴
*   **Big Picture (大局)**：巨大的熊旗（1-11），均线向下，空头绝对主导。
*   **Arches (拱形)**：注意6-11这一段，拱形越来越小，波动率急剧收缩。
*   **Squeeze (挤压)**：
    *   Bar 10试图向上反弹，但失败（False High）。
    *   Bar 11是一个Inside Bar，被死死挤压在下降趋势线和25EMA之间。
*   **Combi Entry**：
    *   做空Bar 11的跌破。
    *   这既是一个**Squeeze Break**（挤压突破），也是一个**Bear Flag Break**（熊旗突破）。
    *   **双重确认**：Bar 11的低点正好与Bar 10的低点齐平（Double-bar break），增加了突破的可靠性。

---

## 5.9 总结：第五章的核心交易逻辑

到此为止，我们已经掌握了Volman系统的核心武器库：

1.  **如果边界处有Buildup** -> 直接做 **Pattern Break**。
    *   关键看Squeeze和Signal Bar的质量。
2.  **如果直接突破了边界（无Buildup）** -> 等待 **Pattern Break Pullback**。
    *   关键看回踩是否测试了阻力/支撑，以及是否形成了新的Signal Bar。
3.  **如果在边界前形成微型反转** -> 尝试 **Pattern Break Combi**。
    *   这是提前入场的好机会，往往能吃到从头到尾的利润。

> **下章预告**：学会了如何进场，接下来必须学会如何出场。第六章将讨论 **Manual Exits (手动出场)**，教你在形势不对时如何像职业交易员一样果断撤退，而不是死守止损。
