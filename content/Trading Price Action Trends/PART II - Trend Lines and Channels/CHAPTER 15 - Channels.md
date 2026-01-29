---
title: "Chapter 15: Channels"
sidebar:
  order: 21
---

> [!abstract] 核心逻辑
> **通道 (Channel)** 是倾斜的交易区间。
> *   **双重属性：** 通道既有趋势性（方向明确），又有震荡性（双向交易）。斜率越陡，趋势性越强；斜率越缓，震荡性越强。
> *   **旗形本质：** 所有的多头通道本质上都是 **Bear Flag**（因为最终会向下突破）；所有的空头通道本质上都是 **Bull Flag**（因为最终会向上突破）。
> *   **机构行为：** 机构利用通道边界的 **真空效应 (Vacuum Effect)** 进行获利了结和逆势建仓，导致价格在边界处快速反转。

---

## 1. 通道的结构与类型

### 基本结构
*   由趋势线 (Trend Line) 和趋势通道线 (Trend Channel Line) 构成。
*   **确认：** 通常需要至少 **三推 (Three Pushes)** 才能确认通道形态。许多通道在第三推后结束。

### 交易策略
*   **Tight Channel (紧凑通道):**
    *   表现如同 **Spike (尖峰)**。
    *   **策略：** 只做顺势 (With Trend)。不要在第一次突破尝试时逆势交易。
    *   **买入点：** 突破回调 (Breakout Pullback)。
*   **Broad Channel (宽通道):**
    *   表现如同 **Sloping Trading Range (倾斜的交易区间)**。
    *   **策略：** 可以双向交易。在通道低点买入，在通道高点卖出。
    *   **新手建议：** 即使在宽通道中，新手也应只做顺势交易。

---

## 2. 真空效应与边界行为 (Vacuum Effect)

> [!tip] 为什么价格会加速冲向通道边界？
> *   **买方撤单：** 多头想在通道顶部获利了结，因此不再在当前价格卖出，而是挂在更高的通道线处。
> *   **卖方等待：** 空头想做空，但也想等待价格触及通道线以获得更好位置。
> *   **结果：** 卖压暂时消失 (Lack of Sellers)，价格被“吸”向通道顶部。一旦触及，双方同时抛售，导致 V 型反转。

---

## 3. 限价单交易 (Limit Order Trading)

在通道中，特别是宽通道，机构倾向于使用限价单交易：
*   **Bull Channel:**
    *   多头：在每根 K 线低点下方 (Below Prior Bar Low) 挂限价单买入。
    *   空头：在摆动高点上方 (Above Swing High) 挂限价单卖出（Scale in）。
*   **Bear Channel:**
    *   空头：在每根 K 线高点上方挂限价单卖出。
    *   多头：在摆动低点下方挂限价单买入。

---

## 4. 图解案例深度解析

![[AL Brooks/TradingRange/Trading Price Action TradingRange/Images/nc15f001.jpg]]
**Figure 15.1: Nested Channels**
*   **Micro Channels:** 许多小通道（如 Bar 2-3）也是微观通道。
*   **Strategy:** 在微观通道中，等待突破失败后再逆势入场（如 Bar 3 之后的反转）。

![[AL Brooks/TradingRange/Trading Price Action TradingRange/Images/nc15f003.jpg]]
**Figure 15.3: Bull Channels in Bear Markets**
*   **Middle Chart:** 下跌趋势中的多头通道 = **Wedge Bear Flag (楔形熊旗)**。
    *   **Action:** 只做空。在 Bar 18 (ii pattern) 下方做空。
*   **Right Chart:** 极度超卖后的多头通道。Bar 29 强力突破上行，将熊旗转化为反转 (Final Flag Reversal)。

![[Trading Price Action Trends/Images/nc15f004.jpg]]
**Figure 15.4: Channel Breakout and Measured Move**
*   **Measured Move:** Bar 6 的低点正好触及通道高度的等距测算目标 (Lines A, B, C)。
*   **Lesson:** 通道一旦被突破，第一目标位通常是通道高度的 1 倍距离。

![[Trading Price Action Trends/Images/nc15f005.jpg]]
**Figure 15.5: Climactic Bear Breakout of Bear Channel**
*   **Setup:** Bar 4 强力向下突破空头通道。
*   **Outcome:** 突破演变为 **Sell Climax (抛售高潮)**。市场随后反弹两段 (Two-legged rally) 至 Bar 7。
*   **Lesson:** 75% 的通道顺势突破都会失败并反转回通道内。

![[Trading Price Action Trends/Images/nc15f007.jpg]]
**Figure 15.7: Channels Are Always Trying to Reverse**
*   **Limit Order Logic:** 在 Bar 18 开始的上升通道中，所有看似做空的信号（Low 1, Low 2）实际上都是做多的机会。多头在这些信号 K 线的**低点**挂单买入（Buy Below），赌空头陷阱。

![[Trading Price Action Trends/Images/nc15f008.jpg]]
**Figure 15.8: Entering on Limit Orders**
*   **Scenario:** 强多头尖峰 (Bar 1-3) 后。
*   **Limit Entry:**
    *   Bar 3 是空头反转 K 线，但多头在 Bar 3 **低点**挂单买入。
    *   Bar 4 是阴线，多头在 Bar 4 **低点**继续买入。
    *   **Result:** 市场在 Bar 6 反转，多头获利。
*   **Logic:** 在强趋势后的通道阶段，只要结构未破坏，"Buy Below" 是机构常用的策略。