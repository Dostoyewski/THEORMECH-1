window.addEventListener("load", main, false);

function main(){
	var myCat = new Cat(5, 5, 5, "Барсик");
	console.log(myCat);
	myCat.say(50);
	myCat.grow();
}