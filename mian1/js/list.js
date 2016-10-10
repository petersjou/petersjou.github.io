//list的js
~function(){
	$('.lg-btn').on('click',function(){
		$('#login-wrap').css({'display':'block'});
	})
	autoh();
	function autoh(){
		if($('.cent-right').outerHeight()>400){
			$('.cent-left').css({'height':$('.cent-right').outerHeight()-10})
		}else{
			$('.cent-left').css({'height':400})
		}
	}
	
	//点击左边导航栏的按钮
	$('.xm-lis li').on('click',function(){
		$(this).addClass('act1').siblings().removeClass('act1');
		$('.cent-val').eq($(this).index()).addClass('act8').siblings().removeClass('act8');
		$('.home-last a').html($(this).html());
		autoh();
	})
	//点击h4上的改变
	$('.xm-list .xm-head h4').on('click',function(){
		$(this).parents('.xm-list').addClass('act7').siblings('.xm-list').removeClass('act7');
		$('.home-ls a').html($(this).html());
		autoh();
		//点击左边导航栏的按钮
		$(this).parents('.xm-list').children('.xm-lis li').on('click',function(){
			$(this).addClass('act1').siblings().removeClass('act1');
			$('.cent-val').eq($(this).index()).addClass('act8').siblings().removeClass('act8');
			$('.home-last a').html($(this).html());
			autoh();
		})
	})
}()
