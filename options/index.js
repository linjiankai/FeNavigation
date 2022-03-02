window.onload = function(){
    require(['../static/data/index'], function (data) {
        console.log(data);
        renderNav(data.all);
        renderContent(data.search)
    })    

    function renderNav(data){
        var html = '';
        var navElm = document.querySelector('.nav')
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            html += '<div class="nav-item">';
            html += '<div class="item-title">'+ item.title +'</div>';
            html += '<div class="category"><ul>'
            if(item.children && item.children.length > 0){
                for(var j = 0; j < item.children.length; j++){
                    html += '<li><a href="#'+ item.children[j].id +'"><i></i>'+ item.children[j].title +'</a></li>'
                }
            }
            html += '</ul></div></div>'
        }
        navElm.innerHTML = html;
    }

    function renderContent(data){
        var html = '';
        var mainElm = document.querySelector('.main');
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            html += '<div class="row" id="'+ item.id +'">';
            html += '<div class="row-header"><i></i>'+ item.title +'</div>';
            html += '<div class="row-content"><ul>'
            if(item.children && item.children.length > 0){
                for(var j = 0; j < item.children.length; j++){
                    var childItem = item.children[j]
                    html += '<li><a href="'+ childItem.url +'" target="_blank" title="'+  childItem.name +'"><i></i>'+ childItem.name +'</a></li>'
                }
            }
            html += '</ul></div></div>'
        }
        mainElm.innerHTML = html;
    }
}
