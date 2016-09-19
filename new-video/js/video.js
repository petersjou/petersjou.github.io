//关于video的js效果展示
'use strict'
window.onload=function(){
	 if (navigator.userAgent.indexOf("MSIE") > -1) {
            var ss = parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE") + 4, navigator.userAgent.indexOf("MSIE") + 8));
      }else{
      	 var ss='';
      }
	~function(){
		//关于loginbtn的按钮获取
		var loginBtn=getByClass('users')[0];
		var loginBox=getByClass('login-box')[0];
		var Close=getByClass('close')[0];
		var mark=getByClass('mark')[0];
		var cuowu=getByClass('cuowu')[0];
		var video=getByClass('video-win')[0];
		var contZhibo=getByClass('cont-zhibo')[0];
		var banUl=getByClass('ban-ul')[0];
		var banOl=getByClass('ban-ol')[0];
		var banner=getByClass('banner')[0];
		var five=getByClass('five')[0];
		var videolis=getByClass('vid-lists')[0];
		var shipin1=getByClass('shipin1')[0];
		var shipin2=getByClass('shipin2')[0];
		var vidplay=getByClass('vidplay')[0];
		var ali=banUl.getElementsByTagName('li');
		var oli=banOl.getElementsByTagName('li');
		var zhuans=getByClass('zhuans');
		var navBtn=getByClass('nav-bg');
		var contAll=getByClass('cont-all')
		var tiao=getByClass('tiao');
		var tiaol=getByClass('tiaol');
		var vip=getByClass('vip');
		var onoff=false;
		var timer;
		var nt=0;
		var user=[
			{username:'taizhouxueyuan',password:'taizhou'},
			{username:'jiaotongdaxue',password:'jiaotong'},
			{username:'beijingdaxue',password:'beijing'},
			{username:'qinghuadaxue',password:'qinghua'}
		];
		
		var url=['video/video1.mp4',
			'http://www.zhangxinxu.com/study/media/cat.mp4',
			'http://vjs.zencdn.net/v/oceans.mp4',
			'http://www.zhangxinxu.com/study/media/cat.mp4',
			'http://vjs.zencdn.net/v/oceans.mp4',
			'http://www.zhangxinxu.com/study/media/cat.mp4'
		];
		var imgsrc=[
			'img/shipin.jpg',
			'img/shipin.jpg',
			'img/shipin.jpg',
			'img/shipin.jpg',
			'img/shipin.jpg',
			'img/shipin.jpg'
		];
		var arr=[
			'《教育先锋1》',
			'《教育先锋2》',
			'《教育先锋3》',
			'《教育先锋4》',
			'《教育先锋5》',
			'《教育先锋6》'
		];
		var longarr=[
			'asbajksbckasbc《教育先锋1》',
			'asbajksbckasbc《教育先锋1》',
			'asbajksbckasbc《教育先锋1》',
			'asbajksbckasbc《教育先锋1》',
			'asbajksbckasbc《教育先锋1》',
			'asbajksbckasbc《教育先锋1》'
		];
		
		var datatime=[
			'2016-09-07',
			'2016-09-07',
			'2016-09-07',
			'2016-09-07',
			'2016-09-07',
			'2016-09-07'
		];
		var times=[
			'01:05:21',
			'01:05:21',
			'01:05:21',
			'01:05:21',
			'01:05:21',
			'01:05:21'
		];
		
		//写关于banner轮播图
		var timer1=null;
		var bn=0;
		timer1=setInterval(lunbo,2000);
		banner.onmouseenter=function(){
			clearInterval(timer1)
		}
		banner.onmouseleave=function(){
			timer1=setInterval(lunbo,2000);
		}
		//关于小图片的鼠标划入划出的效果
		for(var i=0;i<oli.length;i++){
			oli[i].index=i;
			oli[i].onmouseenter=function(){
				for(var j=0;j<oli.length;j++){
					removeClass(ali[j],'links')
					removeClass(oli[j],'actc')
				}
				bn=this.index;
				addClass(ali[bn],'links')
				addClass(oli[bn],'actc')
			}
			oli[i].onclick=function(){
				
			}
		}
		//轮播图的封装函数
		function lunbo(){
			removeClass(ali[bn],'links')
			removeClass(oli[bn],'actc')
			bn++;
			if(bn>ali.length-1){
				bn=0;
			}
			addClass(ali[bn],'links')
			addClass(oli[bn],'actc')
		}
		//点播/直播页面的高度设置
		winsize();
		function winsize(){
			var s=winWH();
			contZhibo.style.height=s.h-273+"px";
			
		};
		
		for(var i=0;i<navBtn.length;i++){
			navBtn[i].index=i;
			navBtn[i].onclick=function(){
				rmyemian();
				vidplay.style.display='none';
				removeClass(navBtn[nt], 'nav-bgs');
				contAll[nt].style.display='none';
				nt=this.index;
				addClass(navBtn[nt], 'nav-bgs');
				contAll[nt].style.display='block';
			}
		}
		//loginbtn的点击事件
		loginBtn.onclick=function(){
			loginBox.style.display='block';
			mark.style.display='block';
			if(onoff){
				cuowu.innerHTML="已经登陆";
			}
		};
		Close.onclick=function(){
			loginBox.style.display='none';
			mark.style.display='none';
			
		};
		vip[0].oninput=function(){
			cuowu.innerHTML='';
		}
		vip[1].oninput=function(){
			cuowu.innerHTML='';
		}
		vip[2].onclick=function(){
			clearTimeout(timer);
			if(onoff){
				cuowu.innerHTML="已经登陆";
				return;
			}
			cuowu.innerHTML='';
			if(vip[0].value==''||vip[1].value==''){
				cuowu.innerHTML="用户名或密码不能为空";
				onoff=false;
			}else if(!panduan(user,vip[0].value,vip[1].value)){
				cuowu.innerHTML="用户名或密码错误";
				onoff=false;
			}else if(panduan(user,vip[0].value,vip[1].value)){
				cuowu.innerHTML="登陆成功";
				cuowu.style.color="#0B9CCB";
				timer=setTimeout(function(){
					loginBox.style.display='none';
					mark.style.display='none';
				},800)
				onoff=true;
			};
		};
		for(var i=0;i<zhuans.length;i++){
			zhuans[i].index=i;
			zhuans[i].onclick=function(){
				if(!onoff){
					loginBox.style.display='block';
					mark.style.display='block';
					return false
				}else{
					return true
				}
			}
		}
		//首页中的六个点播视频
		shipin1.innerHTML=autot(imgsrc,times,arr,datatime);
		shipin2.innerHTML=autol(imgsrc,times,arr,datatime);
		setTimeout(function(){
			var tiao=getByClass('tiao');
			var tiaol=getByClass('tiaol');
			play(tiao);	
			play(tiaol);
		},1000)
		play(ali);
		play(oli);
		
		//关于是否显示播放器的函数
		function play(tiao){
			for(var i=0;i<tiao.length;i++){
				tiao[i].index=i;
				tiao[i].onclick=function(){
					if(!onoff){
						loginBox.style.display='block';
						mark.style.display='block';
					}else{
						for(var j=0;j<contAll.length;j++){
							contAll[j].style.display='none';
						}
						var bn=this.getAttribute('data-id');
						rmyemian();
						yemian(bn)
						vidplay.style.display='block';
						acs();
						
					};
				};
			};
		}
		function acs(){
			var tiao3=getByClass('tiao3');
			for(var j=0;j<tiao3.length;j++){
				tiao3[j].index=j;
				tiao3[j].onclick=function(){
					vidplay.style.display='none';
					rmyemian();
					var bn=this.getAttribute('data-id');
					yemian(bn);
					acs();
					vidplay.style.display='block';
				}
			}
		}
		//关于video页面
		function yemian(index){
			video.innerHTML=autom(url[index],arr[index]);
			videolis.innerHTML=auton2(imgsrc,index,times,arr,datatime,longarr);
			five.innerHTML=auton3(imgsrc,index,times,arr,datatime);
		}
		function rmyemian(){
			video.innerHTML='';
			videolis.innerHTML='';
			five.innerHTML='';
		}
		function autot(imgsrc,times,arr,datatime){
			var html='';
			for(var i=0;i<arr.length;i++){
				html+='<li class="tiao" data-id="'+ i +'">\
							<div class="ship">\
								<a  class="tiaozhuan" >\
									<img src="'+ imgsrc[i] +'" alt="" />\
								</a>\
								<span>'+ times[i] +'    &nbsp;</span>\
							</div>\
							<div class="shiptex">\
								<a  class="tiaozhuan">\
									<p>'+ arr[i] +'</p>\
								</a>\
								<div class="showtime">'+ datatime[i] +'</div>\
							</div>\
						</li>';
			}
			return html;
		}
		//lubo页面的fn
		function autol(imgsrc,times,arr,datatime){
			var html='';
			for(var i=0;i<arr.length;i++){
				html+='<li class="tiaol"  data-id="'+ i +'">\
							<div class="ship">\
								<a  class="tiaozhuan">\
									<img src="'+ imgsrc[i] +'" alt="" />\
								</a>\
								<span>'+ times[i] +'    &nbsp;</span>\
							</div>\
							<div class="shiptex">\
								<a  class="tiaozhuan">\
									<p>'+ arr[i] +'</p>\
								</a>\
								<div class="showtime">'+ datatime[i] +'</div>\
							</div>\
						</li>';
			}
			return html;
		}
		//播放器
		function autom(cnts,arr){
			var html='';
			if(ss!=''&&ss<9){
				html='<div class="vid-tex">'+ arr +'</div><embed src="'+ cnts +'" width="800" height="400"  type="application/x-shockwave-flash" play="false" autoplay="false" flashvars="autoplay=false&play=false" menu="false"  hidden="false" loop="false" />';
							
			}else{
				html='<div class="vid-tex">'+ arr +'</div><video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="800" height="400" poster="" data-setup="{}"><source src=" '+ cnts +' "  type="video/mp4" /></video>';
			}
		    return html;
		}
		//关于视频详情页的详情,auton3为下边5个视频跳接的接口
		function auton2(imgsrc,index,times,arr,datatime,longarr){
			var html='';
			html+='<div class="vid-s clear"><img src="'+ imgsrc[index] +'" /><div class="vid-tx"><span>'+ arr[index] +'</span><em>'+ datatime[index] +'</em>\
    				</div>\
    			</div>\
    			<p>'+ longarr[index] +'</p>';
		    return html;
		};
		function auton3(imgsrc,index,times,arr,datatime){
			var html='';
			for(var i=0;i<imgsrc.length;i++){
				if(i==index){
				}else{
					html+='<li class="tiao3" data-id="'+ i +'">\
    					<div class="vid-li1">\
							<a data-id="'+ i +'">\
								<img src="'+ imgsrc[i] +'" alt="" />\
							</a>\
							<span>'+ times[i] +'   &nbsp;</span>\
						</div>\
						<div class="vid-li2">\
							<a data-id="'+ i +'">\
								<p>'+ arr[i] +'</p>\
							</a>\
							<div>&nbsp;'+ datatime[i] +'</div>\
						</div>\
    				</li>'
				}
			}
			return html;
		}
	}();
	
	////////////////////////////////////////////////////////////////////
	function winWH() //函数：获取尺寸 
	{ 
		var s={};
		var winWidth='';
		var winHeight='';
		//获取窗口宽度 
		if (window.innerWidth){
			winWidth = window.innerWidth; 
		}else if ((document.body) && (document.body.clientWidth)){
			winWidth = document.body.clientWidth;
		} 
		//获取窗口高度 
		if (window.innerHeight){
			winHeight = window.innerHeight;
		}else if ((document.body) && (document.body.clientHeight)){
			winHeight = document.body.clientHeight;
		}
		//通过深入Document内部对body进行检测，获取窗口大小 
		if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){ 
			winHeight = document.documentElement.clientHeight; 
			winWidth = document.documentElement.clientWidth; 
		} 
		s={
			h:winHeight,
			w:winWidth
		}
		return s;
	} 
		
	
	function panduan(dataList,name,password) {
			var oks=false;
			for(var i=0;i<dataList.length;i++){
				if (dataList[i].username == name&&dataList[i].password==password) {
					oks=true;
				};
			}
			return oks;
	};
	function getByClass(sClass){
	    var aResult=[];
	    var aEle=document.getElementsByTagName('*');
	    /*正则模式*/
	    var re=new RegExp("\\b" + sClass + "\\b","g");
	    for(var i=0;i<aEle.length;i++){
	        /*字符串search方法判断是否存在匹配*/
	        if(aEle[i].className.search(re) != -1){
	            aResult.push(aEle[i]);
	        };
	    };
	    return aResult;
	};
	//添加class属性
	//obj:添加属性的对象
	//sclass：要添加的属性
	function addClass(obj, sClass) { 
	    var aClass = obj.className.split(' ');
	    if (!obj.className) {
	        obj.className = sClass;
	        return;
	    }
	    for (var i = 0; i < aClass.length; i++) {
	        if (aClass[i] === sClass) return;
	    }
	    obj.className += ' ' + sClass;
	}
	//删除class属性
	//obj: 要删除的对象
	//sclass:要删除的class属性
	function removeClass(obj, sClass) { 
	    var aClass = obj.className.split(' ');
	    if (!obj.className) return;
	    for (var i = 0; i < aClass.length; i++) {
	        if (aClass[i] === sClass) {
	            aClass.splice(i, 1);
	            obj.className = aClass.join(' ');
	            break;
	        }
	    }
	}
}
