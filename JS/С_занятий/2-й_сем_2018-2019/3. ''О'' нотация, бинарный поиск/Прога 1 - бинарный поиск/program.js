window.addEventListener("load", program_code, false);
function program_code() {

	// Бинарный поиск
	function binary_search(M, element) {
		var min = 0;
		var max = M.length - 1;
		
		while (min <= max){
			var i = Math.floor((max + min)/2);
			
			if (M[i] < element) {
				min = i + 1;
			} else if (M[i] > element) {
				max = i - 1;
			} else {
				return i;
			}
		}
		return -1;
	}
	
	M = [-2, -1, 0, 1, 2, 3, 4, 9]
	console.log(binary_search(M, 0))
	
}