var asteroid = function(x, y, verts, size, direction) {
	var x = x;
	var y = y;
	var verts = verts;
	var size = size;
	var direction = direction  - 90;
	var angles = [];
	var poly = [];
	
	for (var i = 0; i < verts; i++) {
		var tmp = Math.floor(Math.random() * 360);
		angles.push(tmp);
	}
		
	angles.sort(function(a,b) { return a>b; });
	
	for (var i = 0; i < verts; i++) {
		poly.push(x + size * Math.cos(angles[i]  * Math.PI / 180));
		poly.push(y + size * Math.sin(angles[i]  * Math.PI / 180));
	}
	
	this.draw = function(ctx) {
		ctx.strokeStyle = '#FFFFFF';
		ctx.beginPath();
		ctx.moveTo(poly[0], poly[1]);
		for (var i = 0; i < poly.length; i+=2) {
			ctx.lineTo(poly[i], poly[i + 1]);
		}
		ctx.lineTo(poly[0], poly[1]);
		ctx.stroke();
	};
	
	this.move = function() {
		x += 1 * Math.cos(direction * Math.PI / 180);
		y += 1 * Math.sin(direction * Math.PI / 180);
		if (x > ctx.canvas.width + size)
			x = 0 - size;
		if (y > ctx.canvas.height + size)
			y = 0 - size;
		
		var j = 0;
		for (var i = 0; i < poly.length; i+=2) {
			poly[i] = x + size * Math.cos(angles[j]  * Math.PI / 180);
			poly[i + 1] = y + size * Math.sin(angles[j]  * Math.PI / 180);
			j++;
		}
	};	
	
	this.contains = function (x, y) {
		if (x > x * width && y > y * height && y < y * height + height && x < x * width + width)
			return true;
		else
			return false;
	};
};