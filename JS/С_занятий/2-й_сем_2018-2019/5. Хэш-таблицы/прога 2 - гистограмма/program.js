window.addEventListener("load", program_code, false);
function program_code() {
	var M = [];
	var n = 100000;
	
	// генерация данных
	for (var i = 0; i < n; i++) {
		var s = 0;
		for (var j = 0; j < 6; j++) {
			s += Math.random();
		}
		M.push(s/6)
	}

	// подсчет, сколько чисел к какому диапазону относятся
	var HASH = {}
	for (var i = 0; i < n; i++) {
		var val = M[i];
		// Math.floor:
		// 0.4465 -> 0.4
		// 0.78 -> 0.7
		var key = Math.floor(val*10)/10;
		
		if (HASH[key] == undefined) HASH[key] = 1;
		else HASH[key]++;
	}
	
	// колокол будет явно виден в выводе, но особо интересующиеся студенты могут его нарисовать
	console.log(HASH);
}