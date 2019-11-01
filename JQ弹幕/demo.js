$(function(){
    //1.绑定按钮事件
    $('#btn1').click(function(){
            //2.生成彩色的心形图
            var num = Math.floor(Math.random()*4+1)//随机新的随机数
            var index =$(".demo").children("img").length;//0

            //3.把心形图追加到页面上
            $(".demo").append(" <img src=''/>");//向页面追加一个空的图片 1
            $("img:eq("+index+")").attr("src","image/"+num+".png");

            //4.让心形图动起来(随意飘)
            //随机位置
            var rand = parseInt(Math.random()*900);
            $("img").animate({
                bottom:"800px",
                opacity:"0",
                left:rand
            },4000);


    })


})