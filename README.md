# 在线课程应用

这是一个基于Next.js和Tailwind CSS构建的移动端在线教育应用，用于展示类似Coursera的在线学习平台的用户界面。

## 功能特点

- 响应式设计，专为移动端优化
- 课程探索与分类浏览
- 职业发展路径规划
- 课程学习进度追踪
- 个人资料管理
- 课程搜索功能

## 技术栈

- [Next.js 15](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [React](https://reactjs.org/) - UI库

## 运行项目

首先，安装依赖：

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

然后，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

- `app/` - Next.js应用目录
  - `components/` - 可复用组件
  - `explore/` - 探索页面
  - `career/` - 职业页面
  - `learn/` - 学习页面
  - `search/` - 搜索页面
  - `profile/` - 个人资料页面
  - `course/` - 课程详情页面
- `public/` - 静态资源

## 响应式设计

该应用针对各种移动设备进行了优化，使用Tailwind CSS的响应式工具构建。
