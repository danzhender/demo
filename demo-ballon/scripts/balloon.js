/*需求分析
	1. 动态生成dom节点  初始化
		1.生成几个
		2.动态生成节点,添加
		3.初始化气球位置
			纵向 浏览器高度
	2.气球移动
	3.点击  爆炸
	4.爆炸动画以及项目完善


	*/
var wW=window.innerWidth;
var wH=window.innerHeight;
var bZ=160;
var balloons=[];//节点缓存池
var death=0;
var score=0;

var num = 10;//初始化
init(num);
(function add(){
	move();
	setTimeout(arguments.callee,50);
}());
		(function(){
			var fen=document.getElementById('sco');
			document.addEventListener('click',function(e){
		if(e.target.className.toLowerCase()==='balloon'){
			var ele = e.target;
			if(ele.offsetWidth===bZ){
			//ele.parentNode.removeChild(ele);
			ele.boom(function(){
				this.parentNode.removeChild(this);
			}.bind(ele));

			balloons.splice(balloons.lastIndexOf(ele),1);
			init(1);
			score++;
			fen.innerText=`得分：${score}`;
			
			}
			}
			},
		false);
		}());
//组件气球动画

Node.prototype.boom = function(cb){
	
	
		if(this.offsetWidth<10){

			clearTimeout(timer);	

			cb&&cb();			
			
			return false;
		}

		this.speed++;
		this.style.width = this.offsetWidth-15+'px';
		this.style.height = this.offsetHeight-15+'px';
		this.style.top = this.offsetTop-this.speed+'px';
		var timer=setTimeout(arguments.callee.bind(this,cb),50);  //不明白



};



function init(num){
	var fragment=document.createDocumentFragment();
	for(i=0;i<num;i++){
	var oBalloon= document.createElement('div');
	var RandomX = ~~(Math.random()*wW)-bZ;
	RandomX=Math.abs(RandomX);
	oBalloon.classList.add('balloon');
	oBalloon.style.top=wH  + 'px';
	oBalloon.style.left=RandomX  +'px';
	oBalloon.speed=~~(Math.random()*10)+1;
	balloons.push(oBalloon);
	fragment.appendChild(oBalloon);}
	document.body.appendChild(fragment);
}


function move(){
	//var balloons=document.querySelectorAll('.balloon');
	for(var i=0,len=balloons.length;i<len;i++){
		balloons[i].style.top=balloons[i].offsetTop-balloons[i].speed+'px';
//		if(balloons[i].offsetTop<0){
//			console.log('cba');
//			death++;}
//		if (death>9) {
//			alert(score,"game over");
//			return false;
		}
//		if (balloons[i].style.top< -bZ+'px') {          	//无法判断准确值
//			console.log('cba');
//			balloons[i].parentNode.removeChild(balloons[i]);
//			balloons.splice(balloons.lastIndexOf(balloons[i]),1);
//			init(1);
//		}
	}
//}

