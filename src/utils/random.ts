/**
 * Returns a random integer between min (included) and max (excluded).
 * @param max the max
 * @param [min=0] the min
 * @returns the random integer
 */
function randomInt(max: number, min: number = 0): number {
	return Math.floor(Math.random() * (max - min) + min)
}

export { randomInt }
