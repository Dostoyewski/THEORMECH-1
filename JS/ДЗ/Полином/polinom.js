window.addEventListener("load", main, false);

function main(){
	var ctx = graph.getContext("2d");									//Двумерный канвас
 	ctx.lineWidth = "2";
	ctx.strokeStyle = "#000000";
	b1.onclick = function(){
		ctx.clearRect(0, 0, 1400, 1000);
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
		var a = [];
		a[0] = document.getElementById('a').value;						//Коэффициенты a-h
		a[1] = document.getElementById('b').value;
		a[2] = document.getElementById('c').value;
		a[3] = document.getElementById('d').value;
		a[4] = document.getElementById('e').value;
		a[5] = document.getElementById('f').value;
		a[6] = document.getElementById('g').value;
		a[7] = document.getElementById('h').value;
		var step = parseFloat(document.getElementById('step').value);	//Шаг
		var min = document.getElementById('min').value;					//Xmin
		var max = document.getElementById('max').value;					//Xmax
		var koef = parseFloat(document.getElementById('koef').value);	//Koef
		var kol = 0;
		var x;
		var y = 0;
		ctx.beginPath();
		for(var i = 0; i < Math.abs(parseFloat(max)-parseFloat(min) + 1); i += step){
			x = parseFloat(min) + parseFloat(i);
			for(var j = 0; j < 8; j++){									//Реализовал счетчик, чтобы не возится с коэффициентами
				y += parseFloat(a[j] * Math.pow((parseFloat(min)+i), 7 - j));
			}
			if(i == 0){
				ctx.moveTo(700 + x*koef,500 - y*koef);					//Перемещение в начало пути
			}
			ctx.lineTo(700 + x*koef,500 - y*koef);						//Черчение
			y = 0;
		}
		ctx.stroke();
		ctx.beginPath();												//Координатные оси
		ctx.lineWidth = "2";
		ctx.strokeStyle = "#000000";
		ctx.moveTo(700 + 1*koef, 495);
		ctx.lineTo(700 + 1*koef, 505);
		ctx.moveTo(695, 500 - 1 * koef);								//единичный отрезок
		ctx.lineTo(705, 500 - 1 * koef);
		ctx.stroke();
		ctx.font="20px Georgia";
		ctx.fillText("x",1380,520);										//названия осей
		ctx.fillText("y",680,20);
	}
}
