# 微信公众号示例程序

> 目前本项目仅用于演示如何获取微信网页授权的临时票据 code

## 一、下载本项目，运行 Express

- 准备开发运行环境
  - Node.js
  - yarn

- 下载本项目

```bash
git clone https://github.com/octopusthu/wechat-official-account-sample.git
```

- 构建项目

```bash
cd wechat-official-account-sample
yarn
```

- 运行 Express

```bash
node app.js
```

- 打开浏览器，访问 [http://localhost:3000](http://localhost:3000)，页面显示 `Hello World!`

## 二、登录 [微信公众平台](https://mp.weixin.qq.com/)，完成必要配置

- 进入`开发者工具 - web开发者工具`，绑定开发者微信账号

## 三、使用微信开发者工具进行公众号开发调试

- 下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 。请注意，需要选择 `预发布版 RC Build`。

- 运行微信开发者工具，进入 `公众号网页调试` 模式

- 第一次使用时，点击左上角图标，使用微信扫码登录

- 将 `ciam-test.html` 的 `appId` 和 `redirectUri` 修改为当前所使用的公众号对应的值

- 在微信开发者工具的地址栏中输入 [http://localhost:3000/ciam-test](http://localhost:3000/ciam-test)

- 切换至开发者工具的 `Network` 页签，点击左侧页面的 `静默登录` / `获取用户信息登录`

- 在 `Network` 页签中找到类似 `?code=xxxxx` 的请求，其中 `xxxxx` 就是微信网页授权的临时票据 code
