$(function(){
    var boxDom = $("#boxDom");
    var top,right;
    //获取元素的宽度并返回一个整数
    var pageWidth = parseInt($(document).width());
    
    
    //获取元素的高度并返回一个整数
    var pageHeight = parseInt($(document).height());
    
    
    //对按钮bind绑定 绑定click事件 bind备选元素添加一个事件或多个事件的处理程序 并规定事件发生时的函数 on比bind多一个子类选择器
    $("#btn").bind("click",auto);//按钮绑定方法
    document.onkeydown = function(){
        if(event.keyCode == 13){
            auto();
        }
    }
   
    function auto(){
        //获取输入的字符串
        var str = $(".text").val();
       
        //生成一个元素
        var creatSpan = $("<span class='string'></span>");
       
        //给元素赋值
        creatSpan.text(str);
        
        //为了页面友好 清空刚输入text值
        $(".text").val("");
        
        //生成元素一个随机的位置 为了使用每一条弹幕出现在屏幕上不同的位置
        top = Math.floor(Math.random()*pageHeight);
        
        //样式的位置
        creatSpan.css({"top":top,"right":-400,"color":getRandomColor()});
        boxDom.append(creatSpan);
        
        
        //元素在dom当中运动起来
        //首先有一个span 只让最后一个动起来
        var spandom = $("#boxDom>span:last-child");//找到最后一个span //又加300 就是要在原有的宽度上+300 走出去
        spandom.animate({"right":pageWidth+300},9000,function(){
            $(this).remove();
        });
    }
    
    
    //定义一个可以生产随机颜色的方法
    function getRandomColor(){
        var colorArr = ['1','2','3','4','5','6','7','8','9'];
        var color = '';
        for( var i = 0; i<6; i++){
            color += colorArr[Math.floor(Math.random()*10)];
        }
        //返回一个颜色
        return "#"+color;
    }

})