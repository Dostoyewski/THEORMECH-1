// в данной программе вычисляется производная методом конечных разностей

window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

	// Для начала нарисуем синус
	var n = 1000;
	ctx.strokeStyle = "#f00";
	ctx.beginPath();
	ctx.moveTo(0, 0);
	for (var i = 0; i < n; i++) {
		var x = i/n* Math.PI*2
		ctx.lineTo(i/(n-1)*w, h/2-Math.sin(x)*h/2)
	}
	ctx.stroke();
	
	// Функция расчета производной
	// показать формулу T'
	var dx = 0.01;		// шаг. если значение dx очень мало - глючит рисование
	function Dx(f, x){
		// return (f(x+dx) - f(x))/dx;		// правая конечная разность
		// return (f(x) - f(x-dx))/dx;		// левая конечная разность
		return (f(x+dx/2) - f(x-dx/2))/dx;	// центральная разность
	}
	
	// Рисование производной
	ctx.strokeStyle = "#f0f";
	ctx.beginPath();
	ctx.moveTo(0, 0)
	for (var i = 0; i < n; i += dx) {
		var x = i/n* Math.PI*2
		ctx.lineTo(i/(n-1)*w, h/2-Dx(Math.sin, x)*h/2)
	}
	ctx.stroke();
	
	
	// Функция расчета 2-ой производной
	// показать формулу T''
	function D2x(f, x){
		// return (f(x+2*dx) - 2*f(x+dx) + f(x))/dx/dx;		// правая конечная разность (от правой)
		// return (f(x) - 2*f(x-dx) + f(x-2*dx))/dx/dx;		// левая конечная разность (от левой)
		return (f(x+dx) - 2*f(x) + f(x-dx))/dx/dx;	// центральная разность (от центральной)
	}
	// пусть дома (или в классе) выведут вторую правую разность
	
	// Рисование 2-ой производной
	ctx.strokeStyle = "#00f";
	ctx.beginPath();
	ctx.moveTo(0, 0)
	for (var i = 0; i < n; i += dx) {
		var x = i/n* Math.PI*2
		ctx.lineTo(i/(n-1)*w, h/2-D2x(Math.sin, x)*h/2)
	}
	ctx.stroke();
}