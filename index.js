class Stack {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }
    addTail(item) {
        this.#list.push(item);
    }

    addHead(item) {
        this.#list.unshift(item);
    }

    get dog() {
        return this.#list.toString();
    }

    get dogLength() {
        return this.#list.length;
    }

    set count(count) {
        return (this.#list.length = count);
    }


}

const newDog = new Stack(['head','body','tail']);

newDog.addHead('doberman head');
console.log(newDog.dog);

class Queue {}

module.exports = { Stack, Queue };
