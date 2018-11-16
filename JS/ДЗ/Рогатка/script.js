window.addEventListener("load", main, false);

function main(){
	var ctx = field.getContext("2d");
	var h = field.height;
	var w = field.width;
	var flag = false;
	var r = 15;
	var x = 150, y = 150;
	var m, m0;
	var n = true;
	var vx, vy;
	var f;
	draw(x, y);
	
	function get_mouse_coords(e){													//Получение координат мыши
		var m = {};
		var rect = field.getBoundingClientRect();
		m.x = e.clientX - rect.left;
		m.y = e.clientY - rect.top;
		return m;
	}
	
	function draw(x, y){															//Отрисовка
		ctx.clearRect(0, 0, w, h);
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2*Math.PI);
		if(flag){
			ctx.moveTo(m0.x, m0.y);
			ctx.lineTo(x, y);
			length = Math.sqrt(Math.pow(m0.x - x, 2) + Math.pow(m0.y - y, 2));
			vx = m0.x - x;
			vy = m0.y - y;
			console.log(length);
		}
		ctx.stroke();
	}
	
	field.onmousedown = function(e){												//Нажатие ЛКМ
		if(Math.sqrt((m.x - x)*(m.x - x) + (m.y - y)*(m.y - y)) < r){
			flag = true;
			m0 = get_mouse_coords(e);
			clearInterval(f);
		}
		if(n){
			draw(m.x, m.y);
			x = m.x;
			y = m.y;
			n = false;
		}
		console.log(m.x, m.y, flag);
	}
	
	field.onmouseup = function(e){													//Отпускание ЛКМ
		if(flag) f = setInterval(run, 1);
		flag = false;
	}
	
	field.onmousemove = function(e){												//Движение мыши
		m = get_mouse_coords(e);
		if(flag){
			draw(m.x, m.y);
			x = m.x;
			y = m.y;
		}
	}
	
	function run(){
		x += vx * 0.01;
		y += vy * 0.01;
		if(x > 500 - r || x < 0 + r) vx = -vx;
		if(y > 500 - r || y < 0 + r) vy = -vy;
		draw(x, y);
	}
}