window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

	var a1 = -2.5;
	var d = 0.4;
	
	// арифметическая прогрессия
	// a(n) = a(n-1) + d
	
	function arifm(n, a1, d){
		if (n == 1) return a1;
		return arifm(n-1, a1, d) + d;
	}
	
	console.log(arifm(5, a1, d));
	
	// Продемонстрировать ошибку, возникающую при использовании слишком глубокой рекурсии.
	// Maximum call stack size exceeded
	// console.log(arifm(30000, a1, d));
}