window.onload=function(){

    //选项卡部分
    var gn_title=getClass("gn_title");
    var gn_con=getClass("gn_con");
    var jiao=getClass("jiao");
    jiao[0].style.display="block";
    for(var i=0;i<gn_title.length;i++){
        gn_title[i].name=i;
        gn_title[i].onclick=function(){
            //alert(1);
            for(var j=0;j<gn_con.length;j++){
                gn_con[j].style.display="none";
                jiao[j].style.display="none";
            }
            gn_con[this.name].style.display="block";
            jiao[this.name].style.display="block";
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