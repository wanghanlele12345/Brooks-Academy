---
title: "Chapter 18: Example of How to Trade a Trend"
sidebar:
  order: 25
---

> [!abstract] 核心逻辑
> **趋势即理由：** 趋势本身就是入场的理由。
> *   **心态转变：** 在强趋势中，任何反转信号（Reversal）都是失败的概率高，任何顺势信号（With Trend）都是成功的概率高。
> *   **入场策略：**
>     *   **Stop Orders:** 适合大多数交易者，在顺势信号 K 线突破时入场（High 1/2 in Bull, Low 1/2 in Bear）。
>     *   **Limit Orders:** 适合经验丰富的交易者，在回调中利用“限价单买入前一根 K 线低点” (Bull Trend) 或“卖出前一根 K 线高点” (Bear Trend)。
> *   **仓位管理：** 强趋势中的入场往往需要较宽的止损（Wide Stop），因此必须**减小仓位**以控制风险。

---

## 1. 顺势入场清单 (Checklist for Trend Entries)

### Stop Order Entries (止损单入场 - 动能确认)
*   **Bull Trend:**
    *   High 2 回调至均线。
    *   Wedge Bull Flag (楔形牛旗) 回调。
    *   Breakout Pullback (突破回调)。
    *   High 1 (仅在强尖峰阶段，Buy Climax 后禁用)。
    *   强趋势中直接突破前高 (Breakout above Swing High)。
*   **Bear Trend:**
    *   Low 2 回调至均线。
    *   Wedge Bear Flag (楔形熊旗) 回调。
    *   Breakout Pullback。
    *   Low 1 (仅在强尖峰阶段)。
    *   强趋势中直接跌破前低 (Breakout below Swing Low)。

### Limit/Market Order Entries (限价/市价单入场 - 价值确认)
*   **Bull Trend:**
    *   在强牛市尖峰中，**市价买入 (Market Buy)** 或在每根阳线收盘买入。
    *   在回调中，限价买入前一根 K 线的低点 (Buy Below Prior Low)。
    *   在均线处限价买入 (20 Gap Bars Setup)。
*   **Bear Trend:**
    *   在强熊市尖峰中，**市价卖出 (Market Sell)** 或在每根阴线收盘卖出。
    *   在反弹中，限价卖出前一根 K 线的高点 (Sell Above Prior High)。

---

## 2. 趋势交易的难点与心理

### 为什么大多数人亏损？
1.  **恐惧：** 强趋势看起来总是“超买”或“超卖”，入场止损看起来太远。
    *   *解药：* 缩小仓位，扩大止损。相信机构正在买入/卖出。
2.  **逆势诱惑：** 总是试图在“顶部”做空或“底部”做多。
    *   *现实：* 80% 的反转尝试会失败。每一次失败的反转都是顺势加仓的机会（Trapped Counter-trend Traders）。
3.  **等待完美：** 等待完美的回调（如 High 2 at EMA），结果错过了整个趋势。
    *   *解药：* 如果趋势极强，不要等待，立即以小仓位市价入场。

---

## 3. 仓位管理与波段交易 (Swing Trading)

### 波段交易法则
*   **Trader's Equation:** 只有当 (胜率 x 潜在利润) > (失败率 x 风险) 时才离场。
*   **Holding Power:**
    *   如果止损是 2 点，除非你有 80% 的胜率，否则不要在赚 1 点时就跑。至少要赚 2 点（Reward >= Risk）。
    *   **Scale Out (分批止盈):** 在 2 倍风险利润处减半仓，剩余仓位移动止损至保本或前一摆动低点，直到趋势反转。

### 移动止损 (Trailing Stops)
*   **Bull Trend:** 随着每一个新高 (New High) 的形成，将止损上移至最近的**更高低点 (Higher Low)** 下方。
*   **Bear Trend:** 随着每一个新低 (New Low) 的形成，将止损下移至最近的**更低高点 (Lower High)** 上方。

---

## 4. 图解案例深度解析

![[Trading Price Action Trends/Images/nc18f001.jpg]]
**Figure 18.1: Strong Trend Day in GS**

*   **Recognition (识别):**
    *   Bar 4 强阳线突破开盘区间 -> **Always-In Long**。
    *   此时必须入场（Market Buy 或 Buy Stop above Bar 4）。
*   **Limit Order Entries (限价单机会):**
    *   **Bar 9:** 在前一根 K 线低点下方挂单买入（Failed Breakout below Micro Channel）。
    *   **Bar 11:** 两次尝试下跌均被买起（Double Bottom Pullback / High 2）。
    *   **Bar 16:** 弱势空头十字星，多头在低点下方挂单买入。
*   **Swing Management:**
    *   **Profit Taking:** 可以在 Bar 20, 24 等高潮点部分止盈。
    *   **Re-entry:** 在 Bar 28 (High 2 at EMA / 20 Gap Bars) 再次全仓买入。
*   **Trap for Bears:**
    *   新手会在 Bar 7, 10, 18, 20 等处试图摸顶做空。
    *   老手知道这些反转大概率失败，并准备在空头止损时买入。