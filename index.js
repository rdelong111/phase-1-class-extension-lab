class Polygon {
	constructor(sides) {
		this.sides = sides;
	}

	get countSides() {
		return this.sides.length;
	}

	get perimeter() {
		let sum = 0;
		for (let side of this.sides) {
			sum += side;
		}
		return sum;
	}
}

class Triangle extends Polygon {
	get isValid() {
		const copy = this.sides.sort((a, b) => a - b);
		if (copy[0] + copy[1] > copy[2]) {
			return true;
		}
		else {
			return false;
		}
	}
}

class Square extends Polygon {
	get isValid() {
		for (let i = 1; i < this.sides.length; i++) {
			if (this.sides[i - 1] !== this.sides[i]) {
				return false
			}
		}
		return true;
	}

	get area() {
		return Math.pow(this.sides[0], 2);
	}
}