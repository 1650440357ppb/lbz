window.onload = function(){
    // alert(1);

    //选项卡部分
    var woshi_title=getClass("woshi_title");
    var woshi_con=getClass("woshi_con");
    for(var i = 0; i < woshi_title.length; i++){
        woshi_title[i].name = i;
        woshi_title[i].onclick=function(){
            for(var j = 0; j < woshi_con.length;j++){
                woshi_con[j].style.display="none";
                woshi_title[j].className = "woshi_title";
            }
            woshi_con[this.name].style.display="block";
            //title[this.name].className = "title title_active";
            this.className = "woshi_title woshi_active";
            this.background="#38BBF2";

        }
    }

    //返回顶部
    document.documentElement.scrollTop = 1;
    var obj = document.documentElement.scrollTop?document.documentElement:document.body;
    var returnTop=getClass("returnTop")[0];
    returnTop.onclick=function(){
        animate(obj,{scrollTop:0})
    }

}
