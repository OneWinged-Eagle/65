/** A class representing a deque. */
export class Deque<T> {
	/** The deque as an array. */
	private deque: T[]
	/** The left offset of the deque. */
	private offset: number

	/** Creates an empty deque in O(1) time. */
	public constructor() {
		this.deque = []
		this.offset = 0
	}

	/**
	 * Adds an element at the end of the deque in O(1) amortised time.
	 * @param elem the element
	 */
	public push(elem: T): void {
		this.deque.push(elem)
	}

	/**
	 * Removes and returns the element at the end of the deque in O(1) amortised time.
	 * @returns the deque's last element
	 */
	public pop(): T | undefined {
		if (this.length() === 0) {
			return undefined
		}

		return this.deque.pop()
	}

	/**
	 * Returns the element at the end of the deque in O(1) time.
	 * @returns the deque's last element
	 */
	public peekLast(): T | undefined {
		if (this.length() === 0) {
			return undefined
		}

		return this.deque[this.length() - 1]
	}

	/**
 * Adds an element at the front of the deque in O(1) amortised time.
 * @param elem the element
 */
	public unshift(elem: T): void {
		if (this.offset === 0) {
			this.deque = this.deque.concat(this.deque)
			this.offset = this.deque.length / 2
		}

		this.deque[--this.offset] = elem
	}

	/**
	 * Removes and returns the element at the front of the deque in O(1) amortised time.
	 * @returns the deque's first element
	 */
	public shift(): T | undefined {
		if (this.length() === 0) {
			return undefined
		}

		const elem = this.deque[this.offset++]
		const newLength = this.length()

		if (newLength <= this.deque.length / 4) {
			this.deque = this.deque.slice(this.deque.length / 2)
			this.offset = this.deque.length - newLength
		}

		return elem
	}

	/**
	 * Returns the element at the front of the deque in O(1) time.
	 * @returns the deque's first element
	 */
	public peekFirst(): T | undefined {
		if (this.length() === 0) {
			return undefined
		}

		return this.deque[this.offset]
	}

	/** Clears the deque in O(1) time. */
	public clear(): void {
		this.deque = []
	}

	/**
	 * Returns the length of the deque in O(1) time.
	 * @returns the deque's length
	 */
	public length(): number {
		return this.deque.length - this.offset
	}

	/**
	 * Returns the string representation of the deque in O(this.length()) time.
	 * @returns the deque's string representation
	 */
	public toString(): string {
		return `Deque(${this.deque.slice(this.offset)})`;
	}
}
