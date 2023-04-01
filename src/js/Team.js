export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Такой персонаж уже выбран');
    }
    this.members.add(person);
  }

  addAll(...person) {
    person.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const values = this.toArray();
    let index = -1;

    return {
      next() {
        index += 1;
        return {
          value: values[index],
          done: index >= values.length,
        };
      },
    };
  }
}
