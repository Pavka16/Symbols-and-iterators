export default class Character {
  constructor(name, type) {
  //   if (typeof name !== 'string' || typeof type !== 'string') {
  //     throw new Error('Некоректное значение, тип переменной не строка');
  //   }
  //   if (name.length < 2 || name.length > 10) {
  //     throw new Error('Длина переменной name должна быть от 2 до 10 символов');
  //   }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
