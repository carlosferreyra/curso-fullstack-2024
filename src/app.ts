class Stack<T extends boolean | string | number> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    size(): number {
        return this.items.length;
    }
}

class UniqueStack<T extends boolean | string | number> extends Stack<T> {
    push(item: T): void {
        if (!this.items.includes(item)) {
            super.push(item);
        }
    }
}

// Ejemplo de uso
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.size()); // 2
console.log(stack.pop());  // 2
console.log(stack.size()); // 1

const uniqueStack = new UniqueStack<number>();
uniqueStack.push(1);
uniqueStack.push(1); // No se agrega porque es duplicado
uniqueStack.push(2);
console.log(uniqueStack.size()); // 2
console.log(uniqueStack.pop());  // 2
console.log(uniqueStack.size()); // 1
