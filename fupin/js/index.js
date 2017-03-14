/**
 * Created by yuhaisong on 2017/3/14.
 */
$(document).ready(function(){
    //顶部鼠标划入事件
    $('.tab li').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //轮播图
    turnImg();
    function turnImg(){
        var timer1=null;
        timer1=setInterval(automove1,4000);
        var nub1=0;
        var nub2=0;
        var imglen=$('.banner li').length;
        //鼠标划入之后清空定时器，划出之后重新开启定时器
        $('.banner').hover(function(){
            clearInterval(timer1)
        },function(){
            clearInterval(timer1)
            timer1=setInterval(automove1,4000)
        });
        //点击下一个按钮
        $('.next').on('click',function(){
            automove1()
        })
        //点击上一个按钮
        $('.prev').on('click',function(){
            automove2()
        })
        //往下一个走的封装函数
        function automove1(){
            nub1++;
            if(nub1>imglen-1){
                nub1=0;
            }
            nub2=nub1;
            $('.banner li').eq(nub1).fadeIn(500).siblings().fadeOut(500);
        }
        //往上一个走的封装函数
        function automove2(){
            nub2--;
            if(nub2<0){
                nub2=imglen-1;
            }
            nub1=nub2;
            $('.banner li').eq(nub2).fadeIn(500).siblings().fadeOut(500);
        }
    }
});