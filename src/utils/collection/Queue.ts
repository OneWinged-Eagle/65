/** A class representing a queue. */
export class Queue {
	/** The queue as an array. */
	private queue: any[]
	/** The left offset of the queue. */
	private offset: number

	/** Creates an empty queue. */
	public constructor() {
		this.queue = []
		this.offset = 0
	}

	/**
	 * Adds an element to the queue in O(1) amortised time.
	 * @param elem the element
	 */
	public enqueue(elem: any): void {
		if (elem !== null) {
			this.queue.push(elem)
		}
	}

	/**
	 * Removes and returns the element at the beginning of the queue in O(1) amortised time.
	 * @returns the queue's first element
	 */
	public dequeue(): any {
		if (this.length() === 0) {
			return null
		}

		const elem = this.queue[this.offset++]

		if (this.offset * 2 >= this.queue.length) {
			this.queue = this.queue.slice(this.offset)
			this.offset = 0
		}

		return elem
	}

	/**
	 * Returns the element at the beginning of the queue in O(1) time.
	 * @returns the queue's first element
	 */
	public peek(): any {
		if (this.length() === 0) {
			return null
		}

		return this.queue[this.offset]
	}

	/** Clears the queue in O(1) time. */
	public clear(): void {
		this.queue = []
	}

	/**
	 * Returns the length of the queue in O(1) time.
	 * @returns the queue's length
	 */
	public length(): number {
		return this.queue.length - this.offset
	}

	/**
	 * Returns the string representation of the queue in O(this.length()) time.
	 * @returns the queue's string representation
	 */
	public toString(): string {
		return `Queue(${this.queue.slice(this.offset)})`;
	}
}
