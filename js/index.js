window.onload=function() {

    //切换轮播部分
    var imgs = document.getElementsByClassName("banner_con");
    var leftBut = document.getElementsByClassName("leftbotn")[0];
    var rightBut = document.getElementsByClassName("rightbotn")[0];
    var list=document.getElementsByClassName("banner_list")[0];
    var lists=list.children;
    var num = 0;

    for(var i=0;i<lists.length;i++){
        lists[i].name=i;
        lists[i].onmouseover=function(){
            for(var j=0;j<imgs.length;j++){
                imgs[j].style.opacity=0;
                //lists[j].className="";
            }
            imgs[this.name].style.opacity=1;
            //this.className="list_active";
            num=this.name;
        }
    }
    function qiehuan(type){
        type=type||"right";
        if(type=="right"){
            num++;
            if(num>=imgs.length){
                num=0;
            }
        }
        if(type=="left"){
            num--;
            if(num<=-1){
                num=imgs.length-1;
            }
        }

        for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity=0;
        }
        animate(imgs[num],{opacity:1});
    }

    rightBut.onclick=function(){
        qiehuan("right");
    }
    leftBut.onclick=function(){
        qiehuan("left");
    }
    var leftbot1=document.getElementById("leftbot1");
    var rightbot1=document.getElementById("rightbot1");
    leftBut.onmouseover=function(){
        //alert(2)
        leftbot1.src="img/leftbotn1.png";
    }
    leftBut.onmouseout=function(){
        leftbot1.src="img/leftbotn.png";
    }
    rightBut.onmouseover=function(){
        rightbot1.src="img/rightbotn1.png";
    }
    rightBut.onmouseout=function(){
        rightbot1.src="img/rightbotn.png";
    }

      //返回顶部
    document.documentElement.scrollTop = 1;
    var obj = document.documentElement.scrollTop?document.documentElement:document.body;
    var returnTop=document.getElementsByClassName("returnTop")[0];
    returnTop.onclick=function(){
        animate(obj,{scrollTop:0});
    }





}


