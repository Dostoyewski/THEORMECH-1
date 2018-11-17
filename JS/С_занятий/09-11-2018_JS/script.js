window.addEventListener("load", main, false);

function main(){
	var ctx = field.getContext("2d");
	var h = field.height;
	var w = field.width;
	var fps = 60;
	var dx = 0.1;
	var dx_max = 100;
	var N = Math.round(dx_max/dx);;
	var x = [0];
	var y = [0];
	var k = 0;
	var xscale = 90;
	var yscale = 20;
	var ymax = 0, ymin = 0;
	var start_n = 0;
	
	function yx(x){
		return Math.sin(x) * Math.sqrt(x-0.5);
	}
	
	function draw(){
		ctx.clearRect(0, 0, w, h);
		ctx.beginPath();
		for(var i = start_n; i < x.length; i++){
			ctx.moveTo((x[i] - x[start_n]) * xscale, h/2 - y[i] * yscale);
			ctx.lineTo((x[i+1] - x[start_n]) * xscale, h/2 - y[i+1] * yscale);
		}
		ctx.stroke();
	}
	
	//for(var i = 0; i < N; i++){
	//	x[i] = i*dx;
	//	y[i] = yx(x[i]);
	//}
	
	function control(){
		if(k < N){
			xscale = w/x[k];
		}
		else{
			start_n++;
		}
		x[k+1] = (x[k] + dx);
		k++;
		y[k+1] = yx(x[k] + dx);
		if(y[k] > ymax) ymax = y[k];
		if(y[k] < ymin) ymin = y[k]
		//xscale = w/x[k];
		yscale = h/(ymax - ymin);
		draw();
	}
	
	setInterval(control, 1000/fps);
}