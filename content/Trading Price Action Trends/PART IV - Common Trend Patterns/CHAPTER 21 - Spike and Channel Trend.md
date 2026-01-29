---
title: "Chapter 21: Spike and Channel Trend"
sidebar:
  order: 29
---

> [!abstract] 核心逻辑
> **尖峰与通道 (Spike and Channel)** 是所有趋势的基础原型。
> *   **二阶段结构：**
>     1.  **Spike (尖峰):** 爆发性的动能阶段，确立 Always-In 方向。
>     2.  **Channel (通道):** 动能减弱，进入双向交易但依然倾斜的阶段。
> *   **结束信号：** 通道通常以反向突破结束，并回测通道起点 (Start of Channel)。
> *   **变体：** 连续高潮 (Consecutive Climaxes) 也是一种 Spike and Channel 的变体。

---

## 1. 结构特征 (Anatomy)

### Phase 1: Spike (尖峰)
*   **形态：** 连续的强趋势 K 线，很少重叠，也可以是一个跳空缺口 (Gap)。
*   **含义：** 市场从一个价值区间快速移动到另一个。
*   **操作：** 此时应激进顺势入场（市价或突破单），不要等待深度回调。

### Phase 2: Channel (通道)
*   **起始：** 尖峰后的第一次深度回调通常标志着通道的开始。
*   **形态：** 斜率变缓，K 线重叠增加，经常测试趋势线。
*   **含义：** 市场进入“忧虑之墙 (Wall of Worry)”，虽然不仅创新高/低，但看起来随时可能反转。
*   **操作：** 顺势为主，但在通道顶部（多头）或底部（空头）可以尝试逆势剥头皮。

### Phase 3: Transition (反转/演变)
*   **终结：** 75% 的通道最终会向**反方向**突破。
*   **目标：** 反向突破后的第一目标是测试**通道起点 (Start of Channel)**。
*   **Measured Move:** 尖峰的高度常被用来测算通道结束的位置。

---

## 2. 交易策略详解

### 顺势交易
*   **Spike Phase:** 任何小停顿都是买点。
*   **Channel Phase:** 在通道底部（趋势线附近）买入，利用 High 2 或 Limit Order。

### 逆势交易
*   **Wedge Top/Bottom:** 通道常以楔形（三推）结束。当第三推过冲通道线并反转时，是绝佳的逆势机会。
*   **Breakout of Channel:** 如果价格跌破多头通道：
    1.  等待跌破。
    2.  等待反弹测试通道下沿（Lower High）。
    3.  做空，目标通道起点。

---

## 3. 常见变体 (Variants)

### 连续高潮 (Consecutive Climaxes)
*   **定义：** Spike 1 -> Pause -> Spike 2。
*   **视同：** Spike 2 相当于 Channel 阶段。
*   **后果：** 连续两个或三个高潮通常导致至少两段式的深幅调整 (Two-legged correction)。

### 抛物线通道 (Parabolic Channel)
*   **定义：** 通道斜率越来越陡，甚至超过了尖峰。
*   **含义：** 这是不可持续的气候性行为 (Climactic)，通常导致剧烈反转。

---

## 4. 图解案例深度解析

![[AL Brooks/TradingRange/Trading Price Action TradingRange/Images/nc21f001.jpg]]
**Figure 21.1: Three Pushes in a Spike and Channel**
*   **Spike (Bar 5-6):** 强力突破，确立多头。
*   **Channel (Bar 7-10):** 三推楔形通道。
*   **Climax:** Bar 10 过冲通道线并反转。
*   **Target:** 跌破通道后，市场回测了通道起点（Bar 7区域），并在 Bar 12 获得支撑。

![[Trading Price Action Trends/Images/nc21f003.jpg]]
**Figure 21.3: Nested Spike and Channels**
*   **Fractal:** 大通道套小通道。
*   **Test of Start:** 通道起点（Bar 2, 5, 8）都在后续被精准回测。
*   **Lesson:** 标记通道起点，那是未来的强支撑/阻力位。

![[Trading Price Action Trends/Images/nc21f005.jpg]]
**Figure 21.5: Gap Spike**
*   **Concept:** 跳空缺口 (Gap) 本身就是一个巨大的隐形趋势 K 线（Spike）。
*   **Structure:** Gap (Spike) -> Pullback -> Channel。

![[Trading Price Action Trends/Images/nc21f008.jpg]]
**Figure 21.8: Consecutive Climaxes**
*   **Analysis:**
    *   Bar 3: 第一次抛售高潮。
    *   Bar 4: 第二次抛售高潮。
    *   Bar 5: 第三次抛售高潮（通常是最后一次）。
*   **Result:** 连续三次高潮导致了巨大的 V 型反转 (Bar 6 Spike)。
*   **Key:** 将连续高潮视为 Spike and Channel 的变体，Bar 4-5 相当于通道阶段。