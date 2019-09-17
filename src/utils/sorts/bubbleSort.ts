/**
 * Returns a sorted array in place using bubble sort (in O(arr.length²) time).
 * @param arr the array
 * @returns the sorted array
 */
function bubbleSort<T>(arr: T[]): T[] {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false

		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				swapped = true
			}
		}

		if (!swapped) {
			break
		}
	}

	return arr
}

export { bubbleSort }
