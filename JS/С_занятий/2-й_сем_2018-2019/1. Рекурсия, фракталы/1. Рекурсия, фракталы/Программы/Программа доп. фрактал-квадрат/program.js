window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;


	var n_max = 4;
	
	function fract(n, a, x, y) {
		if (n > n_max) return;
		
		draw_rect(a, x, y);
		var step = a/2;
		fract(n+1, a/2, x + step, y + step);
		fract(n+1, a/2, x - step, y + step);
		fract(n+1, a/2, x - step, y - step);
		fract(n+1, a/2, x + step, y - step);
	}
	
	ctx.fillStyle = "#fff";
	function draw_rect(a, xc, yc) {
		ctx.fillRect(xc-a/2, yc-a/2, a, a);
		ctx.strokeRect(xc-a/2, yc-a/2, a, a);
	}

	fract(1, 200, w/2, h/2);

}