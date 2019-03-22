window.addEventListener("load", main, false);

function main(){
	var x, y, v, m, q, r, angle, xc, yc;
	var flag = false;
	var ctx = cycle.getContext("2d");					//Двумерный канвас
	angle = Math.PI;
	console.log(angle);
	function run(){
		ctx.clearRect(x-5, y + 495, x+5, y + 505);
		x = xc + r * Math.cos(angle);
		y = yc + r * Math.sin(angle);
		angle += Math.PI * 0.01;
		console.log(x, y);
		ctx.strokeStyle = "#00ff00";
		ctx.lineWidth = "3";
		ctx.beginPath();
		ctx.arc(x, y + 500, 3, 0, 2 * Math.PI);
		ctx.stroke();
	}
	b1.onclick = function(){
		x = parseFloat(document.getElementById('x0').value);
		y0 = parseFloat(document.getElementById('y0').value);
		v = parseFloat(document.getElementById('v0').value);
		m = parseFloat(document.getElementById('m').value);
		q = parseFloat(document.getElementById('q').value);
		B = parseFloat(document.getElementById('b').value);
		r = m * v / (q * B);
		xc = x + r + 700;
		yc = y0;
		console.log(r);
		f = setInterval(run, 5);
	}
	
	b2.onclick = function(){
		clearInterval(f);	
	}
}