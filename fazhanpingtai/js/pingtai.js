$(function(){
	~function(){
		$('.logins').eq(0).on('click',function(){
			$('.login-box').css({'display':'block'});
			$('.mark').css({'display':'block'});
		})
		$('.close').eq(0).on('click',function(){
			$('.login-box').css({'display':'none'});
			$('.mark').css({'display':'none'});
		});
		var n=0;
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
		})
	}()
})
