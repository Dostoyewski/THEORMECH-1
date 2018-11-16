window.addEventListener("load", main, false);

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main(){
	var ctx = field.getContext("2d");					//Двумерный канвас
	var k = [];											//Массив с шарами
	var xmin = 3.14 * -3;								//Начальный х
	var xmax = 3.14 * 3;								//Конечный х
	var n = 50;											//Количество шагов
	var x = 50*xmin + 700;								//x
	var step = (xmax - xmin) / n;						//Шаг
	var koef = 20;										//Коэффициент увеличения
	class Sphere{
		constructor(x, y, r, color){
			this.x = x;
			this.y = y;
			this.r = r;
			this.color = color;
		}
		
		draw(){
			ctx.strokeStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			ctx.stroke();
		}
	}
	ctx.lineWidth = "2";
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(0, 500);
	ctx.lineTo(1400, 500);
	ctx.moveTo(700, 0);
	ctx.lineTo(700, 1000);
	ctx.stroke();
	ctx.strokeStyle = "#00ff00";
	ctx.lineWidth = "1";
	
	for(var i = 0; i < n; i ++){
		k[i] = new Sphere(x, 50 * Math.sin(xmin) + 500, getRandomInt(5, 50), "#0000ff");
		var b = getRandomInt(1, 6);										//Цвет
		console.log(b);
		switch(b){
			case 1:
				k[i].color = "#ff0000";
				break;
			case 2:
				k[i].color = "#00ff00";
				break;
			case 3:
				k[i].color = "#0000ff";
				break;
			case 4:
				k[i].color = "#715283";
				break;
			case 5:
				k[i].color = "#625817";
				break;
			case 6:
				k[i].color = "#254238";
				break;
		}
		console.log(k[i].x, ' ', k[i].y, ' ',k[i].r, ' ', step, k[i].color);
		x += 50*step;
		k[i].draw();
		xmin += step;
	}
}