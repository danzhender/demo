			/*需求分析
			用户点击上一张（prev）或者下一张按钮（next），pic中对应的序号li淡入其他的li淡出
			元素：.prev .next  ul.pic>li
			事件：点击
			行为：序号  下表 index  
				  淡入  淡出 fadeIn fadeOut

			*/
			var $pic = $('#wrap ul.pic li');
			var $lib = $('#wrap ul.lib li');
			var $next = $('#wrap ul.btn li.next');
			var $prev = $('#wrap ul.btn li.prev');
			var $wrap = $('#wrap ul');
			var $lib1 = $('#wrap ul.lib li.lib1');
			var $lib2 = $('#wrap ul.lib li.lib2');
			var $lib3 = $('#wrap ul.lib li.lib3');
			var $lib4 = $('#wrap ul.lib li.lib4');
			var $lib5 = $('#wrap ul.lib li.lib5');
			var index = -1;
			var length =$pic.length;

			init();
			function init(argument) {
				  	$pic.eq(0).fadeIn().siblings().fadeOut();
				  }
			
			add = function (){
				
				index++;
				index%=length;
				play();
				timer = setTimeout(add,2000);
			};

			add();
			$wrap.mouseover(function(){
				clearTimeout(timer);
			});
			$wrap.mouseout(function(){
				clearTimeout(timer);
				timer = setTimeout(add,2000);
			});		
			$next.click(function(){
				index++;
				index%=length;/*求模运算*/
				play();
			});

			$prev.click(function(){
				index--;
				index=index<0 ? length-1:index;/*三目运算*/
				play();
			});
			
			$lib1.mouseover(function(){
				index=0;
				play();
			});
			$lib2.mouseover(function(){
				index=1;
				play();
			});
			$lib3.mouseover(function(){
				index=2;
				play();
			});
			$lib4.mouseover(function(){
				index=3;
				play();
			});
			$lib5.mouseover(function(){
				index=4;
				play();
			});												
			function play(){
				$pic.eq(index).fadeIn().siblings().fadeOut();
				$lib.eq(index).addClass('on').siblings().removeClass();				
			}