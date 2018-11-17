class Graph{													//Класс графика
	constructor(ctx, Xcolor, Gcolor, maxx, maxy, mas, masg){
		this.ctx = ctx;
		this.Xcolor = Xcolor;									//Цвет хищников
		this.Gcolor = Gcolor;									//Цвет жертв
		this.cycle = 0;											//Цикл
		this.gpy;												//Предыдущее расположение жертв
		this.xpy;												//Предыдущее расположение хищников
		this.maxx = maxx;										//Максимальная абсцисса
		this.maxy = maxy;										//Максимальная ордината
		this.mas = mas;											//Масштаб хищников
		this.masg = masg
		console.log('График создан ', this.Xcolor, this.Gcolor, this.maxx, this.maxy);
	}
	
	draw(xy, gy){
		this.ctx.beginPath();
		this.ctx.strokeStyle = this.Xcolor;
		this.ctx.moveTo(this.cycle - 1, this.maxy - this.xpy/this.mas);
		this.ctx.lineTo(this.cycle, this.maxy - xy/this.mas);
		this.xpy = xy;
		this.ctx.strokeStyle = this.Gcolor;
		this.ctx.moveTo(this.cycle - 1, this.maxy - this.gpy/this.masg);
		this.ctx.lineTo(this.cycle, this.maxy - gy/this.masg);
		this.gpy = gy;
		this.ctx.stroke();
		if(this.cycle == this.maxx){
			this.cycle = 0;
			this.ctx.clearRect(0, 0, this.maxx, this.maxy);
			this.init();
		}
		this.cycle++;
	}
	
	init(){
		this.ctx.beginPath();												//Координатные оси
		this.ctx.lineWidth = "3";
		this.ctx.strokeStyle = "#000000";
		this.ctx.moveTo(0, this.maxy);
		this.ctx.lineTo(this.maxx, this.maxy);
		this.ctx.moveTo(0, this.maxy);
		this.ctx.lineTo(0, 0);
		this.ctx.lineWidth = "1";
		this.ctx.stroke();
	}
}