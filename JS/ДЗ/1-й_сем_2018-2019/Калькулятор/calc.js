window.addEventListener("load", main, false);

function main(){
	var stack = [];											//стек целых чисел
	var dstack = [];										//стек десятичных дробей
	var dtype = true;										//флаг записи данных (целые/десятичные)
	var size = 0;											//размер стека целых чисел
	var dsize = 0;											//размер стека десятичных дробей
	var operation = 0;										//флаг типа операции
	var a = ' ';											//переменная вывода данных в span
	var b = 0;												//первое число
	var c = 0;												//второе число
	var weit = false;										//флаг продолжения действий с предыдущим числом
	var mem = 0;											//переменная памяти
	var shift = false;
	b0.onclick = function(){								//кнопка 0
		if(weit){											//продолжение операций с предыдущим числоом
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){											//флаг записи данных
			if(a != ' 0'){									//проверка на ноль в строке, чтобы не было '00.5'
				stack.push(0);								//стек целыч чисел
				size += 1;
				a += '0';
				out.innerHTML = a;
			}
		}
		else{
			if(a != ' 0'){
				dstack.push(0);								//стек десятичных дробей
				dsize += 1;
				a += '0';
				out.innerHTML = a;
			}
		}
	}
	b1.onclick = function(){								//кнопка 1
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(1);
			size += 1;
			a += '1';
			out.innerHTML = a;
		}
		else{
			dstack.push(1);
			dsize += 1;
			a += '1';
			out.innerHTML = a;
		}
	}
	b2.onclick = function(){								//кнопка 2
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(2);
			size += 1;
			a += '2';
			out.innerHTML = a;
		}
		else{
			dstack.push(2);
			dsize += 1;
			a += '2';
			out.innerHTML = a;
		}
	}
	b3.onclick = function(){								//кнопка 3
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(3);
			size += 1;
			a += '3';
			out.innerHTML = a;
		}
		else{
			dstack.push(3);
			dsize += 1;
			a += '3';
			out.innerHTML = a;
		}
	}
	b4.onclick = function(){								//кнопка 4
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(4);
			size += 1;
			a += '4';
			out.innerHTML = a;
		}
		else{
			dstack.push(4);
			dsize += 1;
			a += '4';
			out.innerHTML = a;
		}
	}
	b5.onclick = function(){								//кнопка 5
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(5);
			size += 1;
			a += '5';
			out.innerHTML = a;
		}
		else{
			dstack.push(5);
			dsize += 1;
			a += '5';
			out.innerHTML = a;
		}
	}
	b6.onclick = function(){								//кнопка 6
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(6);
			size += 1;
			a += '6';
			out.innerHTML = a;
		}
		else{
			dstack.push(6);
			dsize += 1;
			a += '6';
			out.innerHTML = a;
		}
	}
	b7.onclick = function(){								//кнопка 7
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(7);
			size += 1;
			a += '7';
			out.innerHTML = a;
		}
		else{
			dstack.push(7);
			dsize += 1;
			a += '7';
			out.innerHTML = a;
		}
	}
	b8.onclick = function(){								//кнопка 8
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(8);
			size += 1;
			a += '8';
			out.innerHTML = a;
		}
		else{
			dstack.push(8);
			dsize += 1;
			a += '8';
			out.innerHTML = a;
		}
	}
	b9.onclick = function(){								//кнопка 9
		if(weit){
			weit = false;
			b = 0;
			size = 0;
			dsize = 0;
		}
		if(dtype){
			stack.push(9);
			size += 1;
			a += '9';
			out.innerHTML = a;
		}
		else{
			dstack.push(9);
			dsize += 1;
			a += '9';
			out.innerHTML = a;
		}
	}
	b10.onclick = function(){								//кнопка 10
		var z = ' ';
		var m = 0;
		console.log(size);
		for(var i = 0; i < size; i++){						//Считывание числа из целого стека
			var e = stack.pop();
			c += e * Math.pow(10, i);
		}
		for(var i = dsize; i >= 1; i--){					//Считывание числа из десятичного стека
			var e = dstack.pop();
			c += e * Math.pow(10, -i);
		}
		size = 0;
		dsize = 0;
		console.log(c);
		switch(operation){
			case 1:											//сложение
				m = b + c;
				console.log('+');
				break;
			case 2:
				m = b - c;									//вычитание
				console.log('-');
				break;
			case 3:
				m = b * c;									//умножение
				console.log('*');
				break;
			case 4:
				m = b / c;									//деление
				console.log('/');
				break;
			case 5:
				m = Math.sqrt(b);							//корень
				console.log('sqrt');
				break;
			case 6:
				m = Math.pow(b, c);							//произвольная степень
				console.log('pow');
				break;
			case 7:
				m = Math.pow(b, 2);							//квадрат
				console.log('pow2');
				break;
			case 8:
				m = Math.pow(b, 3);							//куб
				console.log('pow3');
				break;
			case 9:
				m = mem;
				break;
			case 10:
				m = -b;
				break;
			case 11:
				if(shift){
					m = Math.asin(b);
					console.log('asin');
				}
				else{
					m = Math.sin(b);
					console.log('sin');
				}
				break;
			case 12:
				if(shift){
					m = Math.acos(b);
					console.log('acos');
				}
				else{
					m = Math.cos(b);
					console.log('cos');
				}
				break;
			case 13:
				if(shift){
					m = Math.atan(b);
					console.log('atan');
				}
				else{
					m = Math.tan(b);
					console.log('tan');
				}
				break;
			case 14:
				m = Math.round(b);
				console.log('round');
				break;
			case 15:
				m = Math.floor(b);
				console.log('floor');
				break;
			case 16:
				m = Math.ceil(b);
				console.log('ceil');
				break;
		}
		z = String(m);
		console.log(m);
		out.innerHTML = z;
		b = m;
		weit = true;										//флаг продолжения операций
		m = 0;
		a = ' ';
		c = 0;
		operation = 0;
	}
	b11.onclick = function(){								//сложение
		operation = 1;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
	}
	b12.onclick = function(){								//вычитание
		operation = 2;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
	}
	b13.onclick = function(){								//умножение
		operation = 3;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
	}
	b14.onclick = function(){								//деление
		operation = 4;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
	}
	b15.onclick = function(){								//точка десятичная
		a += '.';
		out.innerHTML = a;
		dsize = 0;
		dtype = false;
	}
	b16.onclick = function(){								//полное обнуление
		a = ' ';
		b = 0;
		c = 0;
		size = 0;
		dsize = 0;
		operation = 0;
		mem = 0;
		console.log("Обнулено!");
		out.innerHTML = a;
	}
	b17.onclick = function(){								//корень
		operation = 5;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b18.onclick = function(){								//степень
		operation = 6;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
	}
	b19.onclick = function(){								//квадрат
		operation = 7;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b20.onclick = function(){								//куб
		operation = 8;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b21.onclick = function(){								//память+
		operation = 0;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		mem += b;
		console.log(mem);
		dtype = true;
		b10.onclick();
	}
	b22.onclick = function(){								//память-
		operation = 0;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		mem -= b;
		console.log(mem);
		dtype = true;
		b10.onclick();
	}
	b23.onclick = function(){								//память выход
		operation = 9;
		console.log(size);
		a = ' ';
		dtype = true;
		b10.onclick();
	}
	b24.onclick = function(){								//смена знака
		operation = 10;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b25.onclick = function(){								//синус
		operation = 11;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b26.onclick = function(){								//косинус
		operation = 12;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b27.onclick = function(){								//тангенс
		operation = 13;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b28.onclick = function(){								//шифт
		shift = !shift;
		if(shift) shiftout.innerHTML = 'ON';
		else shiftout.innerHTML = 'OFF';
		console.log(shift);
	}
	b29.onclick = function(){								//округление
		operation = 14;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b30.onclick = function(){								//округление вниз
		operation = 15;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
	b31.onclick = function(){								//округление вниз
		operation = 16;
		console.log(size);
		if(weit == false){
			for(var i = 0; i < size; i++){					//Считывание числа из стека
				var e = stack.pop();
				b += e * Math.pow(10, i);
			}
			for(var i = dsize; i >= 1; i--){				//Считывание числа из десятичного стека
				var e = dstack.pop();
				b += e * Math.pow(10, -i);
			}
			size = 0;
			dsize = 0;
		}
		weit = false;
		a = ' ';
		console.log(b);
		dtype = true;
		b10.onclick();
	}
}