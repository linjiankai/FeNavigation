define([
    './article',
    './document',
    './notebook',
    './plugin', 
    './tool',
    './website',
    './learn'
], function(article, document, notebook,plugin, tool, website, learn) {
    return {
        all: [
            {
                title: '文档',
                key: 'document',
                children: document
            },
            {
                title: '网站',
                key: 'website',
                children: website
            },
            {
                title: '插件',
                key: 'plugin',
                children: plugin
            },
            {
                title: '工具',
                key: 'tool',
                children: tool
            },
            {
                title: '学习资源',
                key: 'learn',
                children: learn
            },
            {
                title: '文章',
                key: 'article',
                children: article
            },
            {
                title: '笔记',
                key: 'notebook',
                children: notebook
            },
        ],
        search: [].concat(document, website, plugin, tool, learn, article, notebook)
    }
}); 
