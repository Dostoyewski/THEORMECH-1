class Sphere{
	constructor(x, y, r, v, angle, dt, h, w, ctx, isc){
		this.x = x;
		this.y = y;
		this.r = r;
		this.v = v;
		this.angle = angle;
		this.dt = dt;
		this.h = h;
		this.w = w;
		this.ctx = ctx;
		this.isc = false;
	}
	
	move(){
		this.x = this.x + this.v * Math.cos(this.angle) * this.dt;
		this.y = this.y + this.v * Math.sin(this.angle) * this.dt;
		if(this.x > this.w || this.x < 0) this.angle -= Math.PI / 2;
		if(this.y > this.h || this.y < 0) this.angle -= Math.PI / 2;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		this.ctx.stroke();
	}
}