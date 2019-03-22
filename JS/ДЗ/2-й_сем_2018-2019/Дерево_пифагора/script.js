window.addEventListener("load", main, false);

function main() 
{
    var ctx = canv.getContext("2d");
    var w = canv.width;
    var h = canv.height;
    var alpha = inRad(45);
    var r = 100;

    function inRad(a)
    {
        return a/180*Math.PI;
    }
	
	tree(w, h, 10, r);
	tree1(w, h, 10, r);
	
	function tree(x, y, n, rad){
		if(n == 0) return true;
		ctx.translate(x/2, y/2);
		ctx.fillRect(-rad, -rad, 2*rad, 2*rad);
		ctx.translate(rad, -rad);
		ctx.rotate(alpha);
		tree(-rad/Math.cos(alpha), -rad/Math.cos(alpha), n-1, rad/Math.cos(alpha)/2);
		ctx.rotate(-alpha);
		ctx.translate(-rad, rad);
		ctx.translate(-x/2, -y/2);
	}
	
	function tree1(x, y, n, rad){
		if(n == 0) return true;
		ctx.translate(x/2, y/2);
		ctx.fillRect(-rad, -rad, 2*rad, 2*rad);
		ctx.translate(-rad, -rad);
		ctx.rotate(-alpha);
		tree1(rad/Math.cos(alpha), -rad/Math.cos(alpha), n-1, rad/Math.cos(alpha)/2);
		ctx.rotate(alpha);
		ctx.translate(rad, rad);
		ctx.translate(-x/2, -y/2);
	}
	
}
