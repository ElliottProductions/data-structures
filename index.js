class Stack {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    addHead(item) {
        this.#list.unshift(item);
    }

    removeHead(item) {
        this.#list.shift(item);
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

  get rewind() {
      const newArray = []

      newArray.push(this.#list.pop())
      newArray.push(this.#list.pop())
      newArray.push(this.#list.pop())

      return newArray
  }
}

const newDog = new Stack(['head','body','tail']);

newDog.addHead('doberman head');
console.log(newDog.dog);

class Queue {
    // #list = [];

    // constructor(initialList) {
    //     if (initialList)
    //     }
}

module.exports = { Stack, Queue };
