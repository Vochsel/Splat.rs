//Please note, all native values need to be between 0 and 255

function Color() 			{ this.r = 0; this.g = 0; this.b = 0; this.a = 255}
function Color(r, g, b) 	{ this.r = r; this.g = g; this.b = b; this.a = 255}
function Color(r, g, b, a) 	{ this.r = r; this.g = g; this.b = b; this.a = a}

Color.prototype.rgb		= function() { return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')'; }
Color.prototype.rgba	= function() { return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')'; }

Color.prototype.hex		= function() {  
	var bin = this.r << 16 | this.g << 8 | this.b;
    return (function(h){
        return new Array(7-h.length).join("0")+h
    })(bin.toString(16).toUpperCase()) 
}

Color.prototype.bin		= function() { return {r: this.r / 255, g: this.g/255, b: this.b / 255}; }

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}