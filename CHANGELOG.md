# 更新日志

## 🎉 最新更新 - 清理无效字体并统一可用选项

### 📅 更新时间
2024年12月

### ✨ 变更概览
- 🚫 移除了 Vercel 构建无法识别的 Heritage Script 与 IM Fell 字体，避免打包报错。
- ✅ 仅保留 Google Fonts 提供的可用字体，确保页面稳定加载。
- 🧭 调整生成器默认值与可选列表，与当前可用字体保持一致。

### 🔄 页面更新

#### Old Font Generator (`/old-font-generator`)
- **默认字体**: Almendra SC（复古小型大写）
- **可选字体**: Almendra SC、Cormorant、Cinzel Decorative、UnifrakturCook、UnifrakturMaguntia、Fruktur、Goudy Bookletter 1911、Medieval Sharp、Pirata One
- **定位**: 复古、哥特与经典衬线的混合展示

#### Old English Font Generator (`/old-english-font-generator`)
- **默认字体**: UnifrakturCook（经典黑体）
- **可选字体**: UnifrakturCook、UnifrakturMaguntia、Fruktur、Medieval Sharp、Pirata One、Cinzel Decorative、Almendra SC
- **定位**: 哥特 / 黑体 / 中世纪风格

#### Typewriter Font Generator (`/typewriter-font-generator`)
- **默认字体**: Special Elite（打字机风格）
- **可选字体**: Special Elite、Inter、Cormorant
- **定位**: 复古打字机与现代/经典衬线的混合

### 📊 字体总览
- **总计可用字体**: 11 种（全部来自 Google Fonts）
- **主要类别**: 衬线 / 哥特黑体 / 复古打字机

### 🎯 改进效果
- ✅ 构建不再因未知字体格式失败
- ✅ 多个生成器的选项完全对齐当前可用字体，避免用户看到不可用字体
- ✅ 所有字体均由 Google Fonts 自动优化与缓存

### 🔧 参考代码片段
- 字体配置: `lib/fonts.ts`
- Old Font 页面字体列表: `app/old-font-generator/page.tsx`
- Old English 页面字体列表: `app/old-english-font-generator/page.tsx`
- Typewriter 页面字体列表: `app/typewriter-font-generator/page.tsx`
