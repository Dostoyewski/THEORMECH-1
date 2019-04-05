class Animal{											//Класс хищника
		constructor(x, y, lifetime, num, perrep){
			this.x = x;									//Координата по Х
			this.y = y;									//Координата по У
			this.lifetime = lifetime;					//Циклы с момента еды
			this.cycle1 = 0;							//Циклы с момента размножения
			this.num = num;								//Идентификатор
			this.cycle = 0;								//Цикл с момента еды
			this.alive = true;							//Жив ли?
			this.px = x;								//Предыдущие координаты (чисто для лога)
			this.py = y
			this.replicate = false;						//Флаг размножения
			this.sx;									//Координаты спавна нового существа
			this.sy;
			this.pr = perrep;							//Период репликации
			this.can = Math.floor(this.pr / 2);			//Возможность размножения после того, как поел. По умолчанию - половина от репликации. Т.е., если хищник голоден, он не размножается
		}
		
		move(dir, c){										//Класс животного, перемещение с прорисовкой
			if(this.cycle <= this.lifetime){
				c[this.x][this.y] = 0;
				this.px = this.x;
				this.py = this.y;
				var is_ready = false;
				//Выбор направления движения. Хищники - имбы, т.к. могут видеть жертву и двигаться к ближайшей, в т.ч. и по диагонали.
				for(var k = 1; k < 15; k++){
					for(var i = -k; i <= k; i++){
						for(var j = -k; j <= k; j++){
							if(!(i == 0 && j == 0)){
								if(this.x + i < 350 && this.x + i > 0 && this.y + j > 0 && this.y + j < 250 && c[this.x + i][this.y + j] == 2){
									if(i == 0 && j < 0) dir = 1;
									if(i > 0 && j == 0) dir = 2;
									if(i == 0 && j > 0) dir = 3;
									if(i < 0 && j == 0) dir = 4;
									if(i > 0 && j < 0) dir = 5;
									if(i > 0 && j > 0) dir = 6;
									if(i < 0 && j > 0) dir = 7;
									if(i < 0 && j < 0) dir = 8;
									is_ready = true;
								}
							}
							if(is_ready) break;
						}
						if(is_ready) break;
					}
					if(is_ready) break;
				}
				/*if(this.y > 0 && c[this.x][this.y - 1] == 2) dir = 1;
				if(this.x < 349 && c[this.x + 1][this.y] == 2) dir = 2;
				if(this.y < 249 && c[this.x][this.y + 1] == 2) dir = 3;
				if(this.x > 0 && c[this.x - 1][this.y] == 2) dir = 4;
				if(this.x < 349 && this.y > 0 && c[this.x + 1][this.y - 1] == 2) dir = 5;
				if(this.x < 349 && this.y < 249 && c[this.x + 1][this.y + 1] == 2) dir = 6;
				if(this.x > 0 && this.y < 249 && c[this.x - 1][this.y + 1] == 2) dir = 7;
				if(this.x > 0 && this.y > 0 && c[this.x - 1][this.y - 1] == 2) dir = 8;*/
				switch(dir){
					case 1:																				//	Схема соответствия кода направлению движения
						if(this.y > 0 && c[this.x][this.y - 1] != 1){									//  7  3  6
							this.y--;																	//	.\ | /.
							break;																		//   .\|/.
						}																				// 4<--0-->2
					case 2:																				//	 ./|\.
						if(this.x < 349 && c[this.x + 1][this.y] != 1){									//  ./ | \.
							this.x++;																	//	8  1  5
							break;
						}
					case 3:
						if(this.y < 249 && c[this.x][this.y + 1] != 1){
							this.y++;
							break;
						}
					case 4:
						if(this.x > 0 && c[this.x - 1][this.y] != 1){
							this.x--;
							break;
						}
					case 5:
						if(this.x < 349 && this.y > 0 && c[this.x + 1][this.y - 1] != 1){
							this.x++;
							this.y--;
							break;
						}
					case 6:
						if(this.x < 349 && this.y < 249 && c[this.x + 1][this.y + 1] != 1){
							this.x++;
							this.y++;
							break;
						}
					case 7:
						if(this.x > 0 && this.y < 249 && c[this.x - 1][this.y + 1] != 1){
							this.x--;
							this.y++;
							break;
						}
					case 8:
						if(this.x > 0 && this.y > 0 && c[this.x - 1][this.y - 1] != 1){
							this.x--;
							this.y--;
							break;
						}
				}
				if(c[this.x][this.y] == 2) this.cycle = 0;
				c[this.x][this.y] = 1;
				
				if(this.cycle1 >= this.pr && this.can >= this.cycle){
					var flag = false;
					for(var i = -1; i < 2; i++){
						for(var j = -1; j < 2; j++){
							if(this.x + i < 350 && this.x + i > 0 && this.y + j < 250 && this.y + j > 0 && c[this.x + i][this.y + j] == 1 && Math.abs(i + j) == 1){
								flag = true;
								this.cycle1 = -1;
								this.replicate = true;
								break;
							}
						}
						if(flag) break;
					}
					flag = false;
					for(var i = -1; i < 2; i++){																																	//Поиск координат для реплицирования
						for(var j = -1; j < 2; j++){
							if(this.x + i < 350 && this.x + i > 0 && this.y + j < 250 && this.y + j > 0 && c[this.x + i][this.y + j] == 0 && Math.abs(i + j) == 1){
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
				this.cycle1++;
				//console.log(this.replicate);
				//console.log(this.px, this.py, '-->', this.x, this.y);
			}
			else{
				console.log('Хищник ', this.num, ' умер');
				this.alive = false;
				c[this.x][this.y] = 0;
			}
		}
	}