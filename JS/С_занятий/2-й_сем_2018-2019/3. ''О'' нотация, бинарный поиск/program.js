window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext("2d");
	var w = canvas_example.width;
	var h = canvas_example.height;
	// бинарный поиск
	function binary_search(M, element) {
		var min = 0;
		var max = M.length-1;
		
		while (min <= max) {
			var mid = Math.floor((min+max)/2);
			if (element==M[mid]) return mid;
			else if (element < M[mid]) max = mid-1;
			else if (element > M[mid]) min = mid+1;
			else return -1;
		}
		return -1;
	}
	
	// считывание файла
	fileinput.onchange = function readSingleFile(e) {
		var f = e.target.files[0];
		if (f) {
			var r = new FileReader();
			r.onload = function(env) {
				var content = env.target.result;
				process_file(content);
			}
			r.readAsText(f);
		} else {
			console.error("ERROR READING FILE");
		}
	}
	
	// обработка файла 
	function process_file(content){
		var strings = content.split("\n");
		for (var i = 0; i < strings.length; i++) {
			strings[i] = strings[i].trim();
		}
		
		var t1 = performance.now();
		for (var i = 0; i < 1000; i++){
			binary_search(strings, "Петров");
		}
		var t2 = performance.now();
		
		console.log("binary search took <"+(t2-t1)/1000+"> ms");
		
	}
	
	
	
	
	
}