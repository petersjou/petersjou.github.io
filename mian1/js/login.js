//关于login的js,以及忘记密码的js
~function(){
	$('.oul1').attr({'id-data':true})
	$('.oul2').attr({'id-data':true})
	$('.oul3').attr({'id-data':true})
	$('.username').on('input',function(){
		jiance($(this))
	})
	$('.username').on('blur',function(){
		nonull($(this));
	})
	$('.password').on('input',function(){
		jiance($(this))
	})
	$('.password').on('blur',function(){
		nonull($(this));
		var rel=/\w{5,17}$/;
		var val=$.trim($(this).val());
		if(val.length>18||!rel.test(val)||val.length<6){
			$(this).attr({'id-data':false});
			$(this).siblings().addClass('false');
		}else{
			$(this).attr({'id-data':true});
			$(this).siblings().removeClass('false').addClass('true');
		}
	})
	$('.submit').on('click',function(){
		for(var i=0;i<$('.oul1').length;i++){
			if($.trim($('.oul1').eq(i).val())==''){
				$('.oul1').eq(i).siblings().addClass('false');
				$('.oul1').eq(i).focus()
				return false
			}else if($('.oul1').eq(i).attr('id-data')=='false'){
				$('.oul1').eq(i).siblings().addClass('false');
				$('.oul1').eq(i).focus()
				return false
			}
		}
	})
	$('.btn1').on('click',function(){
		$('.lg-html').eq(0).removeClass('act9');
		$('.lg-html').eq(1).addClass('act9');
	})
	$('.btn2').on('click',function(){
		var onoff=true;
		for(var i=0;i<$('.oul2').length;i++){
			if($.trim($('.oul2').eq(i).val())==''){
				$('.oul2').eq(i).siblings().addClass('false');
				$('.oul2').eq(i).focus();
				onoff=false
				return 
			}else if($('.oul2').eq(i).attr('id-data')=='false'){
				$('.oul2').eq(i).siblings().addClass('false');
				$('.oul2').eq(i).focus()
				onoff=false
				return 
			}
		}
		if(onoff){
			$('.lg-html').eq(1).removeClass('act9');
			$('.lg-html').eq(2).addClass('act9');
		}
	})
	$('.btn3').on('click',function(){
		var onoff=true;
		for(var i=0;i<$('.oul3').length;i++){
			if($.trim($('.oul3').eq(i).val())==''){
				$('.oul3').eq(i).siblings().addClass('false');
				$('.oul3').eq(i).focus()
				onoff=false
				return 
			}else if($('.oul3').eq(i).attr('id-data')=='false'){
				$('.oul3').eq(i).siblings().addClass('false');
				$('.oul3').eq(i).focus()
				onoff=false
				return 
			}
		}
		if(onoff){
			console.log($('.oul3').eq(0).val()!=$('.oul3').eq(1))
			if($('.oul3').eq(0).val()!=$('.oul3').eq(1).val()){
				$('.oul3').eq(0).siblings().addClass('false');
				$('.oul3').eq(1).siblings().addClass('false');
				$('.oul3').eq(0).focus();
			}else{
				$('.lg-html').eq(2).removeClass('act9');
				$('.lg-html').eq(3).addClass('act9');
			}
		}
	})
	$('.btn4').on('click',function(){
		window.location.href='http://www.baidu.com';
	})
	$('.login-close').on('click',function(){
		
		$('#login-wrap').css({'display':'none'});
	})
}()