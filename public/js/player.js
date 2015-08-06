function definePlayer(pos, rad, col) {
	return {
		pos: pos, 
		rad: rad,
		col: col
	};
}

function movePlayer(player, pos) {
	player.pos = pos;
}

function updatePlayer(player) {

}

function renderPlayer(ctx, p) {
	ctx.save();

	ctx.fillStyle = p.col.rgb();

	ctx.translate(p.pos.x, p.pos.y);
	ctx.fillRect(	-p.rad, 
					-p.rad,
					 p.rad * 2,
					 p.rad * 2	);


	ctx.restore();
}