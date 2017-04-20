window.onload=function(){
    //返回顶部
    document.documentElement.scrollTop = 1;
    var obj = document.documentElement.scrollTop?document.documentElement:document.body;
    var returnTop=document.getElementsByClassName("returnTop")[0];
    returnTop.onclick=function(){
        animate(obj,{scrollTop:0});
    }

}