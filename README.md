# 前端工具库

这是一个用于前端开发的实用工具库，包含了多个端分别的工具封装，`web`、`wxapp`、`h5`、`common`(各端通用工具)

## ⬇️ 如果你想使用该工具库，请看以下 ⬇️

### 📦 安装

```bash
npm install @batar/utils
or
yarn add @batar/utils
```

### 🦄 使用

```typescript
// 导入 common 模块的 add 方法
import { add } from "@batar/utils/common";

console.log(add(1, 2)); // 输出 3
```

```typescript
// 导入 web 模块的 add 方法
import { add } from "@batar/utils/web";

console.log(add(1, 2)); // 输出 3
```

### 🚀 模块说明

#### common（通用工具库）

```typescript
add(a: number, b: number): number - 返回两个数的和
subtract(a: number, b: number): number - 返回两个数的差
```

#### web（pc 端工具库）

```typescript
add(a: number, b: number): number - 返回两个数的和
subtract(a: number, b: number): number - 返回两个数的差
```

#### wxapp（微信小程序工具库）

```typescript
add(a: number, b: number): number - 返回两个数的和
subtract(a: number, b: number): number - 返回两个数的差
```

#### h5（移动端工具库）

```typescript
add(a: number, b: number): number - 返回两个数的和
subtract(a: number, b: number): number - 返回两个数的差
```

## 👨‍🚀 贡献者们

```
@前端俊哥儿乐
```

<br />
<b>使用说明到这就结束了</b>
<br />

---

## ⬇️ 如果你想参与该工具库的开发 请看以下 ⬇️

如果你提的 PR 被收录，你的个人标识将会出现在 “贡献者” 说明哦 😯

### ⚠️ 项目开发规范（必看 ❗️❗️❗️）

#### GIT FLOW 规范

1. **拉取开发分支 dev**
2. **从 dev 分支新建 feat_yourname_utilName**
3. **git commit 信息必须写清楚该方法简要描述**
4. **开发完成后向 dev 发起 mr 合并，发起 mr 时必须在描述详细说明该方法背景等**

#### 目录规范

```bash
└── core   # 主代码文件，你写的工具函数一定会存在以下其中一个目录下
    ├── common   # 如果你写的是一个通用工具函数，请在这个目录下新建 [funcname]/index.ts、[funcname]/index.test.ts
    ├── h5   # 如果你写的是一个移动端工具函数，请在这个目录下新建 [funcname]/index.ts、[funcname]/index.test.ts
    ├── web  # 如果你写的是一个PC端工具函数，请在这个目录下新建 [funcname]/index.ts、[funcname]/index.test.ts
    └── wxapp   # 如果你写的是一个小程序工具函数，请在这个目录下新建 [funcname]/index.ts、[funcname]/index.test.ts
```

#### 编码规范

**每一个工具函数**

- **都应该具有自己的目录，且目录名为该工具函数说明**
- **目录命名强制使用小驼峰命名，ex. getUserName**
- **目录下都必须包含 index.ts，用于编写你的工具函数逻辑**
- **目录下都必须包含 index.test.ts，用户编写你的测试用例**
- **该项目所有命名都应遵循小驼峰命名，作用范围包括但不局限于 目录命名/导出函数命名**

#### 工具函数导出规范

1. 当你写完自己的工具函数，请务必将其导出

```typescript
// 以 common/add/index.ts 为例
export function yourUtilsName(a: number, b: number): number {
  return a + b;
}
```

2. 当你写完自己的工具函数，请务必在对应模块下入口文件导出

```typescript
// 以 common 模块为例: common/index.ts
export * from "./add";
export * from "./subtract";
export * from "./your utils directory";
```

#### 测试规范

```bash
npm run test # 开发完成后，必须保证所有单元测试通过
```

### 🏖️ 就绪：你可以开始编程了

```bash
1. git clone <url> # 请先 clone 本项目到你的本地
2. npm install # 安装依赖
3. 根据以上项目开发规范 Action
```

### 🔺 测试

```bash
npm test # 在提交你的代码前，请务必保证所有测试用例通过！！！
```

### 🔧 不足

```
1. 需要在项目添加 git hooks 校验
2. 需要在每个工具函数目录新建 README.md，分别对应该方法的使用说明
```

### 🌸 感谢

感谢你为该工具库做出的贡献
