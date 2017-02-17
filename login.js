
//以下代码实现了在 X,Y 轴旋转的动画效果
function start(){

	var div1 = document.getElementById('div1');

	div1.addAnimation('rotation', 1000, 5000, 5000);
	
	div1.startAnimations();
}


//以下代码实现了在 X 轴旋转的动画效果
function start1(){

	var div2 = document.getElementById('div2');

	div2.addAnimation('rotationX', 1000, 5000, 5000);
	
	div2.startAnimations();
}

//以下代码实现了在 颜色渐变的动画效果
function start2(){

	var div3 = document.getElementById('div3');

	div3.addAnimation('alpha', 0, 1, 500);
	
	div3.startAnimations();
}
