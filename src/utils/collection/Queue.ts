/** A class representing a queue. */
export class Queue<T> {
	/** The queue as an array. */
	private queue: T[]
	/** The left offset of the queue. */
	private offset: number

	/** Creates an empty queue in O(1) time. */
	public constructor() {
		this.queue = []
		this.offset = 0
	}

	/**
	 * Adds an element to the queue in O(1) amortised time.
	 * @param elem the element
	 */
	public enqueue(elem: T): void {
		this.queue.push(elem)
	}

	/**
	 * Removes and returns the element at the beginning of the queue in O(1) amortised time.
	 * @returns the queue's first element
	 */
	public dequeue(): T | undefined {
		if (this.length() === 0) {
			return undefined
		}

		const elem = this.queue[this.offset++]

		if (this.length() <= this.queue.length / 2) {
			this.queue = this.queue.slice(this.offset)
			this.offset = 0
		}

		return elem
	}

	/**
	 * Returns the element at the beginning of the queue in O(1) time.
	 * @returns the queue's first element
	 */
	public peek(): T | undefined {
		if (this.length() === 0) {
			return undefined
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
