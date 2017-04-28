//解决IE8类名兼容问题
function getClass(classname,father){
    //当第二个参数不传时，默认为document
    father = father || document;
    //判断该浏览器是否支持getElementsByClassName方法
    if(father.getElementsByClassName){
        //支持执行这一句
        return father.getElementsByClassName(classname);
    }else{
        //获取father下面所有的标签
        var all = father.getElementsByTagName("*");
        //创建一个新数组保存获取的元素
        var newarr = [];
        //遍历
        for(var i = 0; i < all.length;i++){
            //比较传入的参数和获取到的元素
            if(chaRep(classname,all[i].className)){
                newarr.push(all[i]);
            }
        }
        return newarr;
    }
}
//检查传入的参数和获取到的元素是否有相同的
function chaRep(val,string){
    //将获取的字符串按空格转换为数组 v/
    var arr = string.split(" ");
    for(var i in arr){
        if(val == arr[i]){
            return true;
        }
    }
    return false;
}
//var one=getClass("bannerTu");
//    alert(one.length);