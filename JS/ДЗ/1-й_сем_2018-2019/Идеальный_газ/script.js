window.addEventListener("load", main, false);

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main(){
	var ctx = field.getContext("2d");
	var h = field.height;
	var w = field.width;
	var a = [];
	var f;
	var fps = 60;
	var n;
	var r = 3;
	
	b1.onclick = function(){
		console.log('Старт');
		init();
		f = setInterval(run, 1000/fps);
	}
	
	function run(){
		ctx.clearRect(0, 0, w, h);
		for(var i = 0; i < n; i++){
			a[i].move();
		}
		for(var i = 0; i < n - 1; i++){
			for(var j = i + 1; j < n; j++){
				var l = Math.sqrt(Math.pow(a[i].x - a[j].x, 2) + Math.pow(a[i].y - a[j].y, 2));
				if(l < 2 * r - 0.1 * r){
					console.log(l);
					let v = a[i].v;
					a[i].v = a[j].v;
					a[j].v = v;
					a[i].angle += Math.PI;
					a[j].angle += Math.PI;
				}
			}
		}
	}
	
	function init(){
		n = num.value;
		for(var i = 0; i < n; i++){
			a[i] = new Sphere(getRandomInt(0, w), getRandomInt(0, h), r, getRandomInt(0, 50), getRandomInt(0, 2*Math.PI), 0.1, h, w, ctx, false);
		}
		console.log(n);
	}
}