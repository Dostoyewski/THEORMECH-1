window.addEventListener("load", main, false);

function main(){
	b1.onclick = function(){
		var ctx = field.getContext("2d");
		var x0 = Number(document.getElementById('x0').value);
		var y0 = Number(document.getElementById('y0').value);
		var v0 = Number(document.getElementById('v0').value);
		var alpha = Number(document.getElementById('alpha').value);
		var step = 0.1;
		var x = parseFloat(x0);
		var y;
		var last;
		var flag = false;
		ctx.clearRect(0, 0, 1400, 1000);
		console.log(x0, ' ', y0, ' ', v0, ' ', alpha);
		ctx.moveTo(x0, y0);
		ctx.beginPath();
		var m = 'A(' + x0 + ', ' + y0 + ')';
		ctx.fillText(m, x0 + 20, 980 - y0);
		while(y != 0){
			x += step;
			var vy = v0 * Math.cos(alpha / 57.3);
			y = y0 + Math.tan(alpha / 57.3)*(x - x0) - 10 * Math.pow((x - x0)/vy, 2) / 2;
			console.log(x,' ', y, ' ', vy);
			ctx.lineTo(x, 1000 - y);
			if(y < last && flag == false){
				let m = 'B(' + Math.round(x) + ', ' + Math.round(y) + ')';
				ctx.arc(x, 1000 - y, 5, 0, 2 * Math.PI);
				ctx.fillText(m, x, 980 - y);
				flag = true;
			}
			if(y < 0){
				console.log("Finish");
				let m = 'C(' + Math.round(x) + ', ' + Math.round(y) + ')';
				ctx.fillText(m, x - 20, 980 - y);
				break;
			}
			last = y;
		}
		ctx.stroke();
		ctx.beginPath();												//Координатные оси
		ctx.lineWidth = "2";
		ctx.strokeStyle = "#000000";
		ctx.moveTo(0, 1000);
		ctx.lineTo(1400, 1000);
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 1000);
		ctx.stroke();
		ctx.fillText("x",1380,980);										//названия осей
		ctx.fillText("y",20,20);
		for(var i = 0; i <= 1000; i += 10){
			ctx.beginPath();
			ctx.moveTo(0, i);
			ctx.lineTo(3, i);
			ctx.stroke();
		}
		for(var i = 0; i <= 1400; i += 10){
			ctx.beginPath();
			ctx.moveTo(i, 1000);
			ctx.lineTo(i, 997);
			ctx.stroke();
		}
		ctx.lineWidth = "1";
	}
}