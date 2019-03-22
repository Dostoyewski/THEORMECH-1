window.addEventListener("load", main, false);

function main(){
	var arr = [4,7,6,5,8,2,0,3,1,12,4,7,6,5,8,2,0,3,12,4,7,6,5,8,2,0,3,1,12,4,7,6,5,8,2,3];
	console.log(arr);
	2 < 3 && (arr = sort(arr));
	console.log(arr);

}


function sort(b) {
    function d(a, c) {
        var d = b[a];
        b[a] = b[c];
        b[c] = d
    }
    for(var c = b.length; c >= 0; c--) {
        for(;;) {
            for(var e = !0, a = 0; a < (c - 1) / 2; a++)
            b[a] < b[2 * a + 1] && (d(a, 2 * a + 1), e = !1),
            b[a] < b[2 * a + 2] && (d(a, 2 * a + 2), e = !1);
            if (e) break
        }
        b[0] > b[c] && d(0, c)
    }
    return b
}

