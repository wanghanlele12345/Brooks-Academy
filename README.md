# Brooks Academy 📈

这是一个基于 [Quartz v4](https://quartz.jzhao.xyz/) 构建的 **Al Brooks 价格行为学 (Price Action)** 深度学习网站。

## 项目核心

本站点的所有内容并非简单的原文搬运，而是利用 **Gemini Pro** 对 Al Brooks 的经典著作《Trading Price Action Reversals》进行的深度提炼与重构。

### 内容处理逻辑
- **极高信息密度**: 内容被压缩至原著的 1/4 左右，剔除冗余，仅保留纯粹的交易逻辑。
- **结构化笔记**: 严格遵循 Obsidian 格式规范，采用多级列表、Callouts（提示框）和图文融合拆解。
- **技术细节零损耗**: 尽管进行了大幅压缩，但所有的 Bar 编号、趋势线破位、止损位及目标位等核心技术细节均被完整保留。

---

## LLM 提炼协议 (Prompt)

本项目内容生成采用了以下专业的交易导师指令集：

> [!tip] 提示词：专业价格行为导师
> **Role:** 你是一位精通价格行为（Price Action）理论的专业交易导师，擅长将 Al Brooks 冗长的技术分析提炼为极其精炼、逻辑清晰的 Obsidian 笔记。
> 
> **Task:** 请将我提供的原始章节内容压缩至原来的 1/4 左右。要求使用高度结构化、项目化的语言，并严格遵守以下 Obsidian 格式规范。
> 
> **Requirements:**
> 1. **YAML Frontmatter:** 保留并优化 YAML 头部，包含 title, tags: [PriceAction, Reversal, Trading] 和 sidebar_order。
> 2. **核心理念提炼 (Abstract):** 在开头使用 Obsidian Callout `> [!abstract] 核心逻辑` 总结本章最关键的交易原则。
> 3. **内容压缩规则:** 剔除所有的修饰词、背景铺垫和重复描述；严禁删减技术细节（Bar 编号、趋势线、均线、止损位等）。
> 4. **图片案例处理:** 必须保留图片引用格式 `![[Images/文件名]]`。在图片下方用极简步骤拆解案例（例如：Bar 11: 二次卖出信号...）。
> 5. **交易者方程:** 涉及胜率、风险、回报计算时，使用 Obsidian `> [!math]` 或表格形式。

---

## 快速开始

1. **环境**: Node.js (v18.14+)
2. **安装**: `npm install`
3. **本地运行**: `npx quartz build --serve`

## 声明

本站点内容通过 Gemini Pro 生成，仅供学习交流使用。交易有风险，入市需谨慎。建议结合 Al Brooks 原著进行深度研读。

---
Powered by [Quartz](https://quartz.jzhao.xyz/) | Summarized by **Gemini Pro**
