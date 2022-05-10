var isSquare = function(n) {

	let i = 1;
	let result = 0;

	while (result < n) {

		result = i * i;

		if (result == n) {

			return true;

		}

		i++;

	}

	if (n < 0) {

		return false;

	}

	if (n == 0) {

		return true;

	}

	return false;

}