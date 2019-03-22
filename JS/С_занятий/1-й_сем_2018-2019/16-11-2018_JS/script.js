window.addEventListener("load", main, false);

function main(){
	var str = 'I\'m JavaScript programmer';
	var str1 = '\\';
	console.log(str + str1);
	console.log(str.length);
	console.log(str[1]);
	var str2 = "You shell not pass!";
	alert(str2.indexOf('not'));
	alert(str2.indexOf('s', 6));
}