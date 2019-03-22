window.addEventListener("load", main, false);

function main(){
	console.log("Hello world!!!");
	var a = 21*5;
	var b = "2";
	console.log(a+b);
	b = parseInt(b);			//Преобразование в число
	console.log(a+b);
	a = Math.max(5, 17);		//Вывод максимального числа
	console.log(a);
	console.log(Math.sin(0));
	console.log(Math.cos(0));
	console.log(Math.sin(Math.PI * 57.3));
	var c = 0;
	some_name.innerHTML = c;
	click.onclick = function(){			//onclick - нажатие, onchange - смена состояния, oninput - ввод данных
		c += 1;
		some_name.innerHTML = c;
		//console.log(c);
	}
	click2.onclick = function(){
		c --;
		some_name.innerHTML = c;
		//console.log(c);
	}
	range.oninput = function(){
		
	}
}