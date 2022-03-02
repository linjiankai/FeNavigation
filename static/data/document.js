// 文档类
define(function () {
    return [
        {
            title: 'Javascript',
            id: 'javascript',
            children: [
                {
                    name: 'MDN',
                    url: 'https://developer.mozilla.org/zh-CN/'
                },
                {   
                    name: 'Typescript',
                    url: 'https://www.typescriptlang.org/'
                }
            ]
        },
        {
            title: 'CSS',
            id: 'css',
            children: [
                {
                    name: 'Less',
                    url: 'https://less.bootcss.com/'
                },
                {
                    name: 'Sass',
                    url: 'https://www.sass.hk/'
                },
                {
                    name: 'Stylus',
                    url: 'https://www.stylus-lang.cn/'
                },
                {
                    name: 'Styled Components',
                    url: 'https://styled-components.com/'
                }
            ]
        },
        {
            title: 'Vue',
            id: 'vue',
            children: [
                {
                    name: 'Vue2.x文档',
                    url: 'https://cn.vuejs.org/'
                },
                {
                    name: 'Vue3.x文档',
                    url: 'https://v3.cn.vuejs.org/'
                },
                {
                    name: 'Vue Router文档',
                    url: 'https://next.router.vuejs.org/zh/index.html',
                },
                {
                    name: 'Vue CLI',
                    url: 'https://cli.vuejs.org/zh/',
                },
                {
                    name: 'Vuex',
                    url: 'https://vuex.vuejs.org/zh/',
                }
            ]
        },
        {
            title: 'React',
            id: 'react',
            children: [
                {
                    name: 'React中文文档',
                    url: 'https://react.docschina.org/'
                },
                {
                    name: 'React新文档',
                    url: 'https://beta.reactjs.org/'
                },
                {
                    name: 'React Router',
                    url: 'https://reactrouter.com/'
                },
                {
                    name: 'Create React App',
                    url: 'https://create-react-app.dev/'
                },
                {
                    name: 'UmiJS',
                    url: 'https://umijs.org/zh-CN'
                },
                {
                    name: 'Redux',
                    url: 'https://cn.redux.js.org/',
                },
                {
                    name: 'Mobx',
                    url: 'https://mobx.js.org/',
                },
                {
                    name: 'Recoil',
                    desc: 'Facebook的React状态管理库',
                    url: 'https://recoiljs.org/zh-hans/',
                },
                {
                    name: 'DvaJS',
                    desc: '基于 redux 和 redux-saga 的数据流方案',
                    url: 'https://dvajs.com/',
                },
            ]
        },
        {
            title: 'Angular',
            id: 'angular',
            children: [
                {
                    name: 'Angular文档',
                    url: 'https://angular.cn/'
                },
                {
                    name: 'Ngrx',
                    desc: 'Angular基于Rxjs的状态管理',
                    url: 'https://ngrx.io/',
                },
            ]
        },
        {
            title: '状态管理',
            id: 'status-manage',
            children: [
                {
                    name: 'Akita',
                    url: 'https://datorama.github.io/akita'
                },
                {
                    name: 'Xstate',
                    desc: 'JavaScript和TypeScript有限状态机和状态图, 没有限定任何前端框架',
                    url: 'https://xstate.js.org/',
                },
            ]
        },
        {
            title: '服务端渲染',
            id: 'server-render',
            children: [
                {
                    name: 'Nuxt',
                    desc: 'Vue的服务端渲染应用框架',
                    url: 'https://nuxtjs.org/',
                },
                {
                    name: 'Next',
                    desc: 'React的服务端渲染应用框架',
                    url: 'https://www.nextjs.cn/',
                },
                {
                    name: 'Scully',
                    desc: 'Angular的服务端渲染应用框架',
                    url: 'https://scully.io/',
                },
            ]
        },
        {
            title: '构建工具',
            id: 'build-tool',
            children: [
                {
                    name: 'Webpack中文',
                    url: 'https://www.webpackjs.com/'
                },
                {
                    name: 'Webpack',
                    url: 'https://webpack.js.org/'
                },
                {
                    name: 'Vite',
                    url: 'https://cn.vitejs.dev/'
                },
                {
                    name: 'Rollup',
                    url: 'https://www.rollupjs.com/'
                },
                {
                    name: 'Rome',
                    url: 'https://rome.tools/'
                },
                {
                    name: 'Snowpack',
                    url: 'https://snowpack.cn/'
                },
                {
                    name: 'Parcel',
                    url: 'https://www.parceljs.cn/'
                },
                {
                    name: 'ESbuild',
                    url: 'https://esbuild.docschina.org/'
                },
            ]
        },
        {
            title: 'Node框架',
            id: 'node-frame',
            children: [
                {
                    name: 'Nestjs',
                    desc: '用于构建高效、可靠和可扩展的服务器端应用程序的渐进式 Node.js 框架。',
                    url: 'https://nestjs.com/',
                },
                {
                    name: 'Koa',
                    desc: 'Express 原班人马基于 ES6 新特性重新开发的框架',
                    url: 'https://www.koajs.com.cn/',
                },
                {
                    name: 'Express',

                    desc: '基于 Node.js 平台的极简、灵活的 web 应用开发框架',
                    url: 'https://www.expressjs.com.cn/',
                },
                {
                    name: 'Egg',
                    desc: '基于Koa打造的企业级框架',
                    url: 'https://eggjs.org/zh-cn/',
                },
                {
                    name: 'Hapi',
                    desc: '沃尔玛团队开发的框架',
                    url: 'https://hapi.dev/',
                },
                {
                    name: 'Fastify',
                    desc: '快速并且低开销的Node框架',
                    url: 'https://www.fastify.cn/',
                },
                {
                    name: 'Sails',
                    desc: '基于express的web后台开放框架',
                    url: 'https://sailsjs.com/',
                },
                {
                    name: 'Feathers',
                    desc: '是一个轻量级的网络框架, 用于使用 JavaScript 或 TypeScript 创建实时应用程序和 REST API',
                    url: 'https://feathersjs.com/',
                }
            ]
        },
        {
            title: '测试',
            id: 'test',
            children: [
                {
                    name: 'Jest',
                    desc: 'react默认测试框架',
                    url: 'https://www.jestjs.cn/'
                },
                {
                    name: 'Mocha',
                    desc: '',
                    url: 'https://mochajs.cn/'
                },
                {
                    name: 'Puppeteer',
                    url: 'http://puppeteerjs.com/'
                },
                {
                    name: 'Cypress',
                    url: 'https://www.cypress.io/'
                },
                {
                    name: 'Jasmine',
                    url: 'https://jasmine.github.io/'
                },
                {
                    name: 'Karma',
                    url: 'https://karma-runner.github.io/'
                },
                {
                    name: 'Ava',
                    url: 'https://github.com/avajs/ava-docs/blob/main/zh_CN/readme.md'
                },
                {
                    name: 'React Testing Library',
                    url: 'https://testing-library.com/docs/react-testing-library/intro/'
                },
                {
                    name: 'Nightwatch',
                    url: 'https://nightwatchjs.org/'
                },
                {
                    name: 'Playwright',
                    url: 'https://playwright.dev/'
                },
                {
                    name: 'Selenium',
                    url: 'https://www.selenium.dev/'
                },
            ]
        }
    ]
});
