$(function(){
	~function(){
		//登陆点击
		$('.logins').eq(0).on('click',function(){
			$('.login-box').css({'display':'block'});
			$('.mark').css({'display':'block'});
		})
		//登陆框中的点击
		$('.close').eq(0).on('click',function(){
			$('.login-box').css({'display':'none'});
			$('.mark').css({'display':'none'});
		});
		$('.list-btn').on('click',function(){
			$('.login-box').css({'display':'none'});
			$('.mark').css({'display':'none'});
		})
		//项目中鼠标划入后的效果
		$('.chanpin-nav li').on('mouseenter',function(){
			$(this).addClass('actk').siblings().removeClass('actk');
			if($(this).index()<5){
				$('.bian-left2').css({'width':$(this).index()*100+118});
			}else if($(this).index()==5){
				$('.bian-left2').css({'width':634});
			}else{
				$('.bian-left2').css({'width':776});
			}
			$('.chanpins').eq($(this).index()).addClass('chanp').siblings().removeClass('chanp');
		});
		var timer=null;
		var alis=document.getElementsByClassName('alis')
		var n=0;
		var onoff=true;
		//案例小轮播，鼠标划入，清空定时器
		$('.ali-content').on('mouseenter',function(){
			clearInterval(timer)
		})
		//案例小轮播，鼠标划出，开启定时器
		$('.ali-content').on('mouseleave',function(){
			timer=setInterval(automove,5000);
		})
		timer=setInterval(automove,5000);
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
		
		var timer1=null;
		var navLis=document.getElementsByClassName('nav-lis');
		var navList=document.getElementsByClassName('nav-list')[0];
		var hos=document.getElementsByClassName('hos');
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
					$('.nav-lis').eq(k).slideDown(500).siblings().slideUp(500);
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
			$('.nav-lis').on('mouseenter',function(){
				clearTimeout(timer1)
			})
			$('.nav-lis').on('mouseleave',function(){
				$('.nav-lis').slideUp();
			})
		})
		//定时器和点击按钮，封装函数1
		function automove(){
			n++;
			if(n%2!=0){
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
			n--;
			if(n%2!=0){
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
})
