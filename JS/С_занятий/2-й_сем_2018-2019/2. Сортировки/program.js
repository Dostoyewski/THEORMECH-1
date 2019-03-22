window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext("2d");
	var w = canvas_example.width;
	var h = canvas_example.height;
	
	var M = [9, 8, 71, 6, 5, 42, 3, 2, 1, 0];
	
	/*var i = 0;
	var j = M.length;
	while (j!=1) {
		
		if (M[i]>M[i+1]) {
			var i0=M[i];
			M[i]=M[i+1];
			M[i+1]=i0;
			i++;
		} else i++
		if (i==j) {
			j--;
			i=0
		}
	}*/
	
	
	
	
	
	
	
	
	
	
	/*var i = 0;
	while (i!=M.length-1) {
		if (M[i]>M[i+1]) {
			var i0=M[i];
			M[i]=M[i+1];
			M[i+1]=i0;
			i=0;
		} else i++
		
	}*/
	
	var i = 0;
	var q = 1;
	var j=0;
	var goRight = true;
	while (i!=M.length-1) {
		if (goRight){
		if (M[j]>M[j+1]) {
			var j0=M[j];
			M[j]=M[j+1];
			M[j+1]=j0;
			j++;
		}
		if (j==M.length-Math.round(i/2)){
			j--;
			i--;
		}
		} else {
		if (M[j]>M[j-1]) {
			var j0=M[j];
			M[j]=M[j-1];
			M[j-1]=j0;
			j--;
		}
		
		if (j==Math.round(i/2)){
			j++;
			i--;
		}
		}
	}
	console.log(M);
	
}