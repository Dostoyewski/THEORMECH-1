window.addEventListener("load", main, false);

function main(){
	var ctx = field.getContext("2d");
	var h = field.height;
	var w = field.width;
	var flag = false;
	var r = 15;
	var x, y;
	var m;
	var n = true;
	function get_mouse_coords(e){
		var m = {};
		var rect = field.getBoundingClientRect();
		m.x = e.clientX - rect.left;
		m.y = e.clientY - rect.top;
		return m;
	}
	
	function draw(x, y){
		ctx.clearRect(0, 0, w, h);
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2*Math.PI);
		ctx.stroke();
	}
	
	field.onmousedown = function(e){
		if(Math.sqrt((m.x - x)*(m.x - x) + (m.y - y)*(m.y - y)) < r) flag = true;
		if(n){
			draw(m.x, m.y);
			x = m.x;
			y = m.y;
			n = false;
		}
		console.log(m.x, m.y, flag);
	}
	
	field.onmouseup = function(e){
		flag = false;
	}
	
	field.onmousemove = function(e){
		m = get_mouse_coords(e);
		if(flag){
			draw(m.x, m.y);
			x = m.x;
			y = m.y;
		}
	}
}