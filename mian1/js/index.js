~function(){
	$('.lg-btn').on('click',function(){
		$('#login-wrap').css({'display':'block'});
	})
	//首页banner
	var xlen=600;
	var lens=$('.banner ul li').length;
	$('.banner ul').css({'width':xlen*lens});
	$('.banner ul li').each(function(index,domEle){
	   $('.banner ul li').eq(index).css({'left':xlen*index});
	});
	var html='';
	for(var i=0;i<lens;i++){
		if(i==0){
			html='<li class="act1"></li>';
		}else{
			html+='<li></li>';
		}
		
	};
	$('.banner ol').html(html);
	
	var timer11=null;
	var nv=0;
	timer11=setInterval(move,4000);
	$('.banner').on('mouseenter',function(){
		clearInterval(timer11);
	});
	$('.banner').on('mouseleave',function(){
		clearInterval(timer11);
		timer11=setInterval(move,4000);
	});
	$('.banner ol li').on('mouseover',function(){
		clearInterval(timer11);
		nv=$(this).index();
		$(this).addClass('act1').siblings().removeClass('act1');
		$('.banner ul').stop().animate({'left':-xlen*nv},800);
	})
	$('.banner ol li').on('mouseout',function(){
		clearInterval(timer11);
		timer11=setInterval(move,4000);
	})
	
	//右边的新闻动态
	$('.xin-li li').on('mouseenter',function(){
		$(this).addClass('act2').siblings().removeClass('act2');
		$('.xinwen .xin-list').eq($(this).index()).addClass('act3').siblings().removeClass('act3');
	})
	
	//项目简介
	//鼠标划入li后的横线效果
	$('.cent-ul li').on('mouseover',function(){
		$(this).addClass('act4').siblings().removeClass('act4');
		$('.cent-lis').eq($(this).index()).addClass('act5').siblings().removeClass('act5');
		$('.cent-ts').css({'left':112+$(this).index()*110})
		$('.cent-hx').css({'width':110+$(this).index()*110})
	})
	//banner中轮播图的封装函数
	function move(){
		nv++;
		if(nv>=lens){
			nv=0;
		}
		$('.banner ol li').eq(nv).addClass('act1').siblings().removeClass('act1');
		$('.banner ul').stop().animate({'left':-xlen*nv},1000)
	}
	
		//经典案例
		var timer0=null;
		var alis=$('.alis');
		var nq=0;
		var onoff=true;
		timer0=setInterval(automove,5000);
		//案例小轮播，鼠标划入，清空定时器
		$('.ali-content').on('mouseover',function(){
			clearInterval(timer0);
		})
		//案例小轮播，鼠标划出，开启定时器
		$('.ali-content').on('mouseout',function(){
			clearInterval(timer0);
			timer0=setInterval(automove,5000);
		})
		//点击上一个按钮
		$('.prev').on('click',function(){
			if(!onoff)return;
			onoff=false;
			automove();
		});
		//点击下一个按钮
		$('.next').on('click',function(){
			if(!onoff)return;
			onoff=false;
			 auto();
		});
	//move-top
		var timer9=null;
		$('.fix-li3').on('click',function(){
			clearInterval(timer9);
			var offtop=parseInt($(document).scrollTop());
			timer9=setInterval(function(){
				offtop-=30;
				if(offtop<0){
					offtop=0;
					console.log(offtop)
					clearInterval(timer9);
				}
				window.scrollTo(0,offtop);
			},16)
		})
	//定时器和点击按钮，封装函数1
		function automove(){
			nq++;
			console.log(nq)
			if(nq%2!=0){
				alis[1].style.left='1020px';
				nTween(alis[0], {'left':-1020}, 1000, 'linear',function(){
					alis[0].style.left='1020px';
					onoff=true;
				});
				nTween(alis[1], {'left':0}, 1000, 'linear');
			}else{
				alis[0].style.left='1020px';
				nTween(alis[1], {'left':-1020}, 1000, 'linear',function(){
					alis[1].style.left='1020px';
					onoff=true;
				});
				nTween(alis[0], {'left':0}, 1000, 'linear');
			}
		}
		//点击按钮，封装函数2
		function auto(){
			nq--;
			if(nq%2!=0){
				alis[1].style.left='-1020px';
				nTween(alis[0], {'left':1020}, 1000, 'linear',function(){
					alis[0].style.left='-1020px';
					onoff=true;
				});
				nTween(alis[1], {'left':0}, 1000, 'linear');
			}else{
				alis[0].style.left='-1020px';
				nTween(alis[1], {'left':1020}, 1000, 'linear',function(){
					alis[1].style.left='-1020px';
					onoff=true;
				});
				nTween(alis[0], {'left':0}, 1000, 'linear');
			}
		}
}()
