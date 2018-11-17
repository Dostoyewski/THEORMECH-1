class Field{
	constructor(colorX, colorG, ctx, x, y){					//Конструктор цвет выделения хищников, жертв, поле, размеры поля
		this.colorX = colorX;
		this.colorG = colorG;
		this.ctx = ctx;
		this.x = x;
		this.y = y;
	}
	
	draw(c){
		this.ctx.clearRect(0, 0, 1400, 1000);
		for(var i = 0; i < this.x; i++){
			for(var j = 0; j < this.y; j++){
				if(c[i][j] == 1){
					this.ctx.fillStyle = this.colorX;
					this.ctx.fillRect(i*4, j*4, 4, 4);
				}
				if(c[i][j] == 2){
					this.ctx.fillStyle = this.colorG;
					this.ctx.fillRect(i*4, j*4, 4, 4);
				}
			}
		}
	}
}