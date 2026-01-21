/*
function isIntegerHypotenuse(a, b) {
		let squares = (a*a) + (b*b);
		let hypotenuse = Math.sqrt(squares);
		if ((hypotenuse % 2) == 0) {
				return true;
		} else {
				return false;
		}
}

isIntegerHypotenuse(3, 4);
*/

function isIntegerHypotenuse(a, b) {
    let squares = (a * a) + (b * b);
    let hypotenuse = Math.sqrt(squares);

    return Number.isInteger(hypotenuse);
}

console.log(isIntegerHypotenuse(3, 4)); 