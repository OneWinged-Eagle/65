/** A class representing a union-find. */
export class UnionFind {
	/** The union-find as an array. */
	private unionFind: number[]
	/** The sizes of the components */
	private sizes: number[]

	/** Creates an union-find with n elements in O(n) time.
	 * @param n the number of elements
	 */
	public constructor(n: number) {
		this.unionFind = Array.from(Array(n).keys())
		this.sizes = Array(n).fill(1)
	}

	/**
	 * Adds a connection between elements i and j in O(1) amortised time.
	 * @param i the first element to connect
	 * @param j the second element to connect
	 */
	public union(i: number, j: number): void {
		const iRoot = this.find(i), jRoot = this.find(j)

		if (iRoot === undefined || jRoot === undefined || iRoot === jRoot) {
			return
		}

		if (this.sizes[iRoot] < this.sizes[jRoot]) {
			this.unionFind[iRoot] = jRoot
			this.sizes[jRoot] += this.sizes[iRoot]
		} else {
			this.unionFind[jRoot] = iRoot
			this.sizes[iRoot] += this.sizes[jRoot]
		}
	}

	/**
	 * Returns either the elements i and j are connected or not in O(1) amortised time.
	 * @param i the first element
	 * @param j the second element
	 * @returns either i and j are connected or not
	 */
	public connected(i: number, j: number): boolean | undefined {
		if (i >= this.length() || j >= this.length()) {
			return undefined
		}

		return this.find(i) === this.find(j)
	}

	/**
	 * Returns the parent element of the elements i in O(1) amortised time.
	 * @param i the element
	 * @returns the parent element of i
	 */
	public find(i: number): number | undefined {
		if (i >= this.length()) {
			return undefined
		}

		while (i !== this.unionFind[i]) {
			this.unionFind[i] = this.unionFind[this.unionFind[i]]
			i = this.unionFind[i]
		}

		return i
	}

	/**
	 * Returns the length of the union-find in O(1) time.
	 * @returns the union-find's length
	 */
	public length(): number {
		return this.unionFind.length
	}

	/**
	 * Returns the string representation of the union-find in O(this.length()) time.
	 * @returns the union-find's string representation
	 */
	public toString(): string {
		return `UnionFind(${this.unionFind})`;
	}
}
