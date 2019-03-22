window.addEventListener("load", program_code, false);
function program_code() {
	var x0 = 0;
	var x1 = Math.PI;
	var n = 100;
	
	
	// Интегрирование методом прямоугольников
	// сначала написать со встроенной функцией sin
	// потом изменить аргументы функции на (func, x0, x1, n)
	function integrate_rect(x0, x1, n) {
		var dx = (x1-x0)/n;
		var s = 0;
		for (var i = 0; i < n; i++) {
			var x = x0+dx*(i + 0.5);
			s += Math.sin(x)*dx;
		}
		return s;
	}
	
	// Интегрирование методом трапеций
	// пусть напишут сами
	function integrate_trapeze(func, x0, x1, n){
		var dx = (x1-x0)/n;
		
		var s = 0;
		for (var i = 0; i < n; i++) {
			var xL = x0 + dx*i
			var xR = xL + dx;
			var fL = func(xL);
			var fR = func(xR);
			var S = dx*(fL+fR)/2
			s += S;
		}
		return s;
	}
	
	// Интегрирование методом Монте-Карло
	// В классе/дз
	function integrate_monte_carlo(func, a, b, N){
		var N_under = 0;
		for (var i = 0; i < N; i++) {
			var x = Math.random()*(b-a) + a;
			var y = Math.random();
			if (func(x) > y) N_under++;
		}
		var s_monte = N_under/N*(1*(b-a))
		return s_monte;
	}
	
	
	var rez_rect = integrate_rect(x0, x1, n)
	var rez_trapeze = integrate_trapeze(Math.sin, x0, x1, n)
	var rez_monte_carlo = integrate_monte_carlo(Math.sin, x0, x1, 100000)
	console.log(rez_rect)
	console.log(rez_trapeze)
	console.log(rez_monte_carlo)

}