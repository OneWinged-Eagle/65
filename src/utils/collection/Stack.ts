/** A class representing a stack. */
export class Stack {
	/** The stack as an array. */
	private stack: any[]

	/** Creates an empty stack. */
	public constructor() {
		this.stack = []
	}

	/**
	 * Adds an element at the top of the stack in O(1) amortised time.
	 * @param elem the element
	 */
	public push(elem: any): void {
		if (elem !== null) {
			this.stack.push(elem)
		}
	}

	/**
	 * Removes and returns the element at the top of the stack in O(1) amortised time.
	 * @returns the stack's top element
	 */
	public pop(): any {
		if (this.stack.length === 0) {
			return null
		}

		return this.stack.pop()
	}

	/**
	 * Returns the element at the top of the stack in O(1) time.
	 * @returns the stack's top element
	 */
	public peek(): any {
		if (this.stack.length === 0) {
			return null
		}

		return this.stack[this.stack.length - 1]
	}

	/** Clear the stack in O(1) time. */
	public clear(): void {
		this.stack = []
	}

	/**
	 * Returns the length of the stack in O(1) time.
	 * @returns the stack's length
	 */
	public length(): number {
		return this.stack.length
	}

	/**
	 * Returns the string representation of the stack in O(this.length()) time.
	 * @returns the stack's string representation
	 */
	public toString(): string {
		return `Stack(${this.stack})`;
	}
}
