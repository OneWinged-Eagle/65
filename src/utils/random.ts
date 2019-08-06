/**
 * Returns a random integer between 0 (included) and max (excluded).
 * @param max the max
 * @returns the random integer
 */
function getRandomInt(max: number): number {
	return Math.floor(Math.random() * Math.floor(max));
}

export { getRandomInt }
