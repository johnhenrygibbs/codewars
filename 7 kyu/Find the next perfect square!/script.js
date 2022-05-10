function findNextSquare(sq) {

	// Return the next square if sq is a perfect square, -1 otherwise.

	let squareRoot = Math.sqrt(sq);

	if (Number.isInteger(squareRoot)) {

		squareRoot++;

		return squareRoot * squareRoot;

	} else {

		return -1;

	}

}