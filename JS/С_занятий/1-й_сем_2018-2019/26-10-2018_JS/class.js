function Cat(age, size, weight, name){
	//Св-ва
	this.age;
	this.size;
	this.weight;
	this.name;
	
	this.say = function(n){
		var s = " ";
		for(var i = 0; i < n; i++) s+="Мяу ";
		console.log(s);
	}
	
	this.grow = function(){
		this.age++;
		console.log("С ДР " + this.name);
	}
}