function Vector2() 			{ this.x = 0; this.y = 0; }

function Vector2(x, y) 		{ this.x = x; this.y = y; }

Vector2.prototype.print 	= function() 		{ console.log("Vector2: x = " + this.x + ", y = " + this.y); }

Vector2.prototype.setX		= function(x)		{ this.x = x; return this; }

Vector2.prototype.setY		= function(y)		{ this.y = y; return this; }

Vector2.prototype.add 		= function(rhs) 	{ this.x += rhs.x; this.y += rhs.y; return this; }

Vector2.prototype.subtract 	= function(rhs) 	{ this.x -= rhs.x; this.y -= rhs.y; return this; }

Vector2.prototype.multiply 	= function(scalar) 	{ this.x *= scalar; this.y *= scalar; return this; }

Vector2.prototype.divide 	= function(scalar) 	{ this.x /= scalar; this.y /= scalar; return this; }

Vector2.prototype.length 	= function() 		{ return Math.sqrt(this.lengthSqr()); }

Vector2.prototype.lengthSqr = function() 		{ return (this.x * this.x) + (this.y * this.y); }

Vector2.prototype.normalize = function()		{ var l = this.length(); this.x /= l; this.y /= l; return this; }

Vector2.prototype.angle 	= function() 		{ return Math.atan2(this.y, this.x); }

Vector2.prototype.dot		= function(v) 		{ return ( (this.x * v.x) + (this.y * v.y) ); }

Vector2.prototype.clone 	= function(v) 		{ return new Vector2(v.x, v.y); }

Vector2.prototype.copy		= function(v) 		{ return new Vector2(v.x, v.y); }