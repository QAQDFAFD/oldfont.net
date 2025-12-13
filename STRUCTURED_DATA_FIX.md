# 结构化数据修复说明

## 🐛 问题描述

Google Search Console 报错:
```
解析错误:缺少'}'或对象成员名称
(Parsing error: Missing '}' or object member name)
```

## 🔍 根本原因

根据 [Google 的文档](https://support.google.com/webmasters/answer/9166415#error_types),问题有**两个**:

### 问题 1: 数组格式错误 ❌

```javascript
const schema = [
  websiteSchema(),
  organizationSchema(),
  breadcrumbSchema([...])
]

// 输出为数组
<script type="application/ld+json">
  [{...}, {...}, {...}]
</script>
```

这会导致 Google 无法正确解析,因为顶层是一个**数组**而不是对象。

### 问题 2: HTML 实体编码 ❌

```jsx
<script type='application/ld+json'>
  {JSON.stringify(schema)}
</script>

// React 会自动转义,输出为:
{&quot;@context&quot;:&quot;https://schema.org&quot;...}
```

这会导致 JSON 无法被正确解析,因为 `&quot;` 不是有效的 JSON 语法。

## ✅ 解决方案

### 修复 1: 使用 `@graph` 包装

```javascript
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    websiteSchema(),
    organizationSchema(),
    breadcrumbSchema([...])
  ]
}
```

### 修复 2: 使用 `dangerouslySetInnerHTML` 避免 HTML 转义

```jsx
<script
  type='application/ld+json'
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

// 正确输出 (纯 JSON,无 HTML 实体)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {...},
    {...},
    {...}
  ]
}
</script>
```

## 📝 修改的文件

1. ✅ `/app/page.tsx` - 首页
2. ✅ `/app/old-font-generator/page.tsx` - 老字体生成器页面
3. ✅ `/app/old-english-font-generator/page.tsx` - 老英文字体生成器页面
4. ✅ `/app/typewriter-font-generator/page.tsx` - 打字机字体生成器页面

## 🧪 如何验证修复

### 方法 1: 使用 Google Rich Results Test

1. 访问 [Rich Results Test](https://search.google.com/test/rich-results)
2. 输入你的页面 URL 或粘贴 HTML 代码
3. 检查是否有错误

### 方法 2: 使用 Schema.org Validator

1. 访问 [Schema.org Validator](https://validator.schema.org/)
2. 粘贴生成的 JSON-LD 代码
3. 验证语法是否正确

### 方法 3: 本地测试

```bash
# 构建网站
npm run build

# 启动生产服务器
npm start

# 访问页面并查看源代码
# 检查 <script type="application/ld+json"> 标签内容
```

## 📊 预期结果

修复后,JSON-LD 输出应该类似:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "OldFont.net",
      "url": "https://oldfont.net",
      "description": "...",
      "inLanguage": "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OldFont.net",
      "url": "https://oldfont.net",
      "description": "...",
      "logo": "https://oldfont.net/og/og-image.png",
      "sameAs": ["https://oldfont.net"]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [...]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [...]
    }
  ]
}
```

## 🚀 部署后步骤

1. **部署网站**到生产环境
2. **等待 Google 重新抓取**你的页面(可能需要几天)
3. 在 **Google Search Console** 中点击 **"验证修复"** 按钮
4. **监控验证进度**(通常需要 1-2 周)
5. 收到验证成功的邮件通知

## 📚 参考资料

- [Google Search Console - Unparsable structured data report](https://support.google.com/webmasters/answer/9166415#error_types)
- [Schema.org - Multiple entities on a page](https://schema.org/docs/gs.html#advanced_multiple)
- [JSON-LD - Multiple Graphs](https://www.w3.org/TR/json-ld11/#named-graphs)

## ⚠️ 注意事项

- 每个 schema 函数内部已经包含了 `@context`,在 `@graph` 数组中这是允许的
- 如果想要更简洁,可以修改 `lib/schema.ts` 中的函数,移除各自的 `@context`,只在顶层保留一个
- 但当前的实现也是有效的,Google 可以正确解析

## ✨ 优化建议(可选)

如果想要更简洁的输出,可以修改 `lib/schema.ts`:

```typescript
// 移除每个函数中的 @context
export const websiteSchema = (): JsonLd => ({
  // "@context": "https://schema.org",  // 删除这行
  "@type": "WebSite",
  name: "OldFont.net",
  // ...
});
```

这样最终输出会更简洁:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "OldFont.net"
    },
    {
      "@type": "Organization",
      "name": "OldFont.net"
    }
  ]
}
```

但这不是必需的,当前的实现已经可以正常工作了。

