
	var timer1=null;
	var timer2=null;
	var o=0;
	$('.hos').on('mouseenter',function(){
		clearInterval(timer2);
		clearTimeout(timer1);
		var k=$(this).index('.hos')
		timer2=setInterval(function(){
			o++;
			if(o==4){}
			if(o>5){
				$('.nav-lis').eq(k).slideDown(400).siblings().slideUp(400);
				o=0;
				clearInterval(timer2);
			}
		},50)
	})
	
	$('.hos').on('mouseleave',function(){
		clearTimeout(timer1);
		clearInterval(timer2);
		var q=$(this).index('.hos');
		timer1=setTimeout(function(){
			$('.nav-lis').slideUp();
		},400)
		$('.nav-lis').eq(q).on('mouseenter',function(){
			console.log(1)
			clearTimeout(timer1)
		})
		$('.nav-lis').eq(q).on('mouseleave',function(){
			$('.nav-lis').slideUp();
		})
	})

