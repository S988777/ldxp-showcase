# 链动小铺宣传页

一个零依赖、可直接部署到 GitHub Pages 的单页宣传站。

## 上线前的唯一配置

打开 `script.js`，填写以下两项：

```js
const storeProfile = {
  storeUrl: "https://你的公开店铺入口",
  contactText: "你的公开联系方式",
};
```

不要填写后台管理地址、对接码、Token、Cookie 或私人敏感信息。

## 本地预览

```bash
python -m http.server 4173
```

随后在浏览器打开 `http://127.0.0.1:4173`。

## 发布

将本目录所有文件上传到 GitHub 仓库根目录，并在 **Settings → Pages** 中选择 `main` 分支、`/(root)` 目录发布。

## 搜索可见性

- 页面已包含与当前主经营方向相符的可见关键词、FAQ 结构化数据、`robots.txt` 和搜索摘要。
- `meta keywords` 只作辅助；真正更有用的是页面正文、标题、FAQ、外部公开链接与持续更新。
- 发布后，把 GitHub Pages 的实际公开网址提交到 Google Search Console 和 Bing Webmaster Tools；站点必须保持公开且不要设置 `noindex`。
- 第三方名称仅用于说明适用方向和公开分类，不表示官方合作。不要把后台地址、对接码、Token、Cookie 或敏感信息放进页面或仓库。
