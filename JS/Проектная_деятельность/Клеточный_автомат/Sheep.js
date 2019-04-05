class Sheep extends Animal{
		constructor(x, y, lifetime, num){
			super(x, y, lifetime, num);
		}
		
		move(dir, c){										//Класс жертвы, перемещение с прорисовкой
			if(c[this.x][this.y] == 1){
				this.alive = false;
				console.log('Жертва ', this.num, ' умерла');
			}
			if(this.alive){
				
				c[this.x][this.y] = 0;
				switch(dir){
					case 1:
						if(this.y > 0 && c[this.x][this.y - 1] == 0){
							this.y--;
							break;
						}
					case 2:
						//if(this.x + 1 < 350){
							if(this.x + 1 < 350 && c[this.x + 1][this.y] == 0){
								this.x++;
								break;
							}
						//}
					case 3:
						//if(this.y + 1 < 250){
							if(this.y + 1 < 250 && c[this.x][this.y + 1] == 0){
								this.y++;
								break;
							}
						//}
					case 4:
						if(this.x > 0 && c[this.x - 1][this.y] == 0){
							this.x--;
							break;
						}
				}
				c[this.x][this.y] = 2;
				
				/*c[this.x][this.y] = 0;
				this.px = this.x;
				this.py = this.y;
				var is_ready = false;
				
				for(var k = 2; k < 15; k++){
					for(var i = k; i >= -k; i--){
						for(var j = k; j >= -k; j--){
							if(!(i == 0 && j == 0)){
								if(this.x + i < 350 && this.x + i > 0 && this.y + j > 0 && this.y + j < 250 && c[this.x + i][this.y + j] == 1){
									if(i == 0 && j < 0) dir = 3;
									if(i > 0 && j == 0) dir = 4;
									if(i == 0 && j > 0) dir = 1;
									if(i < 0 && j == 0) dir = 2;
									is_ready = true;
								}
							}
							if(is_ready) break;
						}
						if(is_ready) break;
					}
					if(is_ready) break;
				}
				switch(dir){
					case 1:																				//	Схема соответствия кода направлению движения
						if(this.y > 0 && c[this.x][this.y - 1] != 2){									//  7  3  6
							this.y--;																	//	.\ | /.
							break;																		//   .\|/.
						}																				// 4<--0-->2
					case 2:																				//	 ./|\.
						if(this.x < 349 && c[this.x + 1][this.y] != 2){									//  ./ | \.
							this.x++;																	//	8  1  5
							break;
						}
					case 3:
						if(this.y < 249 && c[this.x][this.y + 1] != 2){
							this.y++;
							break;
						}
					case 4:
						if(this.x > 0 && c[this.x - 1][this.y] != 2){
							this.x--;
							break;
						}
				}
				c[this.x][this.y] = 2;*/
				
				if(this.cycle >= this.lifetime){
					var flag = false;
					for(var i = -1; i < 2; i++){
						for(var j = -1; j < 2; j++){
							if(this.x + i < 350 && this.x + i > 0 && this.y + j < 250 && this.y + j > 0 && c[this.x + i][this.y + j] == 2 && Math.abs(i + j) == 1){
								flag = true;
								this.cycle = -1;
								this.replicate = true;
								break;
							}
						}
						if(flag) break;
					}
					flag = false;
					for(var i = -1; i < 2; i++){																																	//Поиск координат для реплицирования
						for(var j = -1; j < 2; j++){
							if(this.x + i < 349 && this.x + i > 0 && this.y + j < 249 && this.y + j > 0 && c[this.x + i][this.y + j] == 0 && Math.abs(i + j) == 1){
								flag = true;
								this.sx = this.x + i;
								this.sy = this.y + j;
								break;
							}
						}
						if(flag) break;
					}
					if(!flag){
						this.replicate = false;
					}
				}
				this.cycle++;
				//console.log('Жертва ', this.replicate, this.px, this.py, '-->', this.x, this.y);
			}
			else{
				//c[this.x][this.y] = 0;
			}
		}
		
		
	}