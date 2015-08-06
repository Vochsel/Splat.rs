//Game Variables
var foreground = loadCanvas("foreground_game");
var background = loadCanvas("background_game");

var player = definePlayer({x:100, y:100}, 20, '#99CCDD');

var particle = new Particle({x:0, y:0}, '#99CCDD', 10, 100);

var position = new Vector2(10, 20);
var velocity = new Vector2(20, 10);

position.add(velocity);
	position.print();
	velocity.print();

run();
function run() {
	update();
	render();
	window.requestAnimationFrame(run);
}

//Game Functions
function update() {
	clearCanvas(foreground);
	fillCanvas(background, 'rgba(255, 255, 255, 1)');
	//console.log(player.pos);
	updateParticles(1);

}

function render() {
	renderPlayer(foreground.ctx, player);
	renderParticles(background.ctx);
}

//Input
foreground.c.onmousemove = function(e) {
	//console.log('Mouse moved! {x:' + e.layerX + ", y:" + e.layerY + "}");
	movePlayer(player, {x:e.layerX, y:e.layerY});
	splatter();
};

foreground.c.onmousedown = function(e) {
	console.log("Mouse clicked!");
	
	//console.log(local_particles.size);
	//movePlayer(player, {x:e.layerX, y:e.layerY});
};

function splatter() {
	for(var i = 0; i < 15; i++) {
		spawnParticle(new Particle({x:player.pos.x, y:player.pos.y}, {x:randomDir(), y: randomDir()}, 'rgb(200, 100, 100)', 10, randomRange(5, 20), i * randomRange(2, 6)) );
	}
}