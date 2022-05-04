class enviroment {
	static dt = dt;
	static g = gravity;
	static e = elasticity;

	constructor(dt, gravity, elasticity) {
		this.dt = dt;
		this.g = gravity;
		this.e = elasticity;

		this.objs = [];
	}

	update() {
		const objsCopy = [...this.objs]

		this.objs.forEach(obj => {
			//next position
		});
		objsCopy.forEach(obj => {
			
		});
			// obj collsions
			// env collsions
			// update

	}
}

class circle {
	constructor(x, y, color, mass, elasticity) {
		this.x = x;
		this.y = y;
		this.nextx = null;
		this.nexty = null;
		this.vx = 0;
		this.vy = 0;
		this.m = mass;
		this.e = elasticity;
		this.c = color;

		this.r = radius;
	}

	//calc next pos
	next() {
		this.vy += g * dt;
    this.x += this.vx * dt;
		this.nextx = this.x + this.vx;
  	this.nexty = (this.vy + ) * dt;
	}
}