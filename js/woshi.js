window.onload = function(){
    // alert(1);

    //选项卡部分
    var woshi_title=document.getElementsByClassName("woshi_title");
    var woshi_con=document.getElementsByClassName("woshi_con");
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

        }
    }

    //返回顶部
    document.documentElement.scrollTop = 1;
    var obj = document.documentElement.scrollTop?document.documentElement:document.body;
    var returnTop=document.getElementsByClassName("returnTop")[0];
    returnTop.onclick=function(){
        animate(obj,{scrollTop:0})
    }

}
