// 工具类
define(function () {
    return [
        {
            title: '在线代码',
            id: 'online-code',
            children: [
                {
                    name: 'CodePen',
                    url: 'https://codepen.io/'
                },
                {
                    name: 'CodeSandbox',
                    desc: 'js线上沙盒环境',
                    url: 'https://codesandbox.io/',
                },
                {
                    name: 'Stackblitz',
                    desc: '在线代码编辑器',
                    url: 'https://stackblitz.com/',
                },
                {
                    name: 'JS Bin',
                    desc: 'js,css代码在线调试',
                    url: 'https://jsbin.com/',
                },
                {
                    name: 'JSFiddle',
                    desc: '在线代码演示',
                    url: 'https://jsfiddle.net/',
                },
                {
                    name: 'EnjoyCSS',
                    desc: '在线的CSS3代码生成器',
                    url: 'https://enjoycss.com/',
                },
                {
                    name: 'Typescript Playground',
                    desc: '用于浏览TypeScript和JavaScript的在线编辑器',
                    url: 'https://www.typescriptlang.org/play',
                },
                {
                    name: 'Prettier Playground',
                    desc: '在线代码格式化',
                    url: 'https://prettier.io/playground/',
                }
            ]
        },
        {
            title: '代码托管',
            id: 'code-collocation',
            children: [
                {
                    name: 'GitHub',
                    desc: '最大的程序员交友网站',
                    url: 'https://github.com/',
                },
                {
                    name: 'GitLab',
                    desc: '利用Ruby on Rails一个开源的版本管理系统',
                    url: 'https://gitlab.com/',
                },
                {
                    name: 'Gitee(码云)',
                    desc: 'OSCHINA.NET 推出的代码托管·协作开发平台',
                    url: 'https://gitee.com/',
                },
                {
                    name: 'Coding',
                    desc: '腾讯一站式软件研发管理平台',
                    url: 'https://coding.net/',
                },
                {
                    name: 'Bitbucket',
                    desc: 'tlassian公司提供的一个基于web的版本库托管服务',
                    url: 'https://bitbucket.org/',
                }
            ]
        },
        {
            title: '调试',
            id: 'debug',
            children: [
                {
                    name: 'Postman',
                    desc: 'API调试、Http请求的工具',
                    url: 'https://www.postman.com/',
                },
                {
                    name: 'Fiddler',
                    desc: 'HTTP调试抓包工具',
                    url: 'https://www.telerik.com/fiddler',
                },
                {
                    name: 'Charles',
                    desc: '支持mac的收费抓包工具',
                    url: 'https://www.charlesproxy.com/',
                },
            ]
        },
        {
            title: '文档生成',
            id: 'document-build',
            children: [
                {
                    name: 'Docsify',
                    desc: '文档网站生成器',
                    url: 'https://docsify.js.org/',
                },
                {
                    name: 'VuePress',
                    desc: 'Vue 驱动的静态网站生成器',
                    url: 'https://vuepress.vuejs.org/zh/',
                },
                {
                    name: 'GitBook',
                    desc: '使用 Git 和 Markdown 来构建文档的工具',
                    url: 'https://www.gitbook.com/',
                },
                {
                    name: 'Dumi',
                    desc: '为组件开发场景而生的文档工具,支持React',
                    url: 'https://d.umijs.org/zh-CN',
                },
                {
                    name: 'Storybook',
                    desc: '快速构建ui组件文档',
                    url: 'https://storybook.js.org/',
                },
                {
                    name: 'Docz',
                    desc: '基于Markdown和JSX生成组件文档',
                    url: 'https://www.docz.site/',
                },
                {
                    name: 'Bisheng',
                    desc: '一个把 Markdown 转为 React 单页网站的工具, ant-design基于其实现',
                    url: 'https://github.com/benjycui/bisheng',
                },
                {
                    name: 'Gatsby',
                    icon: 'gatsby.png',
                    desc: '一个为 React 打造的快如闪电的现代化站点生成器',
                    url: 'https://www.gatsbyjs.cn/',
                },
                {
                    name: 'Hexo',
                    icon: 'hexo.png',
                    desc: '快速、简洁且高效的博客框架',
                    url: 'https://hexo.io/zh-cn/index.html',
                },
            ]
        },
        {
            title: 'CDN加速',
            id: 'cdn-speed',
            children: [
                {
                    name: 'BootCDN',
                    desc: 'Bootstrap中文网开源项目免费 CDN加速服务',
                    url: 'https://www.bootcdn.cn/',
                  },
                  {
                    name: 'Staticfile',
                    desc: '开源库CDN加速',
                    url: 'https://www.staticfile.org/',
                  },
                  {
                    name: 'cdnjs',
                    desc: '排名第一的免费开源 CDN',
                    url: 'https://cdnjs.com/',
                  }
            ]
        }
    ]
})