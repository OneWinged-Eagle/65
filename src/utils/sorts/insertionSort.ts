function binarySearch<T>(arr: T[], elem: T, start: number, end: number): number {
	if (end <= start) {
		return elem > arr[start] ? start + 1 : start
	}

	const mid = Math.floor((start + end) / 2)

	if (elem == arr[mid]) {
		return mid + 1
	}

	if (elem > arr[mid]) {
		return binarySearch(arr, elem, mid + 1, end)
	}

	return binarySearch(arr, elem, start, mid + 1)
}

/**
 * Returns a sorted array in place using insertion sort (in O(arr.length²) time).
 * @param arr the array
 * @returns the sorted array
 */
function insertionSort<T>(arr: T[]): T[] {
	for (let i = 1; i < arr.length; i++) {
		const elem = arr[i]
		let j = i - 1

		for (; j >= binarySearch(arr, elem, 0, j); j--) {
			arr[j + 1] = arr[j]
		}

		arr[j + 1] = elem
	}

	return arr
}

export { insertionSort }
