window.addEventListener("load", main, false);

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function main(){
	var ctx = field.getContext("2d");					//Двумерный канвас
	var cycle = 0;										//Количество циклов
	var chich = [];										//Массив с хищниками
	var gertv = [];										//Массив с жертвами
	var lowe = 0;
	var sheep = 0;
	var num = 0;
	var hungry = true;
	var replicate;
	var c = createArray(350, 250);
	for(var i = 0; i < 350; i++){
		for(var j = 0; j < 250; j++){
			c[i][j] = 0;
		}
	}

	class Animal{
		constructor(x, y, lifetime, num){
			this.x = x;									//Координата по Х
			this.y = y;									//Координата по У
			this.lifetime = lifetime;					//Циклы с момента еды/размножения
			this.num = num;
		}
		
		move(dir){										//Класс животного, перемещение с прорисовкой
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(this.x*4, this.y*4, 4, 4);		//Уничтожение предыдущего расположения
			c[this.x][this.y] = 0;
			if(this.lifetime < 0){
				this.lifetime = 0;
				hungry = true;
			}
			if(hungry){
				if(this.y - 1 >= 0 && c[this.x][this.y - 1] == 2) dir = 0;
				if(this.x + 1 <= 348 && c[this.x + 1][this.y] == 2) dir = 1;
				if(this.y + 1 <= 348 && c[this.x][this.y + 1] == 2) dir = 2;
				if(this.x - 1 >= 0 && c[this.x - 1][this.y] == 2) dir = 3;
			}
			switch(dir){								//Выбор направления движения
				case 0:
					if(this.y > 0 && c[this.x][this.y - 1] != 1){
						this.y -= 1;
						break;
					}
				case 1:
					if(this.x + 1 <= 348){
						if(c[this.x + 1][this.y] != 1){
							this.x += 1;
							break;
						}
					}
				case 2:
					if(this.y + 1 <= 348){
						if(c[this.x][this.y + 1] != 1){
							this.y += 1;
							break;
						}
					}
				case 3:
					if(this.x > 0 && c[this.x - 1][this.y] != 1){
						this.x -= 1;
						break;
					}
			}
			if(c[this.x][this.y] == 2) hungry = false;
			ctx.fillStyle = "#ff0000";
			ctx.fillRect(this.x*4, this.y*4, 4, 4);
			c[this.x][this.y] = 1;
		}
		init(){
			ctx.fillStyle = "#ff0000";
			ctx.fillRect(this.x*4, this.y*4, 4, 4);
		}
	}
	
	class Sheep extends Animal{
		constructor(x, y, lifetime, num){
			super(x, y, lifetime, num);
			this.isalife = true;
		}
		move(dir){										//Класс животного, перемещение с прорисовкой
		if(this.isalife){
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(this.x*4, this.y*4, 4, 4);		//Уничтожение предыдущего расположения
			if(c[this.x][this.y] == 1){
				console.log('Уничтожение', this.x, this.y);
				num++;
				gertv.splice(this.num - 1, 1);
				sheep--;
				this.isalife = false;
			}
			switch(dir){								//Выбор направления движения
				case 0:
					if(this.y > 0 && c[this.x][this.y - 1] == 0){
						this.y -= 1;
						break;
					}
				case 1:
					if(this.x + 1 <= 348){
						if(c[this.x + 1][this.y] == 0){
							this.x += 1;
							break;
						}
					}
				case 2:
					if(this.y + 1 <= 348){
						if(c[this.x][this.y + 1] == 0){
							this.y += 1;
							break;
						}
					}
				case 3:
					if(this.x > 0 && c[this.x - 1][this.y] == 0){
						this.x -= 1;
						break;
					}
			}
			if(this.isalife){
				ctx.fillStyle = "#0000ff";
				ctx.fillRect(this.x*4, this.y*4, 4, 4);
				c[this.x][this.y] = 2;
			}
			else c[this.x][this.y] = 0;
		}
		if(this.lifetime == 0){
			if(this.x >= 1 && c[this.x - 1][this.y] == 0){
				sheep++;
				gertv.push(new Sheep(this.x - 1, this.y, replicate, sheep));
				console.log('Sheep replicated');
			}
			this.lifetime = replicate;
		}
		}
		init(){
			ctx.fillStyle = "#0000ff";
			ctx.fillRect(this.x*4, this.y*4, 4, 4);
		}
	}
	
	function run(){															//основная функция моделирования
	for(var j = 0; j < 2; j++){
		for(var i = 0; i < lowe; i++){
			let a = getRandomInt(0, 3);
			chich[i].move(a);
			chich[i].lifetime--;
		}
	}
		for(var i = 0; i < sheep - num; i++){
			let a = getRandomInt(0, 3);
			console.log(a);
			gertv[i].move(a);
			gertv[i].lifetime--;
		}
	}
	var flag;
	b1.onclick = function(){
		ctx.clearRect(0, 0, 1400, 1000);
		flag = setInterval(run, 150);
	}
	b2.onclick = function(){
		clearInterval(flag);
		alert('Моделирование остановлено!');
		console.log(sheep, ' ', num);
		console.log(c);
	}
	gen.onclick = function(){
		lowe = document.getElementById('lowe').value;
		sheep = document.getElementById('sheep').value;
		replicate = document.getElementById('replicate').value;
		die = document.getElementById('die').value;
		for(var i = 0; i < lowe; i++){
			var k = getRandomInt(0, 349);
			var m = getRandomInt(0, 249);
			if(c[k][m] != 1){
				chich[i] = new Animal(k, m, 10, i);
				chich[i].init();
				c[k][m] = 1;
			}
			else i--;
		}
		for(var i = 0; i < sheep; i++){
			var k = getRandomInt(0, 349);
			var m = getRandomInt(0, 249);
			if(c[k][m] != 1){
				gertv[i] = new Sheep(k, m, replicate, i);
				gertv[i].init();
				c[k][m] = 2;
			}
			else i--;
		}
	}
	clear.onclick = function(){
		ctx.clearRect(0, 0, 1400, 1000);
	}
}