~function(){
	$('.cont-left .cont-bts').on('click',function(){
		$(this).addClass('hov1').siblings().removeClass('hov1');
		$('.cont-right .user-lis').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'})
	})
}()
