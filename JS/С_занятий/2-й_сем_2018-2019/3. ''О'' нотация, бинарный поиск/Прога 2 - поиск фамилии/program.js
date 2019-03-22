window.addEventListener("load", program_code, false);
function program_code() {
	var M = [-2, -1, 0, 1, 2, 3, 5, 7, 10];
	
	// Бинарный поиск
	function binary_search(M, element) {
		var min = 0;
		var max = M.length-1;
		
		while (min <= max) {
			var mid = Math.floor((max+min)/2);
			
			if (element == M[mid]) return mid;
			else if (element < M[mid]) max = mid - 1;
			else if (element > M[mid]) min = mid + 1;
			else return -1;
		}
		return -1;
	}
	
	// var MF = ["Абрамов", "Амбросова", "Мурина", "Шепелкина"];
	// console.log(binary_search(MF, "Шепелкина"));
	
	// Считывание файла
	function readSingleFile(e) {
		var f = e.target.files[0];
		
		if (f) {
			var r = new FileReader();
			r.onload = function(env) {
				var content = env.target.result;
				process_file(content)
			}
			r.readAsText(f);
		} else {
			console.log("ERROR READING FILE")
		}
	}
	fileinput.addEventListener('change', readSingleFile, false);
	
	// Поиск фамилии в файле
	function process_file(content) {	
		//  рассказать про символы переноса \r\n \n \r \n\r	
		var strings = content.split("\n");
		for (var i = 0; i < strings.length; i++) {
			strings[i] = strings[i].trim();
		}
		
		var t1 = performance.now();
		for (var i = 0; i < 100; i++) {
			binary_search(strings, "Пономарев")
		}
		var t2 = performance.now();
		console.log("Binary search took " + (t2 - t1)/100 + ' ms')
	}
}