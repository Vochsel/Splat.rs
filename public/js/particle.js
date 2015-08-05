var local_particles = new Set();

function defineParticle(pos, dir, col, rad, lifetime) {
	return Particle = {
		pos: pos,
		dir: dir,
		col: col,
		rad: rad,
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
		if(p.age < p.lifetime) {



			p.age += dt;
		}
	});
}

function renderParticles(ctx) {
	local_particles.forEach(function(p) {
		//Draw particle
	});
}