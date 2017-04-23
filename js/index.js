window.onload=function() {

    //jzbanner部分
    var jzimgs=document.getElementsByClassName("bannerTu");
    var jzlists=document.getElementsByClassName("jzbanner_list")[0].getElementsByTagName("li");
    var jzbanbox=document.getElementsByClassName("jzBanner")[0];
    var jzleftbut=document.getElementsByClassName("leftbut")[0];
    var jzrightbut=document.getElementsByClassName("rightbut")[0];
    var kuan=document.getElementsByClassName("bannerTu")[0].offsetWidth;
    //alert(kuan);

    for(var i=1;i<jzimgs.length;i++){
        jzimgs[i].style.left=kuan+"px";
    }

    var now=0;
    var next=0;
    function move(){
        next++;
        if(next>=jzimgs.length){
            next=0;
        }
        jzimgs[next].style.left=kuan+"px";
        jzimgs[now].style.left="0px";
        animate(jzimgs[now],{left:-kuan});
        animate(jzimgs[next],{left:0});
        jzlists[now].className="";
        jzlists[next].className="list_active";
        now=next;
    }

    function leftmove(){
        next--;
        if(next<=-1){
            next=jzimgs.length-1;
        }
        jzimgs[next].style.left=-kuan+"px";
        jzimgs[now].style.left="0px";
        animate(jzimgs[now],{left:kuan});
        animate(jzimgs[next],{left:0});
        jzlists[now].className='';
        jzlists[next].className="list_active";
        now=next;
    }
    var t1=setInterval(move,3000);

    jzbanbox.onmouseover=function(){
        clearInterval(t1);
        jzleftbut.style.display="block";
        jzrightbut.style.display="block";
    }
    jzbanbox.onmouseout=function(){
        t1=setInterval(move,3000);
        jzleftbut.style.display="none";
        jzrightbut.style.display="none";
    }
    jzleftbut.onclick=function(){
        leftmove();
    }
    jzrightbut.onclick=function(){
        move();
    }
    for(var i=0;i<jzlists.length;i++){
        jzlists[i].index=i;
        jzlists[i].onclick=function(){
            next=this.index;
            jzimgs[next].style.left=kuan+"px";
            jzimgs[now].style.left="0px";
            animate(jzimgs[now],{left:-kuan});
            animate(jzimgs[next],{left:0});
            jzlists[now].className="";
            jzlists[next].className="list_active";
            now=next;
        }
    }

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


