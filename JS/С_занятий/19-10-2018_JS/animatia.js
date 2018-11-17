window.addEventListener("load", main, false);
function main() {
	//Это код Иры, так что просьба не негодовать относительно некорректного оформления кода. Комментарий: Ф. Кондратенко
	var ctx = canvas_example.getContext("2d");
	var h=canvas_example.height;
	var w=canvas_example.width;
	console.log(h,w);
	var fps=30;
	var dt=1/fps;
	
	var x=w/2;
	var y=h/2;
	var r=25;
	//var v_x=50;
	//var v_y=10;
	
	var v=50;
	var alpha=Math.random()*2*Math.PI;
	var v_x=v*Math.cos(alpha);
	var v_y=v*Math.sin(alpha);
	console.log(v_x, v_y);
	function Draw(){
		ctx.clearRect(0,0,w,h);
		var red=Math.round(Math.random()*255);
		var blue=Math.round(Math.random()*255);
		var green=Math.round(Math.random()*255);
		ctx.fillStyle = "rgb("+red+","+blue+","+green+")";
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2*Math.PI);
		ctx.fill();
	
		
	}
	function Phys(){
		//интегрирование методом эйлера
		x=x+v_x*dt;
		y=y+v_y*dt;
		//граничные условия
	if(x>=(w-r)){
		v_x=v_x*-1;
	} else
	if(x<=r){
		v_x=v_x*-1;
	}
	if(y>=(h-r)){
		v_y=v_y*-1;
	} else
	if(y<=r){
		v_y=v_y*-1;
	}
	
	
	}
	function Control(){
		Phys();
		Draw();
		
	}
	setInterval(Control, 100/fps);
	for (var i=0; i<10; i++) {
	if (i%2==0){
		break;
	}
	console.log(i);
	
	}
	for (var i=1; i<10; i++) {
	if (i%2==0){
		continue;
	}
	console.log(i);
	
	}
	
	
	
	
	
}