function loadCanvas(id) { 
	var c = document.getElementById(id);

	return {
		c: c,
		ctx: c.getContext('2d'),
		w: c.width,
		h: c.height
	};

}