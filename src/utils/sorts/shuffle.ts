import { randomInt } from "../random"

/**
 * Returns a shuffled array in place in O(arr.length) time.
 * @param arr the array
 * @returns the shuffled array
 */
function shuffle<T>(arr: T[]): T[] {
	for (let i = arr.length - 1; i > 0; i--) {
		const rand = randomInt(i + 1)

			;[arr[i], arr[rand]] = [arr[rand], arr[i]]
	}

	return arr
}

export { shuffle }
