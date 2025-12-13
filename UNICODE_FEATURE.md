# Unicode 文本转换功能

## 📋 功能说明

现在 OldFont.net 提供了**两种复制方式**,满足不同使用场景:

### 1. ✨ Copy Unicode (新功能!)
- **用途**: 社交媒体(Twitter/X, Facebook, Instagram, WhatsApp 等)
- **原理**: 将文本转换为 Unicode 特殊字符
- **优点**: 
  - ✅ 复制粘贴到任何地方都能保持样式
  - ✅ 不需要字体文件
  - ✅ 跨平台兼容
- **示例**: 
  - 输入: `Hello World`
  - 输出: `𝕳𝖊𝖑𝖑𝖔 𝖂𝖔𝖗𝖑𝖉` (Fraktur Bold)

### 2. 📋 Copy HTML
- **用途**: 网站开发
- **原理**: 复制带内联样式的 HTML 代码
- **示例**: `<span style="font-family: 'IM Fell DW Pica'; font-size: 36px;">Hello</span>`

---

## 🎨 支持的 Unicode 样式

### Fraktur (哥特体/Old English)
```
普通: 𝔄𝔅ℌ𝔇𝔈𝔉𝔊 𝔞𝔟𝔠𝔡𝔢𝔣𝔤
加粗: 𝕬𝕭𝕮𝕯𝕰𝕱𝕲 𝖆𝖇𝖈𝖉𝖊𝖋𝖌
```

### Monospace (等宽/打字机)
```
𝙰𝙱𝙲𝙳𝙴𝙵𝙶 𝚊𝚋𝚌𝚍𝚎𝚏𝚐
𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿
```

### Script (手写体)
```
𝒜ℬ𝒞𝒟ℰℱ𝒢 𝒶𝒷𝒸𝒹ℯ𝒻ℊ
```

---

## 🔧 技术实现

### 字体映射
不同的字体 ID 会自动映射到对应的 Unicode 样式:

| 字体 ID           | Unicode 样式 |
| ----------------- | ------------ |
| `im-fell-dw-pica` | Fraktur      |
| `uncial-antiqua`  | Fraktur      |
| `cinzel`          | Fraktur Bold |
| `special-elite`   | Monospace    |
| `courier-prime`   | Monospace    |
| `dancing-script`  | Script       |

### 代码位置
- **转换逻辑**: `/lib/unicode-converter.ts`
- **UI 组件**: `/components/tools/FontControls.tsx`
- **集成**: `/components/tools/FontGeneratorTool.tsx`

---

## 🆚 对比 Piliapp

### Piliapp 的方式
- ✅ 只提供 Unicode 转换
- ✅ 适合社交媒体
- ❌ 样式选择有限
- ❌ 无法导出图片
- ❌ 无法自定义大小和行高

### OldFont.net 的方式
- ✅ **两种复制方式** (Unicode + HTML)
- ✅ **真实字体渲染** + Unicode 转换
- ✅ **可导出 PNG 图片**
- ✅ **完全自定义** (字体、大小、行高)
- ✅ **更多字体选择**

---

## 💡 使用建议

### 场景 1: 发社交媒体帖子
👉 使用 **✨ Copy Unicode** 按钮

### 场景 2: 做网站设计
👉 使用 **📋 Copy HTML** 按钮

### 场景 3: 做海报/图片
👉 使用 **📸 Export PNG** 按钮

---

## 🚀 未来改进

- [ ] 添加更多 Unicode 样式(双删除线、圆圈字母等)
- [ ] 支持自定义 Unicode 映射
- [ ] 添加预览 Unicode 效果
- [ ] 支持批量转换

