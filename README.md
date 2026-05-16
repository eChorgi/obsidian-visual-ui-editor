# Visual UI Editor

一个帮助你可视化选择并修改任意UI元素的插件
A plugin that helps you visually select and modify any UI element.

## 如何使用 How to use

点击左侧功能栏的瞄准图标，会进入选择模式，此时鼠标移到任意元素即可选中同类元素，左键点击后会打开编辑栏，如图
Click the crosshair icon on the left toolbar to enter selection mode. In this mode, hovering your mouse over any element will select elements of the same type. Left-clicking will then open the editing panel, as shown in the image.

<img src="./assets/CleanShot 2026-04-23 at 19.08.20@2x.png" alt="CleanShot 2026-04-23 at 19.08.20@2x" style="zoom:50%;" />

<img src="./assets/CleanShot 2026-04-23 at 19.09.22@2x.png" alt="CleanShot 2026-04-23 at 19.09.22@2x" style="zoom:50%;" />

<img src="./assets/CleanShot 2026-04-23 at 19.09.30@2x-6942656.png" alt="CleanShot 2026-04-23 at 19.09.30@2x" style="zoom:50%;" />

- 覆盖权重：用来设置覆盖的强度，越高越容易生效
- 强制开关：开启后可以覆盖掉任何没有设置强制（!import）的样式，如果都有强制，则看优先级
- 抹除样式：完全抹除某个元素的修改历史，恢复到没有用该插件进行任何修改时的状态（不抹除主题等其他途径导致的样式）
- 重置：重置本次面板打开以来的修改（关闭窗口同理）
- 文档预览：把修改暂时应用到文档，预览效果（关闭窗口后效果消失）
- 保存：将效果永久保存到snippet文件夹下，可以通过打开.snippet/--ui-designer-[你的仓库名]-default.css来查看自动生成的样式文本

- Override Weight: Used to set the strength of the override; the higher the value, the more likely it is to take effect.
- Force Switch: When enabled, it overrides any styles that are not set as forced (!important). If both are forced, it depends on CSS specificity/priority.
- Erase Styles: Completely erases the modification history of a specific element, restoring it to its original state before any changes were made using this plugin (does not remove styles applied by themes or other methods).
- Reset: Resets any modifications made since the panel was opened in the current session (closing the window has the same effect).
- Document Preview: Temporarily applies the modifications to the document to preview the effect (the effect disappears after closing the window).
- Save: Permanently saves the effects to the snippet folder. You can view the auto-generated style text by opening .snippet/--ui-designer-[your repo/vault name]-default.css.

## 问题反馈&功能请求  请联系小红书：）Contact

[eChorgi的小红书 eChorgi's REDNOTE](https://www.xiaohongshu.com/user/profile/61c83d00000000001000bd3e)

