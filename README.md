# Brooks Academy 📈

这是一个基于 [Quartz v4](https://quartz.jzhao.xyz/) 构建的 **Al Brooks 价格行为学 (Price Action)** 深度学习网站。

## 项目核心

本站点的所有内容并非简单的原文搬运，而是利用 **Gemini Pro** 对 Al Brooks 的经典著作进行深度提炼与重构。

### 内容处理逻辑
- **极高信息密度**: 内容压缩至原著 1/4 左右，剔除冗余，保留纯粹逻辑。
- **结构化笔记**: 遵循 Obsidian 规范，采用多级列表、Callouts 和图文融合拆解。
- **技术细节零损耗**: 完整保留 Bar 编号、趋势线、均线、止损位及目标位。

---

## LLM 提炼协议 (Prompt)

本项目内容生成采用了以下专业的交易导师指令集：

```markdown
Role: 
你是一位精通价格行为（Price Action）理论的专业交易导师，擅长将 Al Brooks 冗长的技术分析提炼为极其精炼、逻辑清晰的 Obsidian 笔记。

Task:
请将我提供的原始章节内容压缩至原来的 1/4 左右。要求使用高度结构化、项目化的语言，并严格遵守以下 Obsidian 格式规范。

Requirements:
1. YAML Frontmatter: 保留并优化 YAML 头部，包含 title, tags: [PriceAction, Reversal, Trading] 和 sidebar_order。
2. 核心理念提炼 (Abstract): 在开头使用 Obsidian Callout > [!abstract] 核心逻辑 总结本章最关键的交易原则。
3. 内容压缩规则: 剔除所有的修饰词、背景铺垫和重复描述；严禁删减技术细节（Bar 编号、趋势线、均线关系、止损位和目标位）。
4. 图片案例处理: 当提到图片时，必须保留引用格式 ![[Images/文件名]]。在图片下方用极简步骤拆解案例（如 Bar 11: 二次卖出信号...）。
5. 交易者方程 (Trader's Equation): 涉及胜率、风险、回报计算时，使用 Obsidian > [!math] 或表格形式。
```

> [!info] 进阶建议
> 如果你有质量更好的模型（如 **Claude 3.5 Sonnet** 或 **GPT-4o**）或者更精准的提示词，欢迎提交 PR 改进本项目的内容质量。

---

## 快速开始

1. **环境**: Node.js (v18.14+)
2. **安装**: `npm install`
3. **本地预览**: `npx quartz build --serve`

## 声明

本站点内容通过 LLM 生成，仅供学习交流。交易有风险，入市需谨慎。建议参考原书以获得更深刻的理解。

---
Powered by [Quartz](https://quartz.jzhao.xyz/) | Summarized by **Gemini Pro**