window.addEventListener("load", main, false);
function main(){
	var ctx = example.getContext("2d");				//Двумерный канвас
	ctx.strokeRect(400,20,50,50);					//Прямоугольник
	ctx.lineWidth = "1";
	ctx.strokeStyle = "#ff0000";
	ctx.beginPath();								//Начало рисования
	ctx.moveTo(10,10);								//Передвижение курсора
	ctx.lineTo(180,40);								//Линия
	ctx.lineTo(0, 400);
	ctx.stroke();									//Прорисовка
	ctx.beginPath();
	ctx.moveTo(0, 400);
	for(var i = 0; i <= 600; i++){
		ctx.lineWidth = "5";
		ctx.strokeStyle = "#ffff00";
		ctx.lineTo(i, 400-Math.pow(0.05*i, 2));
		//ctx.moveTo(i, -(i^2)+500);
	}
	ctx.fillStyle = "#0000ff";						//Цвет заливки
	ctx.fillRect(400, 100, 50, 50);					//Залитый квадрат
	ctx.stroke();									//Прорисовка
	ctx.strokeStyle = "#0000ff";					
	ctx.beginPath();
	ctx.moveTo(500, 25);
	ctx.lineTo(580, 25);
	ctx.lineTo(500, 125);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "#0000ff";					
	ctx.beginPath();
	ctx.moveTo(500, 225);
	ctx.lineTo(580, 225);
	ctx.lineTo(500, 325);
	ctx.closePath();
	ctx.fill();										//Залитый треугольник
}
