var local_particles = new Set();

var Particle = function(pos, dir, col, rad, lifetime, angle) {
	return  {
		pos: pos,
		dir: dir,
		col: col,
		rad: rad,
		angle: angle,
		age: 0,
		lifetime: lifetime
	};
}

function spawnParticle(particle) {
	local_particles.add(particle);
}

function updateParticles(dt) {
	local_particles.forEach(function(p) {
		//Update particle
		if(p.age > p.lifetime) {
			local_particles.delete(p);
		}
		//console.log(p.age);
		var ageOffset = ( 1.0 - (p.age / p.lifetime));

		p.pos.x += Math.cos(p.angle) * 4 + Math.random() * 2 - Math.random() * 2;
        p.pos.y += Math.sin(p.angle) * 4 + Math.random() * 2 - Math.random() * 2;
        //p.pos.y += Math.exp(dt) * 2.5;
        //p.col = 'rgb(' + String(ageOffset * 255) + ',100, 100)';
		p.rad = (ageOffset + 0.2) * 10;
		p.age += dt;
		
	});
}

function renderParticles(ctx) {
	local_particles.forEach(function(p) {
		//Draw particle
		ctx.save();
		ctx.fillStyle = p.col;
		ctx.translate(p.pos.x, p.pos.y);
		//ctx.fillRect(0, 0, 100, 100);
		ctx.beginPath();
		ctx.arc(0, 0, Math.abs(p.rad), 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.restore();
	});
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function randomDir() {
	return randomRange(-1, 1);
}