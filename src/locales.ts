// locales.ts
export const resources = {
    en: {
        translation: {
            "title-bar": "⋮ UI Style Designer (Drag me to move)",
            "ribbon": {
                "tooltip": "Select UI elements to modify"
            },
            "command": {
                "start_selector": "Select UI elements to modify"
            },
            "confirm_modal" : {
                "confirm_button": "Confirm",
                "cancel_button": "Cancel",
            },
            "console": {
                "get_system_font_error": "Failed to get system font. Details: ",
                "copy_failed": "Copy failed. Details: ",
                "generate_selector_failed": "Failed to generate selector for element. Details: "

            },
            "font": {
                "default_option": "View system fonts"
            },
            "notice": {
                "selector_copied": "Selector copied: {{selector}}",
                "css_copied": "CSS code copied: {{css}}",
                "copy_failed": "Copy failed"
            },
            "preview": {
                "element_preview": "[Preview] / Hover to inspect elements",
                "selector_hint": "[@selector] / Click to copy selector\n{{selector}}\n",
                "css_hint": "[@css-preview] / Click to copy CSS code\n{{selector}}\n{\n\t{{css}}}",
                "pseudo_element_hint": "(Hint: A pseudo-element is selected, you may need to modify background color to change its color)"
            },

            "property": {
                "background": "Background",
                "color": "Color",
                "opacity": "Opacity",
                "background-color": "Background Color",
                "background-image": "Background Image",
                "background-repeat": {
                    "name": "Repeat",
                    "no-repeat": "None",
                    "repeat": "Tile",
                    "repeat-x": "Repeat X",
                    "repeat-y": "Repeat Y"
                },
                "background-size": {
                    "name": "Size",
                    "auto": "Auto",
                    "cover": "Fill",
                    "contain": "Fit"
                },
                "background-position": {
                    "name": "Position",
                    "center": "Center",
                    "top": "Top",
                    "bottom": "Bottom",
                    "left": "Left",
                    "right": "Right"
                },
                "background-blend-mode": {
                    "name": "Blend Mode",
                    "normal": "Normal",
                    "multiply": "Multiply",
                    "screen": "Screen",
                    "overlay": "Overlay",
                    "darken": "Darken",
                    "lighten": "Lighten"
                },
                "background-attachment": {
                    "name": "Attachment",
                    "scroll": "Scroll",
                    "fixed": "Fixed",
                    "local": "Local"
                },
                "background-origin": {
                    "name": "Origin",
                    "padding-box": "Padding",
                    "border-box": "Border",
                    "content-box": "Content"
                },
                "background-clip": {
                    "name": "Clip",
                    "border-box": "Border",
                    "padding-box": "Padding",
                    "content-box": "Content"
                },
                "font-family": "Font",
                "font-size": "Size",
                "font-style": {
                    "name": "Style",
                    "normal": "Regular",
                    "italic": "Italic",
                    "oblique": "Oblique"
                },
                "font-weight": {
                    "name": "Weight",
                    "normal": "Regular",
                    "bold": "Bold",
                    "bolder": "Black",
                    "lighter": "Thin"
                },
                "line-height": "Line Height",
                "letter-spacing": "Letter Spacing",
                "text-align": {
                    "name": "Alignment",
                    "left": "Left",
                    "right": "Right",
                    "center": "Center",
                    "justify": "Justify",
                    "start": "Start",
                    "end": "End",
                    "match-parent": "Inherit"
                },
                "text-decoration": "Text Decoration",
                "text-decoration-line": {
                    "name": "Decoration Line",
                    "none": "None",
                    "underline": "Underline",
                    "overline": "Overline",
                    "line-through": "Strikethrough"
                },
                "text-decoration-color": "Decoration Color",
                "text-decoration-style": {
                    "name": "Line Style",
                    "solid": "Solid",
                    "dashed": "Dashed",
                    "dotted": "Dotted",
                    "double": "Double Line",
                    "wavy": "Wavy"
                },
                "text-decoration-thickness": "Line Thickness",
                "text-underline-offset": "Underline Distance",
                "text-decoration-skip-ink": {
                    "name": "Skip Descenders",
                    "auto": "Auto (Optimized)",
                    "none": "None (Continuous)"
                },
                "white-space": {
                    "name": "Text Wrapping",
                    "normal": "Normal Wrap",
                    "nowrap": "No Wrap",
                    "pre": "Keep Spaces & Line Breaks",
                    "pre-wrap": "Wrap & Keep Spaces",
                    "pre-line": "Wrap & Merge Spaces"
                },
                "text-overflow": {
                    "name": "Overflow Handling",
                    "clip": "Cut Off",
                    "ellipsis": "Ellipsis (...)"
                },
                "text-shadow": "Text Shadow",
                "horizontal-offset": "Horizontal Shift",
                "vertical-offset": "Vertical Shift",
                "blur-radius": "Blur Softness",
                "shadow-color": "Shadow Color",
                "border": "Border",
                "border-width": "Border Thickness",
                "border-top-width": "Top Thickness",
                "border-right-width": "Right Thickness",
                "border-bottom-width": "Bottom Thickness",
                "border-left-width": "Left Thickness",
                
                "border-style": {
                    "name": "Border Style",
                    "none": "None",
                    "solid": "Solid Line",
                    "dashed": "Dashed Line",
                    "dotted": "Dotted Line",
                    "double": "Double Line",
                    "groove": "3D Groove",
                    "ridge": "3D Ridge",
                    "inset": "3D Inset",
                    "outset": "3D Outset"
                },
                
                "border-top-style": { "name": "Top Style" },
                "border-right-style": { "name": "Right Style" },
                "border-bottom-style": { "name": "Bottom Style" },
                "border-left-style": { "name": "Left Style" },

                "border-color": "Border Color",
                "border-top-color": "Top Color",
                "border-right-color": "Right Color",
                "border-bottom-color": "Bottom Color",
                "border-left-color": "Left Color",

                "border-radius": "Corner Radius",
                "border-top-left-radius": "Top Left",
                "border-top-right-radius": "Top Right",
                "border-bottom-right-radius": "Bottom Right",
                "border-bottom-left-radius": "Bottom Left",

                "padding": "Padding",
                "padding-top": "Top",
                "padding-right": "Right",
                "padding-bottom": "Bottom",
                "padding-left": "Left",

                "margin": "Margin",
                "margin-top": "Top",
                "margin-right": "Right",
                "margin-bottom": "Bottom",
                "margin-left": "Left",

                "advanced": "Advanced",
                "dimensions": "Dimensions",
                "width": "Width",
                "height": "Height",
                "min-width": "Min Width",
                "min-height": "Min Height",
                "max-width": "Max Width",
                "max-height": "Max Height",

                "layout": {
                    "name": "Layout",
                    "block": "Block",
                    "inline-block": "Inline Block",
                    "inline": "Inline",
                    "flex": "Flex",
                    "inline-flex": "Inline Flex",
                    "grid": "Grid",
                    "inline-grid": "Inline Grid"
                },

                "flex-direction": {
                    "name": "Direction",
                    "row": "Horizontal",
                    "row-reverse": "Horizontal Reverse",
                    "column": "Vertical",
                    "column-reverse": "Vertical Reverse"
                },

                "justify-content": {
                    "name": "Justify Content",
                    "flex-start": "Start",
                    "flex-end": "End",
                    "center": "Center",
                    "space-between": "Space Between",
                    "space-around": "Space Around",
                    "space-evenly": "Space Evenly",
                    "stretch": "Stretch",
                    "start": "Start",
                    "end": "End",
                    "left": "Left",
                    "right": "Right"
                },

                "align-items": {
                    "name": "Align Items",
                    "stretch": "Stretch",
                    "flex-start": "Start",
                    "flex-end": "End",
                    "center": "Center",
                    "baseline": "Baseline",
                    "start": "Start",
                    "end": "End",
                    "self-start": "Self Start",
                    "self-end": "Self End"
                },

                "flex-wrap": {
                    "name": "Flex Wrap",
                    "nowrap": "No Wrap",
                    "wrap": "Wrap",
                    "wrap-reverse": "Reverse"
                },

                "grid-template-columns": "Columns",
                "grid-template-rows": "Rows",
                "grid-row-gap": "Row Gap",
                "grid-column-gap": "Column Gap",

                "order": "Order",
                "flex-grow": "Grow",
                "flex-shrink": "Shrink",
                "flex-basis": "Basis",

                "position": {
                    "name": "Position",
                    "static": "Static",
                    "relative": "Relative",
                    "absolute": "Absolute",
                    "fixed": "Fixed",
                    "sticky": "Sticky"
                },

                "z-index": "Z-Index",
                "top": "Top",
                "bottom": "Bottom",
                "left": "Left",
                "right": "Right",

                "filter": "Effects",
                "box-shadow": "Drop Shadow",

                "filter.main": "Foreground Filter",
                "filter.background": "Background Filter",
                "blur": "Blur",
                "brightness": "Brightness",
                "contrast": "Contrast",
                "grayscale": "Grayscale",
                "invert": "Invert",
                "saturate": "Saturate",
                "transform": {
                    "name": "Transform",
                    "rotate": "Rotate",
                    "scale": "Scale",
                    "translate-x": "Translate X",
                    "translate-y": "Translate Y"
                },

                "clear_button": "Clear",
                "reset_button": "Reset",
            },

            "action_bar": {
                "priority": {
                    "name": "Priority",
                    "tooltip": "When multiple styles apply to the same element, styles with higher priority will override those with lower priority.",
                    "force": "Force",
                },
                "erase_styles": {
                    "name": "Erase",
                    "tooltip": "Erase all historically set styles for this element, restoring it to an unset state.",
                    "confirm": "Are you sure you want to erase all historically set styles for this element? This will restore it to a state as if no styles have ever been set. This action cannot be undone!",
                    "notice": "✅Erased\nHistorical styles for this element have been removed",
                    "no_styles_notice": "No styles found\nNo historical styles were found for this element"
                },
                "reset_styles": {
                    "name": "Reset",
                    "tooltip": "Reset all styles edited since opening this panel. Historical styles will be retained.",
                    "confirm": "Are you sure you want to reset all styles edited since opening this panel? Historical styles will be retained.",
                    "notice": "✅Reset\nStyles edited since opening the designer have been reset"
                },
                "preview": {
                    "name": "Preview",
                    "tooltip": "Apply the current styles directly to the document for preview (will be lost after refreshing or closing the window)",
                    "notice": "✅Applied\nTemporary CSS file path: {{filePath}}"
                },
                "save_styles": {
                    "name": "Save",
                    "tooltip": "Permanently save the styles",
                    "notice": "✅Saved\nCSS file path: {{filePath}}"
                }
             
            },
            "close": {
                "confirm": "Are you sure you want to close the designer? Unsaved styles will be lost."
            }
        }
    },
    "zh": {
        translation: {
            "title-bar": "⋮ UI 样式修改器 (拖动我移动位置)",
            "ribbon": {
                "tooltip": "选择UI元素进行修改"
            },
            "command": {
                "start_selector": "选择UI元素进行修改"
            },
            "confirm_modal": {
                "confirm_button": "确认",
                "cancel_button": "取消"
            },
            "console": {
                "get_system_font_error": "获取系统字体失败，详情: ",
                "copy_failed": "复制失败，详情: ",
                "generate_selector_failed": "生成元素选择器失败，详情: "
            },
            "font": {
                "default_option": "查看系统字体"
            },
            "notice": {
                "selector_copied": "已复制选择器: {{selector}}",
                "css_copied": "已复制CSS代码: {{css}}",
                "copy_failed": "复制失败"
            },
            "preview": {
                "element_preview": "[预览] / 鼠标悬停可查看文档中的元素",
                "selector_hint": "[@selector]/ 点击复制选择器\n{{selector}}\n",
                "css_hint": "[@css-preview]/ 点击复制css代码\n{{selector}}\n{\n\t{{css}}}",
                "pseudo_element_hint": "(提示: 选中了伪元素, 可能需要修改背景颜色来修改颜色)"
            },
            "property": {
                "background": "背景",
                "color": "颜色",
                "opacity": "透明度",
                "background-color": "背景颜色",
                "background-image": "背景图片",
                "background-repeat": {
                    "name": "平铺方式",
                    "no-repeat": "不平铺",
                    "repeat": "平铺",
                    "repeat-x": "横向平铺",
                    "repeat-y": "纵向平铺"
                },
                "background-size": {
                    "name": "缩放方式",
                    "auto": "原始",
                    "cover": "优先铺满容器",
                    "contain": "优先展示全图"
                },
                "background-position": {
                    "name": "对齐位置",
                    "center": "居中",
                    "top": "靠顶",
                    "bottom": "靠底",
                    "left": "靠左",
                    "right": "靠右"
                },
                "background-blend-mode": {
                    "name": "背景混合模式",
                    "normal": "正常",
                    "multiply": "正片叠底",
                    "screen": "滤色",
                    "overlay": "叠加",
                    "darken": "变暗",
                    "lighten": "变亮"
                },
                "background-attachment": {
                    "name": "背景滚动模式",
                    "scroll": "随内容滚动",
                    "fixed": "固定",
                    "local": "随元素滚动"
                },
                "background-origin": {
                    "name": "背景位置",
                    "padding-box": "内边距区左上角",
                    "border-box": "边框区左上角",
                    "content-box": "内容区左上角"
                },
                "background-clip": {
                    "name": "背景裁剪",
                    "border-box": "边框区",
                    "padding-box": "内边距区",
                    "content-box": "内容区"
                },
                "font-family": "字体",
                "font-size": "字体大小",
                "font-style": {
                    "name": "字体样式",
                    "normal": "正常",
                    "italic": "斜体",
                    "oblique": "强制倾斜"
                },
                "font-weight": {
                    "name": "字体粗细",
                    "normal": "正常",
                    "bold": "加粗",
                    "bolder": "超粗",
                    "lighter": "细"
                },
                "line-height": "行高",
                "letter-spacing": "字间距",
                "text-align": {
                    "name": "文字对齐",
                    "left": "左对齐",
                    "right": "右对齐",
                    "center": "居中对齐",
                    "justify": "两端对齐",
                    "start": "起始位置",
                    "end": "末尾位置",
                    "match-parent": "匹配父元素"
                },
                "text-decoration": "装饰线",
                "text-decoration-line": {
                    "name": "线条",
                    "none": "无",
                    "underline": "下划线",
                    "overline": "上划线",
                    "line-through": "删除线"
                },
                "text-decoration-color": "颜色",
                "text-decoration-style": {
                    "name": "样式",
                    "solid": "实线",
                    "dashed": "虚线",
                    "dotted": "点线",
                    "double": "双线",
                    "wavy": "波浪线"
                },
                "text-decoration-thickness": "粗细",
                "text-underline-offset": "偏移",
                "text-decoration-skip-ink": {
                    "name": "跳过字母垂足",
                    "auto": "自动",
                    "none": "无"
                },
                "white-space": {
                    "name": "文字换行",
                    "normal": "正常",
                    "nowrap": "不换行",
                    "pre": "保留空白",
                    "pre-wrap": "保留空白并换行",
                    "pre-line": "合并空白并换行"
                },
                "text-overflow": {
                    "name": "文本溢出处理",
                    "clip": "裁剪",
                    "ellipsis": "省略号"
                },
                "text-shadow": "文本阴影",
                "horizontal-offset": "水平偏移",
                "vertical-offset": "垂直偏移",
                "blur-radius": "模糊半径",
                "shadow-color": "阴影颜色",
                "border": "边框",
                "border-width": "边框宽度",
                "border-top-width": "上",
                "border-right-width": "右",
                "border-bottom-width": "下",
                "border-left-width": "左",
                "border-style": {
                    "name": "边框样式",
                    "none": "无",
                    "solid": "实线",
                    "dashed": "虚线",
                    "dotted": "点线",
                    "double": "双线",
                    "groove": "凹槽",
                    "ridge": "脊线",
                    "inset": "内嵌",
                    "outset": "外嵌"
                },
                "border-top-style": { "name": "上" },
                "border-right-style": { "name": "右" },
                "border-bottom-style": { "name": "下" },
                "border-left-style": { "name": "左" },
                "border-color": "边框颜色",
                "border-top-color": "上",
                "border-right-color": "右",
                "border-bottom-color": "下",
                "border-left-color": "左",
                "border-radius": "圆角",
                "border-top-left-radius": "左上",
                "border-top-right-radius": "右上",
                "border-bottom-right-radius": "右下",
                "border-bottom-left-radius": "左下",
                "padding": "内边距",
                "padding-top": "上",
                "padding-right": "右",
                "padding-bottom": "下",
                "padding-left": "左",
                "margin": "外边距",
                "margin-top": "上",
                "margin-right": "右",
                "margin-bottom": "下",
                "margin-left": "左",
                "advanced": "高级属性 [ 需要css知识 ]",
                "dimensions": "尺寸",
                "width": "宽度",
                "height": "高度",
                "min-width": "最小宽度",
                "min-height": "最小高度",
                "max-width": "最大宽度",
                "max-height": "最大高度",
                "layout": {
                    "name": "布局",
                    "block": "块级",
                    "inline-block": "行内块",
                    "inline": "行内",
                    "flex": "弹性布局",
                    "inline-flex": "行内弹性布局",
                    "grid": "网格布局",
                    "inline-grid": "行内网格布局"
                },
                "flex-direction": {
                    "name": "弹性方向",
                    "row": "横向",
                    "row-reverse": "横向反序",
                    "column": "纵向",
                    "column-reverse": "纵向反序"
                },
                "justify-content": {
                    "name": "主轴对齐方式",
                    "flex-start": "起点对齐",
                    "flex-end": "终点对齐",
                    "center": "居中",
                    "space-between": "两端对齐",
                    "space-around": "环绕对齐",
                    "space-evenly": "平均对齐",
                    "stretch": "拉伸填满",
                    "start": "起始位置对齐",
                    "end": "末尾位置对齐",
                    "left": "左对齐",
                    "right": "右对齐"
                },
                "align-items": {
                    "name": "交叉轴对齐方式",
                    "stretch": "拉伸填满",
                    "flex-start": "起点对齐",
                    "flex-end": "终点对齐",
                    "center": "居中",
                    "baseline": "基线对齐",
                    "start": "起始位置对齐",
                    "end": "末尾位置对齐",
                    "self-start": "自身起始位置对齐",
                    "self-end": "自身末尾位置对齐"
                },
                "flex-wrap": {
                    "name": "换行",
                    "nowrap": "不换行",
                    "wrap": "换行",
                    "wrap-reverse": "反向换行"
                },
                "grid-template-columns": "网格列数",
                "grid-template-rows": "网格行数",
                "grid-row-gap": "行间距",
                "grid-column-gap": "列间距",
                "order": "子项排序",
                "flex-grow": "伸缩比例",
                "flex-shrink": "收缩比例",
                "flex-basis": "基础尺寸",
                "position": {
                    "name": "定位",
                    "static": "默认",
                    "relative": "相对定位",
                    "absolute": "绝对定位",
                    "fixed": "固定定位",
                    "sticky": "粘性定位"
                },
                "z-index": "层级",
                "top": "上偏移",
                "bottom": "下偏移",
                "left": "左偏移",
                "right": "右偏移",
                "filter": "滤镜&特效",
                "box-shadow": "阴影",
                "filter.main": "前景",
                "filter.background": "背景",
                "blur": "模糊",
                "brightness": "亮度",
                "contrast": "对比度",
                "grayscale": "灰度",
                "invert": "反转",
                "saturate": "饱和度",
                "transform": {
                    "name": "变换",
                    "rotate": "旋转",
                    "scale": "缩放",
                    "translate-x": "水平位移",
                    "translate-y": "垂直位移"
                },
                "clear_button": "清空",
                "reset_button": "重置"
            },
            "action_bar": {
                "priority": {
                    "name": "覆盖权重",
                    "tooltip": "当多个样式作用于同一元素时，权重更高的样式会覆盖权重较低的样式。默认权重为1，数值越大优先级越高。",
                    "force": "强制"
                },
                "erase_styles": {
                    "name": "抹除样式",
                    "tooltip": "抹除所有该元素设置过的历史样式，恢复到未设置状态。",
                    "confirm": "确定要抹除所有该元素设置过的 [历史] 样式吗？\n该元素将恢复为没有设置过任何样式的状态, 该操作无法撤销！",
                    "notice": "✅已抹除该元素的历史样式",
                    "no_styles_notice": "✅没有发现该元素的历史样式"
                },
                "reset_styles": {
                    "name": "重置",
                    "tooltip": "重置此次编辑的所有样式，历史样式将会保留。",
                    "confirm": "确定要重置本次打开面板以来编辑的所有样式吗？历史样式将会保留",
                    "notice": "✅已重置本次编辑的样式"
                },
                "preview": {
                    "name": "文档预览",
                    "tooltip": "将当前样式直接应用到文档中进行预览（刷新或关闭窗口后失效）",
                    "notice": "已应用✅\n临时css文件路径: {{filePath}}"
                },
                "save_styles": {
                    "name": "保存",
                    "tooltip": "将样式永久保存",
                    "notice": "已保存✅\ncss文件路径: {{filePath}}"
                }
            },
            "close": {
                "confirm": "确定要关闭预览面板吗？未保存的样式将会丢失。"
            }
        }
    }
};