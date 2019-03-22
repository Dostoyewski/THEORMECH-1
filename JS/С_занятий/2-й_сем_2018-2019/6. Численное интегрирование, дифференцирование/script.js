window.addEventListener("load", main, false);
function main() {
	var ctx = canv.getContext("2d");
	var w = canv.width;
	var h = canv.height;
	
	function f(x) {
		return (Math.sin(x))
	}
	
	function diff(f, x, dx) {
		return (f(x+dx)-f(x))/dx
	}
	
	function integrate(f, dx, a, b, q){
		var res = 0;
		if (q=="left"){
			for (var x = a; x<=b; x+=dx){
				res += f(x)*dx;
			}
			return res
		}
		if (q=="right"){
			for (var x = a; x<=b; x+=dx){
				res += f(x+dx)*dx;
			}
			return res
		}
		if (q=="middle"){
			for (var x = a; x<=b; x+=dx){
				res += f(x+dx/2)*dx;
			}
			return res
		}
	}
	ctx.translate(w/2, h/2);
	
	function draw (f, a, b){
		//axis
		ctx.beginPath();
		ctx.moveTo(-w/2, 0);
		ctx.lineTo(w/2, 0);
		ctx.moveTo(0, w/2);
		ctx.lineTo(0, -w/2);
		
		for(var i = a; i < b; i+=0.01){
			ctx.moveTo(i*100, -f(i)*100);
			ctx.lineTo((i+0.1)*100, -f(i + 0.1) * 100);
		}		
		
		//for(var i = a; i < b; i+=0.1){
		//	ctx.strokeRect(i * 50, -f(i) * 50, 5, f(i) * 50);
		//}
		
		dx = 0.1;
		a = 0;
		b = Math.PI;
		n = Math.round((b-a)/dx)
		for (var i =0; i<n; i++){
			x = (b+a)/2+(b-a)/2*ch(i,n);
			x_ = (b+a)/2+(b-a)/2*ch(i+1,n);
			ctx.strokeRect(x * 100, -f((x_+x)/2) * 100, (x_-x)*100, f((x_+x)/2) * 100);
		}

		ctx.stroke();
		console.log(integrate(f, 0.1, a, b, 'left'));
	}
	
	function ch(i, n){
		return Math.cos((2*i+1)*Math.PI/(2*n+2))
	}
	draw(f, 0, Math.PI);
	
}