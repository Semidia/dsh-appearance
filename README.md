# dsh-appearance

统一外观协调插件：把 `dsh-theme`（配色 / 字体族 / 界面字号）与 `dsh-custom-workspace`（按工作区的正文字号 / 行高 / 块间距 / 背景）合并为一个插件行，并规定**正文字号的唯一来源**，消除两者互相覆盖的问题。

## 协调规则（为什么不再冲突）

聊天正文只消费一个 CSS 变量：`.markdown { font: var(--dsw-font-markdown-base) }`。

- **正文字号（`--dsw-font-markdown-*`）的唯一来源 = 工作区设置**。未设置的工作区继承 DSH 官方默认（16px / 28px）。
- dsh-theme 部分**不再输出** markdown 系列覆盖，它的「界面字号」只缩放界面元素（侧栏、按钮、标题等 UI token），不再连带放大正文。
- 协调层监听 `theme/change`：官方主题呈现器每次重写 body token 后，协调层重新应用当前工作区的外观（工作区优先；未设置字段回退全局主题）。

## 设置入口

- **设置 → 外观**：配色（9 组预设 + 自定义）、界面字体、代码字体、界面字号、代码字号（只影响界面，不影响正文）。
- **设置 → 通用设置 → Workspace 外观**：按工作区设置背景色/背景图、正文字号、行高、块间距、Retina 渲染。

## 持久化

- 主题设置保存在浏览器本地（与 `dsh-theme` 相同，`dsh-theme/settings/v1`）。
- 工作区外观保存在 `$DSH_HOME/settings.yaml` 的 `dsh-appearance` 命名空间（host settings + loopback RPC）。

## 模型体验

无。只影响浏览器呈现，不进入模型请求。
