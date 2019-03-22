window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;


	var text = "В идеальном случае, когда заранее известны все пары ключ-значение, достаточно легко реализовать идеальную хеш-таблицу, в которой время поиска будет постоянным (используется идеальная хеш-функция, которая определяет положения в таблице по целым значениям и без столкновений)."

	text = text.toLowerCase();
	var H = {};
	for (var i = 0; i < text.length; i++) {
		var ch = text[i];
		if ((ch in H) == false) H[ch] = 1;
		else H[ch]++;
	}
	console.log(H)
	
	
	// если студентам интересно - можно еще сортировку показать, она немного специфична
	/*-----------
	var keys = Object.keys(H);
	keys.sort(function(a, b) {
		return -(H[a] - H[b])
	});

	// можно вывести по старинке через массив, но удобнее так:
	for (k of keys) {			// EcmaScript6 
		console.log(k, H[k]);
	}
	
	// еще есть такой вариант, работает в браузерах постарше
	// keys.forEach(function(k) {
	   // console.log(k, H[k]);
	// });
	-----------*/
	
	
}