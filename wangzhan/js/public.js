jQuery(function(){
//选项卡滑动切换通用
jQuery(function(){jQuery(".hoverTag .chgBtn").hover(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".hoverTag").find(".chgCon").eq(cutNum).fadeIn(200).siblings(".chgCon").hide()})})

//选项卡点击切换通用
jQuery(function(){jQuery(".clickTag .chgBtn").click(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".clickTag").find(".chgCon").eq(cutNum).fadeIn(200).siblings(".chgCon").hide()})})

$(".topWx").hover(function(){
	$(this).find(".topWxImg").stop(false,true).fadeIn(500);
	},function(){
	$(this).find(".topWxImg").stop(false,true).fadeOut(500);
	});
	
$(".m2Lmenu li:last").css("border","none");
$(".m2r_u1x1 li:nth-child(6n)").css({"margin-bottom":40});
$(".m2r_u1x1 li:last").css({"margin-bottom":25});

//导航
$(".navLi").hover(function(){
	$(this).find(".nav_a1").addClass("nav_a1Hover");
	$(this).find(".navSubMenu").stop(false,true).fadeIn(500);
	},function(){
    $(this).find(".nav_a1").removeClass("nav_a1Hover");
	$(this).find(".navSubMenu").stop(false,true).fadeOut(500);
	});

jQuery(".hmFocus").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
jQuery(".hmc1R").slide({});
jQuery(".subBox1L").slide({});
jQuery(".subBox4R").slide({});
jQuery(".subBox5").slide({});
jQuery(".subBox6L").slide({});
jQuery(".hmc4_ul").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});

autoShow();
window.onscroll=function(){
	autoShow();
}
$(".backTop").click(function(){
	$("html,body").animate({"scrollTop":0},500);
	});
	
$(".hmc1r_u1 li:last").css("background","none");
$(".hmc1r_u2 li:last").css("background","none");
$(".hmc1r_u2 li:lt(3)").find("a,span").addClass("cor_red");

$(".hmc2_u2 li").hover(function(){
	$(this).find("i").animate({"top":18},100);
	$(this).find("i").delay(100).animate({"top":30},100);
	$(this).find("i").delay(200).animate({"top":25},100);
	},function(){
		$(this).find("i").stop();
		});

$(".hmc3_aBox").hover(function(){
	$(this).find(".hmc3_icon2").stop(false,true).fadeIn(500);
	},function(){
		$(this).find(".hmc3_icon2").stop(false,true).fadeOut(500);
		});

})
//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});
function autoShow(){
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	  if (t > 0) { 
		$(".backTop").css({'display':'block'});	
	  } else { 
		$(".backTop").css({'display':'none'});	
	  } 
	
}