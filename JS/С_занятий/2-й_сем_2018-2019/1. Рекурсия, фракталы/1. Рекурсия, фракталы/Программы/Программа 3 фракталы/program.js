window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

	var n_max = 4;

	function circ_fract(n, x, y, r) {
		if (n < 1) console.log("n must be >= 1")
		if (n > n_max) return;
	
		draw_circle(x, y, r);
		circ_fract(n + 1, x+r, y, r/2);
		circ_fract(n + 1, x-r, y, r/2);
		circ_fract(n + 1, x, y+r, r/2);
		circ_fract(n + 1, x, y-r, r/2);
		// draw_circle(x, y, r);	// если перенести эту функцию с 13-ой строки сюда, сверху будут большие круги, на дне - маленькие
	}
	
	ctx.fillStyle = "#fff";
	function draw_circle(x, y, r){
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
	}
	
	circ_fract(1, 300, 300, 100);
	
	// можно дать самостоятельную задачу - менять цвет в зависимости от глубины
}