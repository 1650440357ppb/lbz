window.onload=function(){
    //滚动条事件-发展历程
    document.documentElement.scrollTop = 1;
    var obj = document.documentElement.scrollTop?document.documentElement:document.body;
    var returnTop=getClass("returnTop")[0];

    var develope=getClass("develope")[0];
    var step=getClass("step_text");
    var angle=getClass("angle");

    window.onscroll=function(){
        //判断滚动条位置是否走到了要出现的位置

        if(obj.scrollTop>=develope.offsetTop-600){
            step[1].style.animation="deveStep .6s 1 1.2s";
            angle[1].style.animation="angleStep .6s 1 1.2s";
            step[3].style.animation="deveStep .6s 1 2.4s";
            angle[3].style.animation="angleStep .6s 1 2.4s";
            step[0].style.animation="deveStep1 .6s 1 .6s";
            angle[0].style.animation="angleStep1 .6s 1 .6s";
            step[2].style.animation="deveStep1 .6s 1 1.8s";
            angle[2].style.animation="angleStep1 .6s 1 1.8s";
        }
    }

    returnTop.onclick=function(){
        animate(obj,{scrollTop:0});
    }
}