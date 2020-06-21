// 全局的一些配置
export default {
  rootPath: '/dev', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8086, // 本地开发服务器的启动端口
  domain: 'www.geops.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/overview.html',
      },
      {
        key: 'dev',
        text: 'Developer',
        link: '/en-us/blog/vision.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/overview.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/Instruction/start.html',
        },
        {
          text: 'Dontributor guide',
          link: '/en-us/blog/vision.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
        {
          text: 'About us',
          link: '/en-us/blog/about_us.html',
        },
      ],
    },
    copyright: 'Copyright © 2018-2020 Xiang，Hua /向华',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/overview.html',
      },
      {
        key: 'Dev',
        text: '开发者',
        link: '/zh-cn/blog/vision.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/overview.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/Instruction/start.html',
        },
        {
          text: '贡献者指南',
          link: '/zh-cn/blog/vision.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
        {
          text: '关于我们',
          link: '/zh-cn/blog/about_us.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 Xiang，Hua /向华',
  },
};
