window.addEventListener("load", main, false);
function main() 
{
    var ctx = canv.getContext("2d");
    var w = canv.width;
    var h = canv.height;

    //ctx.fillStyle = "white";
    // function draw(x, y, r, n)
    // {
    //     if (n==0) return true;
    //     draw(x-r, y, r/2, n-1);
    //     draw(x+r, y, r/2, n-1);
    //     draw(x, y+r, r/2, n-1);
    //     draw(x, y-r, r/2, n-1);
    //     ctx.beginPath();
    //     ctx.arc(x, y, r, 0, 2*Math.PI);
    //     ctx.fill();
    //     ctx.beginPath();
    //     ctx.arc(x, y, r, 0, 2*Math.PI);
    //     ctx.stroke();
    // }
    // draw(w/2,h/2, 100, 6);

    var alpha = inRad(45);
    var r = 100;
    
    function inRad(a)
    {
        return a/180*Math.PI;
    }

    ctx.translate(w/2, h/2);
    ctx.fillRect(-r, -r, 2*r, 2*r);
        ctx.translate(0, -r);
        ctx.rotate(alpha);
        ctx.translate(0, -4*r*Math.cos(alpha) + 2*r*Math.sin(alpha));
        ctx.fillRect(-r*Math.cos(alpha), -r*Math.cos(alpha), 2*r*Math.cos(alpha), 2*r*Math.cos(alpha));
        ctx.translate(0, 2*r*Math.cos(alpha) + r*Math.sin(alpha));
        ctx.rotate(-alpha);
        ctx.translate(0, r)
    ctx.translate(-w/2, -h/2);

}