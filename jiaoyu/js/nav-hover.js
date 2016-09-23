~function(){
	var timer=null;
	var timer1=null;
	
	$('.nav li').on('mouseenter',function(){
		clearTimeout(timer);
		clearInterval(timer1);
		var n=0;
		var q=$(this).index();
		timer1=setInterval(function(){
			n++;
			if(n>4){
				n=0;
				$('.nav-lis').eq(q).slideDown(600).siblings().slideUp(600)
				clearInterval(timer1);
			}
		},60)
		
	});
	
	$('.nav li').on('mouseleave',function(){
		clearTimeout(timer);
		clearInterval(timer1);
		timer=setTimeout(function(){
			$('.nav-lis').slideUp(500)
		},200)
		$('.nav-lis').on('mouseenter',function(){
			clearTimeout(timer);
		})
		$('.nav-lis').on('mouseleave',function(){
			$('.nav-lis').slideUp(500)
		})
	})
}()
