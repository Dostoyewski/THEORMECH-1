window.addEventListener("load", main, false);

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArray(length){
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function main(){
	var ctx = document.getElementById("field").getContext("2d");					//Двумерный канвас
	var ctx1 = document.getElementById("graph").getContext("2d");
	var graph = new Graph(ctx1, "#ff0000", "#0000ff", 1400, 250, 2, 5);				//График
	graph.init();										//Инициализация графика
	var Num_g;											//Количество жертв
	var Num_x;											//Количество хищников
	var D_p;											//Период голодного существования
	var R_p;											//Период репликации
	var R_p_x;											//Период репликации хищников
	var Num_d_g = 0;									//Количество мертвых жертв
	var Num_d_x = 0;									//Количество мертвых хищников
	var MDX = [];										//Мертвяк хищников
	var MDG = [];										//Мертвяк жертв
	var f;												//Сеттер интервала
	var ID_start;										//Стартовый ID для новых жертв
	var XID_start;										//То же, но для хищников
	var MG = [];										//Массив с жертвами для обработки
	var MX = [];										//Массив с хищниками для обработки
	var xlimit;											//Ограничения по количеству существ
	var glimit;
	var c = createArray(350, 250);
	var field = new Field("#ff0000", "#0000ff", ctx, 350, 250);
	for(var i = 0; i < 350; i++){						//Обнуление массива
		for(var j = 0; j < 250; j++){
			c[i][j] = 0;
		}
	}
	
	gen.onclick = function(){							//Генерация поля
		Num_x = document.getElementById("lowe").value;
		Num_g = document.getElementById("sheep").value;
		ID_start = Num_g;
		XID_start = Num_x;
		D_p = document.getElementById("die").value;
		R_p = document.getElementById("replicate").value;
		R_p_x = document.getElementById("xreplicate").value;
		xlimit = document.getElementById("xlimit").value;
		glimit = document.getElementById("glimit").value;
		for(var i = 0; i < Num_x; i++){
			let x = getRandomInt(0, 349);
			let y = getRandomInt(0, 249);
			if(c[x][y] == 0){
				MX[i] = new Animal(x, y, D_p, i, R_p_x);
				c[x][y] = 1;
			}
			else i--;
		}
		for(var i = 0; i < Num_g; i++){
			let x = getRandomInt(0, 349);
			let y = getRandomInt(0, 249);
			if(c[x][y] == 0){
				MG[i] = new Sheep(x, y, R_p, i);
				c[x][y] = 2;
			}
			else i--;
		}
		console.log("Поле сгенерировано");
	}
	
	function run(){
		let n = 0;
		let m = 0;
		for(var i = 0; i < Num_x; i++){					//Обработка перемещения хищников
			let dir = getRandomInt(1, 4);
			MX[i].move(dir, c);
			if(!MX[i].alive){
				Num_d_x++;
				MDX[n] = MX[i].num;
				n++;
			}
			if(MX[i].replicate && Num_x <= xlimit){
				MX.push(new Animal(MX[i].sx, MX[i].sy, D_p, XID_start, R_p_x));
				console.log('Хищник ', MX[i].num, ' размножился ', XID_start);
				Num_x++;
				XID_start++;
				MX[i].replicate = false;
			}
		}
		for(var i = 0; i < Num_d_x; i++){				//Обработка мертвых хищников
			for(var j = 0; j < Num_x; j++){
				if(MDX[i] == MX[j].num){
					Num_x--;
					MX.splice(j, 1);
					MDX[i] = 0;
				}
			}
		}
		for(var i = 0; i < Num_g; i++){					//Обработка перемещения жертв
			let dir = getRandomInt(1, 4);
			MG[i].move(dir, c);
			if(!MG[i].alive){
				Num_d_g++;
				MDG[n] = MG[i].num;
				n++;
			}
			if(MG[i].replicate && Num_g <= glimit){
				MG.push(new Sheep(MG[i].sx, MG[i].sy, R_p, ID_start));
				console.log('Жертва ', MG[i].num, ' размножилась ', ID_start);
				Num_g++;
				ID_start++;
				MG[i].replicate = false;
			}
			//console.log(ID_start);
		}
		for(var i = 0; i < Num_d_g; i++){				//Обработка мертвых жертв
			for(var j = 0; j < Num_g; j++){
				if(MDG[i] == MG[j].num){
					Num_g--;
					MG.splice(j, 1);
					MDG[i] = 0;
				}
			}
		}
		Num_d_x = 0;
		Num_d_g = 0;
		field.draw(c);									//Отрисовка поля
		//console.log(c);
		//console.log(MX);
		//console.log(MDX);
		graph.draw(Num_x, Num_g);
		if(MX == 0){
			clearInterval(f);
			console.log('Остановлено');
			alert('Моделирование остановлено. Все хищники умерли');
		}
	}
	
	b1.onclick = function(){
		f = setInterval(run, 150);
	}
	
	b2.onclick = function(){
		clearInterval(f);
		console.log('Остановлено');
		alert('Моделирование остановлено');
	}
}