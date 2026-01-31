---
title: "CHAPTER 14 - Options"
tags: [PriceAction, Options, RiskManagement, DailyChart, Volatility]
sidebar_order: 14
---

> [!abstract] 核心逻辑
> 对于日内交易者而言，期权通常是一种**干扰 (Distraction)**，会分散对 Emini 核心交易的注意力。
> 
> **仅在以下两种特殊情况使用期权：**
> 1.  **日线图上的极端反转**：当市场出现巨大的抛物线走势或 Wedge 顶部时，利用期权做 Swing Trading（波段交易），因为期权风险锁定 (Defined Risk)，无需时刻盯盘。
> 2.  **跌停/熔断市场 (Limit Down)**：在市场自由落体时，期货止损单可能因系统过载延迟成交（滑点巨大）。此时买入 Call 是唯一能精确控制风险的博反弹方式。

# Options Strategy for Price Action Traders

*   **极简策略**：主要买入 Puts 或 Calls。避免复杂的价差组合 (Spreads)，保持交易逻辑简单。
*   **心态管理**：日内交易者若因关注期权而错过 Emini 的设置，得不偿失。每月仅应出手 1-2 次极佳的期权机会。
*   **风险控制**：
    *   期权天然限制了最大亏损。
    *   允许价格在持仓期间创造一个新的极端 (New Extreme)，甚至可以在该点加仓。

---

# Detailed Analysis Examples

## Daily Chart Fades (Chesapeake Energy)
![[Images/348-1.jpg]]

利用日线图的衰竭信号买入 Put，博取向均线的回归。

*   **Context**: 4个月上涨 85%。
*   **Wedge Top**: Bar 6 之后的走势形成楔形（连接底部低点）。
*   **Trend Channel Line Overshoot**: 价格突破了 Bar 1-3 和 Bar 3-5 的通道线。
*   **Bar 8 (Signal)**:
    *   小实体 K 线，收盘看跌。
    *   表明多头失控，大概率回调至 20-day EMA。
*   **Execution**:
    *   在 Bar 8 当天买入 Puts。
    *   或者等待次日跌破 Bar 8 低点（形成 **Low 2** 入场）。
    *   选择近月平值期权 (At-the-money front month) 以获得最大流动性。

## Weekly Chart Reversals (AAPL)
![[Images/349-1.jpg]]

周线级别的 **Low 2** 是极佳的期权入场点。

*   **Context**: 两年上涨 300% 后暴跌 55%。
*   **Bar 5 (Entry)**:
    *   **Low 2 Short**: 第二次跌破上升趋势线（第一次是 Bar 3）。
    *   **Two-legged Higher High**: Bar 5 是反弹的第二条腿，通常意味着修正结束。
    *   策略：买入 Puts。
*   **Bar 7**: **EMA Gap 2 Bar** (第二次尝试回补均线缺口) + **Double Bottom Bull Flag** (与 Bar 1)。由于反弹强劲，可能形成大区间震荡。

## Fading Parabolic Moves (ANR)
![[Images/350-1.jpg]]

利用心理关口 (Psychological Number) 和开盘动态进行期权交易。

*   **Context**: 强劲牛市，日线图突破 Wedge 顶部。
*   **Setup**: 昨日跳空高开至 **100** 整数关口（磁力点）。
*   **Execution**:
    *   当 5分钟图显示受阻时，买入 July 100 Puts (价格 7.20)。
    *   **Bar 2**: 首次回调暂停，部分止盈 (价格 8.80)。
    *   **Outcome**: 价格最终跌至 10.00 以上。
    *   **Key**: 这种交易风险有限（约 $1），回报巨大，且不占用日内 Emini 的精力。

## Intraday Option Scalping (AAPL)
![[Images/351-1.jpg]]

当个股出现大成交量的 **Opening Reversal** 时，可用期权代替股票。

*   **Context**: 向下跳空，跌破趋势通道线。
*   **Bar 1-2**: **Opening Reversal**，强力反转向上。
*   **Execution**:
    *   买入 July 170 Calls (价格 5.70)。
    *   **Bar 5**: 测试 Bar 3 高点，卖出一半 (价格 9.20)。
    *   **Bar 6**: **Double Top / Lower High**，清仓 (价格 9.20)。

> [!math] Trader's Equation (AAPL Call Trade)
> | Item | Value | Note |
> | :--- | :--- | :--- |
> | **Entry Price** | $5.70 | July 170 Calls |
> | **Stop Risk** | ~$2.00 | 若跌破低点止损 |
> | **Exit Price** | $9.20 | Bar 5/6 Target |
> | **Profit** | **$3.50** | Per Contract |
> | **Reward:Risk** | **1.75 : 1** | High Probability Setup |