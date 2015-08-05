function loadCanvas(id) { 
	var c = document.getElementById(id);

	return {
		c: c,
		ctx: c.getContext('2d'),
		w: c.width,
		h: c.height
	};

}

function clearCanvas(c) {
	c.ctx.clearRect(0, 0, c.w, c.h);
}

function fillCanvas(c, col) {
	c.ctx.fillStyle = col;
	c.ctx.fillRect(0, 0, c.w, c.h)
}