~function(){
	var timer=null;
	var timer1=null;
	$('.news-title span').on('mouseover',function(){
		console.log()
		$('.ju-lis').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'});
		$(this).addClass('lis-hov').siblings().removeClass('lis-hov');
	})
	$('.nav li').on('mouseenter',function(){
		clearTimeout(timer);
		clearInterval(timer1);
		var n=0;
		var q=$(this).index();
		timer1=setInterval(function(){
			n++;
			if(n>4){
				n=0;
				$('.nav-lis').eq(q).css({'display':'block'}).siblings().css({'display':'none'})
				clearInterval(timer1);
			}
		},60)
		
	});
	
	$('.nav li').on('mouseleave',function(){
		clearTimeout(timer);
		clearInterval(timer1);
		timer=setTimeout(function(){
			$('.nav-lis').css({'display':'none'})
		},200)
		$('.nav-lis').on('mouseenter',function(){
			clearTimeout(timer);
		})
		$('.nav-lis').on('mouseleave',function(){
			$('.nav-lis').css({'display':'none'})
		})
	})
}()
