window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

	// Параметризация:
	//n – неотрицательное целое число.
	
	// База рекурсии:
	// для n =0 факториал равен 1.
	
	// Декомпозиция:
	// n!=(n-1)!*n.
	
	
	function factor(n) {
		if (n < 0) return undefined;
		if (n == 0) return 1;
		return factor(n-1)*n;
	}
	
	console.log(factor(5))
	
	
	
}