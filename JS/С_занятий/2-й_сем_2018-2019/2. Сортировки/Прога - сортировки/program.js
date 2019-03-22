window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

	var M1 = [3, 7, 5, 1, 2, 9, 4, 8, 6]
	var M2 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
	
	var n = 30;
	var M3 = [];
	for (var i = 0; i < n; i++) {
		M3[i] = Math.floor(Math.random()*n)
	}
	
	
	// сортировка пузырьком
	function sort_bubble(M) {
		for (var i = 0; i < M.length - 1; i++) {
			for (var j = 0; j < M.length - i; j++) {
				if (M[j] > M[j+1]) {
					var temp = M[j];
					M[j] = M[j+1];
					M[j+1] = temp;
				}
			}
		}
	}
	
	// сортировка пузырьком со счетчиком и остановкой
	function sort_bubble_s(M) {
		var if_n = 0;			// количество if-оф
		for (var i = 0; i < M.length - 1; i++) {
			var was_swap = false;
			for (var j = 0; j < M.length - i; j++) {
				if_n++;
				if (M[j] > M[j+1]) {
					was_swap = true;
					var temp = M[j];
					M[j] = M[j+1];
					M[j+1] = temp;
				}
			}
			if_n++;
			if (was_swap == false) break;
		}
		console.log("Сортировка пузырьком заняла %i if-оф", if_n)
	}
	
	// глупая сортировка
	function sort_stupid(M){
		// var if_n = 0;			// количество if-оф
		var i = 0;
		while (i < M.length-1) {
			// if_n++;
			if (M[i] > M[i + 1]) {
				var temp = M[i];
				M[i] = M[i+1];
				M[i+1] = temp;
				i = 0;
			}
			else i++;
		}
		// console.log("Глупая сортировка заняла %i if-оф", if_n)
	}
	
	// гномья сортировка
	function gnome_sort(M){
		// var if_n = 0;			// количество if-оф
		var i = 0;
		while (i < M.length-1) {
			// if_n++;
			if (M[i] > M[i + 1]) {
				var temp = M[i];
				M[i] = M[i+1];
				M[i+1] = temp;
				if (i > 0) i--;
			}
			else i++;
		}
		// console.log("Гномья сортировка заняла %i if-оф", if_n)
	}
	
	// сортировка вставками
	function insert_sort(M) {
		// var if_n = 0;			// количество if-оф
		var i = 0;
		var i_sorted = 0;
		while (i < M.length-1) {
			// if_n++;
			if (M[i] > M[i+1]) {
				var temp = M[i];
				M[i] = M[i+1];
				M[i+1] = temp;
				i--;
				if (i < 0) i = 1;
			} else {
				i++;
				if (i_sorted < i) i_sorted = i;
				if (i < i_sorted) i = i_sorted+1;
			}
		}
		// console.log("Сортировка вставками заняла %i if-оф", if_n)
	}
	
	
	console.time("sort_time");
	insert_sort(M1);
	console.timeEnd("sort_time");
	
	console.log(M1);
	
}