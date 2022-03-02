var searchInput = document.querySelector('.search-input')
var searchList = document.querySelector('.search-list')

require(['../static/data/index'], function (data) {
    console.log("file: index.js ~ line 4 ~ data", data)

    searchInput.oninput = function (){
        action(data.search)
    };
    document.onkeydown = function (event){
        var event = event || window.event;
        if(event.key === 'ArrowUp'){
            listAction('up')
        }else if(event.key === 'ArrowDown'){
            listAction('down')
        }else if(event.key === 'Enter'){
            listAction('enter')
        }
    }
});

function action(data){
    var res = getSearchRes(data, searchInput.value)   
    renderRes(res)
}

function getSearchRes(data, value){
    if(value.trim() === ''){
        return []
    }
    var reg = new RegExp(value, "i");
    var res = []
    for(var i = 0; i< data.length; i++){
        let item = data[i];
        if(reg.test(item.title)){
            for(var j = 0; j < item.children.length; j++){
                item.children[j].parent = item.title;
            }
            res = res.concat(item.children)
        }else{
            for(var j = 0; j < item.children.length; j++){
                let child = item.children[j];
                if(reg.test(child.name)){
                    child.parent = item.title;
                    res = res.concat(child);
                }
            }
        }
    }
    return res
}

function renderRes(res){
    console.log("file: index.js ~ line 58 ~ renderRes ~ res", res)
    if(res.length > 0){
        var html = '<ul>'
        for (var i = 0; i < res.length; i++){
            let item = res[i];
            html += '<li><a href='+ item.url +' target="_blank" title="'+ item.name +'">'+ item.name +'</a><span class="label">'+ item.parent +'</span></li>'
        }
        html += '</ul>';
        searchList.innerHTML = html;
    }else{  
        searchList.innerHTML = '<div class="empty">暂时木有内容呀~~</div>';
    }
}

function listAction(type){
    var ulEle = searchList.childNodes;
    if(ulEle.length > 0){
        var liEle = ulEle[0].childNodes;
        var hasActive = false 
        for(var i = 0; i < liEle.length; i++){
            if(liEle[i].hasAttribute('active')){
                if(type === 'enter'){
                    liEle[i].childNodes[0].click();
                    break;
                }
                liEle[i].removeAttribute('active')
                if(type === 'down' && i < liEle.length - 1){
                    liEle[i+1].setAttribute('active', '')
                }
                if(type === 'up' && i > 0){
                    liEle[i-1].setAttribute('active', '')
                }
                hasActive = true
                break;
            }
        }
        if(!hasActive){
            type === 'down' && liEle[0].setAttribute('active', '')
            type === 'up' && liEle[liEle.length - 1].setAttribute('active', '')
        }
    }
}